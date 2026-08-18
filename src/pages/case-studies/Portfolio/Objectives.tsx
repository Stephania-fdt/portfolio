import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Portfolio case study — Chapter 3, Objectives. Same "labeled statement"
 * grid as SPF's Overview.tsx — six short, concrete objectives instead of
 * marketing language, each one traceable to what the rest of this case
 * study actually demonstrates.
 */
function Objectives() {
  const { language } = useLanguage()
  const content = getLocalizedContent(portfolioPageContent, language).objectives
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-objectives">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
        >
          {content.items.map((objective) => (
            <motion.div key={objective.label} variants={fadeUp}>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {objective.label}
              </p>
              <p className="mt-4 max-w-md text-xl leading-snug font-medium text-foreground md:text-2xl">
                {objective.statement}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { Objectives }
