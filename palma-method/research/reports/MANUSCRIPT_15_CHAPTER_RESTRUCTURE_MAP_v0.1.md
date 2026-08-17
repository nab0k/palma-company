---
id: PALMA_METHOD_15_CHAPTER_RESTRUCTURE_MAP_v0.1
type: report
status: draft
owner: claude
task_id: TASK_CLAUDE_0029
created: 2026-08-17
privacy_level: internal
depends_on:
  - DECISION_0006
source_refs:
  - SC-047
  - SC-049
  - SC-051
  - SC-054
  - SC-093
  - SC-110
chapter_refs:
  - CHAPTER_00
  - CHAPTER_01
  - CHAPTER_02
  - CHAPTER_03
  - CHAPTER_04
  - CHAPTER_05
  - CHAPTER_06
  - CHAPTER_07
  - CHAPTER_08
  - CHAPTER_09
  - CHAPTER_10
  - CHAPTER_11
  - CHAPTER_12
  - CHAPTER_13
  - CHAPTER_14
  - CHAPTER_15
  - CHAPTER_16
  - CHAPTER_17
  - CHAPTER_18
  - CHAPTER_19
  - CHAPTER_21
---

# Manuscript 15-chapter restructure map v0.1

Task 1 of `TASK_CLAUDE_0029`. Full-text base: `palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.4.md`
(845 lines), read line-range by line-range in full during this task. All line
numbers below refer to that file at the base commit
`e6d9aee88789e8c32d409336c4ed27ac9dcec623`. This document does not contain any
new chapter prose. It is a transfer map and a set of findings, per task
instruction 10.

## 0. Current structure, for reference

| Current unit | Lines | One-line content summary |
|---|---|---|
| Вступление (unnumbered) | 1-53 | Vipassana retreat, ten days of silence, "sea guy" scene. Fully drafted, author-approved Russian text (SC-054). |
| Гл.1 Звук хлопка одной ладони | 54-84 | The book's title koan; the claim "the true unit of communication is not a message, it is a response." |
| Гл.2 Когда люди приходят друг к другу | 84-104 | Rabinovich, the Kyiv office, the square/sквер campaign, Wenger domain/community/practice, Harley-Davidson H.O.G. case, Coleman/Portes dark-side teaser, TAK.Shtab origin scene, TCF "коллектив vs сообщество" naming disagreement. |
| Гл.3 Доступ взаймы | 104-124 | Borrowed access — access that exists only through another person's relationship, not the org's own channel. |
| Гл.4 Счёт, которого никто не выставляет | 124-147 | Relationship capital accumulating invisibly; Nvidia/OpenAI 2016-2025 relationship-before-return story. |
| Гл.5 Событие — не инфраструктура | 147-183 | Feld 1981 (social foci), Collins 2004 (interaction ritual chains), TCF data; events vs. recurring structure. |
| Гл.6 Диалог ни о чём длиной в двадцать шесть лет | 183-213 | 26-year friendship/working relationship across four organizations; institutionalization of relationship capital; Nvidia/OpenAI reprised. |
| Гл.7 Кому можно доверить ребёнка | 213-256 | Kichkine chapter — dense overlapping networks, informal care, the teacher scene (SC-047, not yet approved). |
| Гл.8 Когда Bombom закрылся | 256-294 | Entirely a Bombom crisis narrative. |
| Гл.9 Если убрать одну точку | 294-340 | Burt (structural holes), Barabási/Jeong/Albert (robustness-fragility), Anton Nosik (SC-093, not yet approved), the removal test applied to the publishing house, Bombom, and TCF. OpenAI/Altman Nov. 2023 ouster as a second hub-fragility case. |
| Гл.10 Кого не познакомили | 340-372 | Portes' four dark-side mechanisms (reprised from Ch.2's teaser), TCF boundary-testing, Uzzi 1997 embeddedness paradox (introduced, not finished in-chapter). |
| Гл.11 Кафе, которого я не знал | 372-403 | Entirely the Sandra/Bombom interview; McNamara, Morrison, Edmondson, Goffman (focused/unfocused interaction), Arnstein, Gary Alan Fine (idioculture) as theory. |
| Гл.12 Пять карт одного зала | 403-437 | Freeman stakeholder theory, Krackhardt & Hanson (reprised from Ch.9), Lamont & Molnár boundaries, Fine & van den Scott (wispy communities) — the five-maps diagnostic tool, TAK.Shtab example. |
| Гл.13 Дружба не входит в расписание | 437-469 | Hypothesis-and-limited-probe logic; the Chief (2019 startup) case (flagged for removal). |
| Гл.14 Кто продолжит без тебя | 469-508 | TAK.Shtab "CBO" (Chief Box Officer) role-transfer scene. |
| Гл.15 Сколько весит готовность помочь? | 508-550 | Measurement; Barcelona Principles, Sampson/Raudenbush/Earls (collective efficacy), Carol Weiss (theory of change); TAK.Shtab and TCF as running examples. |
| Гл.16 Кому принадлежит разговор | 550-579 | Direct, structural Bombom-vs-TCF contrast ("thirty meters apart") as the chapter's organizing device; Wenger reprised; Fine & van den Scott reprised. |
| Гл.17 Диагноз | 579-617 | Diagnose tool; Gerstner/IBM 1993 case (verified tier, keep). |
| Гл.18 Дизайн | 617-644 | Design tool / Infrastructure Canvas; Abercrombie & Fitch case (flagged for removal). |
| Гл.19 Запуск | 644-684 | Launch tool / Response Signals; CrowdStrike/Delta case (flagged for removal). |
| Интерлюдия. Не решать за другого | between 19 and 21 | Facilitate/Advise cross-cutting role; built on a Bombom scene. |
| Гл.21 Передача | 684-~720 | Transfer tool / Handoff Test; Zoho case (flagged for removal); explicit closing acknowledgment naming Feld, Collins, Granovetter, Burt, Coleman, Portes, Schein, Selznick. |
| Заключение. Открытая ладонь | end | Closing. Unaffected by this task. |
| Приложение 1 / 2 | end | Field guide / evidence status appendix. Unaffected by this task. |

Note: there is no "Глава 20" heading in v0.4 — the unnumbered Интерлюдия sits
between Ch.19 and Ch.21. Any renumbering work should resolve this gap
explicitly rather than carry it forward silently.

## 1. Architecture validation, chapter by chapter

Verdict scale: **direct** (an existing chapter already is this, needs line
edits only) · **assemble** (the material exists but is scattered across
multiple current chapters and needs consolidation) · **reconstruct**
(the current chapter occupying this narrative slot depends on removed
material and needs a substantially different anchor case) · **new**
(no equivalent unit currently exists; needs commissioning, not just editing).

| # | Proposed chapter | Verdict | Basis |
|---|---|---|---|
| 1 | Випассана | **direct** | = Вступление (1-53), already a full, author-approved scene (SC-054). Currently framed as front matter, not a numbered chapter — promoting it to Chapter 1 is a framing/status change, not a content gap. Two open items: English translation not yet approved; two bare "(Chapter N)" cross-references inside the Intro text itself still need the idea-based fix per `PROSE_QUALITY_POLICY_DRAFT.md` (see SC-054's own "Still open" list). |
| 2 | Звук хлопка одной ладони | **direct** | = Гл.1 (54-84) almost unchanged. Renumbers from 1 to 2. |
| 3 | Одолженный доступ | **direct** | = Гл.3 (104-124) almost unchanged. Content itself did not reference Bombom or trigger a cross-reference flag in this reading pass. |
| 4 | Что накапливается в отношениях | **assemble** | Merge candidate: Гл.4 (124-147) and Гл.6 (183-213) are thematically the same claim (relationship capital accumulates invisibly and needs institutionalizing) told through two different personal anecdotes plus the same Nvidia/OpenAI case reprised in both. Recommend combining into one chapter and cutting the duplicate Nvidia/OpenAI telling, keeping one. Гл.4's line "In the fourth chapter I told..." forward-reference resolves itself if merged. |
| 5 | Полная личная история TCF | **new** | No existing chapter is a self-contained TCF origin/personal-history chapter. TCF currently appears only as recurring illustrative fragments inside at least ten other chapters (full list in Section 3). The founder-interview source cards (`tcf-founder-interview-2026-07-27.md`, `-07-30.md`) are the likely raw material, not yet reviewed in full in this task — flagged as a scoping gap, see Section 6. |
| 6 | Повторяющиеся встречи: Feld, Collins и данные TCF | **direct** | = Гл.5 (147-183). Feld and Collins are both introduced here specifically, not in Ch.2 as the proposed chapter's title might suggest — confirmed by direct text search (`Фелд`/`Feld`, `Коллинз`/`Collins` — both concentrated at lines 162-183, with Collins reprised once more at line 451 in old Ch.13). Title match is exact. |
| 7 | Кичкине и определение сообщества | **direct, blocked** | = Гл.7 (213-256), already a dedicated Kichkine chapter. **Blocked on approval**: SC-047's `personal_story_use` is `pending_author_approval` and `verification_status: restricted`; the teacher scene is explicitly described in the card as "blocked from manuscript use until Serhii explicitly approves the wording." This chapter cannot be finalized as a standalone chapter until that approval step happens — see `VIPASSANA_AND_KICHKINE_EVIDENCE_GAPS_v0.1.md`. |
| 8 | От первых пользователей к сообществу | **reconstruct** | Гл.8 (256-294) currently occupies this narrative slot and is entirely a Bombom crisis narrative — its title is literally "When Bombom closed." Removing Bombom does not trim this chapter, it removes it. Recommended reconstruction material, all already in-corpus: the Wenger domain/community/practice theory and the Harley-Davidson H.O.G. case, both currently sitting inside Ch.2 (lines ~90-99) as a tangent, not this chapter's core; and/or TCF's own first-user story (the "first-ever member" comparison anecdote currently surfaced only as an aside in Ch.10, line ~349). Either gives this chapter a non-Bombom, non-invented anchor already present in the corpus. |
| 9 | Кого сообщество не заметило | **assemble** | Merge Гл.10 (340-372, Portes dark-side mechanisms, TCF boundary-testing, Uzzi introduced) with Гл.11 (372-403, Sandra/Bombom interview) **minus its Bombom-specific narrative frame**. Гл.11's theory load (McNamara, Morrison, Edmondson, Goffman, Arnstein, Fine) is valuable and portable — it does not depend on Bombom as a setting, only on *an* interview as an occasion; TCF interview material already exists in the corpus (`tcf-luciana-member-interview-2026-08-15.md`, `tcf-low-regularity-member-intake-2026-08-15.md`) and already supplies the low-regularity/"never got close to anyone but Miguel" scene used later in old Ch.10. Recommend re-anchoring the listening theory to a TCF interview instead of the Sandra interview. |
| 10 | Хабы и уязвимость сети: Носик + издательство | **direct, blocked** | = Гл.9 (294-340), already structured almost exactly as proposed: Burt, Barabási/Jeong/Albert, the publishing-house case, and Anton Nosik (SC-093) side by side. Two required edits, both small: (a) remove the Bombom leg of the three-way removal-test comparison (publishing house / Bombom / TCF), keeping the publishing-house and TCF legs; (b) decide whether the OpenAI/Altman November 2023 case (currently also in this chapter) stays as a second hub-fragility illustration or is cut as one of the "short interchangeable business cases" — the founder's removal list names "Nvidia/OpenAI" without distinguishing the Ch.6 Nvidia-deal story from this separate Ch.9 Altman-ouster story; flagged as a decision, see Section 6. **Blocked on approval**: SC-093's `personal_story_use` is `pending_author_approval`; the half-brother relationship is already drafted into the chapter text ("мой брат Антон Носик") but not yet cleared. |
| 11 | Полная история TAK.Shtab | **assemble — largest consolidation task in the whole restructure** | TAK.Shtab fragments were found in at least nine current chapters: the origin scene in Ch.2 (office becomes a штаб in 2022), the borrowed-access material likely underlying Ch.3, Ch.9's removal-test leg, Ch.12's stakeholder-map example, Ch.14's entire CBO scene, Ch.15's measurement examples (baseline, "после начала войны," CBO role-transfer-as-evidence), Ch.17-19's tool-chapter examples, and SC-110's independently-verified 2024 institutionalization detail (Taktion program, U-LEAD z Yevropoyu funding) currently used in Ch.18. No chapter currently tells TAK.Shtab once, fully, or chronologically — confirming the founder's own diagnosis. This is an assembly job, not a rewrite from missing material: SC-049 and SC-110 together already hold most of the raw facts. |
| 12 | Diagnose | **direct** | = Гл.17 (579-617). Gerstner/IBM 1993 case is the corpus's single highest-evidence-tier case (`confidence_level: high`, `verification_status: verified`) — keep as the chapter's anchor. Needs: internal cross-reference cleanup only (none found specifically in this chapter's read pages, but reprised TAK.Shtab language should redirect to Chapter 11 once that exists). |
| 13 | Design / Infrastructure Canvas | **direct, needs case swap** | = Гл.18 (617-644). Abercrombie & Fitch is on the founder's explicit removal list; the chapter needs a replacement case or a documented decision to run without one. See Section 4 (case placement) for candidates. |
| 14 | Launch / Response Signals | **direct, needs case swap** | = Гл.19 (644-684). CrowdStrike/Delta is on the founder's explicit removal list; same treatment as above. The Интерлюдия ("Не решать за другого," Facilitate/Advise) currently sits after this chapter and is Bombom-based — it needs a new anchor case (TAK.Shtab or TCF) before it can survive Bombom's removal; recommend folding its cross-cutting Facilitate/Advise point into this chapter or Chapter 15 rather than preserving it as a standalone Interlude, given the founder's instruction to compress 21 chapters into 15 (there is no numbered slot for it in the proposed architecture). |
| 15 | Transfer / Handoff и итоговая сборка Palma Method | **direct, needs case swap** | = Гл.21 (684-~720). Zoho is on the founder's explicit removal list. The chapter's closing acknowledgment paragraph (naming Feld, Collins, Granovetter, Burt, Coleman, Portes, Schein, Selznick) is a strong, reusable device — keep. Confirms a structural finding worth stating plainly: the founder's instruction that "Palma Method appears late, as a research result" is **already satisfied by the current chapter order** — the four method-tool chapters (Diagnose/Design/Launch/Transfer) already sit at the end of the manuscript, not the beginning. This is a proportions-and-case problem, not a sequencing problem. |

## 2. Full content-transfer table

Every current chapter/unit, its destination in the 15-chapter architecture, and
disposition.

| Current unit | Destination | Disposition |
|---|---|---|
| Вступление | New Ch.1 (Випассана) | Move as-is; reclassify from front matter to numbered chapter. |
| Гл.1 | New Ch.2 | Move as-is. |
| Гл.2 (Rabinovich/office/sквер) | Split three ways | Wenger + Harley-Davidson → New Ch.8. TAK.Shtab origin scene → New Ch.11. Coleman/Portes teaser → New Ch.9 (already the destination of its own payoff). TCF "коллектив vs сообщество" aside → New Ch.7 or New Ch.5, editorial choice. |
| Гл.3 | New Ch.3 | Move as-is. |
| Гл.4 | New Ch.4 | Merge with Гл.6; keep one Nvidia/OpenAI telling. |
| Гл.5 | New Ch.6 | Move as-is. |
| Гл.6 | New Ch.4 | Merge into Гл.4; cut duplicate Nvidia/OpenAI telling. |
| Гл.7 | New Ch.7 | Move as-is; blocked on SC-047 approval. |
| Гл.8 (Bombom) | Archive | Entire chapter is removed per founder instruction. Archive, do not delete — AGENTS.md's append-only lifecycle applies. |
| Гл.9 | New Ch.10 | Move with two edits: drop Bombom leg of the removal-test comparison; resolve the OpenAI/Altman case decision. Blocked on SC-093 approval. |
| Гл.10 | New Ch.9 | Merge with Гл.11's theory (minus Bombom frame). |
| Гл.11 (Sandra/Bombom interview) | New Ch.9 | Theory content (McNamara, Morrison, Edmondson, Goffman, Arnstein, Fine) survives; interview frame is re-anchored to TCF material; the Bombom-specific narrative beats (the interview itself, "Сандра," "Педро") are archived. |
| Гл.12 | New Ch.13 or a Diagnose-adjacent slot | Freeman/Krackhardt-Hanson/Lamont-Molnár/Fine-van den Scott tool content supports the Design/Infrastructure Canvas chapter; TAK.Shtab example folds into New Ch.11. Krackhardt & Hanson is already a Ch.9 reprise — resolve to one telling. |
| Гл.13 (Chief case) | New Ch.6 or New Ch.13 | Hypothesis-and-limited-probe logic is portable theory; the Chief case is on the removal list and is archived. |
| Гл.14 (CBO) | New Ch.11 | Folds into the full TAK.Shtab chapter as its role-transfer beat. |
| Гл.15 | New Ch.14 or New Ch.11 | Measurement theory (Barcelona Principles, Sampson/Raudenbush/Earls, Weiss) supports New Ch.14 (Launch/Response Signals); TAK.Shtab-specific measurement examples fold into New Ch.11. |
| Гл.16 | New Ch.9 or New Ch.15 | **Requires the most editorial judgment of any chapter.** Its entire organizing device is a direct Bombom-vs-TCF spatial/structural contrast ("thirty meters apart"). Removing Bombom does not leave a trimmable chapter — it removes the device the chapter is built on. The underlying argument (when does value start moving between participants, not just to/from the center) is real and needed; it has no Bombom-free existing home. Recommend treating this as a "reconstruct," not a straightforward transfer — see Section 6, Decision D5. |
| Гл.17 | New Ch.12 | Move as-is. |
| Гл.18 | New Ch.13 | Move; replace or drop Abercrombie & Fitch case. |
| Гл.19 | New Ch.14 | Move; replace or drop CrowdStrike/Delta case. |
| Интерлюдия | Folded into New Ch.14 or New Ch.15 | Bombom-based; no numbered slot in the 15-chapter architecture; Facilitate/Advise point is cross-cutting and can be stated once rather than as a standalone interlude. |
| Гл.21 | New Ch.15 | Move; replace or drop Zoho case; keep closing acknowledgment paragraph. |
| Заключение | Unchanged, after New Ch.15 | Not in scope of the 15-chapter renumbering. |
| Приложение 1 / 2 | Unchanged | Not in scope. |

## 3. TCF duplication — current locations and canonical-home recommendation

TCF material currently appears, at minimum, in: Гл.2 (naming disagreement),
Гл.5 (recurring-encounter data), Гл.9 (removal-test leg), Гл.10 (boundary
material, first-ever-member comparison, "never got close to anyone but
Miguel" scene), Гл.11 (Wodify data, low-regularity member), Гл.12 (five-maps
worked example), Гл.13 (hypothesis probe), Гл.15 (Wodify/schedule-overlap
measurement), Гл.16 (the TCF side of the Bombom contrast).

No current chapter tells a complete TCF origin story (how Miguel and
Margarida started it, how it grew, who the first members were, why it is
"the collective," not "a community" to at least one member). The
tcf-founder-interview cards (07-27, 07-30) are the most likely source for
this; they were not read in full during this task and should be the first
input for whoever assembles New Ch.5. **Recommendation:** New Ch.5 becomes
the canonical, chronological TCF origin chapter; all other TCF appearances
stay as recurring illustrative examples (this is explicitly compatible with
the founder's TCF-as-throughline direction, which asks for repeated use, not
a single quarantined mention) but should cross-reference New Ch.5 by idea,
not by chapter number, per the cross-reference removal instruction.

## 4. TAK.Shtab duplication — current locations and canonical-home recommendation

See Section 1, row 11, for the full location list. **Recommendation:** New
Ch.11 becomes the canonical, chronological TAK.Shtab chapter, built
primarily from SC-049 (the author's own account, currently flagged with
internal figure/date conflicts not yet reconciled) and SC-110 (the
independently, publicly verified 2024 institutionalization facts). All other
appearances (Diagnose/Design/Launch/Transfer tool-chapter examples) stay as
short, already-established illustrative callbacks, cross-referenced by idea.
SC-049 itself flags unresolved internal conflicts in "numerical units" and
exact dates/routes/roles — this reconciliation work is a precondition for
writing New Ch.11, not something the restructure map can resolve on its own;
see Section 6, Decision D6.

## 5. Internal cross-references found, flagged for removal

Per the founder's instruction ("почти полностью убрать"), not literally all —
a small number may be worth keeping if converted to idea-based references
rather than chapter numbers. Exact instances found during the full read:

| Location | Text (excerpt) | Disposition |
|---|---|---|
| Гл.6, line ~211 | "В четвёртой главе я рассказывал, как..." | Removed if Гл.4/6 merge (Section 1, row 4) makes it redundant. |
| Гл.9, line ~337 (OpenAI/Altman) | not itself a cross-ref, but sets up Гл.12's reprise | n/a |
| Гл.11, closing lines (~402-403) | "У десятой главы был неудобный финал..." | Convert to idea-based transition or cut. |
| Гл.12, line ~408 | "которую мы разбирали в девятой главе" | Convert to idea-based reference; Krackhardt & Hanson duplication should resolve to one telling regardless. |
| Гл.12, line ~410 | "В девятой главе мы уже использовали различие Кракхардта и Хэнсона" | Same as above. |
| Гл.12, closing (~437) | "Позже, в главе о диагнозе, эти пять изображений соберутся..." | Convert or cut. |
| Гл.13, line ~451 | "В пятой главе Коллинз помог нам понять..." | Convert or cut. |
| Гл.15, line ~547 | "В тринадцатой главе мы сформулировали предположение, в четырнадцатой провели..." | Convert or cut; numbering changes regardless once renumbered. |
| Гл.16, line ~559 | "В главе о слушании мы уже различали консультацию и влияние" | Convert or cut. |
| Гл.16, line ~575 | "В двенадцатой главе мы уже встречали временные сообщества..." | Convert or cut. |
| Гл.16, line ~567 | "История CBO из предыдущей главы..." | Resolves naturally once Гл.14's CBO material folds into New Ch.11. |
| Гл.2, line ~99 | "Это уже другая история... и к ней я вернусь в другой главе" | Forward-reference to old Ch.14's CBO scene; resolves once both fold into New Ch.11. |
| SC-054 card, item 4 of "Still open" | Two bare "(Chapter N)" refs inside the Introduction itself (to Chapter 2 and Chapters 6-10) | Already flagged by the source card itself as needing the idea-based fix per `PROSE_QUALITY_POLICY_DRAFT.md`. |

This list is drawn only from the pages read in this task; a line-by-line
regex pass (`глав[а-я]{0,3}\s+\d+`) across the full file is recommended as a
mechanical verification step before any editing begins, since prose
cross-references do not follow one fixed phrasing.

## 6. Decisions required before manuscript editing begins (task 9)

| ID | Decision needed | Why it cannot be resolved by this report |
|---|---|---|
| D1 | Approve Kichkine teacher scene (SC-047) for manuscript use, in what wording, with what anonymization | Author-approval gate; not an editorial or research question. |
| D2 | Approve Anton Nosik half-brother relationship (SC-093) for manuscript use, in what wording | Author-approval gate; both Anton and Boris Nosik are real public figures, so this is the author's own biographical-disclosure choice, not a privacy-of-others question. |
| D3 | Whether the OpenAI/Altman November 2023 case (Ch.9) is in-scope of the founder's "Nvidia/OpenAI" removal instruction, distinct from the Ch.6 Nvidia-deal story | The founder's list names "Nvidia/OpenAI" as one item without distinguishing the two separate uses found in the manuscript. |
| D4 | Reconcile SC-049's own flagged internal conflicts (dates, routes, role counts, "numerical units") before New Ch.11 is written | The card documents this gap itself; it is a fact-verification task, not an editorial one. |
| D5 | How to handle old Гл.16's Bombom-dependent organizing device — reconstruct with a different contrast case, fold its argument into another chapter without a "versus" structure, or accept a genuine content loss | This is a structural-editorial call about the book's argument, properly the Chief Editor's or Founder's to make, not something a research/mapping task should resolve unilaterally. |
| D6 | Whether the Facilitate/Advise Интерлюдия survives as a standalone unit outside the 15-chapter count, or folds into a numbered chapter | The founder's proposed architecture has no numbered slot for it; the four-step Diagnose/Design/Launch/Transfer model treats Facilitate/Advise as cross-cutting per DECISION_0006, so precedent favors folding it in, but this changes the shape of two chapters and should be confirmed. |
| D7 | Whether New Ch.5 (full TCF story) is assembled from the existing founder-interview cards alone, or requires a fresh intake interview | Not yet assessed; the existing cards were not read in full during this task (see Section 3). |
| D8 | Confirm chapter numbering resolves the current "missing Гл.20" gap explicitly, and whether Заключение/Приложения are renumbered or left as unnumbered end matter | Purely mechanical, but needs an explicit answer rather than silent inheritance. |

## 7. Content-proportion estimate (rough, line-count based, not word-count exact)

Estimated on the current 21-chapter manuscript's line spans, treating each
current chapter as either personal/TCF/international-case/theory-dominant
by its majority content in this reading pass. This is a rough instrument,
offered to show direction, not a precise audit — a proper word-count pass
against the finished 15-chapter draft is recommended once cases are decided
(Decision D5 in particular changes this materially).

| Category | Rough current share | Founder's target | Direction of required change |
|---|---|---|---|
| Personal stories (non-TCF, non-TAK.Shtab) | ~10-15% (Vipassana, Kichkine, Ch.2's Rabinovich/office material, the 26-year-friendship story) | 15% | Roughly on target once Bombom (currently counted separately) is removed. |
| TCF | ~10% as currently scattered, likely higher once New Ch.5 exists | 20% | Increases mechanically once New Ch.5 is written; no new material invented, just consolidated and expanded from existing interview cards. |
| Theory / research | ~40-45% | 40% | Roughly on target; theory content is already the manuscript's largest share. |
| International cases | ~15-20% including the cases flagged for removal; ~10% once they are cut | 25% | **This is the direction most at risk.** Removing Bombom, Chief, Dewey & LeBoeuf, CrowdStrike/Delta, Zoho, Abercrombie & Fitch reduces case content substantially; see `THEORY_AND_CASE_PLACEMENT_MAP_v0.1.md` for the replacement-case analysis and the explicit gap where the corpus does not yet supply enough strong candidates. |

