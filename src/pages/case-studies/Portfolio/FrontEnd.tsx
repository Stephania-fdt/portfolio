import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import { useLanguage } from "@/i18n"

const RELATIONSHIPS = [
  { from: "Figma", to: "Design direction" },
  { from: "Design System", to: "Visual consistency" },
  { from: "React / Vite / TypeScript", to: "Component architecture" },
  { from: "Tailwind", to: "Styling and responsive implementation" },
  {
    from: "Git / GitHub / VS Code",
    to: "Versioning and implementation workflow",
  },
  {
    from: "ChatGPT / Codex / Claude Code",
    to: "AI-assisted exploration, iteration and code review",
  },
  { from: "WCAG", to: "Accessibility validation" },
]

const FRENCH_RELATIONSHIPS = [
  { from: "Figma", to: "Direction design" },
  { from: "Design System", to: "Cohérence visuelle" },
  { from: "React / Vite / TypeScript", to: "Architecture des composants" },
  { from: "Tailwind CSS", to: "Styles et implémentation responsive" },
  {
    from: "Git / GitHub / VS Code",
    to: "Versionnage et workflow d’implémentation",
  },
  {
    from: "ChatGPT / Codex / Claude Code",
    to: "Exploration, itération et revue de code assistées par IA",
  },
  { from: "WCAG", to: "Validation de l’accessibilité" },
]

/**
 * Portfolio case study — Chapter 9, Front-end Implementation. Only the
 * technologies actually present in this project — confirmed by direct
 * inspection of `package.json` and the codebase, not a generic stack
 * list. The relationship pairs are the exact structure the brief for
 * this chapter specified.
 */
function FrontEnd() {
  const { language } = useLanguage()
  const isFrench = language === "fr"
  const relationships = isFrench ? FRENCH_RELATIONSHIPS : RELATIONSHIPS
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-frontend">
      <Container size="content">
        <SectionKicker>
          {isFrench
            ? "Outils & implémentation"
            : "Tools & front-end implementation"}
        </SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>
            {isFrench
              ? "Chaque décision design devait résister au passage vers du code réel. L’IA intervient dans cette chaîne comme un outil d’exploration, d’assistance et d’accélération ; elle ne remplace ni l’expertise produit ni la validation humaine."
              : "Every design decision had to survive becoming real code. AI sits inside this chain as a tool for exploration, assistance and acceleration; it does not replace Product Design expertise or human validation."}
          </p>
        </SubsectionText>

        <motion.dl
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-16 max-w-2xl divide-y divide-border border-y border-border"
        >
          {relationships.map((item) => (
            <div
              key={item.from}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <dt className="font-mono text-sm font-medium text-foreground sm:w-56 sm:shrink-0">
                {item.from}
              </dt>
              <dd className="flex items-baseline gap-3 text-base text-muted-foreground">
                <span aria-hidden="true" className="text-brand">
                  →
                </span>
                {item.to}
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </Section>
  )
}

export { FrontEnd }
