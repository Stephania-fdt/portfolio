import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { WorkItem } from "@/components/sections/Work/WorkItem"
import { getWorkProjects } from "@/content/work"
import { fadeUp, fadeUpSlow } from "@/lib/motion"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/i18n"

/**
 * The complete editorial project index, using the Home's shared project
 * data. Title/meta description come from `<Seo />` alone (Sprint "SEO title
 * race fix") — this page no longer sets `document.title` itself; it used to,
 * racing `<Seo />`'s own effect and unpredictably showing a shorter, less
 * specific title depending on which effect committed last.
 */
function Work() {
  const { language, copy } = useLanguage()
  const workProjects = getWorkProjects(language)
  const shouldReduceMotion = useReducedMotion()

  return (
    <main>
      <header className="pt-section">
        <Container size="content">
          <SectionKicker>{copy.nav.work}</SectionKicker>
          <h1 className="mt-8 max-w-4xl text-5xl leading-[0.95] font-bold tracking-tightest md:text-6xl">
            {copy.work.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {copy.work.description}
          </p>
        </Container>
      </header>

      <Section
        id="work-index"
        aria-label={copy.common.allProjects}
        spacing="md"
      >
        <h2 className="sr-only">{copy.common.allProjects}</h2>
        <div data-work-projects className="divide-y divide-border">
          {workProjects.map((project, index) => {
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
                  tier === "lead" ? "py-section" : "py-section-sm",
                )}
              >
                <WorkItem
                  project={project}
                  index={index}
                  reverse={index % 2 === 1}
                  tier={tier}
                  linkToProject
                />
              </motion.div>
            )
          })}
        </div>
      </Section>
    </main>
  )
}

export { Work }
