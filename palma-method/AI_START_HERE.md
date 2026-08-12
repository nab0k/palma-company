# Palma Method — AI Start Here

This is the stable entrypoint for any AI or human joining the Palma Method book
project. Do not begin by searching old chats or asking Serhii to resend files.

## Read in this order

1. [`../AGENTS.md`](../AGENTS.md) — repository authority, privacy, editing gates,
   and delivery rules.
2. [`governance/DECISION_0004_GITHUB_CANONICAL_NOTION_INTERFACE.md`](governance/DECISION_0004_GITHUB_CANONICAL_NOTION_INTERFACE.md)
   — GitHub is canonical; Notion is a downstream interface and private-source
   locator where explicitly recorded.
3. [`BOOK_DASHBOARD.md`](BOOK_DASHBOARD.md) — generated chapter lifecycle and
   packet coverage.
4. [`manuscript/README.md`](manuscript/README.md) — provisional reading order.
5. [`research/reports/INTERVIEW_AND_AUTHOR_SOURCE_REGISTER_v0.2.md`](research/reports/INTERVIEW_AND_AUTHOR_SOURCE_REGISTER_v0.2.md)
   — complete navigation for registered interviews, author stories, private
   source locations, permissions, chapter candidates, and collection gaps.
6. [`research/verification/VERIFICATION_ISSUES.md`](research/verification/VERIFICATION_ISSUES.md)
   — canonical restrictions on factual manuscript claims.
7. The active TASK in [`governance/`](governance/) before changing anything.

## Which index is complete?

- [`generated/repository-index.md`](generated/repository-index.md) and
  [`generated/repository-index.json`](generated/repository-index.json) are the
  generated repository-wide inventories.
- [`research/SOURCE_INDEX.md`](research/SOURCE_INDEX.md) is a historical curated
  index. It is useful for the original theory spine but is not a complete list
  of current source cards.
- [`research/reports/INTERVIEW_AND_AUTHOR_SOURCE_REGISTER_v0.2.md`](research/reports/INTERVIEW_AND_AUTHOR_SOURCE_REGISTER_v0.2.md)
  is the authoritative navigation document for author stories and private
  interviews. It does not replace the source cards themselves.

## How to use a personal story or interview

1. Find the material in the v0.2 register.
2. Open the linked public-safe source card.
3. Check `verification_status`, `personal_story_use`, limitations, naming rules,
   and the required follow-up.
4. Use the private source locator only if the current agent has authorized
   access. Never infer missing private content from biography or adjacent cards.
5. Treat chapter mappings as editorial candidates unless an accepted chapter or
   decision confirms the placement.
6. A registered story is not automatically approved for manuscript use. Direct
   quotation and identifiable third-party details require the recorded approval.

If a referenced card is absent from the current working tree, search committed
Git history and open task branches before asking the author to resend it. Report
the repository, branch, commit SHA, and path when found.

## Current editorial surfaces

GitHub Markdown is the only canonical committed state. Google Docs and Notion
may contain live editorial work or private source context, but those changes do
not become canonical until they are intentionally reconciled into a committed
task branch. Never silently overwrite a newer Google Doc from an older GitHub
chapter, or treat a Notion edit as a bidirectional sync instruction.

## Privacy boundary

This repository is public. It stores public-safe derivatives, provenance,
consent gates, and editorial mechanisms. It does not store confidential audio,
raw private transcripts, contact details, sensitive family history, or private
financial information. The private reconstruction map is recorded in
TASK_CODEX_0020 and linked from the v0.2 register; access to that map does not
waive any manuscript-use restriction.

## Safe handoff format

Pass another agent:

- repository: `nab0k/palma-company`
- branch and commit SHA
- active TASK ID
- exact input and output paths
- the relevant source-card IDs
- unresolved permissions and verification IDs

Do not pass copied files when the committed artifact already exists.
