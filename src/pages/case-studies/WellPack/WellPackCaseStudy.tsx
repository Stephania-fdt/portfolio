import { Hero } from "@/pages/case-studies/WellPack/Hero"
import { Challenge } from "@/pages/case-studies/WellPack/Challenge"
import { Method } from "@/pages/case-studies/WellPack/Method"
import { Brief } from "@/pages/case-studies/WellPack/Brief"
import { Brand } from "@/pages/case-studies/WellPack/Brand"
import { Proof } from "@/pages/case-studies/WellPack/Proof"
import { Reflection } from "@/pages/case-studies/WellPack/Reflection"

/**
 * The canonical WellPack case study at `/work/wellpack`.
 *
 * Seven chapters now: the original six-chapter Editorial Blueprint (Hero
 * / The Challenge / The Method / From Method to Brief / Proof Without a
 * Metric / Reflection) plus The Brand Itself, added once a second real
 * asset batch confirmed WellPack's own brand-identity work as a genuine,
 * separate dimension of this role — not stubbed as a placeholder, built
 * because real evidence justified it. Placed between Brief and Proof,
 * the same order the brief for this pass specified.
 */
function WellPackCaseStudy() {
  return (
    <article>
      <Hero />
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
