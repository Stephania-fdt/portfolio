import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type CaseStudyDisclosureProps = {
  /** The trigger's visible label — e.g. "How it was built". */
  summary: string
  children: ReactNode
  className?: string
}

/**
 * Progressive disclosure for a chapter's secondary evidence — native
 * `<details>`/`<summary>`, no JS, no icon (Architected Light reserves
 * iconography for nothing). Keyboard support, the expanded/collapsed
 * state and the screen-reader announcement all come from the browser for
 * free. The +/− marker is decorative text, matching the site's own
 * diff-style convention (see the Iterations chapter's before/after tag).
 */
function CaseStudyDisclosure({
  summary,
  children,
  className,
}: CaseStudyDisclosureProps) {
  return (
    <details
      className={cn("group mt-16 border-t border-border pt-8", className)}
    >
      <summary className="flex cursor-pointer list-none items-center gap-3 font-mono text-2xs tracking-widest text-brand uppercase focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
        <span
          aria-hidden="true"
          className="text-sm leading-none group-open:hidden"
        >
          +
        </span>
        <span
          aria-hidden="true"
          className="hidden text-sm leading-none group-open:inline"
        >
          −
        </span>
        {summary}
      </summary>
      <div className="mt-10">{children}</div>
    </details>
  )
}

export { CaseStudyDisclosure }
