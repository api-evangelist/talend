# Talend

Talend (now part of Qlik) provides data integration, quality, and API management capabilities through cloud-native APIs for ETL, data pipelines, and application integration. The Qlik Talend Cloud platform exposes REST APIs for orchestrating tasks and plans, executing data integration jobs, managing remote engines, configuring connections, monitoring execution history, and administering identities, workspaces, and environments.

**APIs.json URL:** https://raw.githubusercontent.com/api-evangelist/talend/refs/heads/main/apis.yml

## APIs

### Talend Cloud Orchestration API

Manages tasks, plans, schedules, workspaces, environments, connections, artifacts, and promotions in Qlik Talend Cloud.

- **Documentation:** https://talend.qlik.dev/apis/orchestration/2021-03/
- **Base URL:** https://api.{region}.cloud.talend.com
- **OpenAPI Spec:** [openapi/talend-orchestration-openapi.yml](openapi/talend-orchestration-openapi.yml)

### Talend Cloud Processing API

Manages task and plan executions, remote engines and clusters, and run profiles.

- **Documentation:** https://talend.qlik.dev/apis/processing/2021-03/
- **OpenAPI Spec:** [openapi/talend-processing-openapi.yml](openapi/talend-processing-openapi.yml)

### Talend Cloud Identities Management API

Manages user, group, and role identity information with SCIM v2 support.

- **Documentation:** https://talend.qlik.dev/apis/identities-management/2021-03/

### Talend Cloud Audit Logs API

Load account audit logs for compliance monitoring.

- **Documentation:** https://talend.qlik.dev/apis/audit-logs/2021-03/

### Talend Cloud Connections API

Administers data source connections used by datasets and crawlers.

- **Documentation:** https://talend.qlik.dev/apis/connections/2021-03/

### Talend Cloud Execution Logs API

Retrieve logs about task runs for debugging and monitoring.

- **Documentation:** https://talend.qlik.dev/apis/execution-logs/2021-03/

## Artifacts

### OpenAPI Specifications

| API | File |
|---|---|
| Talend Cloud Orchestration API | [openapi/talend-orchestration-openapi.yml](openapi/talend-orchestration-openapi.yml) |
| Talend Cloud Processing API | [openapi/talend-processing-openapi.yml](openapi/talend-processing-openapi.yml) |

### JSON Schemas

| Schema | File |
|---|---|
| Talend Task | [json-schema/talend-task-schema.json](json-schema/talend-task-schema.json) |
| Task Execution | [json-schema/talend-execution-schema.json](json-schema/talend-execution-schema.json) |

### JSON Structures

| Structure | File |
|---|---|
| Talend Task | [json-structure/talend-task-structure.json](json-structure/talend-task-structure.json) |

### JSON-LD Contexts

| Context | File |
|---|---|
| Talend | [json-ld/talend-context.jsonld](json-ld/talend-context.jsonld) |

### Examples

| Example | File |
|---|---|
| Execute Task | [examples/talend-execute-task-example.json](examples/talend-execute-task-example.json) |

### Spectral Rules

| Ruleset | File |
|---|---|
| Talend API Rules | [rules/talend-api-rules.yml](rules/talend-api-rules.yml) |

### Naftiko Capabilities

#### Shared Definitions

| API | File |
|---|---|
| Talend Orchestration | [capabilities/shared/talend-orchestration.yaml](capabilities/shared/talend-orchestration.yaml) |
| Talend Processing | [capabilities/shared/talend-processing.yaml](capabilities/shared/talend-processing.yaml) |

#### Workflow Capabilities

| Workflow | Description | File |
|---|---|---|
| Data Pipeline Management | End-to-end management of Talend data integration pipelines for data engineers and platform teams | [capabilities/data-pipeline-management.yaml](capabilities/data-pipeline-management.yaml) |

### Vocabulary

| Vocabulary | File |
|---|---|
| Talend Cloud | [vocabulary/talend-vocabulary.yml](vocabulary/talend-vocabulary.yml) |

## Resources

- **API Portal:** https://talend.qlik.dev/
- **Getting Started:** https://talend.qlik.dev/getting-started/
- **All APIs:** https://talend.qlik.dev/apis/
- **Help:** https://help.qlik.com/en-US/cloud-services/Content/Sense_Helpsites/Home-talend-cloud.htm
- **Website:** https://www.talend.com/
- **Qlik Data Fabric:** https://www.qlik.com/us/products/talend-data-fabric
- **GitHub Org:** https://github.com/Talend

## Maintainers

**FN:** Kin Lane  
**Email:** kin@apievangelist.com
