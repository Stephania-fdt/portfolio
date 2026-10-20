import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

import { Container } from "@/components/ui/container"
import { CaseStudyNext } from "@/components/ui/case-study-next"
import { Hero } from "@/pages/case-studies/SPF/Hero"
import { ProblemAndRole } from "@/pages/case-studies/SPF/ProblemAndRole"
import { Foundations } from "@/pages/case-studies/SPF/Foundations"
import { KeyDecisions } from "@/pages/case-studies/SPF/KeyDecisions"
import { Result } from "@/pages/case-studies/SPF/Result"
import { Reflection } from "@/pages/case-studies/SPF/Reflection"
import { useLanguage } from "@/i18n"

/**
 * The canonical SPF case study at `/work/spf-design-system`. Editorial
 * restructure (length pass 3): five chapters — Hero, Problem &
 * Contribution, Key Decisions, Result, Reflection — down from the
 * previous six (which were themselves condensed from eleven). Overview,
 * The Challenge, The Design System, Execution and Accessibility are gone
 * as standalone chapters; their real facts and captures now live inside
 * Problem & Contribution and the three named decisions, with the
 * exhaustive technical inventory behind two "reference" disclosures
 * rather than forced into the main scroll. Nothing was invented to fill
 * the gaps this left — where evidence runs out (no documented keyboard
 * walkthrough, no formal usability testing), the page says so instead of
 * implying otherwise.
 */
function SPFCaseStudy() {
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
      <Foundations />
      <KeyDecisions />
      <Result />
      <Reflection />
      <CaseStudyNext currentHref="/work/spf-design-system" />
    </article>
  )
}

export { SPFCaseStudy }
