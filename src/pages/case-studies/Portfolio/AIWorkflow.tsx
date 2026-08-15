import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import { formatNumeral } from "@/lib/numerals"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { useLanguage } from "@/i18n"

const WORKFLOW_STEPS = [
  {
    label: "Human Direction",
    statement:
      "I define the objective, constraints, visual direction and expected outcome.",
  },
  {
    label: "AI Exploration",
    statement:
      "AI helps explore implementation approaches, generate code, identify issues and accelerate iteration.",
  },
  {
    label: "Design Review",
    statement:
      "I evaluate the result against the original design intent, UX principles and accessibility requirements.",
  },
  {
    label: "Iteration",
    statement:
      "I refine the implementation through targeted prompts and corrections.",
  },
  {
    label: "Validation",
    statement:
      "The result is checked technically and visually before being accepted.",
  },
]

const FRENCH_STEPS = [
  {
    label: "Direction humaine",
    statement:
      "Je définis l’objectif, les contraintes, la direction visuelle et le résultat attendu.",
  },
  {
    label: "Exploration assistée par IA",
    statement:
      "L’IA aide à explorer des pistes, structurer les contenus, implémenter et identifier les problèmes.",
  },
  {
    label: "Évaluation design",
    statement:
      "J’évalue chaque proposition selon l’intention, les besoins utilisateurs, l’accessibilité et la cohérence.",
  },
  {
    label: "Implémentation",
    statement:
      "Je transforme la direction retenue en composants React et TypeScript réutilisables.",
  },
  {
    label: "Tests et itérations",
    statement:
      "Le résultat est vérifié techniquement et visuellement, puis corrigé avant validation.",
  },
]

/**
 * Portfolio case study — Chapter 8, AI-Assisted Workflow. The five-step
 * loop is presented as the actual framework used, then grounded in one
 * real, specific example (the Joga Aura project card) rather than a
 * hypothetical — direction, exploration, review, correction and
 * validation all really happened, in that order, on this repository.
 */
function AIWorkflow() {
  const { language } = useLanguage()
  const isFrench = language === "fr"
  const steps = isFrench ? FRENCH_STEPS : WORKFLOW_STEPS
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-ai-workflow">
      <Container size="content">
        <SectionKicker>
          {isFrench ? "Concevoir avec l’IA" : "Designing with AI"}
        </SectionKicker>

        <motion.h3
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-3xl leading-snug font-bold text-foreground md:text-4xl"
        >
          {isFrench
            ? "L’IA comme partenaire de design et de développement"
            : "AI as a design and development partner"}
        </motion.h3>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>
            {isFrench
              ? "L’intelligence artificielle a accompagné l’exploration visuelle, la structuration des contenus, l’implémentation front-end et la revue du code. Chaque décision stratégique, UX et visuelle est restée guidée par une expertise humaine et évaluée selon les besoins utilisateurs, l’accessibilité et la cohérence globale du produit."
              : "Artificial intelligence supported visual exploration, content structuring, front-end implementation and code review. Every strategic, UX and visual decision remained human-led and was evaluated according to user needs, accessibility and consistency."}
          </p>
        </SubsectionText>

        <motion.ol
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-16 divide-y divide-border border-y border-border"
        >
          {steps.map((step, index) => (
            <motion.li
              key={step.label}
              variants={fadeUp}
              className="flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="font-mono text-sm text-muted-foreground sm:w-10 sm:shrink-0">
                {formatNumeral(index)}
              </span>
              <span className="text-lg font-bold text-foreground sm:w-56 sm:shrink-0">
                {step.label}
              </span>
              <span className="max-w-xl text-base leading-relaxed text-muted-foreground">
                {step.statement}
              </span>
            </motion.li>
          ))}
        </motion.ol>

        {/* One real, specific example — not a hypothetical. No fabricated AI visual is used. */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            One Real Pass, Not a Hypothetical
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>
              The Joga Aura entry in Selected Work is a real instance of this
              loop, not an illustration built after the fact. Direction: replace
              a placeholder with a real project visual, and explicitly do not
              fabricate one. Exploration: searched the available project files
              for a genuine Joga Aura asset rather than generating a mockup.
              Review: two real candidates existed — a homepage capture and a
              product page — and the product page was chosen because it read
              cleaner, without visible placeholder copy. Iteration: the chosen
              image was cropped to the card&rsquo;s existing aspect ratio rather
              than distorted or replaced with something more convenient.
              Validation: typecheck, lint and a full 320px–1440px responsive
              sweep ran again before the change shipped.
            </p>
          </SubsectionText>

          <motion.div
            {...(shouldReduceMotion ? { initial: false } : REVEAL(0.1))}
            className="mt-8 max-w-2xl overflow-hidden border border-border bg-secondary/50 p-6"
          >
            <pre
              tabIndex={0}
              aria-label={
                isFrench
                  ? "Exemple de workflow IA documenté dans le code"
                  : "Documented AI workflow example in code"
              }
              className="overflow-x-auto font-mono text-xs leading-relaxed text-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
            >
              <code>{`// Direction: real asset only, no fabricated visual.
// Exploration: search existing project files for "joga aura".
// Review: product page chosen over homepage — no lorem ipsum
//         visible in the usable crop region.
// Iteration: cropped to the card's existing 4:3 aspect ratio.
// Validation: tsc -b --noEmit, oxlint, 320px–1440px sweep.`}</code>
            </pre>
          </motion.div>
        </div>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL(0.15))}
          className="mt-16 max-w-2xl text-xl leading-snug font-medium text-foreground italic md:text-2xl"
        >
          AI accelerated exploration and implementation. It never made a design
          decision on its own.
        </motion.p>
      </Container>
    </Section>
  )
}

export { AIWorkflow }
