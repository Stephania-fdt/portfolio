import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"
import { transition } from "@/lib/motion"

type CaseStudyFact = {
  label: string
  value: string
  /** Use for verified project counts, never inferred metrics. */
  emphasizeValue?: boolean
}

type CaseStudyFactsProps = {
  facts: CaseStudyFact[]
}

/** SPF's bordered fact grid, shared for evidence-backed project facts and counts. */
function CaseStudyFacts({ facts }: CaseStudyFactsProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      data-case-study-facts
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={transition.slow}
      className={cn(
        "mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2",
        // Tailwind needs the full class name literal to generate it, so
        // this is a lookup, not a template string — a grid with fewer
        // items than columns would otherwise leave a bordered gap cell.
        { 1: "lg:grid-cols-1", 2: "lg:grid-cols-2", 3: "lg:grid-cols-3" }[
          facts.length
        ] ?? "lg:grid-cols-4",
      )}
    >
      {facts.map((fact) => (
        <div key={fact.label} className="bg-background p-6 md:p-8">
          <p className="font-mono text-2xs tracking-widest text-muted-foreground uppercase">
            {fact.label}
          </p>
          <p
            className={
              fact.emphasizeValue
                ? "mt-3 text-4xl leading-none font-bold tracking-tight text-foreground"
                : "mt-3 text-lg font-medium text-foreground"
            }
          >
            {fact.value}
          </p>
        </div>
      ))}
    </motion.div>
  )
}

export { CaseStudyFacts }
export type { CaseStudyFact }
