# DECISION_0002_PALMA_KNOWLEDGE_OS_V1.md

# Project
The Palma Method

# Decision
Approve the implementation scope for Palma Knowledge OS v1.

# Approved Decisions

## 1. Location

Create `Palma Knowledge OS` as a child page inside the existing Notion hub:

`Palma.company — Brand, Method & Marketing`

Do not alter or replace existing pages.

Link the new system to the existing Brand Core, Palma Method, Palma Test, website, and decision-history pages where useful.

## 2. Import Model

Do not use a fully link-only import.

Use a mixed model.

### Chapters

Import all 21 chapters plus Introduction and Conclusion as operational Notion pages.

Each chapter page must include:

- chapter metadata;
- current chapter brief;
- central question;
- working claim;
- current draft text;
- evidence links;
- open questions;
- editorial notes;
- GitHub path.

The current operational draft lives in Notion.

Accepted chapter snapshots remain versioned in GitHub.

### Research

Import metadata, summaries, verification status, chapter relations, and GitHub links.

Do not duplicate complete research-card contents unless needed for usability.

GitHub remains canonical for full research cards.

### Artifacts

Import artifact metadata, status, reviewer, related chapters, and canonical GitHub path.

### Tasks

Import active tasks and create new operational tasks in Notion.

Authorized task Markdown files may be mirrored in GitHub.

## 3. Minimum v1 Databases

Approve:

- Project Ledger
- Chapters
- Research
- Tasks
- Dashboard

## 4. Chapters Schema

Required fields:

- Chapter
- Unit ID
- Number
- Part
- Status
- Draft Stage
- Central Question
- Working Claim
- Word Count
- Target Word Count
- Evidence Status
- Research Coverage
- Editorial Owner
- Review Status
- GitHub URL
- Source Branch / PR
- Last Updated
- Last Exported
- Publication Blocker

Allowed statuses:

- skeleton
- researching
- drafting
- needs_evidence
- review
- revision
- accepted
- locked
- published

## 5. Research Schema

Required fields:

- Artifact
- Artifact ID
- Source ID
- Type
- Status
- Author / Creator
- Year
- Research Track
- Verification Status
- Related Chapters
- Reviewer
- GitHub URL
- Source Branch / PR
- Last Updated

## 6. Tasks Schema

Required fields:

- Task
- Task ID
- Status
- Priority
- Agent
- Depends On
- Authorized By
- Related Chapter
- Related Artifact
- Input
- Expected Output
- Reviewer
- Review Required
- GitHub URL
- Result URL
- Blocker

Allowed statuses:

- backlog
- authorized
- in_progress
- blocked
- delivered
- review
- changes_requested
- accepted
- complete

## 7. Project Ledger

The Project Ledger is the operational source of truth for current state.

It does not replace:

- `STATUS.md`
- `DECISIONS.md`
- `EVENT_LOG.md`

Those remain long-term canonical records in GitHub.

Ledger must show:

- version;
- sprint;
- phase;
- current goal;
- critical blocker;
- next gate;
- active tasks;
- agent status;
- latest decisions;
- latest deliveries;
- open questions;
- GitHub status;
- publication readiness.

## 8. Draft PR Data

Records from PR #1 may be imported immediately with:

- status: `review`;
- source branch;
- PR URL.

After merge, update the existing records to point to `main`.

Do not duplicate records after merge.

## 9. Continuity Rules

- Do not move or rename existing GitHub files.
- Do not mark existing artifacts obsolete.
- Do not replace the existing Notion hub.
- Extend the current system.
- Preserve all existing accepted work.
- Do not copy confidential material into the public repository.

# Authorization

Codex is authorized to implement Palma Knowledge OS v1 according to this decision and the previously supplied architecture documents.

# Required Outcome

Return:

1. Notion workspace URL;
2. databases created;
3. records imported;
4. chapter pages created;
5. draft texts imported;
6. views created;
7. GitHub links attached;
8. limitations;
9. repository-side changes;
10. PR URL;
11. ready for use: yes/no.
