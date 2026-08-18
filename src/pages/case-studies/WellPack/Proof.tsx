import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import { wellPackPageContent } from "@/content/case-studies/wellpack-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * WellPack — Chapter 5, Proof Without a Metric. Same pattern as the
 * chapters before it. This is the chapter the Editorial Blueprint
 * flagged as the manuscript's strongest passage (self-review Q1/Q5): the
 * refusal to invent a business metric, replaced with a real argument for
 * what should count as evidence instead. No visual is expected or
 * needed here — the argument is the evidence.
 *
 * Every sentence traces to "What this proved, without a metric" in
 * `content/case-studies/wellpack.ts`.
 */
function Proof() {
  const { language } = useLanguage()
  const content = getLocalizedContent(wellPackPageContent, language).proof
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="wellpack-proof">
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

export { Proof }
