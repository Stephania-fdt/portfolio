import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

import { Container } from "@/components/ui/container"
import { Hero } from "@/pages/case-studies/WellPack/Hero"
import { ProblemAndRole } from "@/pages/case-studies/WellPack/ProblemAndRole"
import { KeyDecisions } from "@/pages/case-studies/WellPack/KeyDecisions"
import { Result } from "@/pages/case-studies/WellPack/Result"
import { Reflection } from "@/pages/case-studies/WellPack/Reflection"
import { useLanguage } from "@/i18n"

/**
 * The canonical WellPack case study at `/work/wellpack`. Editorial
 * restructure (length + structure pass): five chapters — Hero, Problem &
 * Contribution, Key Decisions, Result, Reflection — down from eight.
 * Overview and Challenge merge (one problem, told once); Method and
 * Brief merge into one decision (research → brief was always continuous,
 * not two chapters); Brand becomes the second decision, in the same
 * chapter, not its own; Proof folds into Result as a single sober line.
 * Every real fact and image from the previous seven chapters is still
 * here — none of it was invented or dropped, only the repeated setup
 * and the second, third dramatic framing of the same honest limits.
 */
function WellPackCaseStudy() {
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
      <ProblemAndRole />
      <KeyDecisions />
      <Result />
      <Reflection />
    </article>
  )
}

export { WellPackCaseStudy }
