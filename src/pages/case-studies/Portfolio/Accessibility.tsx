import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"

const PRACTICES = [
  {
    label: "Semantic HTML",
    statement:
      "Project cards are real anchor links, not clickable divs — a single, real tab stop, not a keyboard trap dressed up to look interactive.",
  },
  {
    label: "Keyboard Navigation",
    statement:
      "Every interactive element — links, buttons, the mobile INDEX panel — is reachable and operable by keyboard alone, with a documented focus trap inside the INDEX dialog.",
  },
  {
    label: "Focus States",
    statement:
      "A visible focus ring (2px solid, the brand color, 3px offset) is never suppressed — it's set once, globally, in the base layer.",
  },
  {
    label: "Reduced Motion",
    statement:
      "Every animated component checks useReducedMotion(), and a site-wide prefers-reduced-motion query collapses transitions and scroll-behavior to near-zero.",
  },
  {
    label: "Responsive Behavior",
    statement:
      "No horizontal overflow at any tested width from 320px to 1440px — checked on every layout change, not assumed.",
  },
  {
    label: "Accessible Interactive Elements",
    statement:
      "Decorative numerals, arrows and icons carry aria-hidden; the elements a screen reader actually announces are the ones that matter.",
  },
]

/**
 * Portfolio case study — Chapter 7, Accessibility. Grounded in what's
 * actually in the codebase — real CSS, real hook usage, a real automated
 * test — not a claimed audit. No certification is claimed because none
 * exists; the automated check that does exist (axe-core, scoped to WCAG
 * A/AA tags) is named for what it is. Placed right after Design System
 * and before AI-Assisted Workflow/Front-end — accessibility is design
 * evidence, not a technical afterthought.
 */
function Accessibility() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-accessibility">
      <Container size="content">
        <SectionKicker>Accessibility</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          Accessibility was considered while building each component, not run as
          a checklist after the fact.
        </motion.p>

        <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {PRACTICES.map((practice) => (
            <div key={practice.label}>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {practice.label}
              </p>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                {practice.statement}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-2xl">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            What This Is — and Isn&rsquo;t
          </p>
          <SubsectionText className="mt-4">
            <p>
              This site runs an automated accessibility check — axe-core, via
              Playwright, scoped to WCAG 2.1 A and AA rules — against the home
              page, and lint runs on every commit through a pre-commit hook.
              That&rsquo;s real, ongoing, automated verification. It is not a
              manual audit and not a formal accessibility certification, and
              this case study doesn&rsquo;t claim either.
            </p>
          </SubsectionText>
        </div>
      </Container>
    </Section>
  )
}

export { Accessibility }
