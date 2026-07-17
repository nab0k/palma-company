---
id: TASK_CODEX_0010
type: task
status: in_progress
owner: codex
reviewer: chief_editor
created: 2026-07-17
updated: 2026-07-17
privacy_level: internal
project: palma-company
priority: high
scope:
  - repository-governance
  - shared-file-workflow
  - task-and-handoff-templates
  - documentation
decision_refs:
  - DECISION_0004
personal_story_use: prohibited
---

# TASK_CODEX_0010 — Build shared file system for Palma agents

## Agent

Codex.

## Objective

Implement the smallest working repository process in which GitHub is canonical,
Claude and Codex share the same local repository, ChatGPT reads committed files
through GitHub, and Notion remains a downstream interface.

## Git coordinates

- Base branch for delivery: `main`.
- Base commit used to create the working branch:
  `e554d828a5e3e562970b4b193b20a5ca0d6fca6c`.
- Working branch: `codex/shared-file-system-v1`.

## Input paths

- `AGENTS.md`;
- `README.md`;
- `.gitignore`;
- `palma-method/DECISIONS.md`;
- `palma-method/governance/DECISION_0002_PALMA_KNOWLEDGE_OS_V1.md`;
- `palma-method/governance/GITHUB_NOTION_SYNC_CONTRACT.md`;
- existing governance tasks, reports, and repository validators.

## Output paths

- `AGENTS.md`;
- `README.md`;
- `.gitignore`;
- `palma-method/DECISIONS.md`;
- `palma-method/governance/DECISION_0004_GITHUB_CANONICAL_NOTION_INTERFACE.md`;
- `palma-method/governance/tasks/TASK_TEMPLATE.md`;
- `palma-method/governance/handoffs/HANDOFF_TEMPLATE.md`;
- this TASK and its completion report;
- deterministic generated indexes affected by the new governance records.

## Allowed changes

- additive governance rules and documentation;
- task and handoff templates;
- narrow `.gitignore` rules for local secrets, caches, and temporary files;
- deterministic regeneration required by new governance records.

## Forbidden changes

- manuscript or research-content edits;
- moving, renaming, deleting, or marking existing artifacts obsolete;
- committing contracts, private questionnaire data, credentials, local caches,
  or unrelated working-tree files;
- bidirectional Notion synchronization;
- direct changes to `main`;
- rewriting approved decisions.

## Acceptance criteria

- repository roles and canonical-state rules are explicit;
- agents must search the repository before asking for an existing file;
- every future TASK records Git coordinates and exact paths;
- TASK and HANDOFF templates exist;
- README explains the daily workflow in plain language;
- `.gitignore` protects local secrets and reproducible caches without excluding
  manuscript, research, governance, or required assets;
- all applicable validators pass;
- the branch is pushed and a pull request targets `main`;
- GitHub round-trip checks are reported truthfully.

## Completion report

To be delivered as
`palma-method/governance/TASK_CODEX_0010_COMPLETION_REPORT.md`.

## Final commit SHA

Pending delivery.
