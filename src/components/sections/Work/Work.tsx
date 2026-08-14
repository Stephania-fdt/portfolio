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
    <Section id="work" aria-label={copy.common.selectedWork}>
      <SectionKicker>{copy.common.selectedWork}</SectionKicker>

      <p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground md:text-2xl">
        {copy.work.intro}
      </p>

      <div data-work-preview className="mt-section-sm divide-y divide-border">
        {featuredWorkProjects.map((project, index) => {
          // index 0 (SPF) is the section's one dominant plate — more room
          // and a slower arrival. index 1 (the Portfolio entry) is a real
          // second proof point — more room to breathe than the rest — but
          // keeps the standard title size and motion pace so it can't
          // compete with SPF. Everything else is even weight. Sequence and
          // space carry this, never color, per the approved Product Vision.
          const tier =
            index === 0
              ? "lead"
              : project.href === "/work/portfolio"
                ? "secondary"
                : "standard"

          return (
            <motion.div
              key={project.title}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={tier === "lead" ? fadeUpSlow : fadeUp}
              className={cn(
                "first:pt-0 last:pb-0",
                // Only "lead" gets the large chapter-level rhythm — that's
                // the one place Product Vision asks for structural
                // prominence. "secondary" already gets its extra room from
                // WorkItem's own wider image/aspect treatment, so giving it
                // the same outer padding as "lead" was pure duplicated
                // vertical space, not a second signal of hierarchy (density
                // polish pass — no image, copy, order, or hierarchy change).
                tier === "lead" ? "py-section" : "py-section-sm",
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

      <div className="mt-section-sm flex justify-center">
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
