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
          // The lead entry (index 0, the strongest proof point) gets more
          // room and a slower arrival — sequence and space, never color,
          // per the approved Product Vision.
          const isLead = index === 0

          return (
            <motion.div
              key={project.title}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={isLead ? fadeUpSlow : fadeUp}
              className={cn(
                "first:pt-0 last:pb-0",
                isLead ? "py-section" : "py-section-sm",
              )}
            >
              <WorkItem
                project={project}
                index={index}
                reverse={index % 2 === 1}
                isLead={isLead}
              />
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

export { Work }
