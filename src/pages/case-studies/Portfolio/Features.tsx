import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { useLanguage } from "@/i18n"
import { fadeUp, staggerContainer } from "@/lib/motion"

const COPY = {
  en: {
    eyebrow: "Product capabilities",
    title:
      "A portfolio designed as a coherent system, not a collection of pages.",
    items: [
      "Desktop and mobile navigation",
      "About and Experience pages",
      "Five deliberately ordered projects",
      "Detailed editorial case studies",
      "French and English content",
      "Persistent language selector",
      "LinkedIn and live-project links",
      "Downloadable CV",
      "Contextual calls to action",
      "Responsive layouts",
      "Reusable components",
      "Accessible content and interactions",
      "Git and GitHub versioning",
    ],
  },
  fr: {
    eyebrow: "Fonctionnalités du produit",
    title:
      "Un portfolio conçu comme un système cohérent, pas comme une collection de pages.",
    items: [
      "Navigation desktop et mobile",
      "Pages À propos et Expérience",
      "Cinq projets ordonnés intentionnellement",
      "Études de cas éditoriales détaillées",
      "Contenus français et anglais",
      "Sélecteur de langue persistant",
      "Liens LinkedIn et projets en ligne",
      "CV téléchargeable",
      "CTA contextualisés",
      "Mises en page responsives",
      "Composants réutilisables",
      "Contenus et interactions accessibles",
      "Versionnage Git et GitHub",
    ],
  },
} as const

function Features() {
  const { language } = useLanguage()
  const copy = COPY[language]
  const shouldReduceMotion = useReducedMotion()
  return (
    <Section id="portfolio-features">
      <Container size="content">
        <SectionKicker>{copy.eyebrow}</SectionKicker>
        <h3 className="mt-8 max-w-3xl text-3xl leading-tight font-bold tracking-tight text-foreground md:text-4xl">
          {copy.title}
        </h3>
        <motion.ul
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-x-10 gap-y-0 border-y border-border sm:grid-cols-2 lg:grid-cols-3"
        >
          {copy.items.map((item) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className="flex min-h-24 items-center border-b border-border py-6 text-lg font-medium text-foreground last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
            >
              <span
                aria-hidden="true"
                className="mr-4 size-2 shrink-0 rounded-full bg-brand"
              />
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  )
}

export { Features }
