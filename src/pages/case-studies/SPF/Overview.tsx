import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { fadeUp, staggerContainer } from "@/lib/motion"

/**
 * Sprint 18.2. Every line here is a trimmed, faithful condensation of
 * what's already written in `content/case-studies/spf.ts` ("Context",
 * "The actual problem", "Why a Design System became necessary", "My
 * reasoning...", "Collaboration...", "Accessibility and governance") —
 * no new claim, just edited for pace: short statements with real
 * breathing room between them, not paragraphs.
 */
const OVERVIEW_POINTS = [
  {
    label: "Context",
    statement:
      "The Belgian Federal Public Service Foreign Affairs runs several SaaS applications — Travel Web, Visa on Web, Visanet — each built by its own team, with no shared UX methodology and no Product Designer ever involved.",
  },
  {
    label: "Mission",
    statement:
      "Standardize the applications and build a visual identity rooted in SPF's existing graphic charter — proposed early, before it was ever requested.",
  },
  {
    label: "Responsibilities",
    statement:
      "No Product Owner. No UX Lead. Every UX and UI decision was mine to make — not the application architecture, but the visual hierarchy of the information itself.",
  },
  {
    label: "Environment & Government Constraints",
    statement:
      "A federal public service, where accessibility and governance were real standing requirements — and where foundational components had to come from Angular Material, not a blank canvas.",
  },
]

function Overview() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-overview">
      <Container size="content">
        <SectionKicker>Project Overview</SectionKicker>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-x-12 gap-y-16 md:grid-cols-2"
        >
          {OVERVIEW_POINTS.map((point) => (
            <motion.div key={point.label} variants={fadeUp}>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {point.label}
              </p>
              <p className="mt-4 max-w-md text-xl leading-snug font-medium text-foreground md:text-2xl">
                {point.statement}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { Overview }
