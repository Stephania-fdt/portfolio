import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL } from "@/components/ui/case-study-capture"
import { CaseStudyFacts } from "@/components/ui/case-study-facts"
import { harmonyCaseStudy } from "@/content/case-studies/harmony"
import { translateCaseStudy } from "@/content/case-studies/translate"
import { useLanguage } from "@/i18n"

/**
 * Visual-composition pass: compact text + facts, same treatment as SPF
 * and WellPack's opening chapter — replaces the generic renderer's
 * `spacing="md"` section wrapper (9rem/144px top and bottom at desktop),
 * which was the single largest cause of Harmony reading taller than SPF
 * at an equal word count.
 */
function Overview() {
  const { language } = useLanguage()
  const [overview] = translateCaseStudy(harmonyCaseStudy, language).sections
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="harmony-overview" spacing="sm">
      <Container size="content">
        <SectionKicker>{overview.heading}</SectionKicker>

        <div className="mt-6 max-w-3xl space-y-6 text-lg leading-relaxed text-foreground">
          {overview.paragraphs.map((paragraph, index) => (
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

        {overview.facts && overview.facts.length > 0 ? (
          <CaseStudyFacts facts={overview.facts} />
        ) : null}
      </Container>
    </Section>
  )
}

export { Overview }
