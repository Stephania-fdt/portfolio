import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL } from "@/components/ui/case-study-capture"

/**
 * Portfolio case study — Chapter 13, Outcome. The exact closing statement
 * specified for this chapter — no quantitative results added, because
 * none exist to report.
 */
function Outcome() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-outcome">
      <Container size="content">
        <SectionKicker>Outcome</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          The result is a portfolio that functions not only as a personal
          website, but as a living demonstration of my Product Design practice —
          combining Design Systems, accessibility, front-end implementation and
          AI-assisted workflows.
        </motion.p>
      </Container>
    </Section>
  )
}

export { Outcome }
