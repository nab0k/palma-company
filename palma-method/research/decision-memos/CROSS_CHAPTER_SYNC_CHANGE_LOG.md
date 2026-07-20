---
id: CHANGE_MAP_CROSS_CHAPTER_SYNC_0010
type: change_map
status: review
owner: claude
created: 2026-07-17
privacy_level: internal
subject_refs: [CHAPTER_03, CHAPTER_06, CHAPTER_09, CHAPTER_10]
change_scope: "Access terminology and concentration-risk ownership synchronization"
---

# Cross-Chapter Sync Change Log

```yaml
document_id: CROSS_CHAPTER_SYNC_CHANGE_LOG
document_type: change_log
prepared_by: Claude (Research Synthesizer role)
date: "2026-07-17"
task_reference: TASK_CLAUDE_0010.md
scope: "Itemizes every correction made to Chapter 6, Chapter 9, and Chapter 10 during the Cross-Chapter Consistency Sync. Each new version supersedes its predecessor; all earlier versions are preserved."
```

This pass resolved two consistency issues surfaced during TASK_CLAUDE_0009: Chapter 6's Access definition had not been updated to match Chapter 3 v0.2's corrected, narrower definition, and Chapter 9 and Chapter 10 had an unresolved overlap around concentration risk. Neither chapter's scope, section structure, or the canonical five-dimension Relationship Capital architecture (DECISION_0003) was changed.

---

## Chapter 6 (v0.3 → v0.4)

1. **Access definition corrected.** The sentence defining Access in the "Accumulated relational value" paragraph - previously "Access is a behavioral fact, separate from both: whether a specific party will actually respond or act when called on, regardless of how warm the relationship feels in conversation" - is replaced with a definition matching Chapter 3 v0.2: Access is a structural fact - whether a practical channel to a specific party exists at all - independent of whether that party is willing to respond, cooperate, or act once reached. Willingness is now explicitly assigned to trust, reciprocity, relationship strength, and mobilizability, both in this paragraph and in a new sentence added to the Mobilizability paragraph.
2. **Full-chapter audit performed.** Every other paragraph was checked for language letting Access absorb another dimension's meaning. None was found - the single corrected sentence was the only instance. The Argument Map's dimension bullet was updated to state the same correction in summary form.
3. **Relational access / structural access cross-reference added.** The dyadic/portfolio-levels paragraph (Section D) now names "relational access" and "structural access" explicitly, matching the terminology Chapter 9 uses for the same distinction, with a one-sentence flag that this cross-reference should be re-verified if either chapter's wording changes again.
4. **No new constructs, no scope expansion.** The canonical definition sentence from DECISION_0003 was not altered. The five-dimension list (trust, reciprocity, access, relationship strength, network structure) is unchanged. Relationship-building capability, institutionalization, and mobilizability remain separate, distinctly-defined layers, as before.

## Chapter 9 (v0.2 → v0.3)

1. **Concentration-risk ownership question resolved.** Chapter 9 v0.2 had flagged, in its own Editorial Caveats, that ownership of "concentration risk" between itself and Chapter 10 was unassigned. This is now resolved: Chapter 9 owns the structural mechanism (clustering, brokerage, hubs, robustness, dependency, and the VI-004 caveat); Chapter 10 owns the political and ethical consequences (capture, gatekeeping, exclusion, abuse of brokerage power, dependency on powerful insiders).
2. **Chapter Brief and Editorial Caveats updated** to record this resolution in place of the prior "unresolved ownership question" language.
3. **One sentence added to the Working Chapter Draft** (end of the brokerage/vulnerability paragraph) making the boundary explicit in the reader-facing text itself, not only in the packet metadata: this chapter treats hub/broker concentration strictly as a structural fact, and defers what an organization or a powerful insider might do with a concentrated position to Chapter 10.
4. **No other draft-section text was changed.** The rest of the chapter already stayed within the structural-mechanism lane now formally assigned to it - no relabeling of existing structural content as "ethics" content was required.

## Chapter 10 (v0.2 → v0.3)

1. **Structural-risk paragraph rewritten to reference, not reproduce, Chapter 9.** The paragraph previously re-derived the preferential-attachment/"rich get richer" mechanism from Barabási's research in some detail. It now opens by explicitly pointing to Chapter 9 as the chapter that develops that mechanism in full, states the VI-004 caveat by reference rather than by re-explanation, and pivots directly to this chapter's assigned territory.
2. **Capture and gatekeeping introduced as named mechanisms.** Two new named concepts - capture (a hub or broker's own interests shaping what the network is used for) and gatekeeping (a broker controlling who is introduced, informed, or included, unaccountably) - give concrete shape to the "abuse of brokerage power" and "dependency on powerful insiders" territory this task assigns to Chapter 10. Both are Palma's own applied naming of consequences that follow from Chapter 9's structural account, not new source-carded academic constructs, and are labeled as such in the chapter's own change log.
3. **Stale verification-ID corrected.** The Evidence Map's reference to "VI-002 (scale-free network claims)" - a leftover from before the project's VI-002/VI-004 numbering swap (Zak = VI-002, Barabási/scale-free = VI-004, corrected in the TASK_CLAUDE_0007-era chapters but never applied to this chapter) - is corrected to VI-004. This is a narrow, single-ID fix inside the paragraph already being rewritten for this sync, not a chapter-wide identifier sweep; the rest of the chapter was not audited for other stale IDs.
4. **No other paragraph was altered.** The Portes catalog, the Uzzi over-embeddedness discussion (already updated in v0.2), the ownership-principle paragraph (added in v0.2), the unpaid-labor paragraph, the Ostrom counterpoint, and the closing paragraph are all unchanged - each already sat within this chapter's assigned ethical/political territory and needed no further edits.

---

## Cross-chapter terminology audit (Chapters 3, 6, 9, 10)

| Term | Status after this pass |
|---|---|
| Access / relational access | Now defined identically in Chapter 3 v0.2 and Chapter 6 v0.4 (practical reachability/channel, not willingness). Chapter 9 v0.3 explicitly names this as "relational access" when contrasting it with its own portfolio-level sense. |
| Structural access | Defined in Chapter 9 (v0.2, carried into v0.3) as whether a bridge exists into an entire part of the network; now also named explicitly in Chapter 6 v0.4's dyadic/portfolio-levels paragraph, so the term is introduced consistently before Chapter 9 develops it in full. |
| Mobilizability | Used consistently across Chapters 3, 6, and 9 as the situation-specific capacity governing whether accumulated relational value (including a working access channel) converts into action at a specific moment - not a sixth dimension, not itself a form of access. No conflicts found. |
| Concentration risk | Now split by ownership: Chapter 9 (structural mechanism), Chapter 10 (political/ethical consequences). Both chapters now state this division explicitly and cross-reference rather than duplicate. |
| Dependency | Used consistently as Chapter 9's "inward-facing" lens (how much of the network's function rests on one node) and, in Chapter 10, extended into "dependency on powerful insiders" as a political/ethical consequence - the two uses are related but distinguished by level (structural fact vs. exploitable relationship), consistent with the ownership split above. |
| Resilience | Used consistently in Chapter 9 as the outward-facing "robustness" lens (paired with "dependency" as the inward-facing lens); Chapter 10 does not use "resilience" independently, instead referencing Chapter 9's account. No conflicts found. |
| Brokerage | Used consistently across Chapter 9 (structural/measurable advantage, per Burt) and Chapter 10 (the same structural position becoming a site of capture/gatekeeping risk) - Chapter 10 v0.3 now explicitly frames this as the same structural position viewed through a different, political lens, rather than a separate concept. |

No new terminology was introduced beyond what was already used in at least one chapter prior to this pass, except "capture" and "gatekeeping" in Chapter 10, which were necessary to give concrete, non-duplicative shape to its newly clarified ownership territory (abuse of brokerage power / dependency on powerful insiders) without re-using Chapter 9's structural vocabulary to describe a political phenomenon.

## File manifest

| Chapter | Prior versions (preserved) | New version (this pass) |
|---|---|---|
| Chapter 6 | `06-chapter-6-packet-v0.1.md`, `06-chapter-6-packet-v0.2.md`, `CHAPTER_06_v0.3.md` | `CHAPTER_06_v0.4.md` |
| Chapter 9 | `CHAPTER_09_v0.1.md`, `CHAPTER_09_v0.2.md` | `CHAPTER_09_v0.3.md` |
| Chapter 10 | `10-chapter-10-packet-v0.1.md`, `10-chapter-10-packet-v0.2.md` | `CHAPTER_10_v0.3.md` |

All prior versions remain unmodified at their original paths.
