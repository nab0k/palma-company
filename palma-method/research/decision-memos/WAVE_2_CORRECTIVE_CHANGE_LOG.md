---
id: CHANGE_MAP_WAVE_2_CORRECTIVE
type: change_map
status: review
owner: claude
created: 2026-07-17
privacy_level: internal
subject_refs: [CHAPTER_03, CHAPTER_04, CHAPTER_05, CHAPTER_09]
change_scope: "Corrective lineage from Wave 2 v0.1 packets to accepted v0.2 working versions"
---

# Wave 2 Corrective Change Log

```yaml
document_id: WAVE_2_CORRECTIVE_CHANGE_LOG
document_type: change_log
prepared_by: Claude (Research Synthesizer role)
date: "2026-07-17"
task_reference: TASK_CLAUDE_0009.md
scope: "Itemizes every correction made to Chapters 3, 4, 5, and 9 during the Wave 2 Corrective Pass. Each v0.2 file supersedes its v0.1 predecessor; both versions are preserved."
```

This log covers only the corrections made in this pass. It does not repeat the full content, structure, or existing caveats already logged in `WAVE_2_EVIDENCE_GAP_LOG.md` or `WAVE_2_CROSS_CHAPTER_MAP.md`, which remain valid and unchanged except where explicitly noted below. No chapter's scope, canonical book structure, or the approved five-dimension Relationship Capital architecture (DECISION_0003) was altered by this pass.

---

## Chapter 3 — Reputation Is Not Access (v0.1 → v0.2)

1. **Access redefined narrowly.** Access is now defined strictly as practical reachability - an established channel through which people, information, or opportunity can travel - independent of whether the party at the other end is willing to act. The prior definition ("whether a specific party will actually respond or act when called upon") blended reachability and willingness into one construct; this blend has been removed.
2. **Willingness reassigned.** Willingness to help, cooperate, or coordinate is now explicitly attributed to trust, reciprocity, relationship strength, and mobilizability - not to access. This reassignment is stated in the Argument Map, the Access paragraph, and the six-outcomes audit (below).
3. **Trust split into two forms.** The categorical claim that "trust exists only inside an identifiable relationship" has been replaced with an explicit distinction between generalized/institutional trust (a broad belief about a category or system, can be held by strangers, evidenced by SC-014) and relational trust (a belief one specific party holds about another, per the ABI model, SC-008). The chapter now states explicitly that the Palma Method is primarily concerned with relational trust.
4. **Six-outcomes section audited.** All six outcomes (better information, introductions, cooperation, favorable terms, early opportunities, coordinated action) were reviewed so that none is attributed to access alone. "Early opportunities" and "coordinated action" required the most substantive rewriting, since both previously leaned on the old, broader access definition; both now explicitly separate the channel-existence question (access) from the willingness question (trust/reciprocity/relationship strength/mobilizability).
5. **Reusable diagnostic and diagram updated** to reflect the access/willingness split (the five-question diagnostic now has a dedicated reachability question and a dedicated willingness question).
6. **New open inconsistency flagged, not resolved:** Chapter 6 v0.3's existing text still describes Access in the older, broader "responsiveness" sense. This chapter's narrower definition now conflicts with Chapter 6's wording. This is flagged in Chapter 3 v0.2's Editorial Caveats and Research Gap Analysis as a new item requiring a future Chapter 6 revision or dedicated integration ticket - it was not corrected here because Chapter 6 is outside this task's scope.

## Chapter 4 — The Cost of Weak Relationships (v0.1 → v0.2)

1. **Weak-ties-vs-weak-relationships distinction added.** A new paragraph near the opening explicitly distinguishes Granovetter's "weak ties" (a structural/tie-strength term, can carry real Relationship Capital) from "weak relationships" as this chapter uses the term (any tie strength, low Relationship Capital). The chapter's central claim and argument map were updated to reflect that the chapter is about the latter throughout, and to note the "delayed information" section is the one cost genuinely tied to tie strength rather than to Relationship Capital as such.
2. **Retention-economics extension relabeled.** The extension of Reichheld & Sasser's 1990 customer-retention findings to employees, partners, and community members is now explicitly labeled "a Palma hypothesis pending separate support" throughout (central claim, argument map, evidence map, research gap analysis, and both relevant draft paragraphs), replacing the previous softer phrasing ("a reasoned analogy... not a tested transfer").
3. **Crisis-response claim softened.** The claim that trust reserves produce faster crisis response (BCG/Volkswagen/CrowdStrike, SC-022) is now explicitly framed as an illustrative association from two secondary-sourced cases, not a measured causal finding - the phrase "which is slower and more expensive by construction" was removed and replaced with hedged language ("a reasonable hypothesis, not an independently quantified cost"). A new fourth "strongest objection" was added to the Argument Map naming this evidentiary limitation directly.
4. **VI-004 caveat confirmed preserved.** The network-concentration paragraph's existing VI-004 caveat (established for large networks, unmeasured at small organizational scale) was checked and left intact; a clarifying sentence was added to confirm the caveat applies to the illustrative application, not the underlying network-science finding itself.

## Chapter 5 — Events Are Not Infrastructure (v0.1 → v0.2)

1. **Absolute framing replaced.** The central claim's original wording ("the event itself is never sufficient on its own, no matter how well produced") has been replaced with the narrower "an event is not infrastructure by itself, whatever its quality or production value" - matching the phrasing already used later in the chapter's closing sections, and avoiding an absolute claim about all possible cases.
2. **Six-rung ladder explicitly labeled as a Palma framework.** A sentence was added directly in the chapter draft (not only in the Argument Map, where this was already noted) stating that the event → interaction → ritual → recurring format → relationship system → community infrastructure ladder is "a Palma framework informed by Collins's and Wenger's academic work," not a direct citation from either. The Reusable Assets diagram concept was updated with the same caption.
3. **Research Gap Analysis split into two explicit entries.** "Missing primary sources" was restructured into two clearly separated, individually labeled gaps: (a) event/community design evidence (no dedicated corporate-events research source), and (b) organizational memory (no dedicated organizational-memory literature grounding "institutional memory"). These were previously blended into adjacent but not clearly distinguished notes.
4. **No word-count padding applied.** Per explicit instruction, this chapter's word count (1,798 words in the draft section, down slightly from 1,730 - the small increase came entirely from the corrections above, not from padding) was not artificially expanded to meet the 1,800-2,800 target used for the other three chapters. The yaml header notes this target is waived for this corrective pass.

## Chapter 9 — Networks, Groups, and Structural Advantage (v0.1 → v0.2)

1. **Relational access vs. structural access reconciled.** A new passage explicitly names both terms: "relational access" (Chapter 3's dyadic, channel-to-one-party sense) and "structural access" (this chapter's portfolio-level, bridge-into-a-cluster sense), and explains that Chapter 3's corrective narrowing of access has brought the two senses conceptually closer together (both now concern channel/path existence), with the remaining difference being level of analysis rather than concept. This reconciliation is flagged as dependent on Chapter 3 v0.2's wording and should be re-checked if Chapter 3 changes again.
2. **Resilience and concentration risk reframed.** The original framing ("two names for the same underlying structural property viewed from different angles") has been replaced with a "robustness" (network-wide, outward-facing) versus "dependency" (specific-node, inward-facing) two-lens framing. The draft now explicitly notes the two lenses usually move together in hub-dominated structures but are not strictly interchangeable, and that an organization could in principle improve one without the other. This same distinction was carried through the brokerage/vulnerability discussion later in the chapter (previously "resilience-versus-concentration trade-off," now "robustness-versus-dependency trade-off").
3. **VI-004 caveat confirmed and reinforced**, not weakened, across every use of Barabási-derived hub/resilience findings in this chapter - an explicit sentence was added confirming this pass did not reduce the caveat's force.
4. **New unresolved-ownership flag added.** A new Editorial Caveats entry states explicitly that "concentration risk" ownership between Chapter 9 (structural mechanism) and Chapter 10 (risk consequences/ethics) has not yet been assigned a primary owner or cross-reference structure, distinct from the already-logged Chapter 4/Chapter 9 duplication (which was resolved as intentional layering, not a conflict).

---

## Cross-cutting notes

- **No chapter's scope was expanded.** All four corrections were applied as targeted edits to existing sections (central claim, argument map, specific draft paragraphs, evidence map rows, editorial caveats) rather than as new sections or new arguments.
- **No new source cards were required** for this corrective pass; all corrections use the existing evidence base (SC-004, SC-005, SC-007, SC-008, SC-009, SC-012, SC-014, SC-015, SC-018, SC-021, SC-022, SC-025, SC-026, SC-027, SC-028) and existing canonical documents (DECISION_0003).
- **No personal examples, Collective Fitness material, invented cases, or authorial styling** were introduced in any of the four v0.2 chapters. All four editorial placeholders from v0.1 remain in place, unchanged, in v0.2.
- **New cross-chapter dependency created by this pass:** Chapter 3 v0.2's narrowed Access definition is now referenced directly by Chapter 9 v0.2's relational/structural access reconciliation. If Chapter 3's definition changes again in a future pass, Chapter 9's reconciliation paragraph must be re-verified.
- **Two new open items surfaced by this pass, neither resolved here (both flagged for future tickets):** (1) Chapter 6 v0.3's Access wording is now inconsistent with Chapter 3 v0.2's narrower definition. (2) Chapter 9/Chapter 10 ownership of "concentration risk" as a topic remains unassigned.

## File manifest

| Chapter | Previous version (preserved) | New version (this pass) |
|---|---|---|
| Chapter 3 | `CHAPTER_03_v0.1.md` | `CHAPTER_03_v0.2.md` |
| Chapter 4 | `CHAPTER_04_v0.1.md` | `CHAPTER_04_v0.2.md` |
| Chapter 5 | `CHAPTER_05_v0.1.md` | `CHAPTER_05_v0.2.md` |
| Chapter 9 | `CHAPTER_09_v0.1.md` | `CHAPTER_09_v0.2.md` |

All v0.1 files remain unmodified at their original paths.
