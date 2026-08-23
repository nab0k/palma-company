---
id: REPORT_TASK_CODEX_0038
type: completion_report
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-08-23
privacy_level: internal
task_id: TASK_CODEX_0038
subject_refs:
  - TASK_CODEX_0038
  - SC-153
base_branch: codex/tcf-full-interview-synthesis-0037
base_commit_sha: df9e319759de8400daac320afa357b9923b28b14
working_branch: codex/tcf-p10-source-card-0038
---

# TASK_CODEX_0038 completion report

## Outcome

Created restricted source card `SC-153` for the participant under stable code
`TCF-P10` and the readable label `established TCF participant`. The card contains
no real name, initial, contact information, named personal contacts, direct quote,
or raw-source URL. The private source map, not GitHub, must retain re-identification
information.

## Editorial treatment

- The card centers a bounded candidate mechanism: a participant notices group
  uncertainty, asks or organizes, and reduces immediate participation friction.
- Reported behavior is separated from project interpretation, rival explanations,
  unsupported generalization, and verification questions.
- Founder dependence is treated by function and remains partly hypothetical.
- Gendered discomfort is retained as restricted negative evidence without scene,
  names, or identifying details.
- Exact relationship counts and scientific-sounding explanations are excluded from
  factual use unless separately verified.
- The participant must review and approve every exact paraphrase, fact, or scene
  before any book use. The card does not provide publication clearance.

## Changed paths

- `palma-method/governance/TASK_CODEX_0038_TCF_P10_SOURCE_CARD.md`
- `palma-method/governance/TASK_CODEX_0038_COMPLETION_REPORT.md`
- `palma-method/research/source-cards/tcf-p10-established-participant-interview-2026-08-23.md`
- generated research-package validation reports

No Notion page, manuscript, raw transcript, corpus register, coding matrix,
cross-case synthesis, approved decision, or attendance record was edited.

## Validation

- `validate_research_package.rb`: pass; 148 parsed cards, 148 unique IDs, zero
  errors, 24 warnings.
- `validate_cards.py`: pass for its configured scope; zero failures and no cards
  selected by that legacy validator.
- `git diff --check`: pass.
- `validate_metadata.rb`: three pre-existing errors remain: duplicate legacy
  `TASK_CLAUDE_0030` ID and unreadable legacy
  `MANUSCRIPT_SNAPSHOT_2026-08-15.md`. The task introduced no new metadata error.
- Repository index check reports out of date. It was not regenerated because that
  would introduce a large unrelated generated diff.
- Book-dashboard check is blocked by the same pre-existing metadata errors.

## Follow-up boundary

Adding `TCF-P10` to the corpus register, coding matrix, cross-case synthesis, or
manuscript requires a separate authorized task. Before that synthesis work, use
only this sanitized derivative and obtain participant approval for any proposed
publication language.
