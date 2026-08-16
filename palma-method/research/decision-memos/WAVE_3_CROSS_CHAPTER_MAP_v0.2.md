# Wave 3 Cross-Chapter Map v0.2

```yaml
document_id: WAVE_3_CROSS_CHAPTER_MAP_v0.2
document_type: cross_chapter_audit
version: v0.2
lifecycle: draft_for_editorial_review
editorial_status: under_revision
final_publication_copy: false
supersedes: WAVE_3_CROSS_CHAPTER_MAP.md
task_reference: TASK_CLAUDE_0012.md
owner: Claude (Research Synthesizer and Developmental Editor role)
created_date: "2026-07-17"
scope: "Re-audits Chapters 11-16 after the v0.2 corrective revision, checking whether the problems the v0.1 audit identified are actually resolved, not merely addressed with a disclaimer."
```

The v0.1 version of this document (preserved unchanged at `WAVE_3_CROSS_CHAPTER_MAP.md`) identified two unresolved terminology gaps and one structural risk. This v0.2 audit checks each against the actual v0.2 chapter revisions and adds four new checks specific to TASK_CLAUDE_0012's remaining problems (B, D, E, F).

## 1. Terminology consistency: listening / sensing / measurement

**v0.1 finding:** Three related but distinct concepts, used without an explicit statement of how they relate.

**v0.2 status: resolved.** `PART_III_ARCHITECTURE_DECISION_v0.1.md`, Section 10, states the canonical relationship (concurrent levels of structure applied to the same underlying activity, not sequential stages). Chapter 11 states it in its own Section 4 and in the Draft Chapter text. Chapter 14 restates sensing as listening's operational mode during an active intervention. Chapter 15 restates measurement as the most structured of the three. All three chapters now use the terms consistently with the canonical statement; no chapter contradicts it.

## 2. Terminology consistency: practice / institutionalization

**v0.1 finding:** Both describe durability, at possibly different levels of analysis, not reconciled.

**v0.2 status: resolved.** `PART_III_ARCHITECTURE_DECISION_v0.1.md`, Section 10, states the canonical distinction, explicitly grounded in Fine's idioculture research (SC-038, a practice can exist without institutionalization) and Fine & van den Scott's wispy communities (SC-039, institutionalization is not automatically the correct goal). Chapter 13 and Chapter 14 both reference and apply this distinction consistently.

## 3. Structural risk: implied linear pipeline

**v0.1 finding:** No individual chapter claims a universal sequence, but the six chapters' cumulative "Connections" sections create that effect.

**v0.2 status: resolved, structurally rather than by disclaimer.** Every chapter's Connections section was rewritten to state at least one concrete loop-back (see `WAVE_3_CORRECTIVE_CHANGE_LOG.md`, Problem A table for the full chapter-by-chapter accounting). `PART_III_ARCHITECTURE_DECISION_v0.1.md`, Sections 2 and 4, states the loop-back structure as a defining architectural feature. This was checked specifically against TASK_CLAUDE_0012's instruction not to merely add a "the process is nonlinear" disclaimer: each chapter's purpose, connections, and internal logic were the actual objects of revision, not just a caveat appended to unchanged text.

## 4. New check: Design/Activate boundary (Problem D)

**Audit question:** Do Chapters 13 and 14 now have non-overlapping intellectual functions, per TASK_CLAUDE_0012's definition-of-done item 4?

**Finding: resolved.** Chapter 13's new specify/enact/emerge/fail-or-mutate table gives Chapter 13 a function Chapter 14 does not duplicate: specifying conditions and stating, per component, what is designable versus what is not. Chapter 14's restated central argument gives it a distinct function Chapter 13 does not perform: intervening under real conditions without assuming the designed-for response follows, and sensing what actually happens. The provisional distinction TASK_CLAUDE_0012 offered survived contact with the sociology brief (see `WAVE_3_CORRECTIVE_CHANGE_LOG.md`, Problem D) and is now stated identically, from each chapter's own side, in both packets - checked directly for consistency and found to match.

## 5. New check: community as assumed destination (Problem E)

**Audit question:** Does any chapter still imply community is the natural or superior endpoint of communication, participation, or network development?

**Finding: resolved in Chapter 16 (the chapter where this risk was concentrated).** Chapter 16's new key distinction ("community as one outcome among several") and closing draft paragraph state directly that a temporary group, a network without felt community, or no community at all can be the correct outcome. Checked against Chapters 11-15 individually: none of the other five chapters, in either v0.1 or v0.2, made a community-as-destination claim requiring correction - the risk was specific to Chapter 16's synthesis role, not distributed evenly across Part III. This matches the original v0.1 cross-chapter audit's own finding that the pipeline risk was a cumulative, closing-chapter effect rather than a per-chapter one.

## 6. New check: Chapter 16's distinct function (Problem G)

**Audit question:** Does Chapter 16 do more than summarize Chapters 11-15?

**Finding: resolved.** Chapter 16's central argument (communication becomes infrastructure for negotiating participation, knowledge, boundaries, and power once member-to-member value creation begins) is a claim none of Chapters 11-15 makes individually or in combination - it is a claim about what happens to the communication function itself, not a recommendation about how to practice listening, mapping, design, activation, or measurement. Checked against the risk of merely restating Wenger's communities-of-practice definition with new vocabulary: the new argument is falsifiable and specific (it names four negotiated stakes - participation, knowledge, boundaries, power - and ties them to a specific threshold, member-to-member value creation) rather than a general restatement that communication and community should cooperate.

## 7. New check: microgroups, boundaries, and collective capacity appear only where analytically necessary (Problem F)

**Audit question:** Were these concepts added only where they materially change a chapter's claims, per TASK_CLAUDE_0012's specific instruction against a generic "community lens" bolt-on?

**Finding: resolved, with one explicit scoping note.** Chapters 11, 12, 13, 14, and 15 each received specific, chapter-appropriate additions (microgroup-held knowledge and intermediaries in Ch11; a fifth map layer in Ch12; the specify/enact/emerge/fail-or-mutate table in Ch13; collective efficacy as a designable-condition/emergent-outcome illustration in Ch14; social-level measurement additions in Ch15) - each tied to a specific claim the chapter needed to make, not a uniform addition. Chapter 16 did not receive a separate Problem-F-labeled addition, because its existing scope already operated at the group level; its Problem E and G corrections cover the same territory Problem F would otherwise have required. This is noted explicitly, not left implicit, to make clear the omission was a deliberate scoping decision, not an oversight.

## 8. Cross-chapter terminology audit (extended from v0.1)

Access, relational access, structural access, and mobilizability remain used identically to their Chapter 3 v0.2/Chapter 6 v0.4/Chapter 9 v0.3 definitions throughout the v0.2 revision - unchanged, no redefinition introduced. Symbolic boundary and social boundary (new in this wave, via Lamont & Molnár, SC-041) are used identically across Chapters 12, 13, and 16 - checked directly for consistent definition and application. Collective efficacy (SC-040) is used identically across Chapters 14, 15, and 16. No chapter in this wave introduces a sixth Relationship Capital dimension, redefines Access, or reopens the separate Palma Method architecture workstream.

## 9. Remaining unresolved items (carried forward, not silently resolved)

- Chapter 14's title (recommendation made, not decided - `PART_III_ARCHITECTURE_DECISION_v0.1.md`, Section 8).
- Whether Chapter 12's fifth map layer needs a formal internal-use restriction beyond this wave's prose caution (`PART_III_ARCHITECTURE_DECISION_v0.1.md`, Section 9, item 4).
- How much member-to-member value creation is "enough" to trigger Chapter 16's infrastructural shift - stated as a matter of degree, not resolved with a threshold (Chapter 16, Open Questions).
- How unpaid relational labor should be recognized or compensated without converting participation into disguised employment (Chapter 16, Open Questions) - a live tension, not resolved.
- The two missing provenance files (`TASK_CLAUDE_0012_RECOVERY_RECORD.md`, Codex repository-state confirmation) remain unlocated in this sandbox - disclosed, not resolved (see `TASK_CLAUDE_0012_COMPLETION_REPORT.md`).

## 10. Summary

All three items the v0.1 cross-chapter map flagged as unresolved (listening/sensing/measurement terminology, practice/institutionalization terminology, implied linear pipeline) are resolved in v0.2. All four additional problems TASK_CLAUDE_0012 introduced (B, D, E, F, G — Problem C is the terminology item already covered above) were checked directly against the revised chapters and found resolved, with specific scoping decisions disclosed rather than hidden. Five items remain genuinely open and are carried forward explicitly, consistent with TASK_CLAUDE_0012's definition-of-done requirement that the completion report name unresolved author decisions rather than silently resolving them.
