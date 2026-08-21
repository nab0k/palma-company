---
id: REPORT_TASK_CODEX_0037
type: completion_report
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-08-21
privacy_level: internal
task_id: TASK_CODEX_0037
subject_refs:
  - TASK_CODEX_0037
  - SC-046
  - SC-152
  - TCF_INTERVIEW_CORPUS_REGISTER_v0.2
  - TCF_INTERVIEW_FIRST_CODER_MATRIX_v0.2
  - TCF_MEMBER_INTERVIEWS_CROSS_CASE_SYNTHESIS_v0.2
base_branch: codex/manuscript-v09-miguel-practices
base_commit_sha: a694f207a0fddb36e39c4c01d3504f607e34852d
working_branch: codex/tcf-full-interview-synthesis-0037
---

# TASK_CODEX_0037 completion report

## Outcome

The full known TCF interview corpus has been re-audited and registered as eleven
source units covering ten respondents: nine member perspectives and the founder.
Lucas's unrecorded interview now has a restricted derivative card. The new v0.2
matrix and synthesis incorporate all member cases, negative evidence, rival
explanations, rituals, couple effects, merchandise feedback, boundaries,
post-relocation persistence, and graded founder dependence.

## Main editorial findings

- Merchandise input is best described as low-stakes participation and a
  conversational opening. The evidence does not support shared governance,
  causal ownership, loyalty, or relationship formation.
- Operational routines, personal habits, interaction openings, and shared recurring
  rituals are distinct categories; not every repeated routine creates a tie.
- Couples can bridge participants into new contacts and can insulate them from the
  need to reach outward.
- Founder dependence varies by function and relationship. Existing peer routines may
  persist even when the founder's tone and brokerage are missed.
- The null case, familiar-but-unnamed regulars, convenience-driven booking, and the
  unfavorable Brazil comparison remain intact as disconfirming evidence.

## Sensitive episode decision

The long-tenured member's interview supports only general help with grief and help to
the affected family. Dog care, merchandise, the collection mechanism, proceeds, and
food purchases come from separate project context, not that transcript. Old
manuscript wording is not independent evidence. The current manuscript correctly
omits the episode. It remains blocked until separate granular consent and direct fact
checking; the deceased person is not named in the new artifacts.

## Changed paths

- `palma-method/governance/TASK_CODEX_0037_TCF_FULL_INTERVIEW_SYNTHESIS.md`
- `palma-method/governance/TASK_CODEX_0037_COMPLETION_REPORT.md`
- `palma-method/research/source-cards/tcf-lucas-member-interview-2026-08-21.md`
- `palma-method/research/source-cards/serhii-tcf-personal-story-intake.md`
- `palma-method/research/reports/TCF_INTERVIEW_CORPUS_REGISTER_v0.2.md`
- `palma-method/research/reports/TCF_INTERVIEW_COVERAGE_AUDIT_v0.1.md`
- `palma-method/research/reports/TCF_INTERVIEW_FIRST_CODER_MATRIX_v0.2.md`
- `palma-method/research/syntheses/TCF_MEMBER_INTERVIEWS_CROSS_CASE_SYNTHESIS_v0.2.md`
- generated research-package validation reports

No manuscript, raw transcript, audio, attendance record, Notion page, approved
decision, or earlier synthesis version was edited.

## Validation

- `validate_research_package.rb`: pass; 147 parsed cards, 147 unique IDs, zero
  errors, 24 warnings.
- `validate_cards.py`: pass for configured scope; zero failures.
- `git diff --check`: pass.
- `validate_metadata.rb`: three pre-existing errors remain: duplicate legacy
  `TASK_CLAUDE_0030` ID and unreadable legacy
  `MANUSCRIPT_SNAPSHOT_2026-08-15.md`. The task introduced no new metadata error.
- Repository index check reports out of date. Regeneration would rewrite more than
  20,000 lines because of accumulated base-branch metadata changes, so the generated
  side effect was excluded rather than silently widening this task.
- Book-dashboard check is blocked by the same pre-existing metadata errors.

## Editorial next action

Use the seven bounded questions in the v0.2 synthesis for the planned Cathal
interview. Before any book scene about merchandise, obtain a participant-reviewed
specific episode. Before any post-loss use, complete the separate consent and
fact-check checklist in the coverage audit.
