---
id: TASK_CODEX_0023
type: task
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-08-12
updated: 2026-08-12
privacy_level: internal
project: palma-method-book
priority: high
scope:
  - ai-entrypoint
  - author-story-register
  - interview-source-navigation
  - privacy-safe-material-backlog
base_branch: origin/codex/prose-source-and-crossref-rules
base_commit_sha: 3c2b62ef2953c07e87cead20ab4c0dc2c21b2d88
working_branch: codex/unify-author-source-index-0023
input_paths:
  - palma-method/README.md
  - palma-method/research/README.md
  - palma-method/research/SOURCE_INDEX.md
  - palma-method/research/reports/INTERVIEW_AND_AUTHOR_SOURCE_REGISTER_v0.1.md
  - palma-method/research/source-cards/serhii-*.md
  - palma-method/research/source-cards/tcf-founder-interview-*.md
  - palma-method/research/source-cards/bombom-founder-interview-2026-08-03.md
  - private author-story handoffs supplied by Serhii in the editorial conversation
output_paths:
  - palma-method/AI_START_HERE.md
  - palma-method/BOOK_DASHBOARD.md
  - palma-method/README.md
  - palma-method/research/README.md
  - palma-method/research/SOURCE_INDEX.md
  - palma-method/research/reports/INTERVIEW_AND_AUTHOR_SOURCE_REGISTER_v0.2.md
  - palma-method/research/source-cards/serhii-career-story-corpus-intake.md
  - palma-method/research/source-cards/serhii-tak-shtab-story-intake.md
  - palma-method/generated/repository-index.json
  - palma-method/generated/repository-index.md
  - palma-method/research/validation/claude-package-validation.json
  - palma-method/research/validation/claude-package-validation.md
  - palma-method/governance/TASK_CODEX_0023_COMPLETION_REPORT.md
allowed_changes:
  - add a stable AI entrypoint without moving or renaming existing artifacts
  - add an append-only v0.2 author/interview register
  - register a public-safe aggregate card for known but individually uncarded author stories
  - append a public-safe addendum to the existing TAK.Shtab card
  - mark legacy manual indexes as incomplete and route readers to current generated indexes
  - regenerate authorized indexes and validation reports
forbidden_changes:
  - edit manuscript files or approved decisions
  - commit raw interviews, audio, transcripts, private contact data, or confidential financial details
  - change existing source-card IDs or remove, move, rename, or obsolete existing artifacts
  - infer manuscript-use approval from source registration
  - create bidirectional GitHub/Notion synchronization
acceptance_criteria:
  - a new AI can identify the canonical state, book map, author-story register, privacy rules, and verification restrictions from one entrypoint
  - every existing Serhii author card and current founder interview card appears in the v0.2 register
  - known uncarded author material is discoverable without publishing private originals
  - stale manual indexes no longer present themselves as complete inventories
  - protected manuscript and decision files remain untouched
completion_report: palma-method/governance/TASK_CODEX_0023_COMPLETION_REPORT.md
final_commit_sha: cd115eba8ada96dc8d25b440baae31e711e1ed1f
---

# TASK_CODEX_0023 — Unify author and interview source navigation

## Authorization

Founder Serhii Nabok authorized this task in the Codex conversation on
2026-08-12 by asking to make all cards and source fragments logically
accessible to any AI and to prevent future loss of author-story context.

## Start record

- Remote state was fetched before branch creation.
- The task worktree was created cleanly from
  `origin/codex/prose-source-and-crossref-rules` at
  `3c2b62ef2953c07e87cead20ab4c0dc2c21b2d88`.
- The shared working folder and its unrelated tracked and untracked changes were
  not modified.
- The repository has no Project Ledger file. `AGENTS.md`, `DECISION_0004`,
  `FRONTMATTER_SPEC.md`, TASK_CODEX_0020, the existing source register, and
  the current research landing pages were read before editing.

## Design rule

GitHub remains canonical for public-safe editorial knowledge. Private originals
remain in their approved private locations. The navigation layer records how to
find them; it does not copy them into the public repository.
