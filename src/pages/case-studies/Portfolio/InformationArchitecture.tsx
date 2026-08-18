import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import { getNavigationContent } from "@/content/navigation"
import { getWorkProjects } from "@/content/work"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Portfolio case study — Chapter 5, Information Architecture. Two real
 * data sources, not invented lists: `content/navigation.ts` for the
 * top-level structure, and `content/work.ts` for the Selected Work order,
 * which stays exactly what's live today. All four top-level links resolve
 * to a real section — "About" and "Experience" deliberately reuse Design
 * Principles and The Process rather than invent new chapters (see
 * `content/navigation.ts`'s own comment for why), and Contact is a real,
 * minimal closing section rather than a promised one.
 */
function InformationArchitecture() {
  const { language } = useLanguage()
  const content = getLocalizedContent(
    portfolioPageContent,
    language,
  ).architecture
  const navigation = getNavigationContent(language)
  const projects = getWorkProjects(language)
  const shouldReduceMotion = useReducedMotion()
  const builtSections = new Set([
    "#work",
    "#principles",
    "#process",
    "#contact",
  ])

  return (
    <Section id="portfolio-ia">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>{content.introduction}</p>
        </SubsectionText>

        <motion.ol
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-10 max-w-2xl divide-y divide-border border-y border-border"
        >
          {navigation.links.map((link, index) => {
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
                  {isBuilt ? content.live : content.planned}
                </span>
              </li>
            )
          })}
        </motion.ol>

        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.hierarchyLabel}
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>{content.hierarchy}</p>
          </SubsectionText>

          <ol className="mt-10 max-w-2xl divide-y divide-border border-y border-border">
            {projects.map((project, index) => (
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
