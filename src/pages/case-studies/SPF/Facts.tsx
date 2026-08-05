import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { transition } from "@/lib/motion"

/**
 * Sprint 18.2. All five values are already-established facts —
 * Role/Focus/Duration/team-size match `content/work.ts` and
 * `content/case-studies/spf.ts` exactly, nothing new is claimed here.
 */
const FACTS = [
  { label: "Role", value: "Product Designer" },
  { label: "Industry", value: "Government" },
  { label: "Focus", value: "Design System · Accessibility · Angular Material" },
  { label: "Duration", value: "2023 — Present" },
  { label: "Team", value: "4 to 10+ developers, depending on the project" },
]

function Facts() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-facts" spacing="sm">
      <Container size="content">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={transition.slow}
          className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-5"
        >
          {FACTS.map((fact) => (
            <div key={fact.label} className="bg-background p-8">
              <p className="font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                {fact.label}
              </p>
              <p className="mt-3 text-lg font-medium text-foreground">
                {fact.value}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { Facts }
