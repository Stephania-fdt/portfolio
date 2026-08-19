import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Portfolio case study — Chapter 1, Overview. The 45-second executive
 * summary that used to not exist as its own chapter: problem, role,
 * outcome, three short answers, right after the Hero and before any
 * other reasoning. Everything past this point expands on one of these
 * three lines — nothing here is said again the same way later.
 */
function Overview() {
  const { language } = useLanguage()
  const content = getLocalizedContent(portfolioPageContent, language).overview
  const shouldReduceMotion = useReducedMotion()

  const rows = [
    { label: content.problemLabel, statement: content.problem },
    { label: content.roleLabel, statement: content.role },
    { label: content.outcomeLabel, statement: content.outcome },
  ]

  return (
    <Section id="portfolio-overview">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-3"
        >
          {rows.map((row) => (
            <motion.div key={row.label} variants={fadeUp}>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {row.label}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground">
                {row.statement}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { Overview }
