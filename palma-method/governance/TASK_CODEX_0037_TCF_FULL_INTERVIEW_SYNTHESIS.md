---
id: TASK_CODEX_0037
type: task
status: delivered
owner: codex
reviewer: chief_editor
authority: founder
created: 2026-08-21
privacy_level: internal
project: palma_method_book
priority: high
scope:
  - tcf_full_interview_coverage_audit
  - tcf_wave_2_cross_case_synthesis
  - lucas_interview_registration
  - bounded_manuscript_evidence_review
base_branch: codex/manuscript-v09-miguel-practices
base_commit_sha: a694f207a0fddb36e39c4c01d3504f607e34852d
working_branch: codex/tcf-full-interview-synthesis-0037
input_paths:
  - palma-method/research/reports/TCF_INTERVIEW_CORPUS_REGISTER_v0.1.md
  - palma-method/research/reports/TCF_INTERVIEW_CODEBOOK_v0.1.md
  - palma-method/research/reports/TCF_INTERVIEW_FIRST_CODER_MATRIX_v0.1.md
  - palma-method/research/syntheses/TCF_MEMBER_INTERVIEWS_CROSS_CASE_SYNTHESIS_v0.1.md
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
  - palma-method/research/source-cards/serhii-tcf-personal-story-intake.md
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.9.md
  - private Notion and local interview sources identified by the corpus register
  - private Lucas transcript retained outside GitHub
output_paths:
  - palma-method/governance/TASK_CODEX_0037_TCF_FULL_INTERVIEW_SYNTHESIS.md
  - palma-method/governance/TASK_CODEX_0037_COMPLETION_REPORT.md
  - palma-method/research/source-cards/tcf-lucas-member-interview-2026-08-21.md
  - palma-method/research/source-cards/serhii-tcf-personal-story-intake.md
  - palma-method/research/reports/TCF_INTERVIEW_CORPUS_REGISTER_v0.2.md
  - palma-method/research/reports/TCF_INTERVIEW_COVERAGE_AUDIT_v0.1.md
  - palma-method/research/reports/TCF_INTERVIEW_FIRST_CODER_MATRIX_v0.2.md
  - palma-method/research/syntheses/TCF_MEMBER_INTERVIEWS_CROSS_CASE_SYNTHESIS_v0.2.md
  - palma-method/research/validation/claude-package-validation.json
  - palma-method/research/validation/claude-package-validation.md
completion_report: palma-method/governance/TASK_CODEX_0037_COMPLETION_REPORT.md
---

# TASK_CODEX_0037 — Full TCF interview synthesis

## Authorization

Serhii Nabok directly authorized a complete second pass over the TCF interview
material on 21 August 2026 and instructed Codex to add the findings that belong
in the project. He separately clarified that Miguel repeatedly asks participants
for opinions about merchandise and asked whether the post-loss T-shirt episode
had been handled.

## Objective

Audit every completed TCF interview from private source through source card,
coding, synthesis, and current manuscript use; register the Lucas interview;
preserve negative and rival explanations; and update the privacy-safe research
corpus without converting sensitive material into publication prose.

## Allowed changes

- Create a restricted, privacy-safe source card for the Lucas interview.
- Create append-only v0.2 corpus, matrix, and cross-case synthesis documents.
- Update SC-046 with the founder-author's dated merchandise-feedback observation.
- Record the post-loss help, dog-care, merchandise, and fundraiser sequence only
  as a restricted verification and consent item, without names or dramatic detail.
- Correct counts, coverage descriptions, and source-routing gaps.

## Forbidden changes

- Do not commit raw audio, full transcripts, real participant names, private
  attendance records, or identifying third-party details.
- Do not add the death, dog-care, fundraiser, or grief episode to the manuscript
  without explicit participant permission and fact checking.
- Do not use a machine transcript as a publication-ready quotation.
- Do not claim that TCF or any practice proves the Palma Method effective.
- Do not overwrite v0.9 or any earlier manuscript version.

## Acceptance criteria

1. Every completed interview known on 21 August 2026 has an explicit corpus row.
2. The Lucas source has a bounded derivative that distinguishes statement,
   observation, interpretation, missing audio, and transcript cutoff.
3. The v0.2 synthesis includes Wave 1, Wave 2, Lucas, rituals, merchandise input,
   couple effects, boundaries, founder dependence, and negative cases.
4. The sensitive post-loss episode is traceable internally but remains blocked
   from publication pending consent and verification.
5. The coverage audit states what reached the current manuscript, what did not,
   and why.
6. Relevant validators pass or pre-existing failures are reported without being
   hidden.

## Delivery note

Delivered on 21 August 2026 on the recorded working branch. The pull-request head
is the authoritative final commit; repository coordinates are also recorded in
the completion report and PR.
