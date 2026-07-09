# Product Vision

Consolidation of the Product Vision decisions already approved in prior sprints. Nothing below is new strategy or reinterpretation — this is the existing source of truth, persisted. Where a decision has since been implemented in code, its status is noted; the decision itself is unchanged from when it was approved.

**Status: frozen as of 2026-07-08**, alongside `EDITORIAL_OS.md`, `PORTFOLIO_CONSTITUTION.md`, and `docs/01-MANIFESTO.md` (the Design Manifesto).

---

## Hero — approved Sprint "Sprint 1"

1. The differentiator is the intersection of Design Systems, Accessibility, AI-fluency, and enterprise complexity, held simultaneously at seniority — not any single specialization. The Hero's dominant statement must name that intersection, not a list of skills.
2. The five-second takeaway is a fact, not just a feeling: what she does and at what level. The feeling is the register the fact is delivered in, not a second, competing memory.
3. The emotional target is earned calm — confidence that reads as already-arrived because the claim underneath it is specific enough to survive a skeptical reader, not because the page is merely quiet.
4. The primary CTA is "View my work" — proof before pitch, both because it matches the earned-calm register and because it's consistent with this studio's already-committed narrative structure. "Let's talk" stays secondary.
5. Selected Work still immediately follows the Hero — the Hero asserts, Work proves, with no detour in between.

**Status: implemented.** `Hero.tsx` and `HeroBackground.tsx` carry this hierarchy — specialization statement as the dominant `h1`, byline demoted, primary CTA unchanged, structure verified against build/lint/test/Playwright (including WCAG A/AA) at the time of implementation.

## Selected Work — approved Sprint "Sprint 2 continuation"

1. Lead with the strongest proof. The SPF Design System project gets structural prominence — more space, first position, a slightly longer motion beat — because it's the literal demonstration of the Hero's differentiator, not because it's arbitrarily "featured."
2. Real images are the actual missing proof mechanism, not a cosmetic nice-to-have. A 3-second read is won by recognition before comprehension; text alone, however well-written, can't do what a real screenshot does.
3. The editorial form stays — no cards, no product-launch chrome, no new visual language. Extend what's already established, don't replace it.
4. Each entry is a complete, self-sufficient proof point, not a teaser — because there's nowhere real to send someone yet.
5. Zero new brand-color usage. Hierarchy is expressed through space, sequence, and motion pacing — not more color.

**Status: partially implemented (Sprint 3).** `Work.tsx` gives SPF (index 0) more vertical space (`py-section` vs. `py-section-sm`) and a slower entrance (`fadeUpSlow` vs. `fadeUp`) than the other projects — point 1 is real. Points 2 and 4 are not: no real project images exist for any project, and "Read Case Study" links still point to routes that don't exist. Point 5 was respected — no new brand-color usage was added.

### Project hierarchy — added 2026-07-08, updated 2026-07-09

**The Belgian Ministry of Foreign Affairs Design System is the permanent flagship project of this portfolio.** It best represents her current professional level: ownership, Design System strategy, accessibility, collaboration with developers, and organizational impact. This is not a default (first project happens to lead) — it's an explicit, standing editorial rule.

Every other project added to Selected Work is secondary to SPF by design. Each serves a different, complementary purpose, not a competing one:

1. **SPF — Enterprise Product Design, Design System, Accessibility, Governance.** Professional maturity and leadership.
2. **Harmony — End-to-end Product Creation.** Product discovery, UX research, Design Thinking, information architecture, prototyping, testing, and collaborative product creation.
3. **WellPack — Research-driven Marketing Design.** Research methodology, evidence-driven design, transforming market understanding into actionable design briefs, and creating repeatable UX research processes rather than one-off deliverables. _Not_ a business-impact case — WellPack has no quantified business metrics available (the team that held that data never shared it with Marketing), and this portfolio does not claim outcomes it can't verify. Its value is demonstrated through decision quality, not numbers.
4. **Femmes d'Influence — Branding, Community & Product Growth.**

Any future implementation that gives a non-SPF project the lead-position treatment (structural prominence, first sequence, the slower motion beat) contradicts this rule. SPF keeps that treatment regardless of how many other projects are added.

**Standing principle, generalized beyond WellPack**: a project's stated role in this hierarchy must match what its real evidence actually proves. If evidence-gathering reveals a mismatch — as it did for WellPack, originally positioned as "business impact" with no impact evidence to support it — the role gets corrected to fit the evidence, not the other way around. This portfolio does not overclaim.

---

## Not included here

The Art Direction document, the Editorial Assets Bible, and the Storytelling Bible (Case Study Blueprints) were produced in later sprints but were never labeled or approved as "Product Vision" — they're a different category of decision (creative direction and asset/narrative planning), and the Storytelling Bible specifically still has open, unresolved items (the WellPack Blueprint). They aren't consolidated here to avoid misrepresenting unfinished work as frozen, approved vision.
