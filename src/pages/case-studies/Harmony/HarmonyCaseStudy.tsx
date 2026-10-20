import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

import { Container } from "@/components/ui/container"
import { Hero } from "@/pages/case-studies/Harmony/Hero"
import { Overview } from "@/pages/case-studies/Harmony/Overview"
import { KeyDecisions } from "@/pages/case-studies/Harmony/KeyDecisions"
import { Result } from "@/pages/case-studies/Harmony/Result"
import { Reflection } from "@/pages/case-studies/Harmony/Reflection"
import { useLanguage } from "@/i18n"

/**
 * The canonical Harmony case study at `/work/harmony`. Visual-composition
 * pass: moved off the generic, data-driven `CaseStudy` renderer (still
 * used by Joga Aura) onto bespoke chapters — Hero, Overview, Key
 * Decisions, Result, Reflection — matching the SPF and WellPack pattern.
 * Every real fact, image, video and disclosure from `harmony.ts` is still
 * here unchanged; only the layout, spacing and crop framing around them
 * changed. See each chapter file for what specifically moved and why.
 */
function HarmonyCaseStudy() {
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
      <KeyDecisions />
      <Result />
      <Reflection />
    </article>
  )
}

export { HarmonyCaseStudy }
