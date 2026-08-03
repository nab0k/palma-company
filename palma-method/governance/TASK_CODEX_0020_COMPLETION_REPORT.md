---
id: REPORT_TASK_CODEX_0020
type: completion_report
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-08-03
updated: 2026-08-03
privacy_level: internal
task_id: TASK_CODEX_0020
subject_refs:
  - TASK_CODEX_0020
  - REVIEW_CODEX_0020
  - SC-043
  - SC-044
  - SC-045
  - SC-046
---

# TASK_CODEX_0020 completion report

## Delivery coordinates

- Repository: `nab0k/palma-company`
- Base branch: `codex/collective-interview-status-0019`
- Base commit: `98567b86e9a9d5a14e9098d49f12c220af6c8ae9`
- Working branch: `codex/archive-interview-sources-0020`
- Delivery commit: `9db2f491cde639147992c7d0ce1b6bbbe8ca8069`
- Draft pull request: [PR #12](https://github.com/nab0k/palma-company/pull/12)

## Delivered

- Public-safe, traceable source cards for two TCF founder interviews and one
  Café Bombom founder interview.
- A first-person intake card for the recoverable Serhii-at-TCF story.
- First-person intake cards for the Kichkine childhood, Kyiv Military Lyceum,
  and TAK.Shtab stories located in the Palma.company project chats.
- A source register that now traces all four located author cases.
- A concrete, non-canonical demonstration of how Bombom may enter Chapter 2.
- A private Notion AI-bootstrap page mapping stable public IDs to private source
  locations and defining the reconstruction and privacy protocol.

## Validation

- `ruby palma-method/scripts/validate_metadata.rb`: pass; 215 records, 0
  errors; existing legacy-format warnings only.
- `ruby palma-method/scripts/generate_repository_index.rb --check`: pass;
  deterministic and current.
- `ruby palma-method/scripts/generate_book_dashboard.rb --check`: pass.
- `ruby palma-method/scripts/validate_research_package.rb`: pass; 49 source
  cards parsed, 49 unique IDs, 0 errors, 0 warnings.
- Privacy scan: no email addresses, telephone numbers, local absolute paths,
  raw transcripts, or confidential details found in the public-safe outputs.
- Exact staged-diff check: pass; only the fifteen authorized task and generated
  files are included.

## Private operational mirror

- [AI Bootstrap — Private Source Map for The Palma Method](https://app.notion.com/p/3b1c42d0b11b8198864fc70ec2c9a136)
- The page is private and must not be exported to the public repository.

## Editorial decisions still required

- Permission for names, recognizable facts, and direct quotations.
- Whether the Bombom scene belongs in Chapter 2, Chapter 6, or both in shorter
  forms.
- Whether the TCF case passes the prospective-field-note inclusion gate.
- Identification of the source location for the remaining personal stories.

## Scope confirmation

No manuscript, approved decision, raw transcript, audio recording, confidential
financial detail, or unrelated working-tree file was changed.
