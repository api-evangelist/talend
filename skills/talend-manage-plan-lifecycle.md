---
name: talend-manage-plan-lifecycle
description: Create a new plan, retrieve its details, and then delete it.
api: openapi/talend-plans-api-openapi.yml
operations:
- createPlan
- getPlan
- deletePlan
generated: '2026-09-28'
method: generated
generator: extract-docs-artifacts.py skills (local)
source: openapi/talend-plans-api-openapi.yml ; every operationId checked against the contract
---

# talend-manage-plan-lifecycle

Create a new plan, retrieve its details, and then delete it.

## Steps

1. 1. `createPlan` – include the plan definition in the request body.
2. 2. `getPlan` – provide the `planId` path parameter returned from the creation step.
3. 3. `deletePlan` – provide the same `planId` path parameter to remove the plan.

## Rules

- Include a Bearer token in the Authorization header (BearerAuth or BearerAuthentication).
