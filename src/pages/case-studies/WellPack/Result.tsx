import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL } from "@/components/ui/case-study-capture"
import { wellPackPageContent } from "@/content/case-studies/wellpack-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Editorial restructure (chapter D of 5): the former "Proof Without a
 * Metric" chapter, folded in as one sober paragraph rather than its own
 * dramatic chapter with a pull-quote defending the absence of a number.
 * The real deliverables — the method, the brand identity — were already
 * shown above; this states plainly what shipped and what wasn't
 * measured, once.
 */
function Result() {
  const { language } = useLanguage()
  const content = getLocalizedContent(wellPackPageContent, language).result
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="wellpack-result" spacing="sm">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-foreground">
          {content.paragraphs.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              {...(shouldReduceMotion
                ? { initial: false }
                : REVEAL(index * 0.08))}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export { Result }
