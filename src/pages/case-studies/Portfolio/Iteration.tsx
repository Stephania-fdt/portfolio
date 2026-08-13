import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import { FIELD_GRID_PATTERN } from "@/lib/patterns"
import jogaAuraProduct from "@/assets/case-studies/joga-aura/product.png"

/**
 * Portfolio case study — Chapter 12, Iteration. The "before" state is
 * rendered live with the exact same field-grid pattern `WorkItem` itself
 * used while no real Joga Aura asset existed — not a screenshot standing
 * in for it, the actual real component pattern, reused. The "after" is
 * the same real product photo Selected Work uses today.
 */
function Iteration() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-iteration">
      <Container size="content">
        <SectionKicker>Iteration</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>
            The final portfolio is the result of repeated design, implementation
            and review cycles, not a single pass. Two real examples from this
            project, not staged for this page.
          </p>
        </SubsectionText>

        {/* Example 1 — the Joga Aura placeholder */}
        <div className="mt-16">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            Example — a Placeholder, Replaced Once Real Evidence Existed
          </p>
          <motion.div
            {...(shouldReduceMotion ? { initial: false } : REVEAL())}
            className="mt-8 grid gap-8 sm:grid-cols-2"
          >
            <figure>
              <div
                aria-hidden="true"
                className="flex aspect-[4/3] w-full items-center justify-center border border-border bg-secondary/50"
                style={{ backgroundImage: FIELD_GRID_PATTERN }}
              >
                <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Plate 05
                </span>
              </div>
              <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                Before — the sober placeholder used while no real Joga Aura
                asset existed yet.
              </figcaption>
            </figure>
            <figure>
              <div className="aspect-[4/3] w-full overflow-hidden border border-border bg-secondary/50">
                <img
                  src={jogaAuraProduct}
                  alt="Joga Aura's real product page, showing the Tapis Blue Serenity yoga mat — the real asset that replaced the placeholder."
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                After — a real client asset, found and cropped to the same
                aspect ratio, not invented.
              </figcaption>
            </figure>
          </motion.div>
        </div>

        {/* Example 2 — the SPF category tag refinement */}
        <div className="mt-24 max-w-2xl">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            Example — a Category Tag, Refined Under Review
          </p>
          <SubsectionText className="mt-4">
            <p>
              SPF&rsquo;s category tag went through a real review pass: the
              accessibility work described in that case study wasn&rsquo;t
              reflected in its own eyebrow tag until it was pointed out and
              corrected.
            </p>
          </SubsectionText>
          <motion.div
            {...(shouldReduceMotion ? { initial: false } : REVEAL(0.1))}
            className="mt-6 space-y-2 border border-border bg-secondary/50 p-6 font-mono text-xs"
          >
            <p className="text-muted-foreground">
              <span aria-hidden="true">− </span>
              Product Design · Design System
            </p>
            <p className="text-foreground">
              <span aria-hidden="true" className="text-brand">
                +{" "}
              </span>
              Product Design · Design System · Accessibility
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export { Iteration }
