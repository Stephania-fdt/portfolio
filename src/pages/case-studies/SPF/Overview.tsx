import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { spfPageContent } from "@/content/case-studies/spf-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Sprint 18.2. Every line here is a trimmed, faithful condensation of
 * what's already written in `content/case-studies/spf.ts` ("Context",
 * "The actual problem", "Why a Design System became necessary", "My
 * reasoning...", "Collaboration...", "Accessibility and governance") —
 * no new claim, just edited for pace: short statements with real
 * breathing room between them, not paragraphs.
 */
function Overview() {
  const { language } = useLanguage()
  const content = getLocalizedContent(spfPageContent, language).overview
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-overview">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-x-12 gap-y-16 md:grid-cols-2"
        >
          {content.points.map((point) => (
            <motion.div key={point.label} variants={fadeUp}>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {point.label}
              </p>
              <p className="mt-4 max-w-md text-xl leading-snug font-medium text-foreground md:text-2xl">
                {point.statement}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { Overview }
