import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { formatNumeral } from "@/lib/numerals"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { useLanguage } from "@/i18n"

const LEARNINGS = [
  {
    statement:
      "Designing while building collapses the distance between a decision and its consequences — a spacing choice that looks fine in a comp can still overflow a 320px screen, and you find out immediately, not in a later handoff.",
  },
  {
    statement:
      "AI compresses the distance between an idea and a working draft. It doesn't compress the judgment needed to evaluate that draft — that part stayed mine, every time.",
  },
  {
    statement:
      "Translating a design system into code exposes gaps a static file hides — a token that looks consistent in Figma still has to survive being reused across five different components before it's actually a system.",
  },
  {
    statement:
      "Accessibility during implementation is cheaper and more honest than accessibility as a later audit — checking focus order while building a component takes minutes; retrofitting it afterward takes a rewrite.",
  },
  {
    statement:
      "Iterative product thinking isn't a phase before the 'real' work — the Discover-to-Iterate loop this case study describes is still running on this site today, and it doesn't have a planned end date.",
  },
]

const FRENCH_LEARNINGS = [
  "Considérer un portfolio comme un produit, et non comme une galerie, transforme chaque contenu et chaque interaction en décision produit.",
  "La clarté du récit doit passer avant la décoration : une décision n’a de valeur que si son intention est compréhensible.",
  "Concevoir des composants réutilisables dès le départ permet au produit d’évoluer sans fragmenter son langage visuel.",
  "Intégrer l’accessibilité pendant la conception et l’implémentation est plus efficace et plus honnête qu’une correction tardive.",
  "L’IA accélère l’exploration et l’implémentation, mais le regard critique, la validation et la responsabilité des décisions restent humains.",
  "Documenter les itérations et les décisions rend le processus visible et transforme l’évolution du produit en preuve de pratique.",
]

/**
 * Portfolio case study — Chapter 14, Learnings. Closes the case study,
 * matching the site's own convention of ending its case studies in
 * words (see Harmony's "What I took from it", WellPack's Reflection).
 */
function Learnings() {
  const { language } = useLanguage()
  const learnings =
    language === "fr"
      ? FRENCH_LEARNINGS.map((statement) => ({ statement }))
      : LEARNINGS
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-learnings">
      <Container size="content">
        <SectionKicker>
          {language === "fr" ? "Ce que j’ai appris" : "What I learned"}
        </SectionKicker>

        <motion.ol
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-16 max-w-2xl space-y-10"
        >
          {learnings.map((learning, index) => (
            <motion.li
              key={learning.statement}
              variants={fadeUp}
              className="flex gap-6"
            >
              <span className="font-mono text-sm text-muted-foreground">
                {formatNumeral(index)}
              </span>
              <p className="text-lg leading-relaxed text-foreground">
                {learning.statement}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  )
}

export { Learnings }
