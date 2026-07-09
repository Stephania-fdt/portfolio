import type { Transition, Variants } from "framer-motion"

/**
 * Motion tokens — mirrors the CSS custom properties in `index.css`
 * (--duration-*, --ease-standard). Framer Motion needs numeric seconds
 * and a cubic-bezier array rather than CSS strings, so the values are
 * duplicated here rather than read from the stylesheet.
 */
export const EASE_STANDARD = [0.22, 1, 0.36, 1] as const

export const DURATION = {
  fast: 0.15,
  standard: 0.25,
  slow: 0.4,
  /** Atmosphere only — background/construction reveals, never content a
   *  visitor is waiting to read or act on. See Architected Light. */
  atmosphere: 0.7,
} as const

export const transition = {
  fast: { duration: DURATION.fast, ease: EASE_STANDARD },
  standard: { duration: DURATION.standard, ease: EASE_STANDARD },
  slow: { duration: DURATION.slow, ease: EASE_STANDARD },
  atmosphere: { duration: DURATION.atmosphere, ease: EASE_STANDARD },
} satisfies Record<string, Transition>

/** Distance (px) content travels in enter/exit transitions. Kept small — motion should be felt, not seen. */
const FADE_OFFSET = 12

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transition.standard },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: FADE_OFFSET },
  visible: { opacity: 1, y: 0, transition: transition.standard },
}

/**
 * Same fadeUp, held a beat longer — for the one deliberate emphasis moment
 * (Selected Work's lead entry), not a new motion vocabulary. Reuses the
 * existing `slow` duration token; nothing here is a new value.
 */
export const fadeUpSlow: Variants = {
  hidden: { opacity: 0, y: FADE_OFFSET },
  visible: { opacity: 1, y: 0, transition: transition.slow },
}

/**
 * Stagger wrapper for a group of `fadeUp`/`fadeIn` children. Pair with
 * `initial={shouldReduceMotion ? false : "hidden"}` on the parent so
 * `useReducedMotion()` skips straight to the resolved layout.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
