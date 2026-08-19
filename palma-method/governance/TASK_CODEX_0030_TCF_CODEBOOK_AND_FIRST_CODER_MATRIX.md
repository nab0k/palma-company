---
id: TASK_CODEX_0030
type: task
status: delivered
owner: codex
reviewer: chief_editor
authority: founder
created: 2026-08-19
privacy_level: internal
project: palma_method_book
priority: high
scope: tcf_interview_codebook_and_first_coder_matrix
base_branch: codex/tcf-interview-corpus-0024
base_commit: 081f2267a038782b4d8d5fd31be6c53783b644c6
working_branch: codex/tcf-codebook-matrix-0030
depends_on:
  - TASK_CODEX_0024
input_paths:
  - palma-method/research/reports/TCF_INTERVIEW_CORPUS_REGISTER_v0.1.md
  - palma-method/research/syntheses/TCF_MEMBER_INTERVIEWS_CROSS_CASE_SYNTHESIS_v0.1.md
  - palma-method/research/reports/TCF_TRANSITION_MODEL_EXPLORATORY_CODING_v0.1.md
  - palma-method/research/source-cards/tcf-founder-interview-2026-07-27.md
  - palma-method/research/source-cards/tcf-founder-interview-2026-07-30.md
  - palma-method/research/source-cards/tcf-founder-interview-continuation-2026-08-05.md
  - palma-method/research/source-cards/tcf-francisco-member-interview-2026-08-14.md
  - palma-method/research/source-cards/tcf-rami-member-interview-2026-08-14.md
  - palma-method/research/source-cards/tcf-anya-member-interview-2026-08-15.md
  - palma-method/research/source-cards/tcf-luciana-member-interview-2026-08-15.md
  - palma-method/research/source-cards/tcf-low-regularity-member-intake-2026-08-15.md
  - palma-method/research/source-cards/tcf-former-member-couple-interview-2026-08-16.md
  - palma-method/research/source-cards/tcf-high-regularity-member-interview-2026-08-19.md
output_paths:
  - palma-method/governance/TASK_CODEX_0030_TCF_CODEBOOK_AND_FIRST_CODER_MATRIX.md
  - palma-method/governance/TASK_CODEX_0030_COMPLETION_REPORT.md
  - palma-method/research/reports/TCF_INTERVIEW_CODEBOOK_v0.1.md
  - palma-method/research/reports/TCF_INTERVIEW_FIRST_CODER_MATRIX_v0.1.md
  - palma-method/research/reports/TCF_INTERVIEW_CORPUS_REGISTER_v0.1.md
---

# TASK_CODEX_0030 — TCF codebook and first-coder matrix

## Objective

Create a privacy-safe, retrospective qualitative codebook and apply it once to
the currently registered TCF participant material. Preserve the earlier
five-interview coding as Wave 1, distinguish later interviews as Wave 2, and
produce a matrix that a second coder can challenge.

## Authorization

Serhii Nabok authorized the economical first stage on 19 August 2026 after
choosing codebook and interview matrix before Wodify calculations or manuscript
revision.

## Allowed changes

- Create the codebook, first-coder matrix, task file, and completion report.
- Correct an arithmetic description in the corpus register if discovered during
  respondent accounting.
- Use only privacy-safe source-card derivatives and existing synthesis material.

## Forbidden changes

- Do not edit the manuscript, Canon, Decisions, or approved scientific claims.
- Do not put raw transcripts, audio, attendance records, real participant names,
  or sensitive episodes into GitHub.
- Do not claim preregistration, independent coding, causal identification,
  representativeness, statistical testing, or empirical validation.
- Do not merge Wave 2 into the already executed Wave-1 protocol as if it had been
  specified before those interviews were collected.

## Acceptance criteria

1. Every code has an operational definition, admissible evidence, exclusions,
   missing-data rule, and at least one boundary example.
2. The participant is the intended unit of analysis; joint-interview attribution
   problems remain visible rather than forced into binary values.
3. Founder interviews are separated from participant outcome counts.
4. Every matrix cell points to a source card and uses `U` or `NA` instead of
   treating an unasked question as absence.
5. First-coder judgments, rival explanations, privacy limits, and second-coder
   instructions are explicit.
6. Relevant validators pass without introducing new repository errors.

## Completion report

`palma-method/governance/TASK_CODEX_0030_COMPLETION_REPORT.md`
