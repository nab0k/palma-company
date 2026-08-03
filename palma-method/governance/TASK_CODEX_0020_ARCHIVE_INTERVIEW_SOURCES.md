---
id: TASK_CODEX_0020
type: task
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-08-03
updated: 2026-08-03
privacy_level: internal
project: palma-method-book
priority: high
scope:
  - archive-sanitized-interview-sources
  - register-author-story-intake
  - demonstrate-case-insertion-without-editing-manuscript
base_branch: codex/collective-interview-status-0019
base_commit_sha: 98567b86e9a9d5a14e9098d49f12c220af6c8ae9
working_branch: codex/archive-interview-sources-0020
input_paths:
  - palma-method/production/PALMA_METHOD_BOOK_v0.1.md
  - palma-method/research/reports/COLLECTIVE_INTERVIEW_STATUS_v0.1.md
  - private Notion page 3aac42d0-b11b-80e9-a926-f365e2e7626a
  - private Notion page 3adc42d0-b11b-817e-a0ba-c361327afd76
  - private Notion page 3b1c42d0-b11b-81f5-aa0a-c8fa9ad89616
output_paths:
  - palma-method/research/source-cards/tcf-founder-interview-2026-07-27.md
  - palma-method/research/source-cards/tcf-founder-interview-2026-07-30.md
  - palma-method/research/source-cards/bombom-founder-interview-2026-08-03.md
  - palma-method/research/source-cards/serhii-tcf-personal-story-intake.md
  - palma-method/research/source-cards/serhii-kichkine-childhood-story-intake.md
  - palma-method/research/source-cards/serhii-military-lyceum-story-intake.md
  - palma-method/research/source-cards/serhii-tak-shtab-story-intake.md
  - palma-method/research/reports/INTERVIEW_AND_AUTHOR_SOURCE_REGISTER_v0.1.md
  - palma-method/research/reports/BOMBOM_CHAPTER_2_INSERTION_DEMO_v0.1.md
  - palma-method/generated/repository-index.json
  - palma-method/generated/repository-index.md
  - palma-method/research/validation/claude-package-validation.json
  - palma-method/research/validation/claude-package-validation.md
  - palma-method/governance/TASK_CODEX_0020_COMPLETION_REPORT.md
allowed_changes:
  - create public-safe source cards derived from private interview material
  - record source provenance, verification gaps, consent gates, and candidate chapter uses
  - create one non-canonical editorial demonstration using existing manuscript text
  - record which reported author stories could and could not be recovered
  - use the Founder-identified Palma project chats as source locations for the author stories
  - create a private Notion AI-bootstrap page linking public IDs to private source locations
  - regenerate repository indexes and validation reports from authorized inputs
forbidden_changes:
  - commit audio, raw transcripts, contact details, or confidential financial information
  - edit manuscript files
  - publish direct quotations without speaker approval
  - describe TCF or Bombom as proof that the Palma Method works
  - reconstruct missing personal stories from biographies or unrelated company records
acceptance_criteria:
  - both TCF founder interviews and the Bombom founder interview have traceable public-safe cards
  - the recoverable Founder story is recorded with an explicit use-permission gate
  - missing Founder stories are reported honestly rather than invented
  - a concrete Chapter 2 insertion demonstration is available for editorial review
  - protected manuscript files remain untouched
completion_report: palma-method/governance/TASK_CODEX_0020_COMPLETION_REPORT.md
final_commit_sha: 9db2f491cde639147992c7d0ce1b6bbbe8ca8069
---

# TASK_CODEX_0020 — Archive interview and author-story sources

## Authorization

Founder Serhii Nabok authorized this task in the Codex conversation on
2026-08-03 by asking to preserve the two Miguel interviews, the Sandra
interview, and three or four personal cases in GitHub, and to demonstrate how
one case could sit inside the current book.

## Privacy boundary

The repository is public. The canonical GitHub artifacts created by this task
therefore preserve editorially useful facts and source coordinates, not the
private audio or raw transcripts. Direct quotations, sensitive facts, and
recognizable personal details remain gated by speaker or author approval.

## Start record

- Working tree was clean at start.
- Local branch matched its recorded upstream at
  `98567b86e9a9d5a14e9098d49f12c220af6c8ae9`.
- A remote fetch was attempted but could not complete because the local GitHub
  CLI credential was invalid. The work was isolated on the task branch and no
  unrelated file was staged.
- The repository contains no local Project Ledger file. The applicable
  canonical-state decision, `DECISION_0004`, and the previous active task were
  read before editing.

## Private operational output

- Notion: [AI Bootstrap — Private Source Map for The Palma Method](https://app.notion.com/p/3b1c42d0b11b8198864fc70ec2c9a136)
- This page is a private reconstruction key and is not a canonical replacement
  for the GitHub artifacts.
