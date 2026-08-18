import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Portfolio case study — Chapter 2, The Challenge. Same structural
 * pattern as WellPack's Challenge.tsx: continuous prose, closing on one
 * designated pull-quote using the site's existing italic treatment —
 * reused, not invented, for the one chapter with no visual of its own.
 */
function Challenge() {
  const { language } = useLanguage()
  const content = getLocalizedContent(portfolioPageContent, language).challenge
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-challenge">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </SubsectionText>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-16 max-w-2xl text-xl leading-snug font-medium text-foreground italic md:text-2xl"
        >
          {content.quote}
        </motion.p>
      </Container>
    </Section>
  )
}

export { Challenge }
