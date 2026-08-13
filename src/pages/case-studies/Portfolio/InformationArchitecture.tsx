import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import { navigationContent } from "@/content/navigation"
import { workProjects } from "@/content/work"

/**
 * Portfolio case study — Chapter 5, Information Architecture. Two real
 * data sources, not invented lists: `content/navigation.ts` for the
 * top-level structure (two of its four links are honestly marked as not
 * built yet, matching that file's own "forward declaration" comment —
 * this chapter doesn't pretend otherwise), and `content/work.ts` for the
 * Selected Work order, which stays exactly what's live today.
 */
function InformationArchitecture() {
  const shouldReduceMotion = useReducedMotion()
  const builtSections = new Set(["#work"])

  return (
    <Section id="portfolio-ia">
      <Container size="content">
        <SectionKicker>Information Architecture</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>
            The top-level structure is four sections: Work, About, Experience,
            Contact — a résumé's own order, read as a book instead of a list.
            Work carries the whole first argument (proof before pitch); About,
            Experience and Contact are this site&rsquo;s forward-declared next
            chapters, not yet built — said here plainly rather than implied as
            finished.
          </p>
        </SubsectionText>

        <motion.ol
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-10 max-w-2xl divide-y divide-border border-y border-border"
        >
          {navigationContent.links.map((link, index) => {
            const isBuilt = builtSections.has(link.href)
            return (
              <li
                key={link.href}
                className="flex items-baseline gap-4 py-4 font-mono text-sm"
              >
                <span className="text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-foreground">
                  {link.label.toUpperCase()}
                </span>
                <span className="ml-auto text-2xs tracking-widest text-muted-foreground uppercase">
                  {isBuilt ? "Live" : "Planned"}
                </span>
              </li>
            )
          })}
        </motion.ol>

        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            Selected Work&rsquo;s Deliberate Hierarchy
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>
              Selected Work isn&rsquo;t ordered by date or alphabet. SPF stays
              the permanent flagship — the clearest single proof of enterprise
              Design System work, accessibility and governance at scale —
              regardless of what else is added around it. This case study sits
              second, deliberately: it&rsquo;s the one place the current
              practice (Design Systems, accessibility, AI-assisted workflow,
              front-end implementation) shows up as one shipped product rather
              than a described skill, so it gets real editorial room without
              ever competing with SPF for the lead position. Harmony, WellPack
              and Joga Aura follow, each proving a different, complementary
              register — research, methodology, and real client delivery.
            </p>
          </SubsectionText>

          <ol className="mt-10 max-w-2xl divide-y divide-border border-y border-border">
            {workProjects.map((project, index) => (
              <li
                key={project.title}
                className="flex items-baseline gap-4 py-4 font-mono text-sm"
              >
                <span className="text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-foreground">{project.title}</span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  )
}

export { InformationArchitecture }
