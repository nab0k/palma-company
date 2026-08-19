---
id: TASK_CODEX_0032
type: task
status: in_progress
owner: codex
reviewer: chief_editor
created: 2026-08-19
privacy_level: internal
project: palma-method-book
priority: high
scope:
  - manuscript-v0.7-research-base
  - tcf-interview-synthesis-integration
depends_on:
  - DECISION_0006
  - DECISION_0007
  - TASK_CODEX_0030
  - TASK_CODEX_0031
base_branch: codex/manuscript-v05-nonlinearity-pass
base_commit_sha: 36724b8a479d931675795dfffe21da2a46942812
working_branch: codex/manuscript-v07-editorial-integration
author_approval_ref: "Founder instruction in Codex task, 2026-08-19: proceed with the proposed book work and provide the complete text in a separate Notion page."
input_paths:
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.6.md
  - palma-method/research/reports/TCF_INTERVIEW_CORPUS_REGISTER_v0.1.md
  - palma-method/research/reports/TCF_INTERVIEW_CODEBOOK_v0.1.md
  - palma-method/research/reports/TCF_INTERVIEW_FIRST_CODER_MATRIX_v0.1.md
output_paths:
  - palma-method/governance/TASK_CODEX_0032_ASSEMBLE_MANUSCRIPT_V0_7_RESEARCH_BASE.md
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.7.md
  - palma-method/governance/TASK_CODEX_0032_COMPLETION_REPORT.md
completion_report: palma-method/governance/TASK_CODEX_0032_COMPLETION_REPORT.md
---

# TASK_CODEX_0032 — Assemble manuscript v0.7 research base

## Objective

Create an append-only v0.7 manuscript from v0.6 and synchronize its TCF evidence
status with the registered interview corpus and first-coder matrix. This is the
first coherent editorial base for the longer revision, not the completed expansion.

## Allowed changes

- Copy v0.6 to v0.7 without altering v0.6.
- Update build metadata and lineage.
- Add a bounded TCF interview finding that directly qualifies the Wodify hypothesis.
- Correct the scientific appendix's obsolete five-interview description.
- Create a separate downstream Notion review mirror after the canonical commit.

## Forbidden changes

- Do not claim that TCF validates Palma Method or that co-attendance reveals intent.
- Do not add private names, raw transcripts, attendance rows, or sensitive episodes.
- Do not report an independent coding result before a second coder completes it.
- Do not alter Canon, Decisions, v0.6, or the four-stage Method architecture.
- Do not perform the Wodify analysis inside this task.

## Acceptance criteria

1. v0.6 remains unchanged and v0.7 is a complete readable manuscript.
2. The manuscript reports eight member respondents and one contextual founder
   informant without presenting them as a representative sample.
3. Action and response are counted separately and all limitations remain visible.
4. The schedule-coordination hypothesis includes the strongest existing rival
   observation from a high-regularity participant.
5. The exact diff and relevant validators are reviewed before delivery.
