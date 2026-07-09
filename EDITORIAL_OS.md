# Editorial OS

The operating manual of this repository's AI Product Studio — the highest authority governing every skill, specialist, and decision made here. This is not a résumé site — it's a premium editorial magazine that happens to be about one Product Designer. Every rule below, at every layer (product, design, code, review), exists to protect that feeling. Read this before designing, building, or invoking any specialist.

Status markers: ✅ built · 🔜 designed, not built · — not yet discussed.

---

## Hierarchy

```
EDITORIAL_OS
     ↓
AI Product Orchestrator (.claude/skills/ai-product-orchestrator/)
     ↓
Specialists (.claude/skills/*)
```

EDITORIAL_OS is the highest authority in this repository. No specialist may contradict it. Every skill — orchestrator included — must follow it. Where a skill's own instructions and this document appear to conflict, this document wins; that conflict is itself a signal the skill needs updating, not a license to override this file silently.

---

## Governance Documents

Four permanent references, each with a distinct job. EDITORIAL_OS remains the operational authority between them — where any of the other three appear to conflict with this document, this document wins.

| Document                      | Governs                                                                                                                                                                                                                                                                                                                     |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `EDITORIAL_OS.md` (this file) | _How the studio works_ — process, hierarchy, coding standards, review gates.                                                                                                                                                                                                                                                |
| `PORTFOLIO_CONSTITUTION.md`   | _What the portfolio is trying to be felt as_ — narrative architecture, chapter structure, the manifesto behind the chapters.                                                                                                                                                                                                |
| `PRODUCT_VISION.md`           | The approved product-strategy decisions per section (Hero, Selected Work) — what each section must communicate and why, independent of its current implementation state.                                                                                                                                                    |
| `docs/01-MANIFESTO.md`        | The Design Manifesto — referred to elsewhere as "DESIGN_MANIFESTO"; this is the one real file that name points to. (A stray, empty, untracked directory literally named `.claude/DESIGN_MANIFESTO.md` also exists in this repo — it is not this document, carries no content, and is a leftover artifact, not a reference.) |

One governing test from `PORTFOLIO_CONSTITUTION.md` binds every future decision in this studio, not only narrative ones: **does this make the portfolio feel more like Stéphania?** If the answer is no, reject it.

**Status: all four frozen as of 2026-07-08.** Frozen means settled, not unreadable — still the reference for every future decision, but not open for casual revision. Reopening any of them requires the same deliberateness that created them, not an incidental edit made in passing while doing something else. This does not freeze the portfolio itself — only these governance documents. The portfolio is the product, and every sprint from here improves it.

---

## 1. Philosophy

This is not a résumé site — it's a premium editorial magazine that happens to be about one Product Designer. Every decision, at every layer, exists to protect that feeling: the narrative arc a reader moves through (§7.1), the restraint in what's _not_ built (§7.6), the discipline of a token system over arbitrary values, the refusal to ship an inaccessible or sluggish interface in the name of speed. The AI Product Studio's entire specialist structure exists to hold that bar under pressure — across many small requests, many sessions, many contributors (human or AI) — not just to hold it once.

Timeless over trendy. Every specialist, regardless of lane, is accountable to that standard.

---

## 2. Collaboration Rules

- **EDITORIAL_OS outranks every skill.** A specialist's own `SKILL.md` describes _how_ it works; this document describes _what's allowed_. The latter always wins.
- **Stay in your lane.** Review-only specialists (`ai-design-director`, `creative-director`, `design-system-guardian`, `designops-architect`, `accessibility-guardian`, `motion-designer`, `performance-engineer`, `code-reviewer`, `ai-design-researcher`, `senior-product-designer`, `career-strategist`, `ai-project-manager`) never write or edit files. Implementation specialists (`senior-frontend-engineer`, `senior-backend-engineer`, `ux-ui-engineer`) never skip the review a task actually needs just to move faster.
- **Every criticism explains WHY. Every recommendation explains IMPACT.** No specialist praises mediocre work, and none proposes cosmetic change without measurable value — that rule isn't unique to one skill's persona, it's a studio-wide standard.
- **No invented requirements.** Specialists reason from what's actually in the repo (real tokens, real components, real test output) — not from assumption. Verify before recommending; a memory or a claim from a prior session is not the same as the current state of the code.
- **No unnecessary specialists.** The orchestrator (and any specialist working directly) invokes only what a task actually needs. A one-line copy fix doesn't need the full Navigation-redesign chain.

---

## 3. Execution Order

1. **Classify** the request (product / design / engineering / accessibility / motion / performance / research / career — see the orchestrator's category table).
2. **Invoke** the specialist chain that category requires, in order. The AI Product Orchestrator (`.claude/skills/ai-product-orchestrator/SKILL.md`) is the single source of truth for which specialists participate and in what order — this document sets the rules the chain must obey, it doesn't duplicate the chain itself, so the two can't drift out of sync.
3. **Implement**, if implementation is required, via `senior-frontend-engineer`, `senior-backend-engineer`, or `ux-ui-engineer` only.
4. **Pass the review gates** (§10) before anything is considered done.

---

## 4. When to Invoke the AI Product Orchestrator

Invoke the orchestrator when a request:

- Spans more than one specialist's lane (a redesign, a new feature, anything touching both design and engineering).
- Is ambiguous about which category it belongs to.
- Explicitly asks for coordination across specialists ("review this end-to-end", "plan and delegate this").

---

## 5. When Specialists May Work Directly

A specialist may be invoked directly, skipping the orchestrator, when:

- The user names the specialist explicitly (e.g. "use `accessibility-guardian` on the Hero").
- The request is unambiguously single-lane and narrow (a quick contrast check, a single component's motion review, a CV pass) — running the full orchestration ceremony on a request that small would itself violate §2's "no unnecessary specialists" rule.

---

## 6. Coding Standards

- **TypeScript**, strict-leaning: `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly` are on (`tsconfig.app.json` / `tsconfig.node.json`). Code that doesn't satisfy them doesn't ship.
- **Formatting is Prettier's job, not a human's or an LLM's judgment call**: no semicolons, double quotes, Tailwind class sorting via `prettier-plugin-tailwindcss` (`.prettierrc.json`). Don't hand-format against it.
- **Two linters, two jobs**: `oxlint` (`npm run lint`) is the fast default gate; `eslint` (`npm run lint:eslint`, `typescript-eslint` + `eslint-config-prettier`) runs deeper TS-correctness checks. Both must pass; neither substitutes for the other.
- **Tests split by what they verify**: `vitest` (`npm run test`) covers pure logic in `src/lib/*` — node environment, no DOM. `playwright` (`npm run test:e2e`) covers real browser behavior: rendering, visual regression, and accessibility (`@axe-core/playwright`, scoped to WCAG 2.0/2.1 A/AA). Don't reach for one where the other is the right tool.
- **Every spacing/color/radius/typography value comes from a token in `src/index.css`.** See §7.6 — this is a design rule and a coding rule simultaneously; there is no arbitrary-value exception for either discipline.
- **New dependencies get configured, not just installed.** An installed-but-unwired tool (a linter with no config, a test runner with no test) is worse than not installing it — it's a false signal that coverage exists.

---

## 7. Design Principles

### 7.1 Narrative arc

The reading order is deliberate: understand how she thinks before learning where she's worked. The chronological CV (Timeline) is held until the end, on purpose.

| #   | Section               | Role in the story                                                                                                              | Status                               |
| --- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| —   | **Hero**              | The cover. Opens with the name, unpreceded.                                                                                    | ✅                                   |
| 1   | **Selected Work**     | The proof — signature case studies, shown before anything is explained.                                                        | ✅                                   |
| 2   | **Editorial Quote**   | A rhythm break / breather between Work and the thinking chapters.                                                              | ✅ (quote text is a draft — see §11) |
| 3   | **Design Principles** | What she believes.                                                                                                             | ✅ (content is draft — see §11)      |
| 4   | **The Process**       | How she works (Discover → Frame → Design → Validate → Scale). Editorial, not a diagram.                                        | ✅ (content is draft — see §11)      |
| 5   | **Selected Thoughts** | Short philosophy statements — Product Design, Design Systems, Accessibility, AI. Replaces a conventional testimonials section. | ✅ (content is draft — see §11)      |
| 6   | **About**             | The person behind the thinking. The one section where a portrait is appropriate.                                               | —                                    |
| 7   | **Timeline**          | Career chronology — deliberately last, right before Contact.                                                                   | —                                    |
| 8   | **Contact**           | The back cover. Closing statement + minimal colophon links.                                                                    | —                                    |

**Why this order:** Principles → Process → Thoughts form one uninterrupted arc (belief → method → reflection) with no biographical interruption. About and Timeline follow only once that arc is complete.

### 7.2 The chapter ritual (what every section shares)

Every section after Hero opens the same way: a small `font-mono`, tracked-out kicker naming the section, paired with a hairline rule. That's the _only_ repeated device. Everything after it is section-specific — that's where each section's "own visual identity" comes from. Consistency in the opening beat, freedom after it.

### 7.3 Reusable primitives

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
- **`SectionKicker`** ✅ built (`src/components/ui/section-kicker.tsx`) — formalizes the §7.2 chapter ritual. Extracted once Design Principles made it the second verbatim copy of Work's kicker+hairline row; Work has been refactored to use it too. Editorial Quote remains a deliberate exception (§7.6) — no visible kicker, but it still carries a visually-hidden `sr-only` heading for screen-reader navigation.

### 7.4 Type system (three voices, never mixed)

- **`font-heading` (General Sans)** — the name, section titles. The singular "mark" voice.
- **`font-mono` (IBM Plex Mono)** — kickers, labels, technologies, captions, numerals, attributions. The "precise/identifier" voice. Never body prose.
- **`font-sans` (Inter)** — body copy, value propositions, testimonial/thought statements. The reading voice.

Key scale tokens beyond the standard `text-xs`→`text-7xl` (all in `src/index.css`, all fluid via `clamp()` above `2xl`):

- `--text-hero` — the name mark only. Never reused elsewhere.
- `--text-display` — oversized ghost type (ultra-low-opacity background marks). Never real copy.
- `--text-2xs` — micro-labels only (spine tags, edition marks).
- `--tracking-hero` — tighter than any general heading gets; reserved for the name.

### 7.5 Motion

Calm `fadeUp` only (`src/lib/motion.ts`), `ease-standard` curve, no bounce, no overshoot. On-mount stagger for Hero; `whileInView` (once) scroll-trigger for everything below the fold. `prefers-reduced-motion` is handled globally in CSS — components don't need their own reduced-motion branching beyond `initial={shouldReduceMotion ? false : "hidden"}`. See §8.3 for the accessibility side of this same rule, and §9 for why it's also a performance rule.

### 7.6 Explicit guardrails — avoid even when it would be easier

- No card grids, no Bootstrap/Dribbble-style tiles
- No dashboard patterns (icon-in-a-box feature grids, timeline dots/progress bars, star-rating testimonial cards)
- No gradients as decoration
- The Process is an editorial passage, not a step diagram — no arrows, no connecting lines, no circular step badges
- Alternating asymmetric layout is Work's signature move — don't reuse it elsewhere or it stops reading as intentional
- The centered-text treatment is reserved for the Editorial Quote interlude — the exception that proves the left-aligned rule
- Every spacing/color/radius/typography value comes from a token in `src/index.css` — no arbitrary one-off values without first checking whether a token already fits

---

## 8. Accessibility Principles

Accessibility is mandatory, not a specialist's opinion to weigh against aesthetics — this holds for every skill in the studio, not only `accessibility-guardian`.

### 8.1 Color discipline

Accent (`#92A8D1`) fails WCAG AA as text on our background (~2.3:1) — **it never touches real copy.** It's confined to small decorative marks: hairline tints, the scroll-cue dot, and similar non-textual details. This is a hard rule, not a style preference — check contrast before ever proposing accent-as-text.

Two real contrast bugs of this shape have already shipped and been caught and fixed in this repo (an alpha-reduced `text-muted-foreground` caption in `HeroBackground.tsx` and the same pattern in `WorkItem.tsx`, both below 4.5:1 against their background) — treat "opacity-reduced token text on a light surface" as a pattern to check deliberately, not just at review time.

### 8.2 Automated WCAG gate

`e2e/accessibility.spec.ts` runs `@axe-core/playwright` against the live page, scoped to WCAG 2.0/2.1 A/AA tags. This is a floor, not a ceiling: it catches contrast, missing labels, and structural ARIA problems automatically, but it does not replace human/specialist judgment on screen-reader flow, focus order logic, or semantic correctness — that's `accessibility-guardian`'s job (§10 makes both gates mandatory, not either/or).

### 8.3 Reduced motion

`prefers-reduced-motion` is handled globally (see §7.5) — every animated entrance in this codebase must degrade to its resting state instantly when reduced motion is requested, with no per-component exception.

---

## 9. Performance Principles

- **Fluid type via `clamp()`, not breakpoint jumps** (`src/index.css`, all scale tokens above `2xl`) — headings resize continuously across viewport width instead of snapping, which avoids layout recalculation at arbitrary breakpoints.
- **Motion stays on `opacity`/`transform`** (§7.5) — the only properties that composite without triggering layout or paint. No animating `width`, `height`, `top`, or `left`.
- **No decorative bloat** (§7.6) — no card grids, no gradients, no dashboard chrome. Restraint here is a design principle and a performance principle at once: less DOM, less paint, less to keep accessible.
- **Fonts are self-hosted, not blocking on a slow third-party swap where avoidable**: `Inter` and `IBM Plex Mono` ship via `@fontsource` (bundled, versioned); `General Sans` loads from Fontshare with an explicit `preconnect`, since it isn't available self-hosted. Any new typeface follows the same pattern — self-host if possible, `preconnect` if not, never an unannounced third-party font request.
- **Bundle size is a tracked number, not a vibe.** `npm run build` prints real output sizes — read them before and after a change that adds a dependency; don't guess.
- Deeper Core Web Vitals work (LCP/CLS/INP, code splitting, hydration cost) is `performance-engineer`'s lane — invoke it before adding anything that risks these principles, not after shipping.

---

## 10. Review Gates

Nothing is done until both layers below pass — automated tooling and specialist review are complementary gates, neither substitutes for the other.

**Automated (must pass, in this order of speed):**

1. `npm run lint` (oxlint) — fast default.
2. `npm run lint:eslint` — deeper TS-correctness pass.
3. `npm run format:check` (or the `lint-staged` pre-commit hook, which runs Prettier against staged files only).
4. `npm run build` (`tsc -b && vite build`) — must compile and bundle clean.
5. `npm run test` (Vitest, unit) — pure logic must be correct, not just "looks right."
6. `npx playwright test` (`e2e/smoke.spec.ts`, `e2e/accessibility.spec.ts`) — real browser rendering and WCAG A/AA must hold.

**Specialist (must happen, per the chain the AI Product Orchestrator assigns):**

- The chain's specialists review _before_ implementation is considered final — not as an afterthought once code is already merged.
- `code-reviewer` is the last specialist gate on any implementation task — architecture, security, readability, maintainability, scalability, SEO, and design-system consistency, scored, with an explicit Ship / Request Changes verdict.
- No specialist may wave through a violation of §7, §8, or §9 to unblock a ship decision. If a genuine trade-off exists, it gets surfaced to the user explicitly (per this studio's established pattern of asking rather than deciding silently) — it doesn't get quietly absorbed into an approval.

---

## 11. Open questions before building the next sections

- Editorial Quote: `src/content/quote.ts` holds a **draft** statement in Stéphania's established voice — needs her real philosophy statement before shipping
- Design Principles: `src/content/principles.ts` holds 4 **draft** convictions in her established voice — needs her real principles before shipping
- The Process: `src/content/process.ts` holds **draft** passages for all five stages — needs her real approach before shipping
- Selected Thoughts: `src/content/thoughts.ts` holds 4 **draft** essays (Design Systems, AI, Accessibility, Product Strategy) in her established voice — needs her real convictions before shipping
- Contact: form vs. mailto-style closing statement — undecided, functional not aesthetic
