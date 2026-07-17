# Palma repository operating rules

## Purpose

This repository supports the Palma company and the Palma Method book. Preserve
the chain from evidence to decisions to chapter text. Extend accepted work; do
not silently replace it.

## Authority and roles

- Serhii Nabok: Founder, vision, interviews, personal-story approval, final decisions.
- ChatGPT: Chief Editor and Research Director; coordinates work, protects the
  architecture, assigns tasks, and accepts results.
- Claude: research and writing within an authorized task.
- Codex: engineering, repository governance, validation, indexing, and automation
  within an authorized task.

A TASK authorizes work. A REVIEW evaluates work but does not authorize a new
scope. A DECISION changes project state. When instructions conflict, stop and
ask the Chief Editor or Founder; do not invent policy.

## Canonical source and synchronization

GitHub is canonical. Markdown in this repository is the primary working format.
Notion is a downstream operational mirror: GitHub → Notion only. Never treat a
Notion edit as canonical or implement bidirectional synchronization.

## Repository map

- `palma-method/governance/`: tasks, decisions, reviews, protocols, schemas, reports.
- `palma-method/manuscript/`: protected book text and chapter versions.
- `palma-method/research/`: source cards, verification, syntheses, gaps, packets.
- `palma-method/scripts/`: validators and approved automation.
- `palma-method/production/`: publication outputs.
- Other root areas support company operations and are outside the book task
  unless explicitly named.

Read the current task, Project Ledger, relevant decisions, and local README or
AGENTS.md before editing an area. More local AGENTS.md files may add constraints;
the closest applicable file wins without overriding Founder or approved-decision
authority.

## Editing gates

- Manuscript files require an explicit manuscript-editing task and editorial approval.
- Approved decisions are immutable in ordinary tasks. Add a new decision or
  approved addendum; never rewrite history.
- Existing IDs, accepted artifacts, paths, and versions remain traceable.
- Do not move, rename, mark obsolete, or delete existing artifacts without approval.
- Do not change repository architecture, dependencies, external systems, or
  workflows silently. Record the gap and request approval first.
- Stage only files in the active task. Never include unrelated working-tree changes.

## Privacy and evidence

Personal stories from conversations are unavailable for manuscript or agent use
unless the author explicitly approves them. Use published evidence, abstract
non-identifying examples, or an editorial placeholder. Never infer approval.

Every factual manuscript claim must remain traceable to a source card or an open
verification issue. Use canonical verification IDs from
`palma-method/research/verification/VERIFICATION_ISSUES.md`. Historical IDs may
appear only with an explicit historical-to-canonical mapping. Do not weaken
qualifications during style edits.

## Metadata and lifecycle

Follow `palma-method/governance/FRONTMATTER_SPEC.md` for new structured
documents. Legacy formats remain valid during the approved transition.

Typical task flow:
`proposed → authorized[_phase_n] → in_progress → delivered → review → accepted`.
`blocked`, `changes_requested`, and `cancelled` are explicit states, not
assumptions. Do not begin a later phase without authorization.

Chapter versions are append-only. A higher accepted semantic version is current;
never overwrite an accepted version or hand-edit a generated “latest” pointer.

## Validation and delivery

Run the validators relevant to the touched files. Existing commands are:

```sh
ruby palma-method/scripts/validate_metadata.rb
ruby palma-method/scripts/generate_repository_index.rb --check
ruby palma-method/scripts/generate_book_dashboard.rb --check
ruby palma-method/scripts/validate_research_package.rb
python3 palma-method/scripts/validate_cards.py
```

Phase 1 architecture documents may describe future commands but must not claim
they exist. A PR or handoff must list the base branch, exact files changed,
validation performed, editorial decisions needed, unresolved risks, and
confirmation that protected files were untouched. Generated files must identify
their generator and must never become handwritten sources of truth.

If an action is outside the active task, stop.
