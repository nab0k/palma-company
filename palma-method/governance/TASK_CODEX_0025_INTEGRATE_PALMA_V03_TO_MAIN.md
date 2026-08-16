---
id: TASK_CODEX_0025
type: task
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-08-16
privacy_level: internal
project: palma-method-book
priority: high
scope:
  - canonical-branch-integration
  - manuscript-v0.3-publication-to-main
depends_on:
  - TASK_CODEX_0018
  - TASK_CODEX_0019
  - TASK_CODEX_0020
  - TASK_CODEX_0021
  - TASK_CODEX_0022
  - TASK_CLAUDE_0027
base_branch: main
base_commit_sha: d42314f1c850993eb393c8764e6f588191419536
working_branch: codex/integrate-palma-v03-main
personal_story_use: approved
author_approval_ref: TASK_CODEX_0025
input_paths:
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.3.md
  - palma-method/governance/TASK_CODEX_0022_EDITORIAL_ASSEMBLY_V03.md
output_paths:
  - palma-method/governance/TASK_CODEX_0025_INTEGRATE_PALMA_V03_TO_MAIN.md
  - palma-method/governance/TASK_CODEX_0025_COMPLETION_REPORT.md
---

# TASK_CODEX_0025 — Integrate Palma manuscript v0.3 into main

## Authorization

Founder Serhii Nabok authorized one understandable consolidation PR from the complete
v0.3 lineage to `main` on 2026-08-16. The prior stacked PRs remain as the detailed
review trail; this task does not rewrite or squash their Git history.

## Objective

Make the complete, traceable Palma book work through manuscript v0.3 reviewable in a
single PR against the canonical `main` branch, instead of requiring the founder to
operate a seven-PR technical stack.

## Allowed changes

- Branch from the exact v0.3 commit `14c8c12`.
- Add this integration task and its completion report.
- Push the branch and open a draft PR against `main`.
- Preserve all 90 predecessor commits and their file histories.

## Forbidden changes

- Do not edit manuscript v0.3, prior tasks, decisions, source cards, interviews,
  generated files, Google Docs, Notion, or the recovery branch.
- Do not include TASK_CODEX_0024 recovery material or PR #17.
- Do not merge the consolidation PR without a separate founder confirmation after
  the PR summary is reviewed.
- Do not delete or silently rewrite the stacked PR history.

## Acceptance criteria

1. The branch differs from v0.3 commit `14c8c12` only by the two governance files
   declared here.
2. The draft PR targets `main` and contains the full ancestry through v0.3.
3. PR #14 and PR #17 remain outside the consolidation.
4. The PR is mergeable without conflicts.
