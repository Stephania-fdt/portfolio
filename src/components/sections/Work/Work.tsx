import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { Button } from "@/components/ui/button"
import { WorkItem } from "@/components/sections/Work/WorkItem"
import { fadeUp, fadeUpSlow } from "@/lib/motion"
import { getFeaturedWorkProjects } from "@/content/work"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/i18n"

function Work() {
  const { language, copy } = useLanguage()
  const featuredWorkProjects = getFeaturedWorkProjects(language)
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section
      id="work"
      aria-label={copy.common.selectedWork}
      spacing="none"
      className="scroll-mt-20 pt-20 pb-10 md:scroll-mt-24 md:pt-20 md:pb-12 lg:pt-24 lg:pb-14"
    >
      <SectionKicker>{copy.common.selectedWork}</SectionKicker>

      <p className="mt-6 max-w-2xl text-xl leading-relaxed text-foreground md:text-2xl">
        {copy.work.intro}
      </p>

      <div data-work-preview className="mt-10 divide-y divide-border md:mt-12">
        {featuredWorkProjects.map((project, index) => {
          const tier = index === 0 ? "lead" : "standard"

          return (
            <motion.div
              key={project.title}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={tier === "lead" ? fadeUpSlow : fadeUp}
              className={cn("first:pt-0 last:pb-0", "py-12 md:py-12 lg:py-14")}
            >
              <WorkItem
                project={project}
                index={index}
                reverse={index % 2 === 1}
                tier={tier}
                compact
              />
            </motion.div>
          )
        })}
      </div>

      <div className="mt-10 flex justify-center md:mt-12">
        <Button asChild size="lg">
          <Link to="/work">
            {copy.common.viewAllWork}
            <ArrowRight
              aria-hidden="true"
              className="transition-transform duration-(--duration-fast) ease-standard group-hover:translate-x-0.5"
            />
          </Link>
        </Button>
      </div>
    </Section>
  )
}

export { Work }
