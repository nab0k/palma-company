---
id: TASK_CODEX_0024
type: task
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-08-19
privacy_level: internal
project: palma_method_book
priority: high
scope: tcf_interview_corpus_registration
---

# TASK_CODEX_0024 — Register the TCF interview corpus

## Authorization

Authorized directly by Serhii Nabok on 19 August 2026. The task creates one
canonical GitHub entry point for completed TCF interviews while keeping audio,
full transcripts, names of private participants, and sensitive stories outside
the repository.

## Repository coordinates

- Repository: `nab0k/palma-company`
- Base branch: `codex/manuscript-v05-15-chapter-restructure`
- Base commit: `d17ffb50357ab3a9716510a09f94e68a5d37d360`
- Working branch: `codex/tcf-interview-corpus-0024`
- Final commit: reported in `TASK_CODEX_0024_COMPLETION_REPORT.md` and the delivery message

## Objective

Create a durable, privacy-safe corpus register that another authorized agent can
use to locate every completed TCF interview, understand its evidence status, and
follow the chain from private primary source to public-safe derivative card.

## Inputs

- Existing cards `SC-043`, `SC-044`, and `SC-095` through `SC-099`.
- `palma-method/research/reports/AUGUST_14_15_SOURCE_INVENTORY_v0.1.md`.
- Private Notion sources for the founder continuation, the high-regularity
  participant, and the former-member couple.
- Founder clarifications in the TCF interview task dated 19 August 2026.

## Outputs

- `palma-method/research/reports/TCF_INTERVIEW_CORPUS_REGISTER_v0.1.md`
- `palma-method/research/source-cards/tcf-high-regularity-member-interview-2026-08-19.md`
- `palma-method/research/source-cards/tcf-former-member-couple-interview-2026-08-16.md`
- `palma-method/research/source-cards/tcf-founder-interview-continuation-2026-08-05.md`
- Updated discovery pointer in `palma-method/collective-fitness/README.md`
- `palma-method/governance/TASK_CODEX_0024_COMPLETION_REPORT.md`

## Allowed changes

- Add privacy-safe derivative source cards and one corpus register.
- Add a discovery link from the existing TCF README.
- Record consent, verification, and source-access gaps without resolving them by
  inference.

## Forbidden changes

- Do not store audio, raw transcripts, contact details, attendance records, or
  sensitive third-party stories in GitHub.
- Do not change manuscript prose, accepted decisions, or existing source cards.
- Do not treat interview availability as permission to publish.
- Do not identify private participants in manuscript-facing prose.

## Acceptance criteria

1. Every completed TCF interview known on 19 August 2026 appears in one register.
2. Each register row points to an existing or newly created `SC-NNN` card.
3. The three previously unregistered interview sources receive derivative cards.
4. Planned but uncompleted interviews are explicitly separated from the corpus.
5. Validators pass for the task scope, or pre-existing failures are reported.
6. Only authorized task files are committed.
