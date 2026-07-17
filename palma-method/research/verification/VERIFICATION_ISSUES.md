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
