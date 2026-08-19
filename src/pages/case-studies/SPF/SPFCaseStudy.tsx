import { Hero } from "@/pages/case-studies/SPF/Hero"
import { Overview } from "@/pages/case-studies/SPF/Overview"
import { Challenge } from "@/pages/case-studies/SPF/Challenge"
import { Research } from "@/pages/case-studies/SPF/Research"
import { DesignSystem } from "@/pages/case-studies/SPF/DesignSystem"
import { Execution } from "@/pages/case-studies/SPF/Execution"
import { Accessibility } from "@/pages/case-studies/SPF/Accessibility"
import { Reflection } from "@/pages/case-studies/SPF/Reflection"

/**
 * The canonical SPF case study at `/work/spf-design-system`. Condensed
 * from eleven chapters to seven after the Hero: Overview, The Challenge,
 * Research & UX, The Design System, Execution, Accessibility,
 * Reflection. Facts was folded out (it repeated Hero's own meta and
 * Overview's Environment point); Foundations+Tokens merged into The
 * Design System, Component Library+Product Interfaces merged into
 * Execution. Each merged chapter keeps its full original evidence —
 * every real screenshot, every real token value — behind a "reference"
 * disclosure rather than dropping it; only the main scroll got shorter.
 * Challenge/Research/Reflection are unchanged, including Reflection's
 * closing story, which was never a candidate for editing.
 */
function SPFCaseStudy() {
  return (
    <article>
      <Hero />
      <Overview />
      <Challenge />
      <Research />
      <DesignSystem />
      <Execution />
      <Accessibility />
      <Reflection />
    </article>
  )
}

export { SPFCaseStudy }
