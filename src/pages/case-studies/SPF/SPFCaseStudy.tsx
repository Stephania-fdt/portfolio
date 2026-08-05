import { useEffect } from "react"

import { Hero } from "@/pages/case-studies/SPF/Hero"
import { Overview } from "@/pages/case-studies/SPF/Overview"
import { Facts } from "@/pages/case-studies/SPF/Facts"
import { Challenge } from "@/pages/case-studies/SPF/Challenge"
import { Research } from "@/pages/case-studies/SPF/Research"
import { Foundations } from "@/pages/case-studies/SPF/Foundations"
import { Tokens } from "@/pages/case-studies/SPF/Tokens"
import { Components } from "@/pages/case-studies/SPF/Components"
import { Interfaces } from "@/pages/case-studies/SPF/Interfaces"
import { Accessibility } from "@/pages/case-studies/SPF/Accessibility"
import { Reflection } from "@/pages/case-studies/SPF/Reflection"

/**
 * Sprint 18.1 — infrastructure only, reachable at
 * `/work/spf-design-system/preview` (not the live case-study URL — see
 * that route's comment in App.tsx for why). Assembles the ten sections
 * in the order Sprint 18 will actually write into. Every section
 * currently shows its own "awaiting assets" checklist since nothing has
 * been exported from Figma yet — that's expected, not a bug, until real
 * files land in `src/assets/case-studies/spf/`.
 */
function SPFCaseStudy() {
  useEffect(() => {
    document.title = "SPF Design System (preview) — Stéphania"
  }, [])

  return (
    <article>
      <Hero />
      <Overview />
      <Facts />
      <Challenge />
      <Research />
      <Foundations />
      <Tokens />
      <Components />
      <Interfaces />
      <Accessibility />
      <Reflection />
    </article>
  )
}

export { SPFCaseStudy }
