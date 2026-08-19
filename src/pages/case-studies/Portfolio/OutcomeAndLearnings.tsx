import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL } from "@/components/ui/case-study-capture"
import { formatNumeral } from "@/lib/numerals"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Portfolio case study — Chapter 8, Outcome & Learnings. Closes the case
 * study, replacing two former chapters (Outcome, Learnings) with one:
 * the closing statement first, then four reflections — trimmed from
 * five, dropping the one that only restated Designing & Building's own
 * closing line about AI never making a design decision on its own.
 */
function OutcomeAndLearnings() {
  const { language } = useLanguage()
  const content = getLocalizedContent(
    portfolioPageContent,
    language,
  ).outcomeLearnings
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

        <motion.ol
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-16 max-w-2xl space-y-10"
        >
          {content.learnings.map((statement, index) => (
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

export { OutcomeAndLearnings }
