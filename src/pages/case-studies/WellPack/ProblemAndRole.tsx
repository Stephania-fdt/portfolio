import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL } from "@/components/ui/case-study-capture"
import { wellPackPageContent } from "@/content/case-studies/wellpack-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/** Editorial restructure (chapter B of 5): the problem and my exact contribution, merged from the former Overview + Challenge chapters. */
function ProblemAndRole() {
  const { language } = useLanguage()
  const content = getLocalizedContent(wellPackPageContent, language).problem
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="wellpack-problem" spacing="sm">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <div className="mt-6 max-w-3xl space-y-6 text-lg leading-relaxed text-foreground">
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

export { ProblemAndRole }
