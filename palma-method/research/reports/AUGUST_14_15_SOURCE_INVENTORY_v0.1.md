---
id: AUGUST_14_15_SOURCE_INVENTORY_v0.1
type: report
status: draft
owner: claude
task_id: TASK_CLAUDE_0018
created: 2026-08-15
privacy_level: internal
---

# Source inventory — 14-15 August 2026

Registry of everything produced or gathered in the 2026-08-14/15 research push, per
TASK_CLAUDE_0018 Stream 1. Compiled from source cards already registered in the repo,
the current session's own record of what it did, and a filesystem check of the local
private-file locations each card already points to (existence only — content was not
re-read for this pass beyond what the corresponding source card already discloses).

**Repository is public.** No audio, full private transcript, real name of a personal
acquaintance, contact detail, private Notion URL, or the Luciana grief material is
reproduced below. Where a private location is named, only the path/handle is given,
never its content.

## 1. TCF member interviews

| # | Stable ID | Date | Participant (safe label) | Format | Original location | Audio exists | Full transcript exists | Transcribed with / when | Verified vs. audio | Consent status | Citation OK | Naming OK | Public-safe card exists | Chapters | Still needed |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | SC-095 | 2026-08-14 | "Francisco" (personal friend/neighbour of author) | Semi-structured, in-person | `~/Downloads/12-09-29.m4a` (+ trimmed `12-09-29 (mp3cut.net).m4a`); machine transcripts `12-09-29.txt` and `12-09-29-speaker-separated.md` | Yes | Yes (speaker-separated version now complete — earlier card version noted a ~5-min TurboScribe cutoff; that gap is closed) | TurboScribe (unpunctuated) + a later speaker-separated pass | No — two names read as garbled/uncertain in raw output per card | Real-name use: **equivocal, treat as non-consent** (see card Safety section). General material use: told on record at interview start that material would be used as indirect/paraphrased description — proceeds under [[feedback-consent-after-draft]] | Indirect/paraphrase only, no direct quotation | **No** — standing no-real-names rule; card also flags an unresolved wartime-relocation safety boundary | Yes (`tcf-francisco-member-interview-2026-08-14.md`) | 2, 9, 10, 16 | Audio verification of the two uncertain names; the wartime-relocation/safety-boundary re-ask before any use of that material |
| 2 | SC-096 | 2026-08-14 | "Rami" (relocated, occasional attendee) | Semi-structured, video call | `~/Downloads/Rami .txt` (Notion AI meeting-notes export; no separate audio retained) | No (video-call notes only) | Yes, full session, no cutoff | Notion AI meeting notes (auto-summary + transcript), single-speaker-labeled | N/A (no audio retained to verify against) | **No on-record consent exchange exists at all** — card's own Safety section flags this explicitly. Per [[feedback-consent-after-draft]] this does not block drafting, but it does block calling this material "confirmed" until asked | Genericized/paraphrased only, pending consent | **No** — standing rule, plus several third parties in the transcript (João Muller, Diogo, Bruna, Inês, Jana, Cathal, Ankit, Louise, "Sardo") who have not consented at all | Yes (`tcf-rami-member-interview-2026-08-14.md`) | 2, 9, 10, 16 | The interview-guide consent script (recording permission, quotation approval, name preference, off-record boundary) has never been run for this participant — outstanding |
| 3 | SC-097 | 2026-08-15 | "Anya" | Semi-structured, in-person, dictaphone | `~/Downloads/10-22-00.m4a`; full transcript in Notion (`notion:3bdc42d0-b11b-8168-a114-dbac0c311e07`), not retained in repo | Yes | Yes, with a known ~2-3 minute gap (transcription-model repetition artifact, same failure mode later fixed for Trisha's audio — this file has not been re-run with `condition_on_previous_text=False`) | mlx-whisper | No | Not addressed in card as a discrete question — treat as **not yet obtained**, same [[feedback-consent-after-draft]] default applies | Genericized/paraphrased only, pending consent | **No** — standing rule; several named third parties in the transcript are unconsented | Yes (`tcf-anya-member-interview-2026-08-15.md`) | 2, 3, 9, 10, 16 | Re-run transcription with `condition_on_previous_text=False` to recover the lost ~2-3 min segment; audio verification |
| 4 | SC-098 | 2026-08-14/15 | "Luciana" (member #1) | Asynchronous voice memos (WhatsApp) | `~/Downloads/Luciana voice memos/*.opus` (13 files); assembled summary `~/Downloads/luciana-voice-answers-assembled.md`; **per-clip transcripts currently sit only in this session's ephemeral scratchpad** (`.../scratchpad/luciana_transcripts/luciana_01.txt`…`_13.txt`) | Yes | Yes (assembled); per-clip raw transcripts not durably stored — see privacy action below | mlx-whisper (large-v3-turbo) | No | Not addressed as a discrete consent question; grief material explicitly requires a **separate** consent conversation before any use regardless (see card) | Indirect description only; grief passage frozen pending separate consent | **No** — standing rule | Yes (`tcf-luciana-member-interview-2026-08-15.md`) | 2, 3, 9, 16 | **Consent conversation specifically about the grief/Roxy material before the Chapter 14 passage already drafted from it can be finalized** — see privacy action |
| 5 | SC-099 | 2026-08-14/15 | "Trisha" (working alias between author and Claude only — **not her own choice, must never appear in manuscript text**) | Stage 1: informal, unrecorded conversation. Stage 2: recorded, transcribed follow-up | Stage 2 audio `~/Downloads/14-16-17.m4a`; transcripts `trisha_interview.txt`, `trisha_retry.txt`, `trisha_srt.srt` **currently only in this session's ephemeral scratchpad** | Yes (stage 2 only) | Yes, complete (second transcription pass with `condition_on_previous_text=False` recovered the full recording after a first pass lost content to the same repetition artifact as Anya's) | mlx-whisper, retried | Not formally, but the clean retry transcript reads coherently against the recovered SRT | Consent for use "**pending**" per card; the card's own text ("No private working file exists yet") is now **stale** — the recorded follow-up superseded it and should be corrected | Not yet cleared for use | **No** — no name or alias may appear, alias not self-chosen (unlike "Рабинович") | Yes (`tcf-low-regularity-member-intake-2026-08-15.md`) | 2, 11 | Card's "no private working file exists yet" line needs updating to point at the actual audio/transcript; **explicit consent still outstanding** |

## 2. "Trisha comment" (Stream 7)

The task brief asks for a separate registration of a "комментарий Триши" (Trisha's
comment), distinct from her interview. I found no evidence of a second, separate
comment beyond what SC-099 already documents in full (the stage-1 informal
conversation and the stage-2 recorded ~12.5-minute follow-up, both fully captured in
the card). It is possible the task author intended SC-099 itself, or is referring to a
remark I do not have access to.

**`SOURCE_MISSING`** — please confirm with Serhii whether "Trisha's comment" means
something beyond SC-099's existing content. If it does, the original needs to be
supplied (audio, message screenshot, or verbatim text) before a card can be written;
it should not be reconstructed from memory.

## 3. Bombom/Sandra continuation

No new Sandra/Bombom material was found beyond what `bombom-founder-interview-2026-08-03.md`
(SC-045) already records, including its 2026-08-08 follow-up (the two-croissants
detail, the lyceum-admission help, and the confirmed, unsuccessful cold outreach to
restaurant groups — this last detail was used in Chapter 20 today). If a newer
conversation with Sandra happened outside this session's visibility, it is not
reflected here.

## 4. Author (Serhii) clarifications registered 2026-08-14/15

| Clarification | Where it currently lives | Action needed |
|---|---|---|
| The TAK.Shtab "empty room and telephone" origin image, used repeatedly in the manuscript (Chapters 17, 18, 19, 21), was **fabricated** — no such scene was ever described by the author. It was invented in an earlier drafting pass and compounded by two of today's own additions before being caught and corrected. | Manuscript snapshot already reflects the fix (all instances rewritten to the grounded "empty office, first delivery growing to boxes to cars" account, which *is* consistent with `serhii-tak-shtab-story-intake.md`). **`serhii-tak-shtab-story-intake.md` itself never contained the fabrication**, so no correction is needed there — but it has no explicit note warning future sessions not to reintroduce it. | Recommend adding a short "known fabrication to avoid" note to SC-049 (see Stream 4/6 notes below) |
| The military-enlistment-office scene (Chapter 17 opening) needed nuance: the author was not personally desperate to fight — it was a shared moment, many people in the country did the same thing in those first days. | Fixed directly in the manuscript snapshot (Chapter 17 opening and the Chapter 21 callback both now carry this framing). | None outstanding |
| TAK.Shtab's organizational status: it is **2026** now; the organization **stopped operating in 2024**. The author does not want the book to state that it closed, but the manuscript also must not claim it is "still running, three years later" (false). | Fixed in the manuscript snapshot — all present-tense "still exists/still helps" claims were rewritten to past-tense, dated at 2024, without asserting either continuation or closure. | None outstanding for the manuscript. `serhii-tak-shtab-story-intake.md`'s own notes do not currently record this operating-status boundary explicitly — recommend adding it so a future session doesn't reintroduce present-tense framing. |
| Consent workflow: the author confirmed his standing practice is to seek every interview subject's explicit consent only once he has manuscript text he is satisfied with — missing consent is not a reason to withhold drafting. | Saved as a private Claude memory (`feedback-consent-after-draft`, outside this repo) | Not a repo action item; noted here so the reasoning behind Stream-1/2's consent-status language is traceable |
| A lead on a possible new personal story — a member who met someone at TCF and later bought real estate from them — was mentioned by the author but not yet told in enough detail to source. | Nowhere yet — not a registered card | Needs the author to actually tell the story before anything can be drafted or sourced |

## 5. New Part IV manuscript content (2026-08-14/15)

The full current text is preserved in `palma-method/research/chapter-packets/MANUSCRIPT_SNAPSHOT_2026-08-15.md`
(commit `7bee61f`). This includes:

- The full rewrite/drafting of Chapters 17-21 (Diagnose/Design/Launch/Advise/Handover),
  anchored on the TAK.Shtab story and the military-enlistment-office opening.
- A word-count growth pass adding a business case to 11 chapters (see Stream 4 table
  for the 5 that fall in Part IV: IBM, Abercrombie & Fitch, CrowdStrike/Delta, the
  Schein/DEC consulting relationship, Zoho/Vembu).
- A theory-background deepening pass across the whole book (21 citations touched;
  those falling in Chapters 17-21 are: Croskerry, Dynes & Quarantelli, Brehm, Schein's
  *Humble Inquiry*, Selznick — see Stream 4).
- The fabrication fixes described in section 4 above.

## 6. New external research, authors, and business cases (2026-08-15, whole book)

All were verified via WebSearch before use and are grounded in named, dated, real
publications. The Part IV subset gets full source cards under Stream 4 of this task;
the Chapters 1-16 subset (out of this task's Stream-4 scope, listed here only for a
complete inventory) is: Georg Simmel (1908, two works), Robert Craig (1999), Mark
Suchman (1995), Scott Feld (1981), Randall Collins (2004), McPherson/Smith-Lovin/Cook
(2001), Krackhardt & Hanson (1993), Pierre Bourdieu (1986), Elizabeth Morrison, Amy
Edmondson (1999), Lamont & Molnar (2002), Carol Weiss (1995), Everett Rogers (1962),
the Barcelona Principles (2010), Ronald Burt's Raytheon study specifics, Alvin
Gouldner (1960), and Fonseca/Pereira/Esteves (2014, Ukrainian migration to Portugal —
replaced a previously-unattributed claim in Chapter 7).

## 7. Privacy actions required — `PRIVATE_ARCHIVE_ACTION_REQUIRED`

I have no access to a durable private archive beyond what each source card already
points to (Notion pages, `~/Downloads`). I did not create a public substitute.

Two items were found sitting only in this session's ephemeral scratchpad (tied to this
specific Claude Code session and not guaranteed to survive it):

1. **Luciana's per-clip raw transcripts** (`luciana_01.txt` … `luciana_13.txt`).
2. **Trisha's stage-2 transcripts** (`trisha_interview.txt`, `trisha_retry.txt`,
   `trisha_srt.srt`).

**Resolved during this task**: both sets were copied out of the scratchpad into
`~/Downloads/luciana-transcripts-raw/` and `~/Downloads/trisha-transcripts-raw/`
respectively — the same local, private, non-repo location this project already treats
as its working-file layer for these interviews. Nothing was committed to the public
repo. If Serhii or Codex later wants these moved into Notion (matching the pattern
used for Anya's and Rami's transcripts), that is still worth doing, but the immediate
loss risk is closed.

Everything else (remaining audio files in `~/Downloads`, Notion pages referenced by
`url_or_identifier` in each card) already sits in the locations this project has
consistently treated as its private layer, outside the public repo.
