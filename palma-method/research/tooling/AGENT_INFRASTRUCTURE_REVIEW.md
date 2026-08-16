---
id: REVIEW_AGENTINFRA_0001
type: review
status: draft
owner: codex
reviewer: chief_editor
created: 2026-07-17
privacy_level: internal
task_id: TASK_CODEX_0007
phase: 1
subject_refs:
  - TASK_CODEX_0007
---

# External agent-infrastructure review

## Sources inspected

All sources were public and read-only on 2026-07-17:

- [agentsmd/agents.md](https://github.com/agentsmd/agents.md), MIT, observed
  commit `d1ac7f063d20e70015ed6732664049ae4ba9d74e`.
- [agent0ai/agent-zero](https://github.com/agent0ai/agent-zero), MIT, observed
  commit `fddcc3deea3dea47e2d7a0bc21f10d7c7d4abd3d`.
- [agent0ai/dox](https://github.com/agent0ai/dox), MIT, verified as a current
  public repository, observed commit
  `5cb5ba55bd1c0f7c1b31fe655fe36e2febb760d2`.

## Findings

`agentsmd/agents.md` provides a predictable, tool-neutral location for
repository instructions. Its value is convention and discoverability, not a
ready-made governance policy. Palma should use the filename while writing its
own constitution.

`agent0ai/dox` demonstrates hierarchical AGENTS.md files, nearest-scope
instructions, and an explicit read-before-edit chain. Those ideas are useful
when a repository develops durable local boundaries. Its requirement to update
documentation after every meaningful change can create documentation churn and
should not be adopted wholesale.

`agent0ai/agent-zero` is a broad autonomous-agent platform with browser,
desktop, plugins, memory, and collaborative document surfaces. Its useful
conceptual lessons are visible action, bounded workspaces, recovery/audit, and
human intervention. Adopting the framework would expand dependencies,
permissions, and operational risk far beyond TASK_CODEX_0007.

## Palma disposition

- Adopt now: one concise root `AGENTS.md`, explicit authority, protected paths,
  read-before-edit rules, selective staging, and completion evidence.
- Consider later: local `AGENTS.md` files only for stable domains with genuinely
  different rules.
- Do not adopt: autonomous framework, plugin ecosystem, memory layer, automatic
  recursive documentation generation, or mandatory doc updates for trivial edits.

No external text was copied into Palma's `AGENTS.md`; only the structural
ideas were evaluated.
