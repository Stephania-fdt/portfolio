import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"

const RELATIONSHIPS = [
  { from: "Figma", to: "Design direction" },
  { from: "Design System", to: "Visual consistency" },
  { from: "React / TypeScript", to: "Component architecture" },
  { from: "Tailwind", to: "Styling and responsive implementation" },
  { from: "AI-assisted development", to: "Faster iteration and debugging" },
  { from: "WCAG", to: "Accessibility validation" },
]

/**
 * Portfolio case study — Chapter 8, Front-end Implementation. Only the
 * technologies actually present in this project — confirmed by direct
 * inspection of `package.json` and the codebase, not a generic stack
 * list. The relationship pairs are the exact structure the brief for
 * this chapter specified.
 */
function FrontEnd() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-frontend">
      <Container size="content">
        <SectionKicker>Front-end Implementation</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>
            Every design decision on this site had to survive becoming real code
            — React and TypeScript for the component architecture, Tailwind CSS
            for styling and responsive behavior, Figma for the design direction
            that came first. AI-assisted development sits inside that chain as
            an accelerant, not a separate step; WCAG is where accessibility gets
            checked, not assumed.
          </p>
        </SubsectionText>

        <motion.dl
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-16 max-w-2xl divide-y divide-border border-y border-border"
        >
          {RELATIONSHIPS.map((item) => (
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
