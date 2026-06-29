import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const API_VERSION = '2021-03';
const TALEND_DOCS_ORIGIN = 'https://talend.qlik.dev';
const OUTPUT_DIRECTORY = path.join(process.cwd(), 'openapi');
const HTTP_METHODS = new Set(['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace']);

const APACHE_2_LICENSE = {
  name: 'Apache License Version 2.0',
  url: 'https://www.apache.org/licenses/LICENSE-2.0.txt',
};

const DEFAULT_BEARER_SECURITY = {
  Public: {
    type: 'http',
    scheme: 'bearer',
    description: 'Bearer authentication using a Talend Cloud token or Personal Access Token.',
  },
};

const DEFAULT_BAD_REQUEST_RESPONSE = {
  description: 'Bad Request',
};

const API_SLUGS = [
  'dynamic-engine-environments',
  'dynamic-engine',
  'identities-management',
  'service-accounts',
  'connections',
  'crawler',
  'execution-logs',
  'observability-metrics',
  'execution-history-search',
  'audit-logs',
  'ip-allowlist',
  'oauth',
  'workspace-permissions',
  'sso-role-mapping',
  'dataset',
  'orchestration',
  'processing',
  'sharing',
  'scim-v2',
  'seats-and-subscription',
];

await main();

async function main() {
  await mkdir(OUTPUT_DIRECTORY, { recursive: true });

  const summaries = [];

  for (const slug of API_SLUGS) {
    const sourceUrl = officialOpenApiUrl(slug);
    const spec = await fetchOpenApi(sourceUrl);
    const summary = normalizeOpenApi(slug, spec);
    const targetPath = path.join(OUTPUT_DIRECTORY, `talend-${slug}-openapi.json`);

    await writeJson(targetPath, spec);
    summaries.push({ slug, targetPath, ...summary });
  }

  printSummary(summaries);
}

function officialOpenApiUrl(slug) {
  return `${TALEND_DOCS_ORIGIN}/apis/${slug}/${API_VERSION}/openapi30.json`;
}

async function fetchOpenApi(sourceUrl) {
  const response = await fetch(sourceUrl);

  if (!response.ok) {
    throw new Error(`Unable to download ${sourceUrl}: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function writeJson(targetPath, value) {
  await writeFile(targetPath, `${JSON.stringify(value, null, 2)}\n`);
}

function normalizeOpenApi(slug, spec) {
  const summary = {
    operations: 0,
    generatedOperationIds: 0,
    rewrittenOperationIds: 0,
    added4xxResponses: 0,
    removedExamples: 0,
    removedComponents: 0,
  };

  ensureRequiredMetadata(spec);
  summary.operations = normalizeOperations(slug, spec, summary);
  summary.removedExamples = removeExamples(spec);
  summary.removedComponents = pruneUnusedComponents(spec);

  return summary;
}

function ensureRequiredMetadata(spec) {
  spec.info ??= {};
  spec.info.license ??= { ...APACHE_2_LICENSE };

  spec.components ??= {};
  spec.components.securitySchemes ??= {};

  if (!spec.security) {
    spec.components.securitySchemes = {
      ...DEFAULT_BEARER_SECURITY,
      ...spec.components.securitySchemes,
    };
    spec.security = [{ Public: [] }];
  }

  spec.components.responses ??= {};
  spec.components.responses.BadRequest ??= { ...DEFAULT_BAD_REQUEST_RESPONSE };
}

function normalizeOperations(slug, spec, summary) {
  const usedOperationIds = new Set();
  let operationCount = 0;

  for (const [apiPath, pathItem] of Object.entries(spec.paths ?? {})) {
    if (!isObject(pathItem)) continue;

    for (const [method, operation] of Object.entries(pathItem)) {
      if (!HTTP_METHODS.has(method) || !isObject(operation)) continue;

      operationCount += 1;

      const fallbackOperationId = operationIdFromPath(method, apiPath, slug);
      const currentOperationId = operation.operationId;
      const preferredOperationId = currentOperationId || fallbackOperationId;
      const uniqueOperationId = makeUniqueOperationId(preferredOperationId, fallbackOperationId, usedOperationIds);

      if (!currentOperationId) summary.generatedOperationIds += 1;
      if (currentOperationId && currentOperationId !== uniqueOperationId) summary.rewrittenOperationIds += 1;

      operation.operationId = uniqueOperationId;

      if (!hasClientErrorResponse(operation.responses)) {
        operation.responses ??= {};
        operation.responses['400'] = { $ref: '#/components/responses/BadRequest' };
        summary.added4xxResponses += 1;
      }
    }
  }

  return operationCount;
}

function hasClientErrorResponse(responses = {}) {
  return Object.keys(responses).some((status) => /^4\d\d$/.test(status));
}

function makeUniqueOperationId(preferredOperationId, fallbackOperationId, usedOperationIds) {
  let candidate = preferredOperationId;

  if (usedOperationIds.has(candidate)) {
    candidate = fallbackOperationId;
  }

  const baseCandidate = candidate;
  let suffix = 2;

  while (usedOperationIds.has(candidate)) {
    candidate = `${baseCandidate}${suffix}`;
    suffix += 1;
  }

  usedOperationIds.add(candidate);
  return candidate;
}

function operationIdFromPath(method, apiPath, slug) {
  const tokens = `${method}-${slug}-${apiPath}`
    .replace(/[{}]/g, '')
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean);

  return toCamelCase(tokens);
}

function toCamelCase(tokens) {
  return tokens
    .map((token, index) => {
      const lower = token.toLowerCase();
      return index === 0 ? lower : `${lower.charAt(0).toUpperCase()}${lower.slice(1)}`;
    })
    .join('');
}

function removeExamples(spec) {
  let removed = 0;

  // The official contracts contain many examples that disagree with their
  // schemas. For model and code-generation use, validated schemas are more
  // useful than invalid examples.
  walk(spec, (node) => {
    if (!isObject(node)) return;

    if (Object.hasOwn(node, 'example')) {
      delete node.example;
      removed += 1;
    }

    if (Object.hasOwn(node, 'examples')) {
      delete node.examples;
      removed += 1;
    }
  });

  return removed;
}

function pruneUnusedComponents(spec) {
  let removed = 0;
  let changed = true;

  // Start from path-level refs and keep every transitive local dependency.
  // This trims dead generated components without breaking nested schemas.
  while (changed) {
    changed = false;
    const refs = collectDocumentRefs(spec);

    for (const [sectionName, section] of Object.entries(spec.components ?? {})) {
      if (sectionName === 'securitySchemes' || !isObject(section)) continue;

      for (const componentName of Object.keys(section)) {
        const pointer = `#/components/${sectionName}/${componentName}`;
        if (refs.has(pointer)) continue;

        delete section[componentName];
        removed += 1;
        changed = true;
      }
    }
  }

  return removed;
}

function collectDocumentRefs(spec) {
  const refs = new Set();
  const documentWithoutComponents = { ...spec, components: undefined };
  const queue = [];

  collectRefs(documentWithoutComponents, refs);

  for (const securityScheme of Object.values(spec.components?.securitySchemes ?? {})) {
    collectRefs(securityScheme, refs);
  }

  for (const ref of refs) {
    queue.push(ref);
  }

  while (queue.length > 0) {
    const ref = queue.shift();
    const component = resolveLocalRef(spec, ref);
    if (!component) continue;

    const nestedRefs = new Set();
    collectRefs(component, nestedRefs);

    for (const nestedRef of nestedRefs) {
      if (refs.has(nestedRef)) continue;

      refs.add(nestedRef);
      queue.push(nestedRef);
    }
  }

  return refs;
}

function collectRefs(value, refs) {
  if (!isObject(value) && !Array.isArray(value)) return;

  if (typeof value.$ref === 'string') {
    refs.add(value.$ref);
  }

  for (const child of Object.values(value)) {
    collectRefs(child, refs);
  }
}

function resolveLocalRef(spec, ref) {
  if (!ref.startsWith('#/')) return undefined;

  return ref
    .slice(2)
    .split('/')
    .reduce((current, segment) => {
      if (!isObject(current) && !Array.isArray(current)) return undefined;
      return current[segment.replaceAll('~1', '/').replaceAll('~0', '~')];
    }, spec);
}

function walk(value, visitor) {
  if (!isObject(value) && !Array.isArray(value)) return;

  visitor(value);

  for (const child of Object.values(value)) {
    walk(child, visitor);
  }
}

function isObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function printSummary(summaries) {
  const totals = summaries.reduce(
    (acc, summary) => ({
      operations: acc.operations + summary.operations,
      generatedOperationIds: acc.generatedOperationIds + summary.generatedOperationIds,
      rewrittenOperationIds: acc.rewrittenOperationIds + summary.rewrittenOperationIds,
      added4xxResponses: acc.added4xxResponses + summary.added4xxResponses,
      removedExamples: acc.removedExamples + summary.removedExamples,
      removedComponents: acc.removedComponents + summary.removedComponents,
    }),
    {
      operations: 0,
      generatedOperationIds: 0,
      rewrittenOperationIds: 0,
      added4xxResponses: 0,
      removedExamples: 0,
      removedComponents: 0,
    },
  );

  for (const summary of summaries) {
    console.log(`synced ${summary.slug} -> ${path.relative(process.cwd(), summary.targetPath)}`);
  }

  console.log(
    `normalized ${summaries.length} APIs, ${totals.operations} operations, ` +
      `${totals.generatedOperationIds} generated operationIds, ` +
      `${totals.rewrittenOperationIds} duplicate operationIds rewritten, ` +
      `${totals.added4xxResponses} 4xx responses added, ` +
      `${totals.removedExamples} examples removed, ` +
      `${totals.removedComponents} unused components pruned`,
  );
}
