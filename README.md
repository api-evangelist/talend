# Talend (talend)

Talend (now part of Qlik) provides data integration, quality, and API management capabilities through cloud-native APIs for ETL, data pipelines, and application integration. The Qlik Talend Cloud platform exposes REST APIs for orchestrating tasks and plans, executing data integration jobs, managing remote engines, configuring connections, monitoring execution history, and administering identities, workspaces, and environments.

**APIs.json:** [https://raw.githubusercontent.com/api-evangelist/talend/refs/heads/main/apis.yml](https://raw.githubusercontent.com/api-evangelist/talend/refs/heads/main/apis.yml)

## Scope

- **Type:** Index
- **Position:** Consumer
- **Access:** 3rd-Party

## Tags

- API Management
- Data Integration
- Data Quality
- ETL
- Orchestration
- Pipelines

## Timestamps

- **Created:** 2026-03-16
- **Modified:** 2026-05-19

## APIs

### Talend Cloud Orchestration API

Manages tasks, plans, schedules, workspaces, environments, connections, artifacts, promotions, and resources in Qlik Talend Cloud. Use this API to automate data integration pipeline management, configure execution schedules, and manage workspace resources via Bearer token authentication.

- **Human URL:** [https://talend.qlik.dev/apis/orchestration/2021-03/](https://talend.qlik.dev/apis/orchestration/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`

#### Tags

- Artifacts
- Connections
- ETL
- Orchestration
- Plans
- Tasks
- Workspaces

#### Properties

- [Documentation](https://talend.qlik.dev/apis/orchestration/2021-03/)
- [Getting Started](https://talend.qlik.dev/getting-started/)
- [OpenAPI](https://raw.githubusercontent.com/api-evangelist/talend/refs/heads/main/openapi/talend-orchestration-openapi.yml) — [OpenAPI Specification](https://spec.openapis.org/oas/latest.html)
- [Postman Collection](collections/talend-orchestration.postman_collection.json) — [Postman Collection 2.1](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)
- [Open Collection](collections/talend-orchestration.opencollection.json) — [Open Collection 1.0](https://schema.opencollection.com/opencollection/v1.0.0.json)
- [Postman Collection](collections/talend-processing.postman_collection.json) — [Postman Collection 2.1](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)
- [Open Collection](collections/talend-processing.opencollection.json) — [Open Collection 1.0](https://schema.opencollection.com/opencollection/v1.0.0.json)

### Talend Cloud Processing API

Manages task and plan executions, remote engines and clusters, and run profiles in Qlik Talend Cloud. Use this API to trigger and monitor data integration job runs, manage remote engine lifecycles, and configure execution profiles.

- **Human URL:** [https://talend.qlik.dev/apis/processing/2021-03/](https://talend.qlik.dev/apis/processing/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`

#### Tags

- ETL
- Execution
- Monitoring
- Remote Engine
- Run Profiles

#### Properties

- [Documentation](https://talend.qlik.dev/apis/processing/2021-03/)
- [OpenAPI](https://raw.githubusercontent.com/api-evangelist/talend/refs/heads/main/openapi/talend-processing-openapi.yml) — [OpenAPI Specification](https://spec.openapis.org/oas/latest.html)
- [Postman Collection](collections/talend-orchestration.postman_collection.json) — [Postman Collection 2.1](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)
- [Open Collection](collections/talend-orchestration.opencollection.json) — [Open Collection 1.0](https://schema.opencollection.com/opencollection/v1.0.0.json)
- [Postman Collection](collections/talend-processing.postman_collection.json) — [Postman Collection 2.1](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)
- [Open Collection](collections/talend-processing.opencollection.json) — [Open Collection 1.0](https://schema.opencollection.com/opencollection/v1.0.0.json)

### Talend Cloud Identities Management API

Manages user, group, and role identity information for Talend Cloud accounts. Supports SCIM v2 for automated provisioning from enterprise identity providers.

- **Human URL:** [https://talend.qlik.dev/apis/identities-management/2021-03/](https://talend.qlik.dev/apis/identities-management/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`

#### Tags

- Identity Management
- SCIM
- User Provisioning

#### Properties

- [Documentation](https://talend.qlik.dev/apis/identities-management/2021-03/)
- [Postman Collection](collections/talend-orchestration.postman_collection.json) — [Postman Collection 2.1](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)
- [Open Collection](collections/talend-orchestration.opencollection.json) — [Open Collection 1.0](https://schema.opencollection.com/opencollection/v1.0.0.json)
- [Postman Collection](collections/talend-processing.postman_collection.json) — [Postman Collection 2.1](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)
- [Open Collection](collections/talend-processing.opencollection.json) — [Open Collection 1.0](https://schema.opencollection.com/opencollection/v1.0.0.json)

### Talend Cloud Audit Logs API

Load account audit logs for monitoring activities on Talend Cloud applications, ensuring data security and regulatory compliance.

- **Human URL:** [https://talend.qlik.dev/apis/audit-logs/2021-03/](https://talend.qlik.dev/apis/audit-logs/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`

#### Tags

- Audit
- Compliance
- Monitoring

#### Properties

- [Documentation](https://talend.qlik.dev/apis/audit-logs/2021-03/)
- [Postman Collection](collections/talend-orchestration.postman_collection.json) — [Postman Collection 2.1](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)
- [Open Collection](collections/talend-orchestration.opencollection.json) — [Open Collection 1.0](https://schema.opencollection.com/opencollection/v1.0.0.json)
- [Postman Collection](collections/talend-processing.postman_collection.json) — [Postman Collection 2.1](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)
- [Open Collection](collections/talend-processing.opencollection.json) — [Open Collection 1.0](https://schema.opencollection.com/opencollection/v1.0.0.json)

### Talend Cloud Connections API

Administers connections used by datasets and crawlers to retrieve data at scale.

- **Human URL:** [https://talend.qlik.dev/apis/connections/2021-03/](https://talend.qlik.dev/apis/connections/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`

#### Tags

- Connections
- Data Sources

#### Properties

- [Documentation](https://talend.qlik.dev/apis/connections/2021-03/)
- [Postman Collection](collections/talend-orchestration.postman_collection.json) — [Postman Collection 2.1](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)
- [Open Collection](collections/talend-orchestration.opencollection.json) — [Open Collection 1.0](https://schema.opencollection.com/opencollection/v1.0.0.json)
- [Postman Collection](collections/talend-processing.postman_collection.json) — [Postman Collection 2.1](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)
- [Open Collection](collections/talend-processing.opencollection.json) — [Open Collection 1.0](https://schema.opencollection.com/opencollection/v1.0.0.json)

### Talend Cloud Execution Logs API

Retrieve logs about task runs for debugging and monitoring data integration pipeline executions.

- **Human URL:** [https://talend.qlik.dev/apis/execution-logs/2021-03/](https://talend.qlik.dev/apis/execution-logs/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`

#### Tags

- Execution Logs
- Monitoring

#### Properties

- [Documentation](https://talend.qlik.dev/apis/execution-logs/2021-03/)
- [Postman Collection](collections/talend-orchestration.postman_collection.json) — [Postman Collection 2.1](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)
- [Open Collection](collections/talend-orchestration.opencollection.json) — [Open Collection 1.0](https://schema.opencollection.com/opencollection/v1.0.0.json)
- [Postman Collection](collections/talend-processing.postman_collection.json) — [Postman Collection 2.1](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)
- [Open Collection](collections/talend-processing.opencollection.json) — [Open Collection 1.0](https://schema.opencollection.com/opencollection/v1.0.0.json)

## Common Properties

- [LinkedIn](https://www.linkedin.com/company/talend)
- [Portal](https://talend.qlik.dev/)
- [Documentation](https://talend.qlik.dev/)
- [A P Is](https://talend.qlik.dev/apis/)
- [Getting Started](https://talend.qlik.dev/getting-started/)
- [Website](https://www.talend.com/)
- [Qlik  Data  Fabric](https://www.qlik.com/us/products/talend-data-fabric)
- [Git Hub  Org](https://github.com/Talend)
- [Help](https://help.qlik.com/en-US/cloud-services/Content/Sense_Helpsites/Home-talend-cloud.htm)
- [J S O N  Schema](https://raw.githubusercontent.com/api-evangelist/talend/refs/heads/main/json-schema/talend-task-schema.json)
- [Vocabulary](https://raw.githubusercontent.com/api-evangelist/talend/refs/heads/main/vocabulary/talend-vocabulary.yml)
- [Integrations](https://www.talend.com/partners)

## Maintainers

**FN:** Kin Lane
**Email:** kin@apievangelist.com
