import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

import { Container } from "@/components/ui/container"
import { Hero } from "@/pages/case-studies/Portfolio/Hero"
import { Overview } from "@/pages/case-studies/Portfolio/Overview"
import { Challenge } from "@/pages/case-studies/Portfolio/Challenge"
import { Approach } from "@/pages/case-studies/Portfolio/Approach"
import { KeyDecisions } from "@/pages/case-studies/Portfolio/KeyDecisions"
import { DesigningAndBuilding } from "@/pages/case-studies/Portfolio/DesigningAndBuilding"
import { Iterations } from "@/pages/case-studies/Portfolio/Iterations"
import { FinalExperience } from "@/pages/case-studies/Portfolio/FinalExperience"
import { OutcomeAndLearnings } from "@/pages/case-studies/Portfolio/OutcomeAndLearnings"
import { useLanguage } from "@/i18n"

/**
 * Reachable at `/work/portfolio` — the real, live case study for Project
 * 02 in Selected Work. Condensed (Sprint following the 15-chapter pass)
 * to eight chapters after the Hero, each merging what used to be two or
 * three separate ones: Overview, The Challenge, Approach, Key Design
 * Decisions, Designing & Building, Iterations, Final Experience, Outcome
 * & Learnings. Secondary evidence — the AI workflow's five-step
 * framework, the tool chain, the testing checks, the full design-token
 * reference — moved into `<details>` disclosures inside Key Design
 * Decisions and Designing & Building rather than disappearing: a Design
 * Lead can read the whole page in minutes, and a technical reader can
 * still open every receipt. The chapter order still matches the
 * portfolio's positioning: Product Design → Design Systems →
 * Accessibility → front-end/AI as supporting evidence, not the other way
 * around.
 */
function PortfolioCaseStudy() {
  const { copy } = useLanguage()

  return (
    <article>
      <Container size="content" className="pt-8">
        <Link
          to="/work"
          className="group inline-flex items-center gap-2 text-sm font-medium tracking-tight text-muted-foreground transition-colors duration-(--duration-fast) ease-standard hover:text-brand"
        >
          <ArrowLeft
            aria-hidden="true"
            className="size-4 transition-transform duration-(--duration-fast) ease-standard group-hover:-translate-x-0.5"
          />
          {copy.common.backToWork}
        </Link>
      </Container>

      <Hero />
      <Overview />
      <Challenge />
      <Approach />
      <KeyDecisions />
      <DesigningAndBuilding />
      <Iterations />
      <FinalExperience />
      <OutcomeAndLearnings />
    </article>
  )
}

export { PortfolioCaseStudy }
