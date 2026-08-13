import { motion, useReducedMotion } from "framer-motion"

import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { WorkItem } from "@/components/sections/Work/WorkItem"
import { fadeUp, fadeUpSlow } from "@/lib/motion"
import { workProjects } from "@/content/work"
import { cn } from "@/lib/utils"

function Work() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="work" aria-label="Selected Work">
      <div className="flex items-center gap-4">
        <span
          aria-hidden="true"
          className="font-mono text-2xs text-muted-foreground"
        >
          01
        </span>
        <SectionKicker className="flex-1">Selected Work</SectionKicker>
      </div>

      <p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground md:text-2xl">
        A selection of product systems, services and research methods shaped
        with real teams, constraints and the people who use them in mind.
      </p>

      <div className="mt-section-sm divide-y divide-border">
        {workProjects.map((project, index) => {
          // index 0 (SPF) is the section's one dominant plate — more room
          // and a slower arrival. index 1 (the Portfolio entry) is a real
          // second proof point — more room to breathe than the rest — but
          // keeps the standard title size and motion pace so it can't
          // compete with SPF. Everything else is even weight. Sequence and
          // space carry this, never color, per the approved Product Vision.
          const tier =
            index === 0 ? "lead" : index === 1 ? "secondary" : "standard"

          return (
            <motion.div
              key={project.title}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={tier === "lead" ? fadeUpSlow : fadeUp}
              className={cn(
                "first:pt-0 last:pb-0",
                tier === "standard" ? "py-section-sm" : "py-section",
              )}
            >
              <WorkItem
                project={project}
                index={index}
                reverse={index % 2 === 1}
                tier={tier}
              />
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

export { Work }
