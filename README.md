# Talend (talend)

<!-- API-EVANGELIST-PROVENANCE:BEGIN -->
> ### About this repository
>
> **This is not our API.** This repository is an independent, third-party profile of a company's
> **publicly available** API surface, maintained by [API Evangelist](https://apievangelist.com).
> API Evangelist does not operate, host, resell, or support this company's APIs, and is not
> affiliated with or endorsed by the company unless stated on the profile.
>
> **Where the information came from.** Everything here is assembled from material a member of the
> public can reach with a browser and no credentials — the company's own website, developer portal
> and documentation, the specifications it publishes for public use (OpenAPI, AsyncAPI, JSON Schema,
> `apis.json`, `llms.txt` and similar), its public repositories, and its public status, pricing and
> changelog pages. **Nothing here is obtained by breaching a system, defeating an access control, or
> using credentials of any kind.**
>
> **The rating is an independent assessment.** The Kin Score and Agent Readiness rating are
> independently calculated scores of a company's *public* API artifacts, produced by API Evangelist
> against a published rubric. They are not certifications, endorsements, security assessments, or
> audits, and they score published artifacts — not the quality, safety, or security of the software.
>
> **Corrections, re-scores, and removal are free.** No partnership, contract, or purchase is
> required, and you do not need to justify the request.
>
> - **Something wrong?** Open an issue on this repository, or email
>   [info@apievangelist.com](mailto:info@apievangelist.com).
> - **Published something new?** Ask for a re-score and we will re-run the rating.
> - **Want the listing taken down?** Say so and we will honor it. The profile is reduced to your
>   company name, a factual description, and a link to your own site, and the company is recorded as
>   **unrated** — never scored zero for having asked.
>
> **Response times.** Acknowledgement within **one business day**; removal or restriction within
> **two business days**; corrections and re-scores within **five business days**.
>
> **On a security or compliance team?** Email
> [info@apievangelist.com](mailto:info@apievangelist.com) with *security* in the subject line and
> you will get a person, not a form. We will tell you exactly which public URLs this profile was
> built from so your team can see the same surface we did, and we will take the listing down on
> request while you work through it.
>
> Full detail: **[Where this data comes from](https://apievangelist.com/about/where-our-data-comes-from)**
<!-- API-EVANGELIST-PROVENANCE:END -->

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
