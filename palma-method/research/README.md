# Palma Knowledge System — Research Layer (Claude)

Repository-ready research output for the Palma Method book sprint, migrated into the Palma Knowledge System structure per TASK-0018. See `MIGRATION_REPORT_TASK-0018.md` for the full migration record.

## Structure

- `research/source-cards/` — 17 Source Cards (Section 15 YAML template + `related_concepts`/`related_cards` cross-references). SC-001 through SC-017.
- `research/syntheses/literature-map.md` — Artifact ART-001: literature map for social capital, relationship capital, trust, reciprocity, networks, and communities of practice (Track A).
- `research/anti-palma/anti-palma-argument-map.md` — Artifact ART-002: evidence and arguments against the thesis (Track H), each tagged modifies-the-method or appears-directly-in-the-book.
- `research/syntheses/missing-theories-and-conflicting-definitions.md` — Artifact ART-003: theories missing from the handoff's priority list, and definitional conflicts latent in the sources that are on it.
- `research/open-questions/open-questions-log.md` — central ledger of every unresolved issue (OQ-001 through OQ-015), atomic, with status and owner.
- `research/verification/claims-ledger.md` — central ledger of every under-sourced or unverified claim (VI-001 through VI-004), atomic, with severity and required action.

## What's still open

- OQ-003 is the highest-priority item: whether "Relationship Capital" is academically grounded or a Palma coinage needs an explicit decision before Chapter 6 is drafted.
- VI-004 (the 50%/76%/40% high-trust-organization statistic) is flagged blocking — do not cite until its primary source is traced.
- Per the handoff's rule for Claude ("do not draft polished chapters until evidence cards exist"), no manuscript prose has been drafted in any pass.

No case cards (Section 16) or field notes (Section 17) have been produced — those depend on Serhii's disclosable experience and The Collective's live research, which are outside Claude's assigned research-synthesis scope per Section 26.

## Codex integration record

Imported from Claude's ZIP package under `TASK_CODEX_0003` without rewriting research content.

- Intake manifest: `INTAKE_MANIFEST_TASK-CODEX-0003.md`
- Schema comparison: `SCHEMA_DIFFERENCE_REPORT.md`
- Source index: `SOURCE_INDEX.md`
- Artifact index: `ARTIFACT_INDEX.md`
- Structural validation: `validation/claude-package-validation.md`
- Normalized restrictions: `verification/VERIFICATION_ISSUES.md`

All imported artifacts remain at status `review` and are assigned to ChatGPT for editorial review.
