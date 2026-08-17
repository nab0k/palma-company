---
id: PALMA_METHOD_THEORY_GAPS_AND_PRIMARY_SOURCES_v0.1
type: report
status: draft
owner: claude
task_id: TASK_CLAUDE_0030
created: 2026-08-17
privacy_level: internal
depends_on:
  - DECISION_0003
  - DECISION_0006
  - DECISION_0007
source_refs:
  - SC-119
chapter_refs:
  - CHAPTER_02
  - CHAPTER_07
  - CHAPTER_08
  - CHAPTER_09
  - CHAPTER_11
  - CHAPTER_13
---

# Theory gaps and primary sources v0.1

Stream 2 of `TASK_CLAUDE_0030`. Checks whether the book's seven-step
governing movement is adequately supported at each transition, and whether
the nine priority literatures the founder named are covered by the existing
corpus, a genuine gap, or already well covered and not worth adding to.
Existing source cards were checked first; new sources were sought only
where a concrete gap was confirmed, per instruction.

## The seven transitions, assessed

| Transition | Support level | Basis | Gap, if any |
|---|---|---|---|
| 1. Communication → consequential response | Adequate, but explicitly a Palma hypothesis, not an established finding | Simmel (dyad), Craig (constitutive model), Goffman (focused vs. unfocused interaction, already in corpus). The Palma Moment itself is named as the book's own working unit (DECISION_0006), not a validated construct. | None requiring a new source — the honest gap is epistemic status, not missing literature, and DECISION_0006 already states this correctly. |
| 2. Response → relationship | Adequate | Collins (interaction ritual chains, emotional energy carried forward). Gouldner (1960, norm of reciprocity — already carded, currently unused in-manuscript) would strengthen this transition directly: a returned exchange creates an expectation of return, which is the mechanism between "a response happened" and "a relationship exists." | Recommend deploying the existing, uncited Gouldner card here rather than sourcing anything new. |
| 3. Repeated encounters → tie | Adequate | Feld (opportunity) + Collins (charge). Granovetter's own tie-strength dimensions (frequency, duration, intimacy, reciprocal services) — already carded for Chapter 4's bridging argument — double as the closest existing operational definition of what a "tie" actually is, and could be referenced a second time (by idea, not by name-drop) at this specific transition. | None requiring a new source. |
| 4. Relationships → network | Adequate | Krackhardt & Hanson, Burt, Barabási together cover both the informal-mapping and the topological side of aggregation. | None. |
| 5. Network → community | **Weakest transition in the corpus.** | Wenger (1991/1998) is currently the *only* definitional test in use, and DECISION_0007 itself lists "the final operational definition of community, including the editorial three-person threshold" as an explicit deferred decision — the founder's own architecture admits this gap exists. | **Confirmed gap.** McMillan & Chavis (1986), "Sense of Community: A Definition and Theory" (*Journal of Community Psychology* 14: 6-23) is the standard, highly-cited alternative or complementary test (four elements: membership, influence, integration/fulfillment of needs, shared emotional connection) built independently of Wenger's practice-community frame. Recommended as a second, cross-checking lens for Chapter 8/9, not a replacement for Wenger — new source card created, see below. |
| 6. Community → distributed relational infrastructure | Partially supported, and honestly named as the book's own novel proposition | Ostrom (commons governance), Selznick (institutionalization), Walsh & Ungson (1991, organizational memory — `SC-119`, already carded from the prior task, currently underused). DECISION_0006 itself states this transition — dyadic participant-initiated action becoming system-level distributed infrastructure — *is* the book's one candidate novel proposition, explicitly untested. | Two confirmed sub-gaps, both filled below: **distributed/shared leadership** (no card existed for how leadership itself becomes distributed rather than founder-held — Pearce & Conger 2003 fills this) and **community emergence around a product/organization specifically**, as opposed to a craft or profession (Wenger's own setting) — Muniz & O'Guinn (2001, brand community) fills this, and is a natural complement to the already-carded McAlexander/Harley-Davidson case. |
| 7. Infrastructure → continuation without constant founder initiation | Weak, and this report recommends leaving it weak rather than forcing a citation | The Handoff Test itself (DECISION_0006) is the book's own proposed instrument for this transition. The one candidate outside literature — "founder's syndrome" / nonprofit founder-dependence writing — was checked and is **not recommended**: it is a widely used practitioner term without a settled, rigorous academic anchor (a 2010s *Nonprofit Quarterly* piece explicitly critiques the term as a stereotype-based diagnosis rather than a validated construct), which is precisely the kind of source this project's own evidence discipline should decline to stretch. | **Named, deliberately unfilled gap** — see "Formulations to avoid" note below. |

## The nine priority literatures, checked against the existing corpus

| Literature area | Status | Action |
|---|---|---|
| Community definitions and minimal features | Gap (only Wenger currently) | New card: McMillan & Chavis (1986) — see below. |
| Relational events and counter-actions | Adequately covered by Collins + the book's own Palma Moment framing; no distinct academic "relational event" literature (e.g., relational event models in network science) was judged necessary — that literature is a statistical-methods tradition, not a conceptual one, and would not answer a managerial question this book is asking. | No new source recommended. |
| User/participant → organizer role transition | Gap | New card: Lave & Wenger (1991, legitimate peripheral participation — the newcomer-to-oldtimer progression that precedes and grounds Wenger's later solo communities-of-practice work already in the corpus) — see below. Directly strengthens Chapter 1's student→old student→server pathway and Chapter 8/11's role-formation material. |
| Volunteer pathways | Partially filled by the same Lave & Wenger addition and by the Vipassana discovery dossier's own documented old-student service pathway (see `VIPASSANA_EVIDENCE_PACKAGE_v0.1.md`) — no additional card judged necessary beyond these two. | No further action. |
| Distributed/shared leadership | Gap | New card: Pearce & Conger (2003) — see below. |
| Organizational memory | Already filled | `SC-119` (Walsh & Ungson 1991), created under `TASK_CLAUDE_0028`, currently underused in-manuscript — recommend deploying it in Chapter 11 (TAK.Shtab's institutional memory) and/or Chapter 13 (the Infrastructure Canvas's "memory" field), rather than creating anything new. |
| Founder dependence and succession | Gap, deliberately left open | See transition 7 above — no source met this project's evidence bar. |
| Community emergence around products | Gap | New card: Muniz & O'Guinn (2001) — see below. |
| Exclusion, peripheral participation, and failed belonging | Well covered | Portes, McPherson/Smith-Lovin/Cook (new, see companion report), Morrison, Edmondson, Arnstein already anchor Chapter 9 thoroughly — no further addition recommended; if anything, Chapter 9 needs trimming (`verify_then_edit` items), not expansion. |

## New source cards created by this task

Full cards are committed alongside this report; summarized here for
traceability. All four are `verification_status: checked` — real, citable,
independently confirmed via at least one search pass — not yet
primary-text-read in full, consistent with this project's existing "checked,
not verified" convention (`SC-050`, `SC-051`, `SC-119` all use the same
tier).

1. **`mcmillan-chavis-1986-sense-of-community.md`** — McMillan, D. W., & Chavis, D. M. (1986). Sense of community: A definition and theory. *Journal of Community Psychology*, 14(1), 6-23. Four-element test (membership, influence, integration/fulfillment of needs, shared emotional connection) for the network→community transition, independent of Wenger's practice-based test.
2. **`muniz-oguinn-2001-brand-community.md`** — Muniz, A. M., & O'Guinn, T. C. (2001). Brand Community. *Journal of Consumer Research*, 27(4), 412-432. Three markers (shared consciousness, rituals and traditions, moral responsibility) for community forming specifically around a shared product/brand rather than a craft — the natural theoretical complement to the already-carded Harley-Davidson case.
3. **`pearce-conger-2003-shared-leadership.md`** — Pearce, C. L., & Conger, J. A. (Eds.). (2003). *Shared Leadership: Reframing the Hows and Whys of Leadership*. Sage. Names the mechanism by which leadership itself, not only labor, distributes across a group — directly relevant to Chapters 8, 11, and 15's transfer argument.
4. **`lave-wenger-1991-legitimate-peripheral-participation.md`** — Lave, J., & Wenger, E. (1991). *Situated Learning: Legitimate Peripheral Participation*. Cambridge University Press. The newcomer-to-oldtimer progression underlying both Wenger's later solo work (already in the corpus) and the Vipassana student→old-student→server pathway (Chapter 1).

Two further cards, already scoped under Streams 1 and 3 respectively and not repeated here in full, also belong to this task's total new-card output: `mcpherson-smith-lovin-cook-2001-homophily.md` and `fonseca-pereira-esteves-2014-ukrainian-migration-portugal.md` (Stream 1); the Goenka-system organizational card (Stream 3).

## Decorative, duplicating, or weakly-supported references flagged for removal or reduction

Consolidated from the founder's own change-map rulings plus this task's
independent read, so the list is in one place:

| Reference | Problem | Disposition |
|---|---|---|
| Gary Alan Fine (1979, idioculture) | `verify_then_edit` — keep only if it identifies a mechanism the chapter actually needs | Recommend removal unless a specific TCF idioculture example is drafted; otherwise state the observation directly without the citation. |
| Fine & van den Scott (2011, wispy communities) | `verify_then_edit`, and duplicated across two prior chapter locations (old Chapters 12 and 16) | Recommend removal — the "temporary communities are not lesser communities" point can be stated directly; it does not need two academic anchors when Wenger and McMillan & Chavis already carry the chapter's definitional weight. |
| Apple/Google/Intel/Adobe no-poach case | In-manuscript with no backing source card | Not decorative, but under-evidenced — new card created (see companion Stream 1 report) rather than removed, since the founder's own instruction is `verify_then_edit`, not `remove`. |
| Krackhardt & Hanson (1993) | Previously duplicated across two chapter locations (old Chapters 9 and 12) | Consolidate to one full explanation (Chapter 10) plus a callback, per Stream 1's chapter architecture. |
| Nvidia/OpenAI (the Chapter 6/old-numbering deal narrative) | Factually inaccurate contrast ("nine years without a major deal") and an unestablished causal story | `remove` per AR-014 — not repaired. |
| Dewey & LeBoeuf, CrowdStrike/Delta, Zoho, Chief, Abercrombie & Fitch | Generic, reader-unfamiliar, or not testing a relational mechanism | `remove` per AR-011/012/013/015/016 — consistent with the founder's own case-discipline rule (AR-024). |

## A note on epistemic categories, applied to this stream's own output

Per instruction, this report's claims sort as follows: the transition-support
assessments and the "adequate/gap" verdicts above are **supported
interpretation** (this task's own reading of the corpus against the seven-
step model, not an external finding); the four new source cards' core claims
are **verified facts about what those papers say**, cross-checked via
independent search, but **not yet primary-text-verified** per this project's
own tier system; the recommendation to leave founder-dependence
deliberately uncited is a **Palma synthesis** editorial judgment, not a
literature-review conclusion; and DECISION_0006's own framing of the
network→infrastructure transition as the book's sole candidate novel
proposition is repeated here as **an open proposition**, not restated as
settled.
