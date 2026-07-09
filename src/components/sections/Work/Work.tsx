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
      <SectionKicker>Selected Work</SectionKicker>

      <div className="mt-20 divide-y divide-border">
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
              />
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

export { Work }
