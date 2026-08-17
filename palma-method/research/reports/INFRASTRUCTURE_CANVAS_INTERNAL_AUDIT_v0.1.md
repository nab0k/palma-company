---
id: PALMA_METHOD_INFRASTRUCTURE_CANVAS_INTERNAL_AUDIT_v0.1
type: report
status: draft
owner: claude
task_id: TASK_CLAUDE_0028
created: 2026-08-17
privacy_level: internal
depends_on:
  - DECISION_0006
  - SPEC_PALMA_METHOD_CANON_0002
source_refs:
  - SC-006
  - SC-007
  - SC-027
  - SC-107
  - SC-110
  - SC-111
chapter_refs:
  - CHAPTER_13
  - CHAPTER_18
---

# Infrastructure Canvas — internal consistency audit v0.1

Stream 1 of TASK_CLAUDE_0028. Traces every definition and use of the Palma
Infrastructure Canvas across the canon, tool specs, manuscript, appendices,
novelty reports, insertion maps, and source cards, and reports contradictions
and drift as findings rather than silently resolving them, per AGENTS.md
("When instructions conflict, stop and ask... do not invent policy"). This
document does not edit the canon, a decision, or the manuscript. It also does
not assume the Canvas is currently a coherent construct — see Finding F7.

## Documents traced

| Document | Authority tier | Status | Defines the 5 fields? |
|---|---|---|---|
| `DECISION_0006_PALMA_METHOD_FOUR_STAGE_ARCHITECTURE.md` (2026-08-16, approved) | Founder decision — highest | approved | Names the tool only, no field-level definitions |
| `PALMA_METHOD_CANON_v1.1.md` (2026-08-16, approved) | Operational canon, subordinate to decisions | approved | Names the 5 fields and gives one functional line for "memory" only; the other four fields are named, not defined |
| `PALMA_METHOD_MANUSCRIPT_v0.4.md` (2026-08-17) | Sole authoritative current book text (per AGENTS.md) | working manuscript | Yes — Chapter 13 (six elements), Chapter 18 body, Appendix 1 par.4, Appendix 2 |
| `PALMA_METHOD_TOOL_SPEC_v0.2.md` (2026-08-15, TASK_CLAUDE_0021) | Editorial working document, explicitly "not manuscript prose," not a Decision or Canon artifact | draft | Yes — the only place with full field-by-field function/observable-sign/limits detail |
| `PALMA_METHOD_PRIOR_ART_MATRIX_v0.1.md` (TASK_CLAUDE_0024) | Editorial research report | draft | Row 8 only — predecessor comparison, not a first-party definition |
| `PALMA_METHOD_NOVELTY_AND_SCIENTIFIC_STATUS_AUDIT_v0.1.md` (TASK_CLAUDE_0024) | Editorial research report | draft | Section A.4 — comparison against Chapter 13's six elements |
| `PALMA_METHOD_FIELD_GUIDE_APPENDIX_v0.1.md` (TASK_CLAUDE_0027) | Editorial research report, standalone draft, "does not replace or edit the manuscript" | draft | Section 9 — restates the Tool Spec's five fields with light paraphrase |
| `PALMA_METHOD_TOOL_INSERTION_MAP_v0.1.md` (TASK_CODEX_0021) | Codex change-map, `type: change_map` | review | One table row — canonical role, manuscript home, evidence, limit |
| Source cards: `feld-1981-focused-organization-social-ties.md` (SC-111), `wenger-1991-1998-communities-of-practice.md` (SC-007), `ostrom-1990-governing-the-commons.md` (SC-006), `collins-2004-interaction-ritual-chains.md` (SC-027), `selznick-institutionalization.md` (SC-107) | Source cards | verified / checked | Named as predecessors in the Prior Art Matrix; none of the five defines "Infrastructure Canvas" itself |
| `tak-shtab-taktion-uleadeurope-institutionalization.md` (SC-110), `serhii-tak-shtab-story-intake.md` (SC-049) | Source cards, the case data behind every TAK.Shtab worked example | verified (SC-110) / restricted (SC-049) | Case evidence only |

**A finding that shapes how to read every row below:** the field-level
definitions a practitioner would actually use (function plus observable sign
plus "what cannot be claimed") exist in exactly one place with full detail —
`PALMA_METHOD_TOOL_SPEC_v0.2.md` — and that document is explicitly not a
Decision, not the Canon, and not manuscript prose. Canon v1.1 names the tool
and its five fields and gives one line of functional description for
"memory" alone. This is an authority gap, not a contradiction: nothing in
the Tool Spec conflicts with the Canon, but the thing a Founder-approved
document actually authorizes ("Tool: Palma Infrastructure Canvas — routes,
roles, rhythms, channels, memory") is thinner than the thing practitioners
would need to fill the tool in. See Finding F6.

---

## Master matrix — one row per field

| Field | Exact definition (Tool Spec v0.2 / Manuscript, materially identical) | Level of analysis | Claimed function | Observable sign | Scientific support | Overlap with another field | Contradiction / drift across documents | Unsupported claim if made | Recommended disposition |
|---|---|---|---|---|---|---|---|---|---|
| **Routes** | "How people actually find or reach each other" without the organizer brokering the specific instance | Dyadic — a specific path between two named people | Make a specific person-to-person connection possible without the founder as broker | Used without the organizer brokering that specific instance | Prior Art Matrix names Feld (1981, SC-111) as predecessor, but Feld's own vocabulary is "foci" (opportunity structures for encounter), not "routes" — the attribution is an analogic extension, not a terminological match. No source card uses the word "route" in Feld's own framing. | High overlap with Channels — see F3 dedicated discriminant test below | F1 — sense-drift within a single document. Tool Spec v0.2's own worked TAK.Shtab example fills "routes" with literal, physical convoy routes coordinated with the military at checkpoints — a geographic/logistical sense of "route" — which is a different construct from the field's own stated definition (a social path to a specific person). The same document uses two different meanings of "route" for its definition versus its worked example. | That routes and channels are two independently observable constructs (see F3) | Rename or redefine. Keep the social sense ("who do I go through") as the field's only meaning; explicitly bar "route" from ever meaning a literal geographic path in Canvas use — see Stream 4 Option B |
| **Roles** | "What a participant can do here beyond receive or watch"; real when performed without being asked a second time | Dyadic/individual — one participant's standing in the system | Give a participant a way to contribute, not only consume | Performed without a second request | Prior Art Matrix names Wenger (1998, SC-007) — a real, close match: Wenger's roles/shared repertoire and legitimate peripheral participation are substantively about the same phenomenon | Clean 1:1 overlap with Chapter 13's "role" element — same word, near-verbatim definition in both places. This is the one field where the two vocabularies are not actually in tension. | No TCF grounding exists (Tool Spec states this plainly: "Roles and memory have no confirmed TCF example in the current interview set") | That any TCF example illustrates this field | Keep as specified. The cleanest field in the set; the only outstanding gap is empirical (no TCF instance yet), not definitional |
| **Rhythms** | "What repeats on its own schedule"; real when the next occurrence doesn't require a fresh invitation | System-level — a recurring pattern, not one relationship | Let repetition happen without the founder re-issuing the invitation each time | Next occurrence happens without a fresh invitation | Prior Art Matrix names Feld (1981) again; but Chapter 13's own prose grounds "rhythm" in Collins (2004, SC-027), not Feld ("Коллинз помог нам понять, почему повторяющиеся встречи способны накапливать эмоциональную энергию"). The Prior Art Matrix's predecessor list for the Canvas (row 8: Feld/Wenger/Ostrom) omits Collins even though the manuscript's own grounding for this specific field is Collins. | Clean 1:1 overlap with Chapter 13's "rhythm" element, same as Roles above | F2 — the clearest documented instance of period-mixing. The manuscript's own retrospective Canvas fill for TAK.Shtab (Chapter 18 body) reads: "ритм задавали дежурства, поездки и затем три волны исследования" — one field-fill spanning three non-contiguous periods: (a) duty shifts, first weeks 2022; (b) convoy trips, later 2022 after Kyiv-oblast liberation; (c) three research waves, 2023-2024. See Stream 3, Case A, for the bounded reconstruction this drift makes necessary. | That this is what a single bounded intervention's rhythm field would look like | Keep the field; fix the worked example, not the definition — see Stream 3 |
| **Channels** | "Where interaction actually happens"; a channel is real infrastructure "when people use it without the organizer present — its mere existence and membership count are not sufficient evidence" | System-level — a shared medium usable by more than one pair of people | Provide the medium in which routes can be exercised | Used without the organizer present; existence/membership count alone is explicitly insufficient | Prior Art Matrix names Feld and Wenger jointly; the Wenger "shared repertoire" fit is closer here than for Routes | High overlap with Routes — see F3 below. Clean 1:1 overlap with Chapter 13's "channel" element (one of the three fields, alongside Roles and Rhythms, that carries over from Chapter 13 essentially unchanged) | Same F1/F3 drift as Routes — the manuscript's own TAK.Shtab fill assigns the identical underlying fact (the shift from personal, word-of-mouth contact to the formal Taktion program) to both Routes ("маршруты... позднее через программу Taktion") and Channels ("каналы двигались от личных просьб к формальной программе") in the same paragraph. | That Channels and Routes were independently, discriminantly filled in the one worked example that exists | Redefine per Stream 4 Option B — a channel is the shared medium; a route is the specific person-to-person instantiation that may or may not use a named channel |
| **Memory** | "What a returning or new participant doesn't have to be told again"; real "when the group, not only the organizer, carries and applies it" | System-level — held collectively, not by one person | Let the group avoid re-explaining itself from scratch each cycle | Applied by the group, not recited by the organizer alone | No predecessor source card exists for this field anywhere in the 116-card corpus. Prior Art Matrix row 8 lists Feld/Wenger/Ostrom as Canvas predecessors generally, but none of the three is a theory of organizational or group memory. A targeted repo-wide search (this audit, 2026-08-17) for organizational-memory literature (e.g., the Walsh and Ungson 1991 tradition) found zero dedicated source cards — see Stream 2 for the full account. | No overlap with Chapter 13's six elements at all — confirmed independently by the Novelty and Scientific Status Audit (A.4): "memory" has no counterpart among channel/role/rhythm/ritual/rule/value-exchange. Chapter 5 discusses "institutional memory" as a related but separately named idea, not one of Chapter 13's six. Memory is thus the one field that is purely additive to Chapter 13's vocabulary, not overlapping with it. | F2, most extreme instance. The manuscript's own TAK.Shtab fill for Memory reads: "память сохранялась в учёте заявок, инструкциях и в возвращении к довоенному исследованию о домашнем насилии" — spanning a pre-war (pre-2022) research study through 2023 institutional records. This is the widest period-span of any single field-fill in the whole worked example. | That Memory has the same evidentiary or theoretical grounding as the other four fields | Flag as the weakest-grounded field; do not present it as equivalent in evidentiary weight to the other four — see Stream 2 for the recommended follow-up (a properly verified organizational-memory source card is a defensible future addition, not created in this task) |

---

## Cross-cutting findings (apply to the Canvas as a whole, not one field)

### F3 — Routes and Channels do not currently pass a discriminant test

The task specifically requires a direct discriminant test for these two
fields. Conducted as follows:

**Definitional test.** Routes = "how people actually find or reach each
other" (implicitly dyadic, person-specific). Channels = "where interaction
actually happens" (implicitly a shared medium, usable across many pairs).
On paper this is a workable distinction: a channel is a piece of shared
infrastructure (a chat group, a physical table, a booking app); a route is
the specific, person-to-person path that may or may not pass through a
channel.

**Applied test — the only worked example that exists.** Filling both fields
for TAK.Shtab (Chapter 18 body, quoted above) produces the same underlying
fact under both labels: the shift from personal/word-of-mouth contact to the
formal Taktion program. If the two fields discriminated in practice, filling
them independently for the same case should not converge on one fact. They
did. This is not a hypothetical risk; it is what happened the one time the
tool was actually used in the manuscript's own prose.

**A second, independent contamination.** The Tool Spec's own separate
TAK.Shtab illustration fills Routes with literal road routes at military
checkpoints — collapsing the field's social meaning into a third, unrelated
sense of the word "route" / "маршрут" (a geographic path). This is a
different failure mode from the Routes/Channels convergence above, but it
compounds the same underlying problem: "route" is doing too much semantic
work across this project's documents.

**Verdict:** as currently defined, Routes and Channels fail a direct
discriminant test on the only available applied evidence. This is reported
as a finding requiring a Founder or Chief Editor decision (Stream 4 offers
two concrete repair options), not resolved here.

### F4 — The five-vs-six vocabulary problem has no working reconciliation yet

Canon v1.1 states: "These five fields are a narrow decision sheet. They do
not erase Chapter 13's wider design vocabulary of channels, roles, rhythms,
rituals, rules, and value exchange. Rituals, rules, and value exchange shape
how the five fields work." The manuscript (Chapter 13 and Chapter 18 body)
repeats a version of this same sentence twice, nearly verbatim. This is a
real, stated position — not a contradiction — but it is asserted, not
operationalized: no document anywhere in this repository shows a
practitioner how to check whether "ritual," "rule," or "value exchange" is
shaping a given field, or which of the three modifiers applies to which
field. The founder's own finding (preserved verbatim in this task's brief)
is that this is insufficient practical reconciliation, and this audit's
independent tracing confirms the same gap: the claim is repeated three
times across three documents (Canon, Chapter 13, Chapter 18) with nearly
identical wording each time, which suggests an assertion being carried
forward, not newly re-derived or operationalized at each repetition. See
Stream 4 for a concrete crosswalk proposal.

**Which of the six elements actually correspond to which of the five
fields — traced exactly, not asserted:**

| Chapter 13 element (six) | Corresponding Canvas field (five) | Relationship |
|---|---|---|
| Канал (channel) | Channels | Same word, same definition, direct carryover |
| Роль (role) | Roles | Same word, same definition, direct carryover |
| Ритм (rhythm) | Rhythms | Same word, same definition, direct carryover |
| Ритуал (ritual) | (none) | Stated to "shape how the five fields work" — a qualifier, not a parallel field |
| Правила (rules) | (none) | Stated to "shape how the five fields work" — a qualifier, not a parallel field |
| Обмен ценностью (value exchange) | (none) | Stated to "shape how the five fields work" — a qualifier, not a parallel field |
| (none) | Routes | New in the Canvas; no Chapter 13 counterpart |
| (none) | Memory | New in the Canvas; no Chapter 13 counterpart (Chapter 5's "institutional memory" is adjacent but separately named) |

Three of six Chapter 13 elements carry over unchanged. Three do not appear
in the Canvas at all and are handled by a one-sentence disclaimer. Two
Canvas fields (Routes, Memory) have no Chapter 13 antecedent. This table is
itself the missing reconciliation artifact; Stream 4 proposes making
something like it part of the Canvas's own instructions.

### F5 — The Novelty and Scientific Status Audit's manuscript-absence claim is now partially stale

`PALMA_METHOD_NOVELTY_AND_SCIENTIFIC_STATUS_AUDIT_v0.1.md` (A.4, written
against `MANUSCRIPT_SNAPSHOT_2026-08-15.md`) states that "Response Signals
and Handoff Test have no manuscript-text equivalent at all under any name."
Checked directly against the current `PALMA_METHOD_MANUSCRIPT_v0.4.md`
(2026-08-17, two days later): this is no longer accurate. Appendix 1
sections 5 and 7 of the current manuscript name Response Signals and the
Handoff Test explicitly, by name, with their own definitions. This is not a
contradiction requiring resolution — it is normal document staleness, since
the manuscript was synchronized (via TASK_CODEX_0021 and DECISION_0006)
after the audit was written — but it means A.4's specific "no manuscript
presence" claim should not be cited as current without this correction. The
audit's core finding for this task's purposes (the five-vs-six field
mismatch, A.4) is unaffected and remains accurate against v0.4 —
independently re-confirmed in F4 above by direct inspection of the current
manuscript.

### F6 — The operational field definitions are not currently owned by any canonical document

Restated from the documents-traced table: Canon v1.1 authorizes the tool
and its five field names but not their functional definitions or
observable signs. Those live only in `PALMA_METHOD_TOOL_SPEC_v0.2.md`, an
explicitly non-canonical editorial draft. Practically, this means a
practitioner reading only Founder-approved material (Canon plus Decisions)
could not actually fill in the Canvas without also consulting an
unapproved draft. This is not a contradiction between documents — the
Tool Spec does not conflict with the Canon — but it is a gap in the
authority chain that Stream 4 should address explicitly (for example, by
recommending the field-level definitions be folded into a future Canon
version or an approved addendum, once the Routes/Channels and
five-vs-six issues above are resolved — folding unresolved definitions
into the Canon now would canonize the very problems this audit found).

### F7 — Whether the Canvas is currently a coherent construct

Per this task's own acceptance criteria, this audit is permitted to
conclude the Canvas is not yet coherent, and does so here, precisely:
three of five fields (Roles, Rhythms, Channels) are well-formed, evidenced
carryovers from Chapter 13 with clear definitions and at least a
theoretical predecessor. One field (Routes) has a definition that
contradicts its own worked example and substantially overlaps a second
field (Channels), which itself is otherwise sound. One field (Memory) has
no predecessor source, no Chapter 13 counterpart, no TCF example, and the
single widest period-mixing problem in the one full worked example that
exists. The Canvas as a five-item set is not internally uniform in
readiness, and presenting all five fields with equal confidence (as the
current manuscript and Tool Spec both do, formatting them as a uniform
bulleted or tabular list) overstates the weakest two fields' current
standing. See Stream 4 for repair options that do not require abandoning
the construct.

---

## Summary of recommended dispositions

| Field | Disposition |
|---|---|
| Routes | Redefine — restrict to the social/dyadic sense only; remove the geographic-route reading from any future worked example; resolve against Channels (Stream 4) |
| Roles | Keep as specified |
| Rhythms | Keep the field; the manuscript's own worked example needs a bounded rewrite (Stream 3), not a field redefinition |
| Channels | Redefine jointly with Routes (Stream 4); keep the "existence not equal to function" caution, which is correctly stated and well-evidenced |
| Memory | Keep provisionally, but flag as the weakest-grounded field pending either (a) a properly verified organizational-memory source card, or (b) a Founder decision to fold it into a redefined field structure (Stream 4 Option B) |
| Canvas as a whole | Defer a final merge/replace decision to the Founder; this audit supplies the evidence, not the choice — see `INFRASTRUCTURE_CANVAS_SPEC_OPTIONS_v0.1.md` |
