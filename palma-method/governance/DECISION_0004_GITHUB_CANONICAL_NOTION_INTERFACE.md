---
id: DECISION_0004
type: decision
status: approved
owner: serhii_nabok
authority: founder
created: 2026-07-17
effective_date: 2026-07-17
privacy_level: internal
related_to:
  - DECISION_0002
---

# DECISION_0004 — GitHub canonical; Notion interface only

## Decision

GitHub contains the single canonical committed state of the Palma project.
The local repository is the shared working copy. Notion is an interface, index,
or dashboard and is not a separate document-version store.

The permitted synchronization direction is:

```text
GitHub → Notion
```

Claude and Codex work from the same local repository. ChatGPT reads and reviews
the committed GitHub state. Agents pass repository coordinates — repository,
branch, commit SHA, and paths — instead of manually transferring files.

## Relationship to DECISION_0002

This is an approved addendum to `DECISION_0002`. It replaces only the earlier
statement that a current operational chapter draft may live in Notion. A draft
is canonical only after it is stored in the repository and committed to Git.
The remaining Knowledge OS scope and all historical records stay intact.

## Continuity and safety

- Existing files, IDs, versions, and decisions are not moved, renamed, deleted,
  or rewritten by this decision.
- Existing Notion pages may remain as views or mirrors linked to a source commit.
- A Notion edit never becomes canonical automatically and never syncs back into
  GitHub automatically.
- Confidential material remains excluded from the public repository and from
  downstream mirrors unless an approved privacy rule explicitly permits it.

## Authorization record

Approved by Founder Serhii Nabok in the Codex task conversation on 2026-07-17:
“GitHub is the single source of truth; Notion is only an interface.”
