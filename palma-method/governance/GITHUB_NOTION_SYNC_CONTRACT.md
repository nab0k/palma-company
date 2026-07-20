---
id: CONTRACT_GITHUB_NOTION_SYNC_0001
type: contract
status: draft_for_editorial_review
owner: codex
reviewer: chief_editor
created: 2026-07-17
privacy_level: internal
task_id: TASK_CODEX_0007
phase: 1
---

# GitHub → Notion synchronization contract

## Authority

GitHub is canonical. Notion is a downstream operational mirror. Synchronization
is one-way:

```text
GitHub → Notion
```

No Notion write occurred in Phase 1.

## Identity and mapping

Every mirrored Notion record stores the stable GitHub document ID,
repository-relative canonical path, source commit SHA, content hash, and last
successful sync run ID. The document ID is the update key; title is never an
identity key.

Minimum mapping:

| GitHub | Notion |
|---|---|
| `id` | Canonical ID |
| `title` or first heading | Name |
| `type` | Artifact type |
| `status` | Status |
| `owner` | Owner |
| `reviewer` | Reviewer |
| `created`, `updated` | Dates |
| relationship ID arrays | Relations resolved by Canonical ID |
| canonical path + commit | Source link / source revision |
| privacy level | Visibility guard |

The exact Notion database/property IDs remain configuration, never embedded in
documents.

## Update-in-place

1. Read and validate GitHub metadata.
2. Resolve exactly one Notion target by Canonical ID.
3. Compare the stored source hash.
4. Create a patch containing only mapped fields.
5. Apply only after dry-run review or explicit confirmation.
6. Record run ID, previous hash, new hash, target page ID, and result.

Zero matches permits a proposed create. Multiple matches are a blocking
conflict. Synchronization must not delete pages or overwrite unmapped human
notes.

## Conflict behavior

If a mapped Notion field changed after the last sync, fail closed and produce a
conflict report. The Chief Editor chooses whether GitHub overwrites the mapped
field or the GitHub source is amended through normal review. Notion changes
never flow automatically back to GitHub.

## Dry-run, logs, and recovery

Dry-run is the default and performs no writes. It lists creates, patches,
unchanged records, skipped private records, and conflicts with before/after
values for mapped fields.

Logs must be deterministic except for a separate run envelope. Redact
confidential content and credentials. Recovery uses the recorded previous
mapped values or replays a known Git commit; rollback is also dry-run first.

## Privacy

`confidential` records are never mirrored by default. `restricted` records
require an approved target and access check. Personal-story content is excluded
unless the author approval record explicitly permits that Notion destination.

## Editorial decisions required

Approve the databases in scope, property mapping, create policy, privacy
eligibility, confirmation mechanism, conflict owner, and retention period for
sync logs.
