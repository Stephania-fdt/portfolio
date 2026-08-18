import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Portfolio case study — Chapter 7, Accessibility. Grounded in what's
 * actually in the codebase — real CSS, real hook usage, a real automated
 * test — not a claimed audit. No certification is claimed because none
 * exists; the automated check that does exist (axe-core, scoped to WCAG
 * A/AA tags) is named for what it is. Placed right after Design System
 * and before AI-Assisted Workflow/Front-end — accessibility is design
 * evidence, not a technical afterthought.
 */
function Accessibility() {
  const { language } = useLanguage()
  const content = getLocalizedContent(
    portfolioPageContent,
    language,
  ).accessibility
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-accessibility">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          {content.introduction}
        </motion.p>

        <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {content.practices.map((practice) => (
            <div key={practice.label}>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {practice.label}
              </p>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                {practice.statement}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-2xl">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.qualificationLabel}
          </p>
          <SubsectionText className="mt-4">
            <p>{content.qualification}</p>
          </SubsectionText>
        </div>
      </Container>
    </Section>
  )
}

export { Accessibility }
