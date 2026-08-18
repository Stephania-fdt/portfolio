import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { transition } from "@/lib/motion"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/** Only checks that were actually run and passed — nothing inferred. */
/**
 * Portfolio case study — Chapter 11, Testing & Validation. Same bordered
 * fact-grid as SPF's Facts.tsx, filled with the checks that were actually
 * run against this codebase during this project — not usability-test
 * results, which don't exist and aren't claimed.
 */
function Testing() {
  const { language } = useLanguage()
  const content = getLocalizedContent(portfolioPageContent, language).testing
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-testing">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>{content.introduction}</p>
        </SubsectionText>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={transition.slow}
          className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2"
        >
          {content.checks.map((check) => (
            <div key={check.label} className="bg-background p-8">
              <p className="font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                {check.label}
              </p>
              <p className="mt-3 text-lg font-medium text-foreground">
                {check.value}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="mt-16 max-w-2xl">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.infrastructureLabel}
          </p>
          <SubsectionText className="mt-4">
            <p>{content.infrastructure}</p>
          </SubsectionText>
        </div>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL(0.1))}
          className="mt-16 max-w-2xl text-xl leading-snug font-medium text-foreground italic md:text-2xl"
        >
          {content.conclusion}
        </motion.p>
      </Container>
    </Section>
  )
}

export { Testing }
