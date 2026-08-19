---
id: REPORT_TASK_CODEX_0024
type: completion_report
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-08-19
privacy_level: internal
task_id: TASK_CODEX_0024
subject_refs:
  - TASK_CODEX_0024
  - TCF_INTERVIEW_CORPUS_REGISTER_v0.1
  - SC-142
  - SC-143
  - SC-144
---

# TASK_CODEX_0024 — Completion report

## Repository coordinates

- Repository: `nab0k/palma-company`
- Base branch: `codex/manuscript-v05-15-chapter-restructure`
- Base commit: `d17ffb50357ab3a9716510a09f94e68a5d37d360`
- Working branch: `codex/tcf-interview-corpus-0024`
- Final commit: recorded in the Git delivery message after commit creation

## Delivered

1. One canonical TCF interview corpus register covering nine respondents and
   ten interview source units known on 19 August 2026.
2. Three new privacy-safe derivative source cards:
   - SC-142 — high-regularity participant interview;
   - SC-143 — joint former-member interview after relocation;
   - SC-144 — founder interview continuation.
3. A discovery link from the TCF README to the canonical register.
4. Explicit separation of completed sources from three planned interviews.

## Privacy handling

- No raw transcript, audio, private attendance data, contact detail, or private
  participant name was added to GitHub.
- Private originals remain in Notion or local retained files and are referenced
  through stable identifiers.
- Every new card states that source availability is not permission to publish.
- Third-party episodes remain blocked pending independent confirmation and
  consent.

## Validation

- `validate_research_package.rb`: pass; 139 cards parsed, 139 unique IDs,
  0 errors, 20 pre-existing warnings.
- `validate_metadata.rb`: the task introduces no new metadata errors. The check
  still reports three pre-existing baseline errors: two duplicate
  `TASK_CLAUDE_0030` IDs and the unreadable metadata block in
  `MANUSCRIPT_SNAPSHOT_2026-08-15.md`.
- New SC IDs were assigned as 142–144 after detecting that the unintegrated
  TASK_CLAUDE_0032 bundle had already reserved SC-139–SC-141.

## Unresolved work

- The existing cross-case synthesis covers SC-095 through SC-099 only. Adding
  SC-142 and SC-143 to a new coding pass is a separate editorial-research task.
- Consent, speaker checks, and quotation checks remain respondent-specific.
- The three planned participants must not be represented as evidence until
  interviews exist.

## Scope confirmation

No manuscript, decision, Canon, raw interview source, Notion page, or private
attendance workbook was modified. Only the files declared in TASK_CODEX_0024
were changed.

