import * as React from "react"

import { cn } from "@/lib/utils"

type SectionKickerProps = {
  children: React.ReactNode
  className?: string
}

/**
 * The chapter ritual from EDITORIAL_OS.md §2 — a small mono label naming
 * the section, paired with a hairline rule. Rendered as a real `<h2>` so
 * heading navigation stays correct even though it reads visually quiet.
 */
function SectionKicker({ children, className }: SectionKickerProps) {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      <h2 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        {children}
      </h2>
      <span aria-hidden="true" className="h-px flex-1 bg-border" />
    </div>
  )
}

export { SectionKicker }
