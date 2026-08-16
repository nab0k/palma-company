---
id: REVIEW_CODEX_0023
type: review
status: draft
owner: codex
reviewer: chief_editor
created: 2026-08-16
privacy_level: internal
subject_refs:
  - TASK_CODEX_0024
  - TASK_CODEX_0022
---

# Uncommitted work recovery audit v0.1

## Audit boundary

Read-only inventory of the shared worktree at
`/Users/serhiinabok/Documents/Adshot Europe`, followed by preservation of the
explicitly authorized Palma materials on a separate branch. No source file in the
dirty worktree was edited, moved, deleted, or staged.

The shared worktree contained one modified tracked file and 251 untracked files.
They do not represent 251 independent pieces of work: most are derivative Google
Docs read caches.

## Recovered work

### Palma Test prototype

Twenty-eight source files were recovered at their existing repository-relative
paths under `palma-test/`. The package contains a Cloudflare Worker prototype,
frontend, schema and delivery logic, unit tests, a six-lens qualitative diagnostic,
an evidence map, and a staged validation plan.

No credential value was present in the recovered source. `.dev.vars.example`
contains empty placeholders only. `node_modules`, local `.dev.vars`, Wrangler state,
caches, and deployment artifacts were excluded.

This is preserved work, not current Method canon. `Palma Canon 0.1` uses six lenses:
reciprocity, belonging, agency, rhythm, dissent, and mutual value. The approved book
architecture uses five Relationship Capital dimensions under DECISION_0003 and the
four Method stages under DECISION_0006. A later founder decision is required before
the product model is reconciled, renamed, or presented as current.

Reference checksums:

- `palma-test/package-lock.json`: `95f83bf2f93cc8d01bb97568092c696b066062bfbba832c756b8d93f68b6f748`
- `palma-test/knowledge/palma-canon.md`: `e0861abff9a8b1ec1ffe42cce82d8b140fef3aa56bd3fdb90b305d704ad18c48`
- `palma-test/knowledge/validation-plan.md`: `c032f90b62e1f5b882c131ebb6517df5417c2d641df8be536db85eb620727dd5`

### Market and positioning research

Four July 2026 reports were recovered byte-for-byte:

- `palma-community-market-analysis-2026-07.md` — checksum `ffdae1f26e1d3f2d61d2175dc5023cf9029d7743b910794127af1b294d29d29e`
- `palma-market-and-positioning-brief-2026-07.md` — checksum `9a62b93aa0b4dc9d16d0287bad6d785be25b2ecce435bf547316f3b53faa19bf`
- `palma-competitive-landscape-strategic-communications-2026.md` — checksum `73e562e7fd3da3cc76723e2e21d10851b63157f19ab5f30b227015c23786feee`
- `palma-strategic-communications-market-trends-2024-2026.md` — checksum `c1aaf353e766d4d4ecd45b0c892dbd6cd0f4d781ab664a4ee716ae85c34bbef5`

They are useful inputs for positioning and product strategy. Their preservation does
not make their market claims source-card verified or publication-ready.

## Material inspected but not recovered

### Google Docs bridge caches

The worktree contained 182 derivative files under `bridge/`,
`.codex-trusted-read/`, and `.codex-google-docs/`. They are complete read snapshots,
outlines, manifests, and receipts from 10–14 August 2026, not independent manuscript
edits. The latest text snapshot stops at Chapter 16 and predates the canonical
15 August manuscript snapshot.

Of 490 substantive prose lines in the latest bridge text, 448 occur verbatim in
manuscript v0.2. Most of the remaining 42 were expanded, tightened, merged, or
privacy-adjusted in later builds. Four potentially reusable passages were separated
into `RECOVERED_EDITORIAL_FRAGMENTS_QUEUE_v0.1.md`; none was inserted into v0.3.

The bridge directories were not committed because they duplicate external document
state, are large, and are not canonical under the GitHub-to-Notion/Docs rule.

### Other uncommitted material

CRM documents, contracts, K66 decks, Sempre Fixe material, LinkedIn outputs, general
site assets, and presentation files were outside TASK_CODEX_0024. They remain
untouched. Visual Palma assets, a hero-film experiment, and an HTML prototype may be
valuable, but require a separate product/brand preservation decision because this
task did not audit provenance or publication rights.

The only modified tracked file in the shared worktree was root `README.md`, adding
links to the uncommitted CRM workflow and audit. It is unrelated to the book and was
not recovered here.

## Worktree audit

- Shared worktree: dirty, intentionally untouched.
- `codex/palma-method-editorial-v03`: v0.3 committed separately as `14c8c12`.
- `codex/palma-method-manuscript-sync`: clean.
- `codex/archive-interview-sources-0020`: clean.
- Older `/private/tmp` registrations marked prunable point to worktrees that no
  longer exist; no recoverable working files were present at those paths.

## Required decisions

1. Reconcile or retire Palma Test Canon 0.1 against DECISION_0003 and DECISION_0006.
2. Decide whether the market reports become an internal positioning packet with
   source verification or remain preserved working research.
3. Decide whether the four recovered manuscript fragments belong in the practical
   appendix, end-of-chapter prompts, or the archive.
4. Run a separate provenance audit before committing the remaining brand assets and
   hero-film prototype.
