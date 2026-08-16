---
id: TASK_CODEX_0024
type: task
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-08-16
privacy_level: internal
project: palma-company-and-method
priority: high
scope:
  - uncommitted-work-recovery
  - palma-test-prototype-preservation
  - market-research-preservation
  - manuscript-fragment-recovery-audit
depends_on:
  - TASK_CODEX_0022
  - DECISION_0003
  - DECISION_0006
base_branch: codex/palma-method-editorial-v03
base_commit_sha: 14c8c12
working_branch: codex/recover-uncommitted-palma-assets
personal_story_use: prohibited
input_paths:
  - /Users/serhiinabok/Documents/Adshot Europe/palma-test/
  - /Users/serhiinabok/Documents/Adshot Europe/palma-community-market-analysis-2026-07.md
  - /Users/serhiinabok/Documents/Adshot Europe/palma-market-and-positioning-brief-2026-07.md
  - /Users/serhiinabok/Documents/Adshot Europe/palma-competitive-landscape-strategic-communications-2026.md
  - /Users/serhiinabok/Documents/Adshot Europe/palma-strategic-communications-market-trends-2024-2026.md
  - /Users/serhiinabok/Documents/Adshot Europe/bridge/trusted-read-ch17-20260814/document-text.md
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.3.md
output_paths:
  - palma-test/
  - palma-community-market-analysis-2026-07.md
  - palma-market-and-positioning-brief-2026-07.md
  - palma-competitive-landscape-strategic-communications-2026.md
  - palma-strategic-communications-market-trends-2024-2026.md
  - palma-method/research/reports/UNCOMMITTED_WORK_RECOVERY_AUDIT_v0.1.md
  - palma-method/research/reports/RECOVERED_EDITORIAL_FRAGMENTS_QUEUE_v0.1.md
  - palma-method/governance/TASK_CODEX_0024_COMPLETION_REPORT.md
---

# TASK_CODEX_0024 — Recover uncommitted Palma work

## Authorization

Founder Serhii Nabok authorized the recovery after reviewing the read-only audit of
the shared worktree on 2026-08-16. The recovery must remain separate from the v0.3
manuscript commit.

## Objective

Preserve valuable uncommitted Palma work in Git without treating recovered drafts as
approved canon. Archive the functioning Palma Test prototype and four market reports
at their existing repository-relative paths, and record manuscript fragments that
may deserve later editorial reuse.

## Allowed changes

- Copy the source files of `palma-test/` while excluding dependencies, local runtime
  state, credentials, caches, and deployment artifacts.
- Preserve the four July 2026 market reports byte-for-byte.
- Add a recovery audit, editorial fragment queue, task record, and completion report.
- Run local static checks and the Palma Test unit tests when dependencies are already
  available.

## Forbidden changes

- Do not alter the recovered source content during preservation.
- Do not call Palma Test Canon 0.1 current or compatible with DECISION_0006.
- Do not edit the manuscript, accepted decisions, source cards, Google Docs, Notion,
  private transcripts, generated indexes, dashboards, or the original dirty worktree.
- Do not copy `node_modules`, `.wrangler`, `.dev.vars`, credentials, email data,
  bridge caches, contracts, CRM files, or unrelated outputs.
- Do not merge the six Palma Test lenses into the book's five Relationship Capital
  dimensions without a later founder decision.

## Acceptance criteria

1. Recovered source files are byte-identical to the uncommitted originals.
2. No secret value or ignored dependency directory is included.
3. The audit distinguishes recovered work, superseded drafts, derivative caches, and
   unrelated files.
4. The editorial queue identifies candidate fragments without inserting them into
   v0.3.
5. The exact diff contains only declared paths and is committed on the task branch.
