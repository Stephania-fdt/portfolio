import { motion, useReducedMotion } from "framer-motion"
import { Accessibility, Layers, PenTool, Search } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { transition } from "@/lib/motion"
import { getHeroContent } from "@/content/hero"
import { useLanguage } from "@/i18n"

/**
 * Presentation only — content stays pure data in `content/hero.ts`. Reuses
 * the icon library already used sitewide (lucide-react, e.g. Hero's own
 * CTA arrow) rather than introducing a new one. Minimal line icons, one
 * per expertise item, chosen for direct semantic match rather than
 * decoration: a pen for design craft, stacked layers for a system, a
 * magnifying glass for research, the literal accessibility mark.
 */
const EXPERTISE_ICONS: Record<string, LucideIcon> = {
  "Product Design": PenTool,
  "Design Systems": Layers,
  "UX Research": Search,
  Accessibility: Accessibility,
}

/**
 * The compact expertise block, one beat after the two Hero CTAs (Sprint
 * "Hero expertise addition") — same `reveal`-style single fade-up Hero
 * already uses for each of its own beats, not a new animation pattern.
 * Sits inside the Hero's existing `min-h-dvh` grid, in the row that used
 * to be empty space above `ScrollIndicator` — real content there, not a
 * separate section. Two columns below `lg` (not one): four real
 * descriptions stacked one-per-row measured ~140px taller on a 375px
 * screen than two-per-row does, and "avoid an excessively long Hero" was
 * an explicit constraint here.
 */
function HeroExpertise() {
  const { language } = useLanguage()
  const shouldReduceMotion = useReducedMotion()
  const { expertise } = getHeroContent(language)

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ...transition.slow,
        delay: shouldReduceMotion ? 0 : 0.85,
      }}
      className="mt-12 max-w-2xl"
    >
      <p className="font-sans text-xs tracking-widest text-brand uppercase">
        {expertise.eyebrow}
      </p>
      <h2 className="mt-3 font-heading text-xl font-semibold text-foreground md:text-2xl">
        {expertise.heading}
      </h2>

      <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-6 lg:grid-cols-4 lg:gap-x-6">
        {expertise.items.map((item) => {
          const Icon = EXPERTISE_ICONS[item.title]

          return (
            <li key={item.title}>
              {Icon ? (
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="size-5 text-brand"
                />
              ) : null}
              <p className="mt-2 font-heading text-sm font-semibold text-foreground">
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}

export { HeroExpertise }
