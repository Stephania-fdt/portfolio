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
} as const

export const transition = {
  fast: { duration: DURATION.fast, ease: EASE_STANDARD },
  standard: { duration: DURATION.standard, ease: EASE_STANDARD },
  slow: { duration: DURATION.slow, ease: EASE_STANDARD },
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
 * Stagger wrapper for a group of `fadeUp`/`fadeIn` children. Pair with
 * `initial={shouldReduceMotion ? false : "hidden"}` on the parent so
 * `useReducedMotion()` skips straight to the resolved layout.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
