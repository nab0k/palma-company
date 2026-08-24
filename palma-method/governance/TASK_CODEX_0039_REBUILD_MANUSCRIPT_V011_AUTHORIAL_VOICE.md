---
id: TASK_CODEX_0039
type: task
status: in_progress
owner: codex
reviewer: chief_editor
created: 2026-08-24
privacy_level: internal
project: palma_method_book
priority: high
scope:
  - notion_v010_founder_comment_reconciliation
  - manuscript_v0_11_authorial_voice_rebuild
  - chapters_13_14_structural_rewrite
  - tak_shtab_name_protection
  - negative_construction_audit
  - abstraction_and_reader_loss_audit
  - contemporary_research_agenda
  - kahneman_tversky_editorial_assessment
depends_on:
  - TASK_CODEX_0036
  - DECISION_0007
  - DECISION_0008
  - DECISION_0009
base_branch: codex/manuscript-v010-scholar-integration
base_commit_sha: e178e1b7ed2739b93f7f96196f7baf6cfb13c42a
working_branch: codex/manuscript-v011-authorial-rebuild
input_paths:
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.10.md
  - palma-method/research/reports/SCHOLAR_INTEGRATION_MAP_v0.1.md
  - palma-method/research/reports/AUTHOR_REVIEW_CHANGE_MAP_v0.1.md
  - palma-method/research/reports/AUTHOR_REVIEW_CHANGE_MAP_ADDENDUM_v0.2.md
  - palma-method/governance/V08_EDITORIAL_DECISION_REGISTER_v0.1.md
  - PR_27_codex_tcf_full_interview_synthesis_0037
  - PR_30_codex_tcf_p10_source_card_0038
external_inputs:
  - https://app.notion.com/p/3c3c42d0b11b8049b1b5d3aa47608b75
  - https://github.com/nab0k/palma-company/pull/29
output_paths:
  - palma-method/governance/TASK_CODEX_0039_REBUILD_MANUSCRIPT_V011_AUTHORIAL_VOICE.md
  - palma-method/research/reports/V011_FOUNDER_COMMENT_RECONCILIATION_MAP_v0.1.md
  - palma-method/research/reports/PALMA_AUTHORIAL_VOICE_AND_CLARITY_FRAME_v0.1.md
  - palma-method/research/reports/CONTEMPORARY_RESEARCH_AND_KAHNEMAN_ASSESSMENT_v0.1.md
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.11.md
  - palma-method/governance/TASK_CODEX_0039_COMPLETION_REPORT.md
completion_report: palma-method/governance/TASK_CODEX_0039_COMPLETION_REPORT.md
---

# TASK_CODEX_0039 — Rebuild manuscript v0.11 around authorial voice and reader clarity

## Objective

Create an append-only manuscript v0.11 that responds to every founder discussion
on the Notion v0.10 page, restores missed earlier decisions, and changes the
editorial method wherever local polishing proved insufficient. Chapters 13 and
14 are structural rebuilds. The rest of the manuscript receives a controlled
whole-book pass for invented contrast, abstraction, unsupported instructional
authority, scholar entrances, naming continuity, and reader orientation.

## Founder authorization

On 24 August 2026 Serhii Nabok said he could not continue reading the manuscript
until the previous errors were corrected, supplied twelve whole-book diagnoses,
and instructed the editor to return to all Notion comments and proceed with the
revision. This is explicit authorization to create a new manuscript version.

## Editorial position

The book is an authorial research manifesto and a practical invitation to think,
not a claim that Palma Method is a validated universal law. The author speaks
from scenes he lived, work he performed, interviews he conducted, and questions
that remained open. Research gives those observations names, rivals, limits, and
occasionally a better question. It does not lend borrowed certainty.

## Required changes

1. Reconcile all 104 Notion discussions and 105 founder comments, including
   direct edits made on the downstream page.
2. Protect the organization name `TAK.Shtab`: first English use will be
   `TAK.Shtab (Ukrainian: “Так. Це штаб”)`; subsequent uses remain `TAK.Shtab`.
   Never translate the name as `HQ` or `the headquarters`.
3. Replace manufactured `не X, а Y` and negation-led openings with the positive
   claim. Restore X only when the text has established a plausible confusion and
   the contrast changes the reader's decision.
4. Rebuild Chapters 13 and 14 from concrete problems, scenes, and decisions.
   Every scholar enters after the reader can name the question their work helps
   answer.
5. Remove unsupported handbook authority (`обычно`, generic `мы`, universal
   founder/manager behavior) or attach it to a bounded source or authorial scene.
6. Create and apply a reader-loss test: no chain of abstract paragraphs may
   continue without a person, object, decision, episode, or worked example that
   lets the reader reconstruct what is happening.
7. Assess Kahneman and Tversky for precise, limited use; avoid turning every
   social mechanism into an individual cognitive bias or using a bestseller as
   authority where primary research is contested.
8. Map contemporary work after the classic sources and identify where a newer
   study actually changes the book, rather than adding recent dates decoratively.
9. Preserve source qualifications, privacy, and personal-story approvals.

## Working voice rules

- Begin from what the author observed, did, read, or still cannot explain.
- Prefer `я видел`, `в интервью прозвучало`, `исследователи обнаружили`, and
  `я предлагаю проверить` to the anonymous authority of `мы знаем` or
  `организатор обычно`.
- Use `you` only for a real reader check or invitation, not a disguised order.
- A theory block follows: present problem → researcher and reason to remember
  them → actual material/method → finding → use here → boundary.
- State Y first. Add “this can be confused with X” later only when X is a live,
  evidenced alternative.
- One paragraph may be abstract; the next must cash it out in a scene, object,
  question, or decision.

## Allowed changes

- Copy v0.10 to a new append-only v0.11 and edit v0.11 throughout.
- Merge the authorized TCF interview research inputs from PRs #27 and #30 while
  keeping raw identities and permissions protected.
- Replace, move, condense, or remove existing prose when the founder comment or
  reader-loss diagnosis requires it.
- Add verified modern research and source cards only where the newer work changes
  an inference, boundary, or application.
- Create the three declared editorial/research reports.

## Forbidden changes

- Do not edit v0.10 or any earlier manuscript.
- Do not resolve or delete Notion comments before the corresponding GitHub text
  is accepted.
- Do not use Notion as the canonical manuscript or create bidirectional sync.
- Do not invent authorial experience, TCF participant motives, representative
  findings, or universal Method effectiveness.
- Do not add Kahneman labels by analogy alone.
- Do not translate the Russian working manuscript in this task.
- Do not merge the final pull request without founder instruction.

## Acceptance criteria

1. All Notion discussions appear in the reconciliation map with a disposition
   and manuscript location or explicit research/author blocker.
2. v0.11 contains no organizational reference to TAK.Shtab that could later be
   mistranslated as the proper name `HQ`.
3. Chapters 13–14 have a reconstructable question, sequence, worked example, and
   conclusion; their scholar blocks no longer read as a literature inventory.
4. Every surviving generalized practice claim has a source or is reframed as an
   observation, possibility, or proposed check.
5. The whole-book negation and abstraction audit reports concrete before/after
   counts and unresolved risks.
6. The Kahneman/contemporary-research report distinguishes verified additions,
   useful but redundant ideas, and concepts rejected for this manuscript.
7. The v0.10 file and protected evidence artifacts remain untouched.
