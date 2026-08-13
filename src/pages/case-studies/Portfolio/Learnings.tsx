import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { formatNumeral } from "@/lib/numerals"
import { fadeUp, staggerContainer } from "@/lib/motion"

const LEARNINGS = [
  {
    statement:
      "Designing while building collapses the distance between a decision and its consequences — a spacing choice that looks fine in a comp can still overflow a 320px screen, and you find out immediately, not in a later handoff.",
  },
  {
    statement:
      "Working with AI without losing design ownership means treating every output as a draft to evaluate, never a decision already made — the discipline is in the review, not in avoiding the tool.",
  },
  {
    statement:
      "Translating a design system into code exposes gaps a static file hides — a token that looks consistent in Figma still has to survive being reused across five different components before it's actually a system.",
  },
  {
    statement:
      "Accessibility during implementation is cheaper and more honest than accessibility as a later audit — checking focus order while building a component takes minutes; retrofitting it afterward takes a rewrite.",
  },
  {
    statement:
      "Iterative product thinking isn't a phase before the 'real' work — the Discover-to-Iterate loop this case study describes is still running on this site today, and it doesn't have a planned end date.",
  },
]

/**
 * Portfolio case study — Chapter 14, Learnings. Closes the case study,
 * matching the site's own convention of ending its case studies in
 * words (see Harmony's "What I took from it", WellPack's Reflection).
 */
function Learnings() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-learnings">
      <Container size="content">
        <SectionKicker>Learnings</SectionKicker>

        <motion.ol
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-16 max-w-2xl space-y-10"
        >
          {LEARNINGS.map((learning, index) => (
            <motion.li
              key={learning.statement}
              variants={fadeUp}
              className="flex gap-6"
            >
              <span className="font-mono text-sm text-muted-foreground">
                {formatNumeral(index)}
              </span>
              <p className="text-lg leading-relaxed text-foreground">
                {learning.statement}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  )
}

export { Learnings }
