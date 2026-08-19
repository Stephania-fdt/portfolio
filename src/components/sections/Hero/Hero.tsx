import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { HeroBackground } from "@/components/sections/Hero/HeroBackground"
import { ScrollIndicator } from "@/components/sections/Hero/ScrollIndicator"
import { transition } from "@/lib/motion"
import { getHeroContent } from "@/content/hero"
import { useLanguage } from "@/i18n"

/** Distance (px) the Hero's own reveals travel — slightly more than the
 *  sitewide FADE_OFFSET (12px) since these are larger, slower beats, not
 *  small UI transitions. */
const REVEAL_OFFSET = 16

/**
 * Sprint 12 — the Hero rebuilt as its own editorial composition rather
 * than the site's shared `fadeUp`/`staggerContainer` rhythm. Every other
 * section keeps that shared vocabulary; the Hero earns a bespoke one
 * because it's the one moment asked to feel authored rather than
 * systematic. Hand-tuned, uneven delays (not a fixed stagger interval) so
 * the byline, the claim, the CTAs and the expertise line land as distinct
 * beats with their own weight — a pause you can feel, not a metronome.
 * Compressed (Sprint "Hero height reduction") so that pause never reads as
 * a delay: four beats now land inside ~0.6s of hand-off, not ~0.9s.
 */
function Hero() {
  const { language, copy } = useLanguage()
  const heroContent = getHeroContent(language)
  const shouldReduceMotion = useReducedMotion()

  const reveal = (delay: number, offset = REVEAL_OFFSET) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: offset },
    animate: { opacity: 1, y: 0 },
    transition: { ...transition.slow, delay: shouldReduceMotion ? 0 : delay },
  })

  return (
    <section
      id="hero"
      aria-label={copy.common.introduction}
      className="relative isolate grid w-full overflow-x-hidden md:min-h-[80dvh] md:grid-cols-[58fr_42fr] lg:grid-cols-[65fr_35fr]"
    >
      <div className="grid grid-rows-[auto_1fr_auto] pt-16 pb-6 md:pt-20 lg:pt-24">
        <Container size="content" className="row-start-1">
          {/* Byline demoted to a masthead credit line, not a sentence —
              the scale drop from here to the claim below is the first
              beat of editorial tension: small, precise, then enormous. */}
          <motion.p
            {...reveal(0)}
            className="text-xs font-medium tracking-widest text-foreground uppercase md:text-sm"
          >
            {heroContent.name}
            <span className="text-muted-foreground">
              {" "}
              — {heroContent.title}
            </span>
          </motion.p>

          {/* Sprint "Hero height reduction" — 6xl, not 7xl, and one
              sentence, not the title restated: the byline above already
              answers "who", so every word here is spent on "what" instead. */}
          <motion.h1
            {...reveal(0.15)}
            className="mt-6 max-w-3xl text-4xl leading-[0.98] font-bold tracking-tightest sm:text-5xl md:mt-7 md:text-5xl lg:text-6xl"
          >
            {heroContent.headline}
          </motion.h1>

          {/* Wider than the CTA/expertise column below (max-w-2xl vs.
              max-w-xl) and a tighter leading-[1.5] rather than
              leading-relaxed — both tuned specifically to absorb the
              longer, personal-introduction supporting statement (Sprint
              "Hero supporting statement — personal intro") without
              growing the Hero's height more than that extra length
              already requires. Matches About's own intro paragraph
              (max-w-[50rem], leading-[1.5]) rather than inventing a new
              body-copy convention. */}
          <motion.p
            {...reveal(0.3)}
            className="mt-5 max-w-2xl text-lg leading-[1.5] text-muted-foreground md:mt-6 md:text-xl"
          >
            {heroContent.description}
          </motion.p>

          <div className="max-w-xl">
            <motion.div
              {...reveal(0.45)}
              className="mt-7 flex flex-wrap items-center gap-5 md:mt-8"
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
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-muted-foreground/70 hover:border-muted-foreground"
              >
                <Link to={heroContent.secondaryCta.href}>
                  {heroContent.secondaryCta.label}
                </Link>
              </Button>
            </motion.div>

            {/* Three names, quietly — never a badge grid, never louder
                than the CTAs it sits beneath. The depth behind each one
                lives in the case studies, not here. */}
            <motion.p
              {...reveal(0.6)}
              className="mt-6 text-xs font-medium tracking-wide text-muted-foreground uppercase md:mt-7 md:text-sm"
            >
              {heroContent.expertise.items
                .map((item) => item.title)
                .join(" · ")}
            </motion.p>
          </div>
        </Container>

        {/* Row 2 (the 1fr track) is intentionally empty — no spacer element. */}

        <ScrollIndicator />
      </div>

      <HeroBackground />
    </section>
  )
}

export { Hero }
