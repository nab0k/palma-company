# The Palma Method

Working repository for the English-language book:

**The Palma Method: How Organizations Turn Communication into Trust, Relationships, and Opportunity**

Target formats: Amazon Kindle and paperback.

## Core proposition

> The true unit of communication is not a message. It is a response.

The manuscript explains how organizations can turn one-way communication into reciprocal relationships that create trust, access, contribution, and opportunity.

## Working principles

- Evidence before claims.
- Strategy before production.
- Systems before content.
- Launch before scaling.
- Handover before dependency.
- Observations, interpretations, hypotheses, and sourced facts must remain distinct.

## Repository map

- `HANDOFF.md` — project brief and canonical source reference.
- `STATUS.md` — current sprint state and next actions.
- `DECISIONS.md` — log of editorial and production decisions.
- `manuscript/` — chapter files in reading order.
- `research/` — sources, evidence cards, cases, methods, metrics, objections, and syntheses.
- `field-notes/` — concise experiences from Serhii's work.
- `collective-fitness/` — live action-research materials.
- `brand/` — positioning and reusable launch materials derived from the book.
- `production/` — EPUB, print, cover, KDP metadata, and launch preparation.
- `scripts/` — narrow utilities that directly accelerate the sprint.
- `archive/` — superseded material retained for traceability.

## File conventions

- Manuscript and notes: Markdown (`.md`).
- Structured evidence and cases: YAML (`.yaml`).
- Source-card IDs: `SRC-YYYY-NNN`.
- Case-card IDs: `CASE-YYYY-NNN`.
- Field-note IDs: `FIELD-NNN`.
- Experiment IDs: `EXP-YYYYMMDD-NN`.
- Use ISO dates: `YYYY-MM-DD`.
- Never place confidential raw interviews or personal data in public exports.

## Sprint workflow

1. Add a source or case card using a file in `research/templates/`.
2. Link it to one or more chapters in the card metadata.
3. Draft claims only from verified evidence, clearly labeled interpretation, hypothesis, observation, or field note.
4. Record structural decisions in `DECISIONS.md`.
5. Update `STATUS.md` at the end of each working session.
6. Run `python3 scripts/validate_cards.py` before manuscript integration.

## Definition of done

The first edition is complete when the manuscript is substantively edited, claims and citations are verified, permissions are cleared, EPUB and print PDF pass visual QA, and the KDP checklist is complete.
