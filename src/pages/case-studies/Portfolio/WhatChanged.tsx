import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { useLanguage } from "@/i18n"
import { fadeUp, staggerContainer } from "@/lib/motion"

const COPY = {
  en: {
    eyebrow: "What changed",
    title:
      "The same identity, with a clearer and more capable product around it.",
    before: "Before",
    after: "After",
    beforeItems: [
      "A mainly visual presentation",
      "Uneven case-study depth",
      "More limited navigation",
      "A single-language experience",
      "Little visibility into professional experience",
      "A design process documented only lightly",
    ],
    afterItems: [
      "Harmonized, editorial case studies",
      "Clearer UX narratives and evidence",
      "Richer About and Experience pages",
      "Responsive navigation and contextual CTAs",
      "A bilingual French and English experience",
      "Accessibility, Design System, tools and AI-assisted iteration made explicit",
    ],
  },
  fr: {
    eyebrow: "Ce qui a évolué",
    title:
      "La même identité, portée par un produit plus clair et plus complet.",
    before: "Avant",
    after: "Après",
    beforeItems: [
      "Une présentation principalement visuelle",
      "Des études de cas de profondeur inégale",
      "Une navigation plus limitée",
      "Une expérience dans une seule langue",
      "Peu de visibilité sur le parcours professionnel",
      "Un processus de conception peu documenté",
    ],
    afterItems: [
      "Des études de cas harmonisées et éditoriales",
      "Des récits UX et des preuves plus clairs",
      "Des pages À propos et Expérience enrichies",
      "Une navigation responsive et des CTA contextualisés",
      "Une expérience bilingue français-anglais",
      "L’accessibilité, le Design System, les outils et l’itération assistée par IA rendus explicites",
    ],
  },
} as const

function WhatChanged() {
  const { language } = useLanguage()
  const copy = COPY[language]
  const shouldReduceMotion = useReducedMotion()
  const columns = [
    [copy.before, copy.beforeItems, false],
    [copy.after, copy.afterItems, true],
  ] as const

  return (
    <Section id="portfolio-what-changed">
      <Container size="content">
        {/* No reliable legacy/current screenshot pair exists yet. Keep this
            comparison typographic until real, matching captures are supplied. */}
        <SectionKicker>{copy.eyebrow}</SectionKicker>
        <h3 className="mt-8 max-w-3xl text-3xl leading-tight font-bold tracking-tight text-foreground md:text-4xl">
          {copy.title}
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
