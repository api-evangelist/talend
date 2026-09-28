---
name: talend-list-and-get-task
description: Retrieve a list of tasks and then fetch details of a specific task.
api: openapi/talend-tasks-api-openapi.yml
operations:
- listTasks
- getTask
generated: '2026-09-28'
method: generated
generator: extract-docs-artifacts.py skills (local)
source: openapi/talend-tasks-api-openapi.yml ; every operationId checked against the contract
---

# talend-list-and-get-task

Retrieve a list of tasks and then fetch details of a specific task.

## Steps

1. `listTasks` – uses any query parameters defined for pagination.
2. `getTask` – requires the `taskId` path parameter.

## Rules

- Include an Authorization header with a Bearer token (BearerAuth or BearerAuthentication).
- No rate limit is imposed.
