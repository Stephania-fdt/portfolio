import { Hero } from "@/pages/case-studies/WellPack/Hero"
import { Overview } from "@/pages/case-studies/WellPack/Overview"
import { Challenge } from "@/pages/case-studies/WellPack/Challenge"
import { Method } from "@/pages/case-studies/WellPack/Method"
import { Brief } from "@/pages/case-studies/WellPack/Brief"
import { Brand } from "@/pages/case-studies/WellPack/Brand"
import { Proof } from "@/pages/case-studies/WellPack/Proof"
import { Reflection } from "@/pages/case-studies/WellPack/Reflection"

/**
 * The canonical WellPack case study at `/work/wellpack`.
 *
 * Eight chapters: Hero, Overview, The Challenge, The Method, From Method
 * to Brief, The Brand Itself, Proof Without a Metric, Reflection. This
 * case study needed the lightest touch of the four case studies audited
 * for Senior/Staff density (Sprint following Portfolio/SPF/Harmony): it
 * was already disciplined — no tool inventory, no method-listing, no
 * repetition, every chapter already closing on its own decision. The
 * only real gap was Overview, added here to match the same scan-level
 * summary every other case study on this site now opens with. No
 * chapter merged, no deep dive added — none of the existing six needed
 * it, and forcing one would have split a chapter that already reads as
 * one real decision into two redundant halves.
 */
function WellPackCaseStudy() {
  return (
    <article>
      <Hero />
      <Overview />
      <Challenge />
      <Method />
      <Brief />
      <Brand />
      <Proof />
      <Reflection />
    </article>
  )
}

export { WellPackCaseStudy }
