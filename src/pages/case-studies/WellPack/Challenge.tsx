import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import { wellPackPageContent } from "@/content/case-studies/wellpack-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * WellPack Sprint 1 (implementation pass 2) — Chapter 2, The Challenge.
 * Rebuilt from the approved editorial manuscript, not the earlier draft:
 * the manuscript's two paragraphs run as one continuous passage (no
 * invented sub-headings splitting it into fragments) to read like the
 * long-form piece it was written as, closing on the chapter's own
 * designated key sentence — the same `text-xl italic md:text-2xl`
 * treatment the site's generic `CaseStudy.tsx` template already uses for
 * its closing line, reused here rather than invented, as the "elegant
 * editorial layout instead of a placeholder" for the visual this chapter
 * doesn't have.
 *
 * Every sentence traces to "Where it started" and "The gap nobody had
 * systematized" in `content/case-studies/wellpack.ts` — no new claim.
 */
function Challenge() {
  const { language } = useLanguage()
  const content = getLocalizedContent(wellPackPageContent, language).challenge
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="wellpack-challenge">
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
