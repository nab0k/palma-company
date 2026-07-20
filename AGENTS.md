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

Before asking the user to upload or resend a file, search the repository by
name and content. A file already present in this working copy or in committed
GitHub history must be referenced by repository, branch, commit SHA, and path;
it must not be passed manually between agents.

The local repository is the shared working copy for Claude and Codex. ChatGPT
reviews the committed GitHub state. Uncommitted local files are not visible to
ChatGPT and are never canonical.

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
- Do not work directly on `main`. Use a task branch and deliver changes through
  a pull request unless the Founder explicitly authorizes another route.
- Do not create convenience copies named `final`, `final2`, `new`, `latest`, or
  similar. Use stable IDs, declared versions, and append-only lineage.

## Start and finish protocol

Before starting a task:

1. Search the repository for every named input before requesting it again.
2. Read the active TASK, Project Ledger, relevant decisions, and local rules.
3. Record the base branch, base commit SHA, working branch, input paths, and
   output paths in the TASK.
4. Inspect `git status`, fetch remote state, and compare the working branch with
   its base. If the worktree is clean and the branch can advance without a
   merge, update with fast-forward-only behavior. Otherwise stop and preserve
   the existing work.

After finishing a task:

1. Validate only the authorized scope and review the exact diff.
2. Commit only task files and push the task branch.
3. Open a pull request and report repository, base branch, working branch,
   final commit SHA, and changed paths.
4. Other agents receive those coordinates instead of copied files.

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

Every TASK must state its stable task ID, assigned agent, objective, base branch,
base commit SHA, working branch, exact input and output paths, allowed and
forbidden changes, acceptance criteria, completion report, and final commit SHA.

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
