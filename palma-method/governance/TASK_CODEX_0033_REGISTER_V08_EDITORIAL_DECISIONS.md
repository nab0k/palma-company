---
id: TASK_CODEX_0033
type: task
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-08-20
privacy_level: internal
project: palma_method_book
priority: high
scope: v0_8_editorial_decision_registration
depends_on:
  - DECISION_0006
  - DECISION_0007
  - DECISION_0008
  - TASK_CODEX_0032
base_branch: codex/manuscript-v07-editorial-integration
base_commit_sha: b50237c301368a412feda0a18a7e87006ff8b8e9
working_branch: codex/v08-editorial-decision-register
input_paths:
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.7.md
  - palma-method/governance/DECISION_0006_PALMA_METHOD_FOUR_STAGE_ARCHITECTURE.md
  - palma-method/governance/DECISION_0007_BOOK_15_CHAPTER_ARCHITECTURE.md
  - palma-method/governance/DECISION_0008_PALMA_INFRASTRUCTURE_CANVAS_FOUR_FIELDS.md
output_paths:
  - palma-method/governance/TASK_CODEX_0033_REGISTER_V08_EDITORIAL_DECISIONS.md
  - palma-method/governance/DECISION_0009_V08_EDITORIAL_SCOPE_AND_CASE_PORTFOLIO.md
  - palma-method/governance/V08_EDITORIAL_DECISION_REGISTER_v0.1.md
  - palma-method/governance/TASK_CODEX_0033_COMPLETION_REPORT.md
completion_report: palma-method/governance/TASK_CODEX_0033_COMPLETION_REPORT.md
---

# TASK_CODEX_0033 — Register v0.8 editorial decisions

## Objective

Convert the founder's line-by-line review of manuscript v0.7 into a canonical,
traceable editorial register before any v0.8 prose is written. Resolve the
international-case portfolio at decision level and preserve the boundary between
approved editorial direction and factual claims that still require verification.

## Authorization

Serhii Nabok approved all eight case-portfolio recommendations and instructed
Codex to proceed on 20 August 2026. He separately approved the scholar, TCF,
TAK.Shtab, Wodify, style, terminology, and methodological edits recorded in the
preceding editorial discussion.

## Allowed changes

- Create one founder decision governing the v0.8 editorial scope and case portfolio.
- Create a detailed implementation register for the accepted edits.
- Record dependencies on the open international-case research PR without copying
  its unaccepted research into the manuscript.
- Create task and completion records.

## Forbidden changes

- Do not edit any manuscript, Canon, source card, verification issue, raw interview,
  attendance file, or Notion page.
- Do not treat a founder-supplied research summary as a verified factual source.
- Do not resolve manuscript comments or claim that v0.8 has been written.
- Do not merge a pull request.

## Acceptance criteria

1. All accepted global and line-level directions are captured without reopening
   DECISION_0006, DECISION_0007, or DECISION_0008 except where the new decision
   explicitly adds or supersedes a bounded case ruling.
2. The case portfolio names the function, approximate narrative weight, and
   verification boundary for every retained or removed case.
3. The register separates `approved`, `approved_pending_verification`, and
   `pending_author_detail` implementation states.
4. The manuscript and downstream Notion mirror remain untouched.
5. Relevant validators and the exact diff are reviewed before delivery.
