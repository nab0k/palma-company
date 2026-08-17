---
id: TASK_CODEX_0028
type: task
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-08-17
privacy_level: internal
project: palma-method-book
priority: high
scope:
  - manuscript-v0.5-edit-planning
  - notion-author-comment-reconciliation
  - editorial-sequencing
depends_on:
  - TASK_CODEX_0027
base_branch: codex/author-review-change-map-v01
base_commit_sha: 9959b31
working_branch: codex/manuscript-v05-edit-plan
author_approval_ref: "Founder instruction in Codex task, 2026-08-17: complete the full review and correction plan before editing the manuscript."
input_paths:
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.4.md
  - palma-method/research/reports/AUTHOR_REVIEW_CHANGE_MAP_v0.1.md
  - palma-method/governance/DECISION_0006_PALMA_METHOD_FOUR_STAGE_ARCHITECTURE.md
  - notion://3bfc42d0-b11b-8078-9bf0-f4acab237d9b
output_paths:
  - palma-method/governance/TASK_CODEX_0028_PREPARE_MANUSCRIPT_V05_EDIT_PLAN.md
  - palma-method/research/reports/AUTHOR_REVIEW_CHANGE_MAP_ADDENDUM_v0.2.md
  - palma-method/research/reports/MANUSCRIPT_V05_EDIT_PLAN_v0.1.md
  - palma-method/governance/TASK_CODEX_0028_COMPLETION_REPORT.md
completion_report: palma-method/governance/TASK_CODEX_0028_COMPLETION_REPORT.md
---

# TASK_CODEX_0028 — Prepare the manuscript v0.5 edit plan

## Objective

Reconcile the founder's complete Notion review and subsequent Codex discussion
with the existing author-review change map, then define an ordered, bounded edit
plan for an append-only manuscript successor to v0.4.

## Allowed changes

- Add one task record, one append-only change-map addendum, one edit plan, and one
  completion report.
- Classify every unresolved Notion discussion and every subsequent founder decision.
- Specify edit order, evidence gates, deletion decisions, dependencies, and
  verification checks.

## Forbidden changes

- Do not edit the manuscript, source cards, decisions, Notion, Google Docs,
  generated indexes, or dashboards.
- Do not finalize the Infrastructure Canvas before the commissioned external and
  internal audits have been received and synthesized.
- Do not claim that Palma Method, Palma Moment, Infrastructure Canvas, Response
  Signals, or Handoff Test have been validated.
- Do not merge without founder approval.

## Acceptance criteria

1. Every founder comment available on the Notion review page is accounted for.
2. Later decisions from the Codex review are added without replacing v0.1.
3. The plan separates deletion, narrative repair, theory repair, Method/tool work,
   voice editing, and final evidence/privacy checks.
4. The plan identifies the Canvas dependency and prevents premature rewriting.
5. Protected manuscript files remain untouched.

