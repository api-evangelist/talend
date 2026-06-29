# Talend (talend)

Talend (now part of Qlik) provides data integration, quality, and API management capabilities through cloud-native APIs for ETL, data pipelines, identity administration, monitoring, security controls, and application integration. This index catalogs the public Qlik Talend Cloud API contracts published at talend.qlik.dev.

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
- Identity Management
- Monitoring
- Orchestration
- Pipelines
- Security

## Timestamps

- **Created:** 2026-03-16
- **Modified:** 2026-06-29

## APIs

### Talend Cloud Dynamic Engine Environments API

Manage and assign your Environments to Dynamic Engines.

- **Human URL:** [https://talend.qlik.dev/apis/dynamic-engine-environments/2021-03/](https://talend.qlik.dev/apis/dynamic-engine-environments/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-dynamic-engine-environments-openapi.json](openapi/talend-dynamic-engine-environments-openapi.json)
- **Coverage:** 4 paths, 6 schemas

### Talend Cloud Dynamic Engine API

Manage Dynamic Engines

- **Human URL:** [https://talend.qlik.dev/apis/dynamic-engine/2021-03/](https://talend.qlik.dev/apis/dynamic-engine/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-dynamic-engine-openapi.json](openapi/talend-dynamic-engine-openapi.json)
- **Coverage:** 8 paths, 12 schemas

### Talend Cloud Identities Management API

Manage identity data related to users, groups and roles from your Talend Cloud account.

- **Human URL:** [https://talend.qlik.dev/apis/identities-management/2021-03/](https://talend.qlik.dev/apis/identities-management/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-identities-management-openapi.json](openapi/talend-identities-management-openapi.json)
- **Coverage:** 15 paths, 6 schemas

### Talend Cloud Service Accounts API

Manage service accounts and their permissions.

- **Human URL:** [https://talend.qlik.dev/apis/service-accounts/2021-03/](https://talend.qlik.dev/apis/service-accounts/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-service-accounts-openapi.json](openapi/talend-service-accounts-openapi.json)
- **Coverage:** 4 paths, 3 schemas

### Talend Cloud Connections API

Manage the connections used by the datasets.

- **Human URL:** [https://talend.qlik.dev/apis/connections/2021-03/](https://talend.qlik.dev/apis/connections/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-connections-openapi.json](openapi/talend-connections-openapi.json)
- **Coverage:** 2 paths, 5 schemas

### Talend Cloud Crawler API

A crawler allows you to retrieve a full list of assets contained in a connection, in a single operation. Manage crawlers to retrieve data at a large scale and enrich your inventory more efficiently.

- **Human URL:** [https://talend.qlik.dev/apis/crawler/2021-03/](https://talend.qlik.dev/apis/crawler/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-crawler-openapi.json](openapi/talend-crawler-openapi.json)
- **Coverage:** 7 paths, 24 schemas

### Talend Cloud Execution Logs API

Retrieve logs about task runs.

- **Human URL:** [https://talend.qlik.dev/apis/execution-logs/2021-03/](https://talend.qlik.dev/apis/execution-logs/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-execution-logs-openapi.json](openapi/talend-execution-logs-openapi.json)
- **Coverage:** 2 paths, 1 schema

### Talend Cloud Observability Metrics API

Retrieve execution metrics

- **Human URL:** [https://talend.qlik.dev/apis/observability-metrics/2021-03/](https://talend.qlik.dev/apis/observability-metrics/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-observability-metrics-openapi.json](openapi/talend-observability-metrics-openapi.json)
- **Coverage:** 2 paths, 9 schemas

### Talend Cloud Execution History Search API

Retrieve execution history by filtering on fields such as time period and workspaces while excluding plan execution tasks.

- **Human URL:** [https://talend.qlik.dev/apis/execution-history-search/2021-03/](https://talend.qlik.dev/apis/execution-history-search/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-execution-history-search-openapi.json](openapi/talend-execution-history-search-openapi.json)
- **Coverage:** 2 paths, 6 schemas

### Talend Cloud Audit Logs API

Load your account's audit logs for monitoring activities on Talend Cloud applications, ensuring data security and managing regulatory compliance risks.

- **Human URL:** [https://talend.qlik.dev/apis/audit-logs/2021-03/](https://talend.qlik.dev/apis/audit-logs/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-audit-logs-openapi.json](openapi/talend-audit-logs-openapi.json)
- **Coverage:** 1 paths, 3 schemas

### Talend Cloud IP Allowlist API

Create and alter client IP allowlists, to restrict the access to Talend Cloud to only trusted IP addresses.

- **Human URL:** [https://talend.qlik.dev/apis/ip-allowlist/2021-03/](https://talend.qlik.dev/apis/ip-allowlist/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-ip-allowlist-openapi.json](openapi/talend-ip-allowlist-openapi.json)
- **Coverage:** 3 paths, 3 schemas

### Talend Cloud OAuth API

With service accounts, you are enabled to use the OAuth2 Client Credentials Flow for accessing Talend Cloud APIs. This service account specific token is more secure than the personal access tokens typically used by a user. It is recommended to use service accounts along with their access tokens to issue API calls, when a specific user does not need to be involved in these calls.

- **Human URL:** [https://talend.qlik.dev/apis/oauth/2021-03/](https://talend.qlik.dev/apis/oauth/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-oauth-openapi.json](openapi/talend-oauth-openapi.json)
- **Coverage:** 1 paths, 2 schemas

### Talend Cloud Workspace Permissions API

Control and manage your users detailed permissions upon Workspaces and Engines.

- **Human URL:** [https://talend.qlik.dev/apis/workspace-permissions/2021-03/](https://talend.qlik.dev/apis/workspace-permissions/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-workspace-permissions-openapi.json](openapi/talend-workspace-permissions-openapi.json)
- **Coverage:** 6 paths, 5 schemas

### Talend Cloud SSO Role Mapping API

Create and alter the role mappings, to assign automatically Talend roles to your SSO users.

- **Human URL:** [https://talend.qlik.dev/apis/sso-role-mapping/2021-03/](https://talend.qlik.dev/apis/sso-role-mapping/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-sso-role-mapping-openapi.json](openapi/talend-sso-role-mapping-openapi.json)
- **Coverage:** 2 paths, 1 schema

### Talend Cloud Dataset API

Manage the datasources referenced in Talend Cloud applications and the configuration and metadata associated to these datasources (attributes, data types, data quality).

- **Human URL:** [https://talend.qlik.dev/apis/dataset/2021-03/](https://talend.qlik.dev/apis/dataset/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-dataset-openapi.json](openapi/talend-dataset-openapi.json)
- **Coverage:** 9 paths, 20 schemas

### Talend Cloud Orchestration API

Manage your Artifacts, Tasks, Plans, Schedules, Environments, Workspaces, Promotions, and all associated Resources.

- **Human URL:** [https://talend.qlik.dev/apis/orchestration/2021-03/](https://talend.qlik.dev/apis/orchestration/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-orchestration-openapi.json](openapi/talend-orchestration-openapi.json)
- **Coverage:** 44 paths, 84 schemas

### Talend Cloud Processing API

Configure Engines and Clusters, manage and browse executions of your Tasks, Plans and Promotions.

- **Human URL:** [https://talend.qlik.dev/apis/processing/2021-03/](https://talend.qlik.dev/apis/processing/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-processing-openapi.json](openapi/talend-processing-openapi.json)
- **Coverage:** 42 paths, 57 schemas

### Talend Cloud Sharing API

Manage how your users and groups can access your Talend Cloud entities.

- **Human URL:** [https://talend.qlik.dev/apis/sharing/2021-03/](https://talend.qlik.dev/apis/sharing/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-sharing-openapi.json](openapi/talend-sharing-openapi.json)
- **Coverage:** 7 paths, 20 schemas

### Talend Cloud SCIM v2 API

Manage your users and groups using SCIM 2.0.

- **Human URL:** [https://talend.qlik.dev/apis/scim-v2/2021-03/](https://talend.qlik.dev/apis/scim-v2/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-scim-v2-openapi.json](openapi/talend-scim-v2-openapi.json)
- **Coverage:** 14 paths, 25 schemas

### Talend Cloud Seats and Subscription API

Retrieve information details on your subscription and its usage across Talend Apps.

- **Human URL:** [https://talend.qlik.dev/apis/seats-and-subscription/2021-03/](https://talend.qlik.dev/apis/seats-and-subscription/2021-03/)
- **Base URL:** `https://api.{region}.cloud.talend.com`
- **OpenAPI:** [openapi/talend-seats-and-subscription-openapi.json](openapi/talend-seats-and-subscription-openapi.json)
- **Coverage:** 1 paths, 5 schemas

## Maintenance

Run `node scripts/sync-openapi.mjs` from the repository root to refresh the OpenAPI contracts from talend.qlik.dev. The sync step preserves the official paths and schemas while normalizing machine-readability details such as license metadata, security declarations, operation IDs, 4xx responses, unused components, and invalid source examples. Pull requests validate the committed contracts with Redocly CLI.

## Common Properties

- [LinkedIn](https://www.linkedin.com/company/talend)
- [Portal](https://talend.qlik.dev/)
- [Documentation](https://talend.qlik.dev/)
- [APIs](https://talend.qlik.dev/apis/)
- [Getting Started](https://talend.qlik.dev/getting-started/)
- [Website](https://www.talend.com/)
- [Qlik Data Fabric](https://www.qlik.com/us/products/talend-data-fabric)
- [GitHub Org](https://github.com/Talend)
- [Help](https://help.qlik.com/en-US/cloud-services/Content/Sense_Helpsites/Home-talend-cloud.htm)
- [Vocabulary](https://raw.githubusercontent.com/api-evangelist/talend/refs/heads/main/vocabulary/talend-vocabulary.yml)
- [Integrations](https://www.talend.com/partners)

## Maintainers

**FN:** Kin Lane

**Email:** kin@apievangelist.com
