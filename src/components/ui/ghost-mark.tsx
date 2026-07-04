import * as React from "react"

import { cn } from "@/lib/utils"

type GhostMarkProps = {
  children: React.ReactNode
  className?: string
}

/**
 * Oversized, near-invisible typographic texture — the site's one
 * recurring signature device (Hero's ghost initial, Editorial Quote's
 * mark). Never real copy, always decorative. Self-contained a11y/layout
 * defaults so it's safe to drop anywhere, not just inside an already
 * `aria-hidden` wrapper.
 */
function GhostMark({ children, className }: GhostMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "text-display pointer-events-none block leading-none font-heading text-primary/5 select-none",
        className,
      )}
    >
      {children}
    </span>
  )
}

export { GhostMark }
