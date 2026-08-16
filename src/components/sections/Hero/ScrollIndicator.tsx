import { motion, useReducedMotion } from "framer-motion"

import { useScrolled } from "@/hooks/use-scrolled"
import { transition } from "@/lib/motion"
import { cn } from "@/lib/utils"

/** A visual-only scroll affordance; it is neither focusable nor interactive. */
function ScrollIndicator() {
  const shouldReduceMotion = useReducedMotion()
  const hasScrolled = useScrolled(24)

  return (
    <motion.div
      aria-hidden="true"
      animate={{ opacity: hasScrolled ? 0 : 1 }}
      transition={shouldReduceMotion ? { duration: 0 } : transition.slow}
      className={cn(
        "mx-auto w-full max-w-content px-container",
        "row-start-3 flex min-h-16 shrink-0 items-start justify-end md:-translate-y-12",
      )}
    >
      <span className="flex flex-col items-center">
        <span className="relative flex h-9 w-5 items-start justify-center rounded-full border border-muted-foreground/70">
          <span className="absolute top-1/2 right-px left-px h-px bg-muted-foreground/70" />
          <motion.span
            className="mt-2 h-1 w-1 rounded-full bg-muted-foreground"
            animate={shouldReduceMotion ? undefined : { y: [0, 7, 0] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
            }
          />
        </span>
        <span className="mt-3 font-mono text-2xs tracking-[0.28em] text-muted-foreground">
          Scroll
        </span>
      </span>
    </motion.div>
  )
}

export { ScrollIndicator }
