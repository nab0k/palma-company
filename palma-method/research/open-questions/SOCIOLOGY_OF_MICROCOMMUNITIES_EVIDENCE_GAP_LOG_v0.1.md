# Sociology of Microcommunities — Evidence Gap Log v0.1

```yaml
document_id: SOCIOLOGY_OF_MICROCOMMUNITIES_EVIDENCE_GAP_LOG_v0.1
document_type: evidence_gap_log
version: "0.1"
status: active
owner: Claude (Research Synthesizer role)
created_date: "2026-07-17"
last_updated: "2026-07-17"
scope: >
  Tracks every unresolved verification issue, excluded claim, and missing input identified while
  producing SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1.md (TASK_CLAUDE_0013). Complements, and
  does not duplicate, the existing WAVE_3_EVIDENCE_GAP_LOG.md (TASK_CLAUDE_0011 scope) and
  research/verification/claims-ledger.md (VI-001 through VI-011). Does not resolve or reopen any
  item from those documents.
```

Seven entries. Each entry is atomic. Status values: `open` (unresolved, needs future work),
`excluded` (deliberately not used in the brief per task instruction, logged for traceability),
`deferred` (not rejected outright, but not imported without stronger grounding).

---

```yaml
id: SMC-GAP-001
title: "Viktor Vakhstayn claim cannot be verified against a primary source"
status: excluded
priority: high
raised_by: Claude
date_raised: "2026-07-17"
context: >
  TASK_CLAUDE_0013's evidence requirements explicitly instructed: do not import claims
  attributed to Viktor Vakhstayn from a supplied summary without locating and checking a
  primary publication, and to exclude the claim and log the gap if primary verification is
  unavailable. No such "supplied summary" was present in the materials available to this
  task, and no primary Vakhstayn publication supporting any specific claim relevant to this
  brief's eight research questions could be located and verified during this research pass.
  Vakhstayn is a real scholar (known for Goffman/frame-theory translation and commentary),
  but the specific claim this task's evidence requirements refer to was never identified or
  verified.
related_artifact: SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1.md
related_chapters: []
related_source_cards: []
recommended_resolution: >
  If a specific Vakhstayn claim and its supplied summary become available in a future task,
  locate and verify the primary publication before any import; otherwise leave excluded
  permanently.
owner_for_decision: "Chief Editor / whoever supplies the original summary this instruction referred to"
```

```yaml
id: SMC-GAP-002
title: "'Dissensus' has weak grounding in community/small-groups sociology"
status: deferred
priority: medium
raised_by: Claude
date_raised: "2026-07-17"
context: >
  TASK_CLAUDE_0013 asked what temporary, fragile, conflictual, or dissensual social forms
  reveal about treating community as a stable destination (RQ5). Research into "dissensus"
  as a sociological term found it traces almost entirely to Jacques Rancière's political
  philosophy (disagreement as a condition of political visibility), not to small-groups or
  community sociology. Direct import into Part III's organizational-microgroup context is
  weakly grounded in the literature located during this pass.
related_artifact: SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1.md
related_chapters:
  - "Chapter 16 (Connect)"
related_source_cards: []
recommended_resolution: >
  Defer direct import of "dissensus" as a named concept. Serve the underlying need (conflict
  as diagnostic data, not a defect) using existing repository sources instead: Ostrom (SC-006)
  and Portes (SC-016), both already approved and already conflict-aware. Revisit only if a
  future research pass locates stronger community-sociology grounding for the term itself.
owner_for_decision: "Claude (future research pass) or Chief Editor"
```

```yaml
id: SMC-GAP-003
title: "Peter Baehr's modern 'community of fate' publication not conclusively pinned down"
status: open
priority: medium
raised_by: Claude
date_raised: "2026-07-17"
context: >
  The classical concept of community of fate (Schicksalsgemeinschaft), originating in Weber
  and Simmel, is well-established in secondary sociological reference literature. The modern
  extension attributed to Peter Baehr (reportedly discussed in relation to crisis sociology,
  e.g., SARS) could not be conclusively pinned to one specific, verified publication (title,
  year, journal or book, page range) during this research pass. SC-042 was written with this
  gap explicitly disclosed and hedged (medium-low confidence).
related_artifact: SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1.md
related_chapters:
  - "Chapter 16 (Connect)"
related_source_cards: [SC-042]
recommended_resolution: >
  A future research pass should locate and directly read Baehr's specific publication before
  SC-042 is used to support any manuscript-level claim beyond the general, well-established
  Weber/Simmel concept origin.
owner_for_decision: "Claude (future research pass)"
```

```yaml
id: SMC-GAP-004
title: "'Collective capacity' used as an umbrella term without a single primary source"
status: open
priority: low
raised_by: Claude
date_raised: "2026-07-17"
context: >
  This brief treats "collective capacity" as a broader umbrella term that "collective
  efficacy" (Sampson, Raudenbush & Earls, SC-040) is one specific, well-operationalized
  instance of. This framing is an interpretive synthesis produced for this brief, not a
  claim traced to a single primary sociological source defining "collective capacity"
  precisely. It is explicitly labeled as interpretive in the brief (Section 2, note; Section
  3, RQ4 decision).
related_artifact: SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1.md
related_chapters:
  - "Chapter 14 (Activate)"
  - "Chapter 15 (Measure)"
  - "Chapter 16 (Connect)"
related_source_cards: [SC-040]
recommended_resolution: >
  If "collective capacity" needs to bear more analytical weight in a future chapter revision,
  commission targeted research to find a primary source that defines it precisely, rather than
  continuing to rely on this brief's interpretive framing.
owner_for_decision: "Claude (future research pass) or Chief Editor"
```

```yaml
id: SMC-GAP-005
title: "TASK_CLAUDE_0012_RECOVERY_RECORD.md not found"
status: open
priority: medium
raised_by: Claude
date_raised: "2026-07-17"
context: >
  Listed as a required input in TASK_CLAUDE_0013. Not found anywhere in the sandbox outputs
  folder or the connected /Users/serhiinabok/Downloads/Log Palma Book folder, including after
  a recursive search. This brief was produced without it, since its content (presumed to be a
  record of why/how TASK_CLAUDE_0012 was paused) is a provenance artifact, not a substantive
  research input the eight research questions depend on.
related_artifact: SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1.md
related_chapters: []
related_source_cards: []
recommended_resolution: >
  Whoever owns TASK_CLAUDE_0012's resumption should confirm whether this file exists elsewhere
  or was never created, and create/supply it before TASK_CLAUDE_0012 resumes, per that task's
  own required-inputs list.
owner_for_decision: "Chief Editor / Serhii"
```

```yaml
id: SMC-GAP-006
title: "TASK_CODEX_0012 (or equivalent Codex repository-state package) not found"
status: open
priority: medium
raised_by: Claude
date_raised: "2026-07-17"
context: >
  Listed as a dependency in TASK_CLAUDE_0013's frontmatter (depends_on includes TASK_CODEX_0012)
  and referenced in the Authorization section ("Claude may execute this task after Codex
  supplies the canonical repository package"). No such file or package was found. This mirrors
  the same missing-Codex-workstream pattern that caused TASK_CLAUDE_0012 to be paused entirely
  by the user. This brief proceeded without it because its content is repository/governance
  state, not sociology research; the judgment call to proceed (rather than block a third time)
  is recorded here and in the TASK_CLAUDE_0013 completion report.
related_artifact: SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1.md
related_chapters: []
related_source_cards: []
recommended_resolution: >
  Confirm with Codex/repository owner whether TASK_CODEX_0012 (or its equivalent) exists,
  is in progress, or needs to be initiated, before TASK_CLAUDE_0012 resumes.
owner_for_decision: "Codex / Chief Editor / Serhii"
```

```yaml
id: SMC-GAP-007
title: "Soft tension between durable communities of practice and wispy/transient communities"
status: open
priority: low
raised_by: Claude
date_raised: "2026-07-17"
context: >
  Wenger's communities of practice (SC-007, existing, approved) describe durable, sustained
  engagement around shared practice. Fine & van den Scott's wispy communities (SC-039, new)
  describe legitimately transient, non-durable gatherings that should not be judged against
  the durable model. This is not a contradiction - both are real, well-evidenced social forms
  - but Part III (especially Chapter 16) currently has no explicit statement holding both
  models simultaneously without implicitly treating the durable community-of-practice model
  as the default target.
related_artifact: SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1.md
related_chapters:
  - "Chapter 16 (Connect)"
related_source_cards: [SC-007, SC-039]
recommended_resolution: >
  When TASK_CLAUDE_0012 resumes, Chapter 16 should explicitly state that both durable
  communities of practice and legitimately transient/wispy gatherings are valid outcomes,
  rather than implying every gathering should mature toward the Wenger model.
owner_for_decision: "Claude (during TASK_CLAUDE_0012, when resumed) + Chief Editor"
```
