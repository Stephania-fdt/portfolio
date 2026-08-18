import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import { wellPackPageContent } from "@/content/case-studies/wellpack-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * WellPack — Chapter 6, Reflection. Closes the case study, matching
 * every other case study on this site's own convention of ending in
 * words only. Same pattern as the preceding chapters: manuscript
 * paragraphs continuous, closing on the chapter's designated key
 * sentence — the exact line the Editorial Manuscript's self-review
 * recommended as the case study's final line (Q7).
 *
 * Every sentence traces to "What I took from it" in
 * `content/case-studies/wellpack.ts`.
 */
function Reflection() {
  const { language } = useLanguage()
  const content = getLocalizedContent(wellPackPageContent, language).reflection
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="wellpack-reflection">
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

export { Reflection }
