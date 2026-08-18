import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL } from "@/components/ui/case-study-capture"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Portfolio case study — Chapter 13, Outcome. The exact closing statement
 * specified for this chapter — no quantitative results added, because
 * none exist to report.
 */
function Outcome() {
  const { language } = useLanguage()
  const content = getLocalizedContent(portfolioPageContent, language).outcome
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-outcome">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          {content.statement}
        </motion.p>
      </Container>
    </Section>
  )
}

export { Outcome }
