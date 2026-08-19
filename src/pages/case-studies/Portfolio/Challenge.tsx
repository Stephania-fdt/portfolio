import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Portfolio case study — Chapter 2, The Challenge. Continuous prose,
 * closing on one pull-quote (the site's existing italic treatment), then
 * what used to be a standalone Objectives chapter compressed into four
 * short goals — a scan-friendly close for "what I had to solve," not a
 * second grid of full sentences.
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

        <ul className="mt-16 grid max-w-2xl gap-x-8 gap-y-3 sm:grid-cols-2">
          {content.goals.map((goal) => (
            <li
              key={goal}
              className="flex items-start gap-3 text-base text-foreground"
            >
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
              />
              {goal}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

export { Challenge }
