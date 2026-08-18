import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { getLocalizedContent, useLanguage } from "@/i18n"
import { fadeUp, staggerContainer } from "@/lib/motion"

function WhatChanged() {
  const { language } = useLanguage()
  const content = getLocalizedContent(
    portfolioPageContent,
    language,
  ).whatChanged
  const shouldReduceMotion = useReducedMotion()
  const columns = [
    [content.before, content.beforeItems, false],
    [content.after, content.afterItems, true],
  ] as const

  return (
    <Section id="portfolio-what-changed">
      <Container size="content">
        {/* No reliable legacy/current screenshot pair exists yet. Keep this
            comparison typographic until real, matching captures are supplied. */}
        <SectionKicker>{content.kicker}</SectionKicker>
        <h3 className="mt-8 max-w-3xl text-3xl leading-tight font-bold tracking-tight text-foreground md:text-4xl">
          {content.title}
        </h3>
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2"
        >
          {columns.map(([label, items, isAfter]) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className={
                isAfter
                  ? "bg-secondary/45 p-8 md:p-10"
                  : "bg-background p-8 md:p-10"
              }
            >
              <h3 className="font-mono text-xs tracking-widest text-brand uppercase">
                {label}
              </h3>
              <ul className="mt-8 space-y-5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-base leading-relaxed text-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { WhatChanged }
