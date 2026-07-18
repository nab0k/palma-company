# Verification Restrictions

These normalized restrictions preserve the four unresolved issues delivered by Claude. They do not replace the detailed analysis in `claims-ledger.md`.

## Historical-to-canonical identifier mapping

Canonical IDs in this file govern all current tasks, source cards, indexes, and manuscript controls. Historical TASK_CLAUDE_0004 artifacts retain their original task-specific IDs for provenance and must be read through this mapping:

| Historical TASK_CLAUDE_0004 ID | Historical subject | Canonical ID |
|---|---|---|
| VI-001 | Ostrom page-level verification | VI-001 |
| VI-002 | Scale-free network limitation | VI-004 |
| VI-003 | Google Project Aristotle | VI-003 |
| VI-004 | 50/76/40 trust statistic | VI-002 |

Historical IDs do not override the canonical assignments below.

```yaml
id: VI-001
title: Ostrom eight design principles require page-level primary verification
affected_source_card: SC-006
status: needs_primary_source
manuscript_use: prohibited_until_verified
reviewer: ChatGPT
```

```yaml
id: VI-002
title: 50/76/40 percent high-trust-organization statistic requires original source and context
affected_source_card: SC-018
status: resolved_with_conditions
manuscript_use: qualified_only
qualification: self-reported comparative survey results; describe as correlational, not causal
reviewer: ChatGPT
```

```yaml
id: VI-003
title: Google Project Aristotle claims depend on secondary reporting
affected_source_card: SC-020
status: resolved_with_scope_limit
manuscript_use: qualified_only
qualification: applies to team effectiveness and psychological safety at Google; not stakeholder Relationship Capital generally
reviewer: ChatGPT
```

```yaml
id: VI-004
title: Scale-free network claims require direct measurement before application to small client networks
affected_source_card: SC-012
status: contextual_limit
manuscript_use: qualified_only
reviewer: ChatGPT
```

VI-001 and VI-004 remain open restrictions. VI-002 and VI-003 are resolved only under the qualifications stated above; none of the four supports unrestricted generalization.

## Wave 3 canonical verification issues

The following IDs normalize the new issues delivered by TASK_CLAUDE_0011.
Their full provenance remains in
`claims-ledger-TASK-CLAUDE-0011.md` and
`WAVE_3_EVIDENCE_GAP_LOG.md`.

```yaml
id: VI-005
title: Macnamara listening-resource figures require primary-text checking
affected_source_card: SC-029
status: needs_primary_source
manuscript_use: qualified_only
qualification: attribute as a directional finding from Macnamara's research program; do not present the 80/95 percent figures as universal
reviewer: ChatGPT
```

```yaml
id: VI-006
title: Arnstein participation ladder has a public-to-private transfer limit
affected_source_card: SC-030
status: contextual_limit
manuscript_use: qualified_only
qualification: identify its origin in public-sector citizen participation when applying it to organizational stakeholders
reviewer: ChatGPT
```

```yaml
id: VI-007
title: Advice trust and communication networks are an applied mapping method not an exhaustive taxonomy
affected_source_card: SC-031
status: contextual_limit
manuscript_use: qualified_only
qualification: present the three-network model as a practitioner method rather than a closed taxonomy
reviewer: ChatGPT
```

```yaml
id: VI-008
title: Cynefin domains are a bounded sensemaking framework not empirically fixed categories
affected_source_card: SC-032
status: contextual_limit
manuscript_use: qualified_only
qualification: do not present domain boundaries or prescriptions as a universal predictive law
reviewer: ChatGPT
```

```yaml
id: VI-009
title: Rogers adopter percentages do not predict a specific organization
affected_source_card: SC-033
status: contextual_limit
manuscript_use: qualified_only
qualification: use adopter categories qualitatively and do not apply normalized percentages as a forecast
reviewer: ChatGPT
```

```yaml
id: VI-010
title: Barcelona Principles are a professional consensus standard not a causal model
affected_source_card: SC-034
status: contextual_limit
manuscript_use: qualified_only
qualification: identify AMEC 3.0 as an industry-consensus measurement framework
reviewer: ChatGPT
```

```yaml
id: VI-011
title: Theory of change is methodological guidance not a validated predictive model
affected_source_card: SC-035
status: contextual_limit
manuscript_use: qualified_only
qualification: present Weiss as evaluation methodology and keep contribution-analysis research as an open gap
reviewer: ChatGPT
```

VI-005 requires primary-text work before precise numerical use. VI-006 through
VI-011 permit only the qualifications stated above. None authorizes an
unqualified causal or universal claim.

## Sociology of microcommunities mappings

The TASK_CLAUDE_0013 gap log uses task-local `SMC-GAP-*` identifiers. Current
work must use the canonical mappings below when the affected claims enter a
chapter packet or manuscript draft.

| Historical TASK_CLAUDE_0013 ID | Historical subject | Canonical ID |
|---|---|---|
| SMC-GAP-003 | Peter Baehr community-of-fate publication not pinned down | VI-012 |
| SMC-GAP-004 | Collective capacity used as an interpretive umbrella term | VI-013 |

```yaml
id: VI-012
title: Peter Baehr community-of-fate attribution lacks a verified primary publication
affected_source_card: SC-042
status: needs_primary_source
manuscript_use: prohibited_until_verified
reviewer: ChatGPT
```

```yaml
id: VI-013
title: Collective capacity is an interpretive umbrella rather than a source-defined construct
affected_source_card: SC-040
status: contextual_limit
manuscript_use: qualified_only
qualification: identify collective capacity as editorial synthesis and use collective efficacy only within the scope supported by SC-040
reviewer: ChatGPT
```

The Vakhstayn claim in SMC-GAP-001 remains excluded and therefore receives no
claim ID. “Dissensus” in SMC-GAP-002 remains deferred. SMC-GAP-005 and
SMC-GAP-006 were environment-visibility gaps and are resolved by the canonical
TASK_CLAUDE_0012 and TASK_CODEX_0012 records in this repository.

## TASK_CLAUDE_0012 canonical mappings

Claude's isolated session assigned task-local identifiers VI-012 through VI-021
before it could see that canonical VI-012 and VI-013 were already registered.
The chapter-packet integration uses the collision-free mappings below. The
historical identifiers remain valid only when qualified by
`TASK_CLAUDE_0012:`.

| Historical task-local ID | Canonical ID |
|---|---|
| TASK_CLAUDE_0012:VI-012 | VI-014 |
| TASK_CLAUDE_0012:VI-013 | VI-015 |
| TASK_CLAUDE_0012:VI-014 | VI-016 |
| TASK_CLAUDE_0012:VI-015 | VI-017 |
| TASK_CLAUDE_0012:VI-016 | VI-018 |
| TASK_CLAUDE_0012:VI-017 | VI-019 |
| TASK_CLAUDE_0012:VI-018 | VI-020 |
| TASK_CLAUDE_0012:VI-019 | VI-021 |
| TASK_CLAUDE_0012:VI-020 | VI-022 |
| TASK_CLAUDE_0012:VI-021 | VI-023 |


```yaml
id: VI-014
claim: "Goffman's focused/unfocused interaction distinction applies directly to mediated organizational listening channels (e.g., Slack, intranets)."
source_card: SC-037
severity: low
status: open
issue: >
  ADDED (TASK_CLAUDE_0012, Wave 3 v0.2 corrective revision): Goffman's original framework assumed
  physical or near-physical copresence; its application to mediated channels in Chapter 11 v0.2 is
  Palma's own extension, not a transfer Goffman tested.
risk_if_uncorrected: "Low risk; flag as an explicit extension wherever used in manuscript prose."
required_action: "State the mediated-channel extension explicitly."
related_artifact: SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1
related_chapters:
  - "Chapter 11 (Listen)"
```

```yaml
id: VI-015
claim: "Fine's idioculture findings (youth sports teams) transfer to adult organizational microgroups."
source_card: SC-038
severity: low-medium
status: open
issue: >
  ADDED (TASK_CLAUDE_0012, Wave 3 v0.2 corrective revision): Fine's 1979 fieldwork sampled Little
  League baseball teams; Chapter 11 v0.2 and Chapter 13 v0.2 both extend the idioculture-formation
  finding to adult organizational microgroups, an untested transfer.
risk_if_uncorrected: "Low-medium risk; do not present microgroup-knowledge-formation timelines as empirically established for organizational settings."
required_action: "State the extension explicitly wherever invoked."
related_artifact: SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1
related_chapters:
  - "Chapter 11 (Listen)"
  - "Chapter 13 (Design)"
```

```yaml
id: VI-016
claim: "Lamont & Molnár's symbolic/social boundary framework applies to small informal organizational microgroups specifically."
source_card: SC-041
severity: low
status: open
issue: >
  ADDED (TASK_CLAUDE_0012, Wave 3 v0.2 corrective revision): the original review synthesizes
  boundary scholarship largely at race/class/nation scale; Chapters 12, 13, and 16 v0.2 apply the
  symbolic/social distinction to small organizational microgroups, an extension the review itself
  does not test directly.
risk_if_uncorrected: "Low risk; state the transfer explicitly."
required_action: "State the extension explicitly wherever invoked."
related_artifact: SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1
related_chapters:
  - "Chapter 12 (Map)"
  - "Chapter 13 (Design)"
  - "Chapter 16 (Connect)"
```

```yaml
id: VI-017
claim: "Fine & van den Scott's wispy-communities concept, as used in Chapter 12's mapping caution."
source_card: SC-039
severity: low-medium
status: open
issue: >
  ADDED (TASK_CLAUDE_0012, Wave 3 v0.2 corrective revision): checked via abstract and secondary
  summary only, not full original text, when first used in Chapter 12 v0.2 as a mapping caution.
  See VI-022 for this same source's elevated-priority use in Chapter 16.
risk_if_uncorrected: "Low-medium risk in Chapter 12's narrower use; obtain and read the full original article before manuscript-final use."
required_action: "Read full original Fine & van den Scott (2011) article before manuscript finalization."
related_artifact: SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1
related_chapters:
  - "Chapter 12 (Map)"
```

```yaml
id: VI-018
claim: "Fine's idioculture research, as used in Chapter 13's conditions/outcomes distinction."
source_card: SC-038
severity: low-medium
status: open
issue: >
  ADDED (TASK_CLAUDE_0012, Wave 3 v0.2 corrective revision): same underlying transfer risk as
  VI-015, logged separately because Chapter 13 v0.2 uses this source for a distinct, structurally
  central claim (organizations can design conditions, not idioculture itself).
risk_if_uncorrected: "Low-medium risk; state the extension explicitly."
required_action: "State the extension explicitly wherever invoked in Chapter 13."
related_artifact: SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1
related_chapters:
  - "Chapter 13 (Design)"
```

```yaml
id: VI-019
claim: "Lamont & Molnár's boundary framework, as used in Chapter 13's governance discussion."
source_card: SC-041
severity: low
status: open
issue: >
  ADDED (TASK_CLAUDE_0012, Wave 3 v0.2 corrective revision): same underlying transfer risk as
  VI-016, logged separately for Chapter 13's specific governance-design application.
risk_if_uncorrected: "Low risk; state the extension explicitly."
required_action: "State the extension explicitly wherever invoked in Chapter 13."
related_artifact: SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1
related_chapters:
  - "Chapter 13 (Design)"
```

```yaml
id: VI-020
claim: "Sampson, Raudenbush & Earls's collective efficacy research, as used in Chapter 14's conditions/outcomes illustration."
source_card: SC-040
severity: low-medium
status: open
issue: >
  ADDED (TASK_CLAUDE_0012, Wave 3 v0.2 corrective revision): the original 1997 study was conducted
  in urban-neighborhood, violent-crime contexts; Chapter 14 v0.2 extends the construct to
  organizational intervention design, an extension the original study does not test.
risk_if_uncorrected: "Low-medium risk; state the extension explicitly."
required_action: "State the extension explicitly wherever collective efficacy is invoked."
related_artifact: SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1
related_chapters:
  - "Chapter 14 (Activate)"
```

```yaml
id: VI-021
claim: "Sampson, Raudenbush & Earls's multilevel-measurement caution, as used in Chapter 15's group-level measurement discussion."
source_card: SC-040
severity: low-medium
status: open
issue: >
  ADDED (TASK_CLAUDE_0012, Wave 3 v0.2 corrective revision): same underlying transfer risk as
  VI-020, logged separately because Chapter 15 v0.2 uses this source for a distinct methodological
  claim (group-level properties cannot be validly inferred from aggregated individual data alone).
risk_if_uncorrected: "Low-medium risk; state the extension explicitly."
required_action: "State the extension explicitly wherever invoked in Chapter 15."
related_artifact: SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1
related_chapters:
  - "Chapter 15 (Measure)"
```

```yaml
id: VI-022
claim: "Fine & van den Scott's wispy-communities concept, as used in Chapter 16's central community-as-destination correction."
source_card: SC-039
severity: medium
status: open
issue: >
  ADDED (TASK_CLAUDE_0012, Wave 3 v0.2 corrective revision): same source and underlying
  verification gap as VI-017, but logged at elevated severity here because Chapter 16 v0.2 makes
  this source central and load-bearing for its Problem E correction (community is not a universal
  destination), not a supporting caution as in Chapter 12.
risk_if_uncorrected: "Medium risk given how load-bearing this claim now is; obtain and read the full original article with priority before Chapter 16's correction is finalized for manuscript prose."
required_action: "Read full original Fine & van den Scott (2011) article; prioritize over VI-017 given Chapter 16's dependence on it."
related_artifact: SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1
related_chapters:
  - "Chapter 16 (Connect)"
```
```yaml
id: VI-023
claim: "Sampson, Raudenbush & Earls's collective efficacy research, as used in Chapter 16's alternative-to-community outcome vocabulary."
source_card: SC-040
severity: low-medium
status: open
issue: >
  ADDED (TASK_CLAUDE_0012, Wave 3 v0.2 corrective revision): same underlying transfer risk as
  VI-020/VI-021, logged separately for Chapter 16's use of the construct as a legitimate
  alternative outcome to full community formation.
risk_if_uncorrected: "Low-medium risk; state the extension explicitly."
required_action: "State the extension explicitly wherever invoked in Chapter 16."
related_artifact: SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1
related_chapters:
  - "Chapter 16 (Connect)"
```
