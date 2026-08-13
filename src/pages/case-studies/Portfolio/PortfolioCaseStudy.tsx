import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

import { Container } from "@/components/ui/container"
import { Hero } from "@/pages/case-studies/Portfolio/Hero"
import { Challenge } from "@/pages/case-studies/Portfolio/Challenge"
import { Objectives } from "@/pages/case-studies/Portfolio/Objectives"
import { Process } from "@/pages/case-studies/Portfolio/Process"
import { InformationArchitecture } from "@/pages/case-studies/Portfolio/InformationArchitecture"
import { DesignSystem } from "@/pages/case-studies/Portfolio/DesignSystem"
import { AIWorkflow } from "@/pages/case-studies/Portfolio/AIWorkflow"
import { FrontEnd } from "@/pages/case-studies/Portfolio/FrontEnd"
import { Accessibility } from "@/pages/case-studies/Portfolio/Accessibility"
import { Responsive } from "@/pages/case-studies/Portfolio/Responsive"
import { Testing } from "@/pages/case-studies/Portfolio/Testing"
import { Iteration } from "@/pages/case-studies/Portfolio/Iteration"
import { Outcome } from "@/pages/case-studies/Portfolio/Outcome"
import { Learnings } from "@/pages/case-studies/Portfolio/Learnings"

/**
 * Reachable at `/work/portfolio` — the real, live case study for Project
 * 02 in Selected Work, unlike the SPF/WellPack chapter builds still
 * staged at `/preview`. Fourteen chapters, same order the approved brief
 * specified: Hero, Challenge, Objectives, Process, Information
 * Architecture, Design System, AI-Assisted Workflow, Front-end
 * Implementation, Accessibility, Responsive Design, Testing & Validation,
 * Iteration, Outcome, Learnings.
 */
function PortfolioCaseStudy() {
  useEffect(() => {
    document.title = "Stéphania — Portfolio — Stéphania"
  }, [])

  return (
    <article>
      <Container size="content" className="pt-8">
        <Link
          to="/#work"
          className="group inline-flex items-center gap-2 text-sm font-medium tracking-tight text-muted-foreground transition-colors duration-(--duration-fast) ease-standard hover:text-brand"
        >
          <ArrowLeft
            aria-hidden="true"
            className="size-4 transition-transform duration-(--duration-fast) ease-standard group-hover:-translate-x-0.5"
          />
          Selected Work
        </Link>
      </Container>

      <Hero />
      <Challenge />
      <Objectives />
      <Process />
      <InformationArchitecture />
      <DesignSystem />
      <AIWorkflow />
      <FrontEnd />
      <Accessibility />
      <Responsive />
      <Testing />
      <Iteration />
      <Outcome />
      <Learnings />
    </article>
  )
}

export { PortfolioCaseStudy }
