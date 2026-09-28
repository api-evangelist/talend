---
name: talend-execute-and-monitor-task
description: Execute a Talend task and monitor its execution status.
api: openapi/talend-task-executions-api-openapi.yml
operations:
- executeTask
- getTaskExecutionStatus
- listTaskExecutions
generated: '2026-09-28'
method: generated
generator: extract-docs-artifacts.py skills (local)
source: openapi/talend-task-executions-api-openapi.yml ; every operationId checked against the contract
---

# talend-execute-and-monitor-task

Execute a Talend task and monitor its execution status.

## Steps

1. 1. Call `executeTask` with the required request body fields for the task to run.
2. 2. Call `getTaskExecutionStatus` with the `executionId` returned from `executeTask` to check the current status.
3. 3. Optionally call `listTaskExecutions` (or `searchTaskExecutions`) to retrieve a list of recent executions for further analysis.

## Rules

- Include a Bearer token in the `Authorization` header (BearerAuth or BearerAuthentication).
- Use the `Authorization` header for the Public apiKey scheme if applicable.
- Pagination parameters (`page`, `size`) may be used with `listTaskExecutions` and `searchTaskExecutions` as defined by the API contract.
