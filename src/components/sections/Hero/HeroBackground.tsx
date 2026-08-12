import { motion, useReducedMotion } from "framer-motion"

import { SignatureMark } from "@/components/ui/signature-mark"
import { heroContent } from "@/content/hero"
import { transition } from "@/lib/motion"

/**
 * SVG turbulence, tiled — the one "micro luxury" texture (Sprint 11.2,
 * regrained Sprint 11.4), kept scoped to this composition and nowhere near
 * the reading column. No image asset, no network request: pure CSS/SVG.
 * A lower base frequency than before plus a contrast-boosting color matrix
 * turns smooth uniform noise into coarser, irregular speckle — closer to
 * paper/print grain than screen static.
 */
const GRAIN_TEXTURE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch' seed='7'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 3 -1.1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

/**
 * The right 35% of the Hero (Sprint 11.2, elevated Sprint 12, given a
 * voice Sprint 11.4) — a quiet architectural composition, not a
 * photograph: a coarse field grid (the page's own layout made visible),
 * the studio's SignatureMark nested inside it (a finer grid, one register
 * down — the module inside the module), a folio number, and — the one
 * real sentence in the whole composition — Stéphania's own signature
 * line, sitting in the margin the way an architect signs a drawing.
 * Hidden below `md`, same precedent this component has always used — a
 * small viewport gets the words, not the composition around them.
 *
 * `aria-hidden` moves from the wrapper onto each individually decorative
 * child (grid, folio number, grain) rather than the whole subtree — the
 * signature line is authored content, not texture, and has to reach a
 * screen reader same as any other real sentence on the page.
 */
function HeroBackground() {
  const shouldReduceMotion = useReducedMotion()
  const initial = heroContent.name.charAt(0)

  return (
    <div className="relative hidden overflow-hidden border-l border-border md:block">
      {/* Construction grid — a design-system grid made visible, not applied
          decoratively. Four columns, five rows, one hairline each. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, var(--color-border) 0, var(--color-border) 1px, transparent 1px, transparent 25%), repeating-linear-gradient(to bottom, var(--color-border) 0, var(--color-border) 1px, transparent 1px, transparent 20%)",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center p-6 lg:p-12">
        <div className="flex flex-col items-start gap-4 lg:gap-6">
          <SignatureMark letter={initial} />

          {/* The signature — arrives last, on purpose. Everything else in
              this composition has already settled by the time this
              appears, so finding it reads as a discovery, not a label. */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...transition.atmosphere,
              delay: shouldReduceMotion ? 0 : 0.85,
            }}
            className="max-w-[12rem] text-sm leading-relaxed text-muted-foreground italic lg:max-w-[22rem]"
          >
            {heroContent.signature}
          </motion.p>
        </div>
      </div>

      <span
        aria-hidden="true"
        className="absolute top-section right-8 font-mono text-2xs tracking-widest text-muted-foreground"
      >
        N° 01
      </span>

      {/* Grain sits on top, last — a texture over the whole composition,
          multiplied in rather than replacing anything beneath it. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{ backgroundImage: GRAIN_TEXTURE }}
      />
    </div>
  )
}

export { HeroBackground }
