import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

import { Container } from "@/components/ui/container"
import { Hero } from "@/pages/case-studies/Portfolio/Hero"
import { Challenge } from "@/pages/case-studies/Portfolio/Challenge"
import { Objectives } from "@/pages/case-studies/Portfolio/Objectives"
import { Process } from "@/pages/case-studies/Portfolio/Process"
import { Evolution } from "@/pages/case-studies/Portfolio/Evolution"
import { InformationArchitecture } from "@/pages/case-studies/Portfolio/InformationArchitecture"
import { Features } from "@/pages/case-studies/Portfolio/Features"
import { DesignSystem } from "@/pages/case-studies/Portfolio/DesignSystem"
import { Accessibility } from "@/pages/case-studies/Portfolio/Accessibility"
import { AIWorkflow } from "@/pages/case-studies/Portfolio/AIWorkflow"
import { FrontEnd } from "@/pages/case-studies/Portfolio/FrontEnd"
import { Responsive } from "@/pages/case-studies/Portfolio/Responsive"
import { Testing } from "@/pages/case-studies/Portfolio/Testing"
import { Iteration } from "@/pages/case-studies/Portfolio/Iteration"
import { WhatChanged } from "@/pages/case-studies/Portfolio/WhatChanged"
import { Outcome } from "@/pages/case-studies/Portfolio/Outcome"
import { Learnings } from "@/pages/case-studies/Portfolio/Learnings"
import { useLanguage } from "@/i18n"

/**
 * Reachable at `/work/portfolio` — the real, live case study for Project
 * 02 in Selected Work. Fourteen chapters: Hero, Challenge, Objectives,
 * Process, Information Architecture, Design System, Accessibility,
 * AI-Assisted Workflow, Front-end Implementation, Responsive Design,
 * Testing & Validation, Iteration, Outcome, Learnings. Accessibility
 * reads before AI-Assisted Workflow/Front-end (reordered from the
 * original build) so the case study's own chapter sequence matches the
 * portfolio's positioning: Product Design → Design Systems →
 * Accessibility → front-end/AI as supporting evidence, not the other way
 * around.
 */
function PortfolioCaseStudy() {
  const { language, copy } = useLanguage()

  useEffect(() => {
    document.title =
      language === "fr"
        ? "Stéphania — Portfolio — Étude de cas"
        : "Stéphania — Portfolio — Case study"
  }, [language])

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
      <Challenge />
      <Objectives />
      <Process />
      <Evolution />
      <InformationArchitecture />
      <Features />
      <DesignSystem />
      <Accessibility />
      <AIWorkflow />
      <FrontEnd />
      <Responsive />
      <Testing />
      <Iteration />
      <WhatChanged />
      <Outcome />
      <Learnings />
    </article>
  )
}

export { PortfolioCaseStudy }
