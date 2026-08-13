import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { formatNumeral } from "@/lib/numerals"
import { REVEAL } from "@/components/ui/case-study-capture"
import { fadeUp, staggerContainer } from "@/lib/motion"

const STEPS = [
  {
    label: "Discover",
    statement:
      "Inspected the existing architecture, content and tokens before writing anything new — what already worked, what a new section had to respect.",
  },
  {
    label: "Define",
    statement:
      "Turned a brief into concrete objectives and a real information architecture, not a wish list.",
  },
  {
    label: "Design",
    statement:
      "Made the visual and structural decisions — hierarchy, composition, what earns space and what doesn't.",
  },
  {
    label: "Build",
    statement:
      "Implemented the decision in React, TypeScript and Tailwind — production code, not a static comp.",
  },
  {
    label: "Test",
    statement:
      "Checked typecheck, lint, responsive behavior and accessibility before calling anything done.",
  },
  {
    label: "Iterate",
    statement:
      "Reviewed the result against intent, corrected what didn't hold, and went back to Discover for the next pass.",
  },
]

/**
 * Portfolio case study — Chapter 4, Process. A numbered sequence that
 * reads left-to-right like the site's other numbered lists (Design
 * Principles, The Process on the homepage), but the last connector
 * points back to the first step instead of ending — the loop is the
 * point: this wasn't a single linear pass through six stages, it was
 * several passes through the same six.
 */
function Process() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-process">
      <Container size="content">
        <SectionKicker>Process</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          Six stages, run more than once — each pass through Build and Test fed
          back into what Discover and Define got right, or didn&rsquo;t.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-6"
        >
          {STEPS.map((step, index) => (
            <motion.div key={step.label} variants={fadeUp} className="relative">
              <p className="font-mono text-2xs text-muted-foreground">
                {formatNumeral(index)}
              </p>
              <p className="mt-2 text-lg font-bold text-foreground">
                {step.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.statement}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          {...(shouldReduceMotion ? { initial: false } : REVEAL(0.1))}
          className="mt-12 flex items-center gap-3 border-t border-border pt-6"
        >
          <span aria-hidden="true" className="font-mono text-lg text-brand">
            ↻
          </span>
          <p className="font-mono text-2xs tracking-widest text-muted-foreground uppercase">
            Iterate feeds back into Discover — this loop ran more than once
            before anything shipped.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}

export { Process }
