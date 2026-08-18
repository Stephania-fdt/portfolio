import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import { wellPackPageContent } from "@/content/case-studies/wellpack-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * WellPack — Chapter 4, From Method to Brief. Same pattern as
 * Challenge.tsx / Method.tsx: manuscript paragraphs run continuous, no
 * invented sub-headings, closing on the chapter's designated key
 * sentence via the site's existing italic pull-quote convention.
 *
 * Unlike Chapter 2's key sentence (the last clause of its paragraph,
 * cleanly extractable), this chapter's key sentence — "I owned the
 * thinking behind every brief. I didn't own the final pixels." — opens
 * paragraph 2, and paragraph 2 explicitly refers back to it ("That line
 * sounds small written down..."). Removing it from the body would break
 * the paragraph's own logic, so it stays in place and the pull-quote
 * restates it — the same precedent Chapter 3's pull-quote already set,
 * not a new pattern.
 *
 * Every sentence traces to "From research to brief" and "Testing before
 * publishing" in `content/case-studies/wellpack.ts`.
 */
function Brief() {
  const { language } = useLanguage()
  const content = getLocalizedContent(wellPackPageContent, language).brief
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="wellpack-brief">
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

export { Brief }
