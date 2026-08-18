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
 * The canonical SPF case study at `/work/spf-design-system`. It assembles
 * the detailed asset-driven chapters in their published reading order.
 */
function SPFCaseStudy() {
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
