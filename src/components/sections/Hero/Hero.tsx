import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Container, containerVariants } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { HeroBackground } from "@/components/sections/Hero/HeroBackground"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { heroContent } from "@/content/hero"

/**
 * Deterministic 3-row grid — no ratio balancing. Row 1 (auto) is the
 * editorial column in plain document flow; row 2 (1fr) is the only
 * flexible thing in this layout and holds no element; row 3 (auto) is
 * the scroll cue. The name's position is a fixed offset (`pt-section`)
 * from the top, never a function of how tall anything below it is.
 */
function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative grid min-h-dvh w-full grid-rows-[auto_1fr_auto] overflow-hidden pt-section pb-6"
    >
      <HeroBackground />

      <Container size="content" className="relative row-start-1">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeUp}
            className="text-hero font-bold tracking-hero"
          >
            {heroContent.name}
          </motion.h1>

          {/* Single measured wrapper — the reading column's width is declared
              once here; nothing below repeats its own max-w-xl. */}
          <div className="max-w-xl">
            <motion.p
              variants={fadeUp}
              className="mt-6 font-mono text-xl leading-snug text-primary md:text-2xl"
            >
              {heroContent.statement.primary}{" "}
              <br className="hidden md:inline" />
              {heroContent.statement.secondary}
            </motion.p>

            {/* The big pause: declaration (name + statement) to reading
                (value prop + CTA) is one register change, not three even steps. */}
            <motion.div variants={fadeUp} className="mt-20 space-y-4">
              <p className="text-lg text-foreground md:text-xl">
                {heroContent.valueProposition.lead}
              </p>
              <p className="text-lg text-muted-foreground md:text-xl">
                {heroContent.valueProposition.support}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button asChild size="lg">
                <a href={heroContent.primaryCta.href}>
                  {heroContent.primaryCta.label}
                  <ArrowRight
                    aria-hidden="true"
                    className="transition-transform duration-(--duration-fast) ease-standard group-hover:translate-x-0.5"
                  />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={heroContent.secondaryCta.href}>
                  {heroContent.secondaryCta.label}
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Row 2 (the 1fr track) is intentionally empty — no spacer element. */}

      <div
        aria-hidden="true"
        className={cn(containerVariants({ size: "content" }), "row-start-3")}
      >
        {/* Same max-w-xl measure as the text column above, so the cue is
            centered under the column — not under the full-width container. */}
        <div className="max-w-xl">
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Scroll
            </span>
            <span className="relative h-10 w-px overflow-hidden bg-border">
              <span className="absolute inset-x-0 top-0 h-1/2 w-full animate-scroll-cue bg-accent" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
