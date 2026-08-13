import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { fadeUp, staggerContainer } from "@/lib/motion"

/**
 * Portfolio case study — Chapter 3, Objectives. Same "labeled statement"
 * grid as SPF's Overview.tsx — six short, concrete objectives instead of
 * marketing language, each one traceable to what the rest of this case
 * study actually demonstrates.
 */
const OBJECTIVES = [
  {
    label: "Positioning",
    statement:
      "Create a clear and differentiated Product Designer positioning — not another generic portfolio template.",
  },
  {
    label: "System",
    statement: "Build a scalable visual system, not a set of one-off pages.",
  },
  {
    label: "Accessibility & Responsive",
    statement:
      "Make the experience accessible and responsive by construction, not as a pass added at the end.",
  },
  {
    label: "Design-to-Code",
    statement:
      "Translate design decisions into production-ready front-end code myself.",
  },
  {
    label: "AI Integration",
    statement:
      "Integrate AI into the workflow without delegating design ownership to it.",
  },
  {
    label: "Dual Proof",
    statement:
      "Create a portfolio that demonstrates design and technical understanding in the same artifact.",
  },
]

function Objectives() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-objectives">
      <Container size="content">
        <SectionKicker>Objectives</SectionKicker>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
        >
          {OBJECTIVES.map((objective) => (
            <motion.div key={objective.label} variants={fadeUp}>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {objective.label}
              </p>
              <p className="mt-4 max-w-md text-xl leading-snug font-medium text-foreground md:text-2xl">
                {objective.statement}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { Objectives }
