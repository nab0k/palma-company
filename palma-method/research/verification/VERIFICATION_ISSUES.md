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
