# Manuscript Build Pipeline Proposal

Status: proposed; implementation deferred until manuscript tooling is selected.

## Inputs

- Ordered Markdown chapter files.
- Verified bibliography.
- Final diagrams and images with rights confirmed.
- Book metadata and front matter.

## Proposed stages

1. Validate card metadata and manuscript file order.
2. Run editorial checks for placeholders, broken internal references, missing evidence IDs, and inconsistent terminology.
3. Assemble one canonical manuscript from the ordered files.
4. Produce EPUB with embedded fonts only where licensing permits.
5. Produce print PDF using the approved trim size, margins, typography, and image resolution.
6. Render and inspect representative and edge-case pages.
7. Validate EPUB navigation, metadata, links, and device behavior.
8. Archive build inputs, tool versions, and checksums for reproducibility.

## Tool decision still required

Pandoc is the likely assembly tool if available, with EPUB validation and a separate print-layout route. The exact production stack should be selected after trim size, illustration count, footnote behavior, and citation style are known.

## Non-negotiable QA

- No unresolved placeholders.
- No orphan headings or broken chapter starts.
- Table of contents matches actual order.
- Images remain legible in grayscale print.
- Quotes and notes remain attached to the correct sources.
- No private research material enters exports.
