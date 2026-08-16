# Decision Log

Major editorial, ethical, methodological, and production decisions are recorded here. Newest entries go first.

## 2026-07-17 — GitHub canonical; Notion interface only

```yaml
date: 2026-07-17
decision: GitHub contains the single canonical committed state; Notion is a downstream interface, index, or dashboard only.
reason: Claude, Codex, and ChatGPT need one traceable file chain without manual file transfers or parallel document versions.
alternatives:
  - Keep operational drafts as separate Notion versions.
impact: Replaces only the operational-draft clause in DECISION_0002; preserves the remaining Knowledge OS scope and all existing artifacts.
owner: Serhii Nabok
status: accepted
source: governance/DECISION_0004_GITHUB_CANONICAL_NOTION_INTERFACE.md
```

## 2026-07-16 — Relationship Capital architecture approved

```yaml
date: 2026-07-16
decision: Relationship Capital is the value accumulated in an organization's relationships that enables trust, cooperation, access, support, and coordinated action.
architecture:
  - relationship-building capabilities and conduct
  - relationships
  - accumulated relational value
  - mobilizability in a specific situation
  - actions and outcomes
core_dimensions: [trust, reciprocity, access, relationship_strength, network_structure]
unit_of_analysis: [dyadic, portfolio]
institutionalization: process
mobilizability: derived
owner: Serhii
status: accepted
source: governance/DECISION_0003_RELATIONSHIP_CAPITAL_ARCHITECTURE.md
```

## 2026-07-16 — Palma Knowledge OS v1 approved

```yaml
date: 2026-07-16
decision: Implement Palma Knowledge OS v1 as an operational Notion layer inside the existing Palma hub while keeping GitHub canonical.
reason: The book sprint needs visible operational state, current drafts, research coordination, and task tracking without migrating or redesigning accepted project infrastructure.
alternatives:
  - Keep the workflow entirely in GitHub.
  - Replace the existing Notion hub.
impact: Adds a Project Ledger, Chapters, Research, Tasks, and Dashboard layer; preserves all existing GitHub and Notion artifacts.
owner: Serhii Nabok
status: accepted
source: governance/DECISION_0002_PALMA_KNOWLEDGE_OS_V1.md
```

## 2026-07-16 — Repository location

```yaml
date: 2026-07-16
decision: Create the book workspace as palma-method inside the existing Adshot Europe workspace.
reason: Keeps the sprint accessible in the current workspace without creating a nested Git repository.
alternatives:
  - Create a separate top-level repository.
impact: The book has an isolated directory but currently shares the parent repository history.
owner: Serhii / Codex
status: accepted
```

## 2026-07-16 — Working title and subtitle

```yaml
date: 2026-07-16
decision: Use The Palma Method — How Organizations Turn Communication into Trust, Relationships, and Opportunity as the working title.
reason: This is the title defined in the sprint handoff.
alternatives:
  - Explicitly name Relationship Capital in the subtitle.
impact: Used in project metadata until editorial review.
owner: Serhii
status: provisional
```

## Entry template

```yaml
date:
decision:
reason:
alternatives:
impact:
owner:
status: proposed | accepted | superseded
```
