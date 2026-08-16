---
id: TASK_CLAUDE_0022
type: task
status: delivered
owner: claude
reviewer: chief_editor
created: 2026-08-15
updated: 2026-08-16
privacy_level: internal
project: palma-method-book
priority: high
scope:
  - evidence-audit-of-chatgpt-classic-theory-dossier
  - source-card-updates-for-bourdieu-coleman-portes-collins-wenger
  - new-source-cards-for-genuinely-missing-primary-sources
  - theory-expansion-placement-map
  - theory-expansion-building-blocks
base_branch: codex/prose-source-and-crossref-rules
base_commit_sha: ec2dc2dfe792505b7958bed50f1cf52ccf4048f0
working_branch: codex/prose-source-and-crossref-rules
personal_story_use: prohibited
input_paths:
  - /Users/serhiinabok/Downloads/palma_scientific_research_social_capital_repeated_encounters.md
  - palma-method/research/source-cards/bourdieu-1986-forms-of-capital.md
  - palma-method/research/source-cards/coleman-1988-social-capital-human-capital.md
  - palma-method/research/source-cards/portes-1998-downside-of-social-capital.md
  - palma-method/research/source-cards/collins-2004-interaction-ritual-chains.md
  - palma-method/research/source-cards/wenger-1991-1998-communities-of-practice.md
  - manuscript/part-1/*.md
  - manuscript/part-2/*.md
  - manuscript/part-3/16-connect-communication-and-community.md
  - manuscript/part-4/21-handover.md
output_paths:
  - palma-method/research/reports/CLASSIC_THEORY_DOSSIERS_EVIDENCE_AUDIT_v0.1.md
  - palma-method/research/reports/THEORY_EXPANSION_PLACEMENT_MAP_v0.1.md
  - palma-method/research/reports/THEORY_EXPANSION_BUILDING_BLOCKS_v0.1.md
  - addenda to bourdieu-1986-forms-of-capital.md, coleman-1988-social-capital-human-capital.md,
    portes-1998-downside-of-social-capital.md, collins-2004-interaction-ritual-chains.md,
    wenger-1991-1998-communities-of-practice.md
  - "new source cards - feld-1981-focused-organization-social-ties.md,
    baker-2019-emotional-relational-organizational-energy.md,
    broschak-manager-mobility-market-ties-2004-2020.md,
    bermiss-greenbaum-2016-loyal-to-whom.md,
    nahapiet-ghoshal-1998-organizational-advantage.md,
    adler-kwon-2002-2014-social-capital-synthesis.md,
    kale-singh-perlmutter-2000-relational-capital-alliances.md,
    nour-2023-relationship-capital-trademark.md"
completion_report: palma-method/research/reports/TASK_CLAUDE_0022_COMPLETION_REPORT.md
---

# TASK_CLAUDE_0022 — Theory dossier ingestion and expansion placement

## Authorization

Requested by Serhii Nabok, 2026-08-15/16, gated on receiving dossier material from
ChatGPT Classic covering (1) social capital, relational capital, and Relationship
Capital, and (2) Feld, Collins, and Lave/Wenger. Serhii supplied one combined file
(`palma_scientific_research_social_capital_repeated_encounters.md`) whose two parts
cover both required topics, accepted as satisfying the two-topic requirement. Task
registered as TASK_CLAUDE_0022, following TASK_CLAUDE_0021 (delivered at commit
`ec2dc2d`, confirmed as HEAD on `codex/prose-source-and-crossref-rules` before this
task's work began; working tree was clean at that point).

## Objective

Ingest the ChatGPT Classic research dossier without repeating broad research from
scratch, evidence-audit its substantive claims, update or create source cards as
warranted, and produce a chapter-by-chapter map (plus supporting factual building
blocks) for where the strongest, best-evidenced theoretical material could sharpen
the existing manuscript - without writing manuscript prose, without editing the
manuscript, and without padding for word count.

## Required work

- Stream 1: Evidence-quality audit of the dossier's claims, classifying each as
  established / partial / secondary-only / interpretation / unsupported, using the
  dossier's own citations; extra research limited to closing specific verification
  gaps, not re-deriving the dossier's findings from scratch.
- Stream 2: Update existing source cards (Bourdieu, Coleman, Portes, Collins, Wenger)
  where the dossier deepens or corrects them, preserving lineage via addenda rather
  than silent overwrites; create new cards only for genuinely missing, book-necessary
  primary sources (Feld, Baker, Broschak, Bermiss & Greenbaum, Nahapiet & Ghoshal,
  Adler & Kwon, Kale/Singh/Perlmutter, Nour/trademark), checked against the existing
  card set to avoid duplication.
- Stream 3: `THEORY_EXPANSION_PLACEMENT_MAP_v0.1.md` mapping proposed theory
  expansions to specific chapters, each entry naming the chapter, the question
  already posed in the existing text, the scholar/work, why it belongs there, the
  verified mechanism, study design/theoretical status, key limitation, permissible
  Palma conclusion, forbidden conclusion, practical reader consequence, any existing
  fragment that could be shortened, and a recommended added-word count - targeting
  6,000-9,000 new theoretical words unless the evidence does not support that much
  without padding, in which case the shortfall is to be justified explicitly rather
  than papered over. Each of the 11 named concepts (interaction/communication;
  social/relational capital; social foci; interaction rituals; community of practice;
  trust; reciprocity; tie strength; network structure; dark side of social capital;
  institutionalization) assigned exactly one primary home chapter.
- Stream 4: `THEORY_EXPANSION_BUILDING_BLOCKS_v0.1.md` for the 8-12 strongest
  expansions as pure factual building blocks (ten fields per item: concept, home
  chapter, anchor point in existing text, core academic finding, citation, mechanism,
  study design and confidence, permissible claim, forbidden claim, raw facts for
  drafting) - no author-voice imitation, no finished prose.

## Acceptance criteria

- Every claim in the evidence audit is traced to the dossier's own citation or to
  this project's independent verification, with confidence level stated.
- No source card is silently overwritten; every update carries a dated addendum
  identifying it as a TASK_CLAUDE_0022 addition.
- No new source card duplicates an existing one; every genuinely new card closes a
  real gap, checked by name against the existing source-card set before creation.
- The placement map and building blocks are grounded in a direct read of the actual
  current manuscript text for every chapter named, not inferred from chapter titles
  or prior task summaries - any discrepancy found between a source card's claims and
  the actual manuscript text is corrected on the card, not silently carried forward.
- The distinctions required by the task brief are respected throughout: Bourdieu vs.
  Coleman vs. Portes vs. Nahapiet & Ghoshal vs. Adler & Kwon; scientific "relational
  capital" vs. authorial "Relationship Capital" vs. commercial "Relationship
  Capital(R)" (Nour); dyad/group/network/organization units of analysis; Feld as foci
  theory without causal overreach; Collins and the limits of emotional-energy
  transfer (per Baker 2019); Lave/Wenger's community-of-practice test as non-universal;
  TCF as a developing case, not proof; Vipassana as observation, not experiment;
  organization as user of relationships, not literal owner.
- `ruby scripts/validate_research_package.rb` passes with 0 errors before delivery.
- No Palma tool is called validated. No new authorial terms are created. The
  four-stage/Advise-as-cross-cutting-principle architecture from TASK_CLAUDE_0021 is
  not altered.

## Allowed changes

Only the declared output paths above: three new reports in
`palma-method/research/reports/`, addenda to the five named existing source cards,
and up to eight new source cards in `palma-method/research/source-cards/`, plus the
regenerated validator output (`palma-method/research/validation/claude-package-
validation.json` and `.md`) and this governance file plus its completion report.

## Forbidden changes

Do not edit the manuscript, the manuscript snapshot, the Google Doc, or Notion. Do
not write chapter prose. Do not add volume for volume's sake. Do not create new
authorial terms. Do not call any Palma tool validated. Do not alter the
TASK_CLAUDE_0021 architecture. Do not translate the book. Do not update
`generated/repository-index.*`, `BOOK_DASHBOARD.md`, or any other dashboard/index. Do
not merge branches. Do not publish private interview material or personal data. Do
not claim TAK.Shtab underwent a formal institutionalization test.
