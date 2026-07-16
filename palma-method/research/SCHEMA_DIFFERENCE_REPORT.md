# Claude Source-Card Schema Difference Report

Report ID: `SCHEMA-CLAUDE-001`  
Date: 2026-07-16  
Status: completed

## Compared formats

### Existing Codex template

- Extension: `.yaml`.
- ID pattern: `SRC-YYYY-NNN`.
- Plain YAML document.
- Existing validator scans only `research/source-cards/*.yaml`.
- `research_track` and `book_chapters` are modeled as lists.

### Incoming Claude cards

- Extension: `.md`.
- ID pattern: `SC-001` through `SC-017`.
- Each file contains one complete YAML mapping inside a fenced `yaml` block, not YAML front matter.
- `research_track` is a single controlled string.
- `book_chapters` is a list.
- Additional fields: `related_concepts` and `related_cards`.
- Verification statuses use descriptive values such as `verified_via_primary_source_pdf`.

## Compatibility decision

The incoming files and IDs are preserved unchanged. No research summary, quotation, evidence statement, conclusion, or verification label was rewritten.

A dedicated validator, `scripts/validate_research_package.rb`, was added to support the real incoming Markdown/fenced-YAML convention. The original YAML-card validator remains available for the initial repository template.

This is the smallest reversible compatibility change: it avoids a 17-file content migration and preserves Claude's cross-references.

## Path discrepancy

Claude's README and migration report refer to `missing-theories-and-conflicting-definitions.md` under `research/open-questions/`, while the delivered archive stores it under `research/syntheses/`. The canonical imported path follows the archive and TASK_CODEX_0003 mapping:

`palma-method/research/syntheses/missing-theories-and-conflicting-definitions.md`

The historical migration report is preserved as delivered. This report documents the final canonical mapping.

## Verification-issue ID discrepancy

Claude's delivered `research/verification/claims-ledger.md` assigns:

- `VI-002` to the scale-free-network limitation;
- `VI-004` to the 50/76/40 percent trust statistic.

The later approved project review and `TASK_CODEX_0003` assign those two controls in the opposite order:

- `VI-002` to the 50/76/40 percent trust statistic;
- `VI-004` to the scale-free-network limitation.

The delivered Claude ledger is preserved unchanged as historical research content. The canonical operational controls in `research/verification/VERIFICATION_ISSUES.md`, the root claims ledger, and project status follow `TASK_CODEX_0003`. No verification issue has been marked resolved.
