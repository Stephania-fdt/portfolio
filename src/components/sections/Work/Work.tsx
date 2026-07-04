import { motion, useReducedMotion } from "framer-motion"

import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { WorkItem } from "@/components/sections/Work/WorkItem"
import { fadeUp } from "@/lib/motion"
import { workProjects } from "@/content/work"

function Work() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="work" aria-label="Selected Work">
      <SectionKicker>Selected Work</SectionKicker>

      <div className="mt-20 divide-y divide-border">
        {workProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fadeUp}
            className="py-section-sm first:pt-0 last:pb-0"
          >
            <WorkItem
              project={project}
              index={index}
              reverse={index % 2 === 1}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export { Work }
