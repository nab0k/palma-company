---
id: TASK_CODEX_0008
type: task
status: delivered
owner: codex
reviewer: chief_editor
project: palma-method
created: 2026-07-17
priority: high
scope:
  - book-dashboard
  - metadata
  - deterministic-generation
privacy_level: internal
depends_on:
  - TASK_CODEX_0007
---

# TASK_CODEX_0008 — Build BOOK_DASHBOARD.md

## Objective

Generate a read-only dashboard for the 23 manuscript units defined by
`manuscript/README.md`, using `generated/repository-index.json` and the
existing metadata validator.

## Deliverables

- `BOOK_DASHBOARD.md`;
- deterministic generator with `--check`;
- tests for current, legacy, ambiguous, and missing units;
- completion report.

## Constraints

Do not edit manuscript or source-card content. Do not integrate Notion, build
ingestion, or add prose diagnostics. Never infer an editorial status or declare
an unversioned manuscript file current.
