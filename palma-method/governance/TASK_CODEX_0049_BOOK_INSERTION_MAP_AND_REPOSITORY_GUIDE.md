---
id: TASK_CODEX_0049
type: task
status: in_progress
owner: codex
reviewer: serhii_nabok
created: 2026-09-11
privacy_level: internal
project: palma_method_book
priority: high
scope: publish_insertion_map_create_repository_guide_and_dispatch_chapter_briefs
---

# TASK_CODEX_0049 — Publish insertion map and create book repository guide

```yaml
task_id: TASK_CODEX_0049
agent: codex
objective: Publish the chapters 7–15 research-insertion map, create a durable GitHub guide explaining all layers of the Palma Method book, and dispatch chapter-specific read-only integration briefs to the existing chapter chats.
base_branch: codex/plant-callback-payoff-audit-0048
base_commit_sha: ce87c650e67ec66b39c54cccd40044e5c8042a41
working_branch: codex/book-insertion-map-and-guide-0049
input_paths:
  - external read-only: outputs/PALMA_METHOD_MANUSCRIPT_v0.15.md
  - palma-method/research/decision-memos/PALMA_PLANT_CALLBACK_PAYOFF_LEDGER_v0.1.md
  - user-supplied public-administration, domestic-violence, displacement, military-communication, TAK.Shtab, and Taktion materials
output_paths:
  - palma-method/research/decision-memos/PALMA_NEW_MATERIAL_INSERTION_MAP_v0.1.md
  - palma-method/BOOK_REPOSITORY_GUIDE.md
  - palma-method/governance/TASK_CODEX_0049_BOOK_INSERTION_MAP_AND_REPOSITORY_GUIDE.md
  - palma-method/governance/TASK_CODEX_0049_COMPLETION_REPORT.md
allowed_changes:
  - Create the listed map, guide, task, and completion report.
  - Add a discoverability pointer to palma-method/README.md.
  - Send chapter-specific read-only integration briefs to existing chats for chapters 7–15.
forbidden_changes:
  - Modify manuscript prose, chapter candidates, source cards, interviews, decisions, Google Docs, or Notion.
  - Claim that v0.15 is the freshest prose for every chapter.
  - Resolve the legacy 21-chapter versus current 15-chapter repository mismatch silently.
acceptance_criteria:
  - The insertion map gives each new source one primary job, location, transition, length, and evidence boundary.
  - The guide distinguishes prose controls, historical architecture, evidence, interviews, reservoirs, governance, translation, and production.
  - The guide warns that current prose may be newer outside GitHub and requires an explicit chapter control.
  - Existing chapter chats receive only their relevant scope and remain read-only until founder approval.
  - Protected manuscript files remain unchanged.
completion_report: palma-method/governance/TASK_CODEX_0049_COMPLETION_REPORT.md
final_commit_sha: pending
```

## Founder authorization

Authorized in conversation on 2026-09-11: place the insertion map on GitHub, create a durable map of how the book is organized in GitHub, and distribute the relevant insertion briefs to the chapter chats.

