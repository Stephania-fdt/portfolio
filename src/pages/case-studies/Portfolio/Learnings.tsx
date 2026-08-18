import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { formatNumeral } from "@/lib/numerals"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { portfolioDetails } from "@/content/case-studies/portfolio-details"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Portfolio case study — Chapter 14, Learnings. Closes the case study,
 * matching the site's own convention of ending its case studies in
 * words (see Harmony's "What I took from it", WellPack's Reflection).
 */
function Learnings() {
  const { language } = useLanguage()
  const content = getLocalizedContent(portfolioDetails, language).learnings
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-learnings">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.ol
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-16 max-w-2xl space-y-10"
        >
          {content.items.map((statement, index) => (
            <motion.li key={statement} variants={fadeUp} className="flex gap-6">
              <span className="font-mono text-sm text-muted-foreground">
                {formatNumeral(index)}
              </span>
              <p className="text-lg leading-relaxed text-foreground">
                {statement}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  )
}

export { Learnings }
