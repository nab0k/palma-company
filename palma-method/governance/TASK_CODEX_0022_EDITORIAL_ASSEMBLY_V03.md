---
id: TASK_CODEX_0022
type: task
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-08-16
updated: 2026-08-16
privacy_level: internal
project: palma-method-book
priority: high
scope:
  - part-iv-editorial-repair
  - conclusion-editorial-repair
  - early-method-reader-contract
  - reader-facing-appendices
depends_on:
  - DECISION_0003
  - DECISION_0006
  - TASK_CODEX_0021
  - TASK_CLAUDE_0027
base_branch: codex/claude-part-iv-evidence-and-appendix
base_commit_sha: e3d46cf28f247870e3b4275f80c1888e661cedc2
working_branch: codex/palma-method-editorial-v03
personal_story_use: approved
author_approval_ref: TASK_CODEX_0022
input_paths:
  - AGENTS.md
  - palma-method/governance/DECISION_0003_RELATIONSHIP_CAPITAL_ARCHITECTURE.md
  - palma-method/governance/DECISION_0006_PALMA_METHOD_FOUR_STAGE_ARCHITECTURE.md
  - palma-method/governance/PALMA_METHOD_CANON_v1.1.md
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.2.md
  - palma-method/research/reports/PART_IV_EVIDENCE_AUDIT_v0.1.md
  - palma-method/research/reports/PART_IV_CONTENT_TRANSFER_MAP_v0.1.md
  - palma-method/research/reports/PALMA_METHOD_FIELD_GUIDE_APPENDIX_v0.1.md
  - palma-method/research/reports/PALMA_METHOD_EVIDENCE_AND_SCIENTIFIC_STATUS_v0.1.md
output_paths:
  - palma-method/governance/TASK_CODEX_0022_EDITORIAL_ASSEMBLY_V03.md
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.3.md
  - palma-method/research/reports/PALMA_METHOD_EDITORIAL_CHANGE_LOG_v0.2.md
  - palma-method/research/reports/PALMA_METHOD_WORD_COUNT_REPORT_v0.2.md
  - palma-method/governance/TASK_CODEX_0022_COMPLETION_REPORT.md
completion_report: palma-method/governance/TASK_CODEX_0022_COMPLETION_REPORT.md
---

# TASK_CODEX_0022 — Editorial assembly v0.3

## Authorization

Founder Serhii Nabok authorized the v0.3 editorial assembly in the active Codex
conversation on 2026-08-16 after reviewing the current manuscript, the independent
market/reader audit, and TASK_CLAUDE_0027. Existing personal stories already present
in v0.2 may be retained and edited; no new personal facts may be introduced.

## Objective

Create an append-only Russian manuscript v0.3 that makes Chapters 17–21 and the
conclusion read as the culmination of the same authored book, while preserving the
four-stage Method, scientific qualifications, traceability, and the strongest
personal scenes. Move operational and scientific detail into reader-facing
appendices instead of deleting useful material.

## Allowed changes

- Copy v0.2 into a new append-only v0.3 manuscript build.
- Make one surgical reader-contract addition in the introduction.
- Edit Chapters 17–21 and the conclusion only, except for metadata and internal
  cross-references required by the new build.
- Preserve the chapter-opening stories and factual qualifications.
- Correct the evidence drifts identified by TASK_CLAUDE_0027, including the Ostrom
  attribution and Delta figure.
- Shorten technical checklists and repeated walkthroughs in the main narrative.
- Add edited practical and scientific appendices based only on TASK_CLAUDE_0027.
- Record exact changes and word counts.

## Forbidden changes

- Do not modify v0.2, the source snapshot, accepted decisions, source cards, private
  transcripts, Google Docs, Notion, dashboards, or generated repository indexes.
- Do not edit Chapters 1–16 beyond the authorized introduction insertion.
- Do not invent stories, facts, permissions, evidence, scientific validation, or
  empirical confirmation.
- Do not change Diagnose → Design → Launch → Transfer or turn Facilitate / Advise
  into a fifth stage.
- Do not translate the manuscript or add padding for word count.
- Do not commit unrelated files or merge another branch.

## Acceptance criteria

1. v0.3 is append-only and declares exact lineage from v0.2 at `e3d46cf`.
2. The introduction gives an early, short contract for the four-stage Method without
   becoming a manual.
3. Chapters 17–21 preserve their narrative openings and use the tools as decisions,
   not long specifications.
4. Chapter 20 reads unmistakably as a cross-cutting interlude.
5. The conclusion answers the opening question and keeps scientific honesty without
   reading as a research completion report.
6. Full operational detail survives in a practical appendix; full scientific
   qualification survives in a scientific note.
7. TASK_CLAUDE_0027 evidence corrections are applied.
8. Relevant validators pass or pre-existing failures are separated from introduced
   failures.
9. Only declared paths are committed and pushed; a draft PR is opened if connector
   permissions allow it.

## Completion state

Delivered. Final commit SHA will be recorded in the completion handoff because a
file cannot contain the SHA of the commit that contains itself.
