import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { transition } from "@/lib/motion"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"

/** Only checks that were actually run and passed — nothing inferred. */
const CHECKS = [
  { label: "TypeScript", value: "Clean — tsc -b --noEmit" },
  { label: "Lint", value: "Clean — oxlint" },
  { label: "Horizontal Overflow", value: "None, 320px–1440px" },
  { label: "Desktop Visual Check", value: "Verified" },
  { label: "Mobile Visual Check", value: "Verified" },
  {
    label: "Breakpoints Tested",
    value: "320 / 375 / 390 / 430 / 768 / 1024 / 1440",
  },
  { label: "Project Hierarchy", value: "Verified — 5 projects, exact order" },
]

/**
 * Portfolio case study — Chapter 11, Testing & Validation. Same bordered
 * fact-grid as SPF's Facts.tsx, filled with the checks that were actually
 * run against this codebase during this project — not usability-test
 * results, which don't exist and aren't claimed.
 */
function Testing() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-testing">
      <Container size="content">
        <SectionKicker>Testing & Validation</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>
            These are the checks that were actually run against this codebase,
            not a general claim about quality. No usability testing has been
            conducted on this specific site, and none is claimed here.
          </p>
        </SubsectionText>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={transition.slow}
          className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2"
        >
          {CHECKS.map((check) => (
            <div key={check.label} className="bg-background p-8">
              <p className="font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                {check.label}
              </p>
              <p className="mt-3 text-lg font-medium text-foreground">
                {check.value}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="mt-16 max-w-2xl">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            Supporting Infrastructure
          </p>
          <SubsectionText className="mt-4">
            <p>
              Beyond the manual checks above, an automated WCAG A/AA
              accessibility test (axe-core, via Playwright) runs against the
              home page, and a pre-commit hook runs lint on every commit — real,
              standing infrastructure, not a one-time pass.
            </p>
          </SubsectionText>
        </div>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL(0.1))}
          className="mt-16 max-w-2xl text-xl leading-snug font-medium text-foreground italic md:text-2xl"
        >
          Every layout change was checked at 320px–1440px before shipping — not
          assumed.
        </motion.p>
      </Container>
    </Section>
  )
}

export { Testing }
