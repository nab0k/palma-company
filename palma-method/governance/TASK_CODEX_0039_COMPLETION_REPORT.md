---
id: REPORT_TASK_CODEX_0039
type: completion_report
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-08-24
privacy_level: internal
task_id: TASK_CODEX_0039
subject_refs:
  - TASK_CODEX_0039
  - MANUSCRIPT_BUILD_2026_08_24_v0.11
base_branch: codex/manuscript-v010-scholar-integration
base_commit_sha: e178e1b7ed2739b93f7f96196f7baf6cfb13c42a
working_branch: codex/manuscript-v011-authorial-rebuild
---

# TASK_CODEX_0039 completion report

## Outcome

Created the append-only Russian working manuscript v0.11 and rebuilt the
editorial method around the founder's participant-observer voice. The v0.10
file remains unchanged. All 15 chapters, conclusion, and appendices are present.

The pass reconciles all 104 Notion discussion threads and 105 founder comments.
Each local discussion ID now has a final status and a v0.11 anchor in
`V011_FOUNDER_COMMENT_RECONCILIATION_MAP_v0.1.md`. Notion discussions were not
resolved; founder acceptance is still required.

## Manuscript changes

- Protected `TAK.Shtab` as a proper name and recorded the English rule:
  `TAK.Shtab (Ukrainian: “Так. Це штаб”)` on first use, then `TAK.Shtab`; never
  `HQ` or `Headquarters` as the organization name.
- Introduced TCF before the abbreviation is used as a case and added the
  physical entrance, family-business context, and visible life of the gym.
- Added the manifesto frame: Palma Method is an authorial synthesis and a set
  of testable propositions, not a universal law or validated social scale.
- Rebuilt Chapters 13 and 14 around one reconstructable decision sequence.
- Reworked Chapter 11 so TAK.Shtab is shared organizational experience and
  pre-Method evidence material, not a heroic proof owned by one founder.
- Rebuilt scholar entrances throughout the affected chapters around question,
  person, material, finding, use, and boundary.
- Reduced strict `не X, а Y` constructions from 22 in v0.10 to 9 in v0.11;
  the broader family including `не только`/`не столько` fell from 70 to 47.
- Removed unsupported instructional authority, synthetic launch experience,
  cross-chapter navigation, decorative caveats, and several unrelated examples.
- Added a limited Kahneman–Tversky layer to Diagnosis and a contemporary
  continuation of weak ties and network interventions.

The manuscript is 35,473 words, compared with 35,703 in v0.10. The near-equal
length masks a substantial replacement pass: 150 inserted and 148 deleted
lines in the manuscript comparison.

## New evidence artifacts

- SC-154 — Tversky & Kahneman (1974), heuristics and biases.
- SC-155 — Tversky & Kahneman (1981), framing.
- SC-156 — Kim & Fernandez (2023), fifty years of weak-tie research.
- SC-157 — Fu et al. (2024), longitudinal network intervention.

The 2026 adaptive network-intervention article was included in the research
agenda with corrected DOI `10.1016/j.socnet.2026.02.002`; it was not promoted
into a manuscript claim or separate source card in this task.

## Validation

- Confirmed all 104 local discussion IDs appear in the final closeout matrix.
- Confirmed 15 chapter headings in v0.11.
- `validate_research_package.rb`: pass, 152 parsed cards, 152 unique IDs,
  zero errors, 32 warnings.
- `validate_cards.py`: structural pass; this legacy checker does not discover
  the fenced-YAML source-card directory and reports zero checked cards.
- `validate_metadata.rb`: repository-wide failure on five pre-existing baseline
  issues (duplicate TASK_CLAUDE_0030 metadata, TASK_CODEX_0036 completion-report
  metadata, and an old manuscript snapshot parse error). No TASK_CODEX_0039
  metadata error was reported.
- Repository-index and dashboard checks remain out of date against the inherited
  branch state; generated files were not changed by this editorial task.

## Changed paths

- `palma-method/governance/TASK_CODEX_0039_REBUILD_MANUSCRIPT_V011_AUTHORIAL_VOICE.md`
- `palma-method/governance/TASK_CODEX_0039_COMPLETION_REPORT.md`
- `palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.11.md`
- `palma-method/research/reports/V011_FOUNDER_COMMENT_RECONCILIATION_MAP_v0.1.md`
- `palma-method/research/reports/PALMA_AUTHORIAL_VOICE_AND_CLARITY_FRAME_v0.1.md`
- `palma-method/research/reports/V011_READER_LOSS_AND_NEGATION_AUDIT_v0.1.md`
- `palma-method/research/reports/CONTEMPORARY_RESEARCH_AND_KAHNEMAN_ASSESSMENT_v0.1.md`
- `palma-method/research/source-cards/tversky-kahneman-1974-heuristics-biases.md`
- `palma-method/research/source-cards/tversky-kahneman-1981-framing.md`
- `palma-method/research/source-cards/kim-fernandez-2023-what-makes-weak-ties-strong.md`
- `palma-method/research/source-cards/chinese-adolescent-network-intervention-2024.md`

## Editorial decisions still required

1. Founder read-through and acceptance of v0.11, beginning with Chapters 13–14
   and the opening/TCF introduction.
2. Whether the English edition keeps all dense scholar blocks in Chapters 9–11
   at current length or moves selected details into notes after translation.
3. A later English line edit must enforce the protected TAK.Shtab name and
   preserve the participant-observer voice; this task did not translate the book.

## Protected files

No earlier manuscript version, approved decision, raw interview, Notion page,
or generated repository index was intentionally edited. Validator side-effect
files were restored before delivery.
