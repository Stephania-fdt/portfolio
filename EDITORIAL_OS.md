# Editorial OS

The operating system for this portfolio's design language. This is not a résumé site — it's a premium editorial magazine that happens to be about one Product Designer. Every decision below exists to protect that feeling. Read this before designing or building any new section.

Status markers: ✅ built · 🔜 designed, not built · — not yet discussed.

---

## 1. Narrative arc

The reading order is deliberate: understand how she thinks before learning where she's worked. The chronological CV (Timeline) is held until the end, on purpose.

| # | Section | Role in the story | Status |
|---|---|---|---|
| — | **Hero** | The cover. Opens with the name, unpreceded. | ✅ |
| 1 | **Selected Work** | The proof — signature case studies, shown before anything is explained. | ✅ |
| 2 | **Editorial Quote** | A rhythm break / breather between Work and the thinking chapters. | ✅ (quote text is a draft — see §8) |
| 3 | **Design Principles** | What she believes. | ✅ (content is draft — see §8) |
| 4 | **The Process** | How she works (Discover → Frame → Design → Validate → Scale). Editorial, not a diagram. | ✅ (content is draft — see §8) |
| 5 | **Selected Thoughts** | Short philosophy statements — Product Design, Design Systems, Accessibility, AI. Replaces a conventional testimonials section. | ✅ (content is draft — see §8) |
| 6 | **About** | The person behind the thinking. The one section where a portrait is appropriate. | — |
| 7 | **Timeline** | Career chronology — deliberately last, right before Contact. | — |
| 8 | **Contact** | The back cover. Closing statement + minimal colophon links. | — |

**Why this order:** Principles → Process → Thoughts form one uninterrupted arc (belief → method → reflection) with no biographical interruption. About and Timeline follow only once that arc is complete.

---

## 2. The chapter ritual (what every section shares)

Every section after Hero opens the same way: a small `font-mono`, tracked-out kicker naming the section, paired with a hairline rule. That's the *only* repeated device. Everything after it is section-specific — that's where each section's "own visual identity" comes from. Consistency in the opening beat, freedom after it.

---

## 3. Reusable primitives

Build once, recombine per section — don't template the same layout seven times.

- **`Container` / `Section` / `Button`** ✅ built (`src/components/ui/`)
- **`GhostMark`** ✅ built (`src/components/ui/ghost-mark.tsx`) — the oversized, 5%-opacity `font-heading` texture. Extracted from Hero's inline ghost initial once Editorial Quote needed the identical device for its quotation mark. One component, two call sites, never a third copy-paste.
- **`EditorialEntry`** ✅ built (`src/components/ui/editorial-entry.tsx`) — numeral (arabic, roman, or `false` to omit) + eyebrow + large title + body (`string` or `string[]` for one-or-two real `<p>` paragraphs), `children` slot for anything extra. Its numeral is `aria-hidden` — both "II" and zero-padded "01" read poorly aloud, and the entry's own heading already carries the meaning. Used by:
  - Selected Work ✅ (with image + technologies + CTA in `children`, arabic numerals, alternating sides via `WorkItem`)
  - Design Principles ✅ (bare, arabic numerals — the intentional pure-typography counterpoint to Work's image-forward rhythm)
  - The Process ✅ (bare, **roman numerals** — its one deliberate distinction)
  - Selected Thoughts ✅ (bare, **`numeral={false}`** — a collection of essays, not a numbered sequence; category as eyebrow, headline as title, two paragraphs as body)
- **`EditorialList`** ✅ built (`src/components/ui/editorial-list.tsx`) — the hairline-divided, scroll-fadeUp list wrapper around bare `EditorialEntry` items, now forwarding `eyebrow` per item. Extracted once Design Principles and The Process turned out to be byte-for-byte the same structure, not just similar. Selected Work stays its own composition (`WorkItem` + `Work.tsx`) since it genuinely differs — image, CTA, alternating sides.
- **`Quote`** ✅ built (`src/components/ui/quote.tsx`), large scale only (Editorial Quote's centered breather). **Correction:** this document previously planned a compact, left-aligned variant of `Quote` for Selected Thoughts. Once that section's real shape emerged (category + headline + two paragraphs, not a single quote + attribution), `EditorialEntry`/`EditorialList` turned out to be the correct fit instead — extended with `numeral={false}` and multi-paragraph support rather than forking `Quote`. `Quote` remains single-purpose: Editorial Quote's centered breather only.
- **`SectionKicker`** ✅ built (`src/components/ui/section-kicker.tsx`) — formalizes the §2 chapter ritual. Extracted once Design Principles made it the second verbatim copy of Work's kicker+hairline row; Work has been refactored to use it too. Editorial Quote remains a deliberate exception (§7) — no visible kicker, but it still carries a visually-hidden `sr-only` heading for screen-reader navigation.

---

## 4. Type system (three voices, never mixed)

- **`font-heading` (General Sans)** — the name, section titles. The singular "mark" voice.
- **`font-mono` (IBM Plex Mono)** — kickers, labels, technologies, captions, numerals, attributions. The "precise/identifier" voice. Never body prose.
- **`font-sans` (Inter)** — body copy, value propositions, testimonial/thought statements. The reading voice.

Key scale tokens beyond the standard `text-xs`→`text-7xl` (all in `src/index.css`, all fluid via `clamp()` above `2xl`):
- `--text-hero` — the name mark only. Never reused elsewhere.
- `--text-display` — oversized ghost type (ultra-low-opacity background marks). Never real copy.
- `--text-2xs` — micro-labels only (spine tags, edition marks).
- `--tracking-hero` — tighter than any general heading gets; reserved for the name.

---

## 5. Color discipline

Accent (`#92A8D1`) fails WCAG AA as text on our background (~2.3:1) — **it never touches real copy.** It's confined to small decorative marks: hairline tints, the scroll-cue dot, and similar non-textual details. This is a hard rule, not a style preference — check contrast before ever proposing accent-as-text.

---

## 6. Motion

Calm `fadeUp` only (`src/lib/motion.ts`), `ease-standard` curve, no bounce, no overshoot. On-mount stagger for Hero; `whileInView` (once) scroll-trigger for everything below the fold. `prefers-reduced-motion` is handled globally in CSS — components don't need their own reduced-motion branching beyond `initial={shouldReduceMotion ? false : "hidden"}`.

---

## 7. Explicit guardrails — avoid even when it would be easier

- No card grids, no Bootstrap/Dribbble-style tiles
- No dashboard patterns (icon-in-a-box feature grids, timeline dots/progress bars, star-rating testimonial cards)
- No gradients as decoration
- The Process is an editorial passage, not a step diagram — no arrows, no connecting lines, no circular step badges
- Alternating asymmetric layout is Work's signature move — don't reuse it elsewhere or it stops reading as intentional
- The centered-text treatment is reserved for the Editorial Quote interlude — the exception that proves the left-aligned rule
- Every spacing/color/radius/typography value comes from a token in `src/index.css` — no arbitrary one-off values without first checking whether a token already fits

---

## 8. Open questions before building the next sections

- Editorial Quote: `src/content/quote.ts` holds a **draft** statement in Stéphania's established voice — needs her real philosophy statement before shipping
- Design Principles: `src/content/principles.ts` holds 4 **draft** convictions in her established voice — needs her real principles before shipping
- The Process: `src/content/process.ts` holds **draft** passages for all five stages — needs her real approach before shipping
- Selected Thoughts: `src/content/thoughts.ts` holds 4 **draft** essays (Design Systems, AI, Accessibility, Product Strategy) in her established voice — needs her real convictions before shipping
- Contact: form vs. mailto-style closing statement — undecided, functional not aesthetic
