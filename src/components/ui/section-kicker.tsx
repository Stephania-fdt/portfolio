import * as React from "react"

import { cn } from "@/lib/utils"

type SectionKickerProps = {
  children: React.ReactNode
  className?: string
}

/**
 * The chapter ritual from EDITORIAL_OS.md §2 — a small label naming the
 * section, paired with a hairline rule. Rendered as a real `<h2>` so
 * heading navigation stays correct even though it reads visually quiet.
 * Sans, not mono (Architected Light, Sprint 11.4) — mono is reserved for
 * the site's construction language (annotations, edition numbers,
 * technical moments), and a chapter title isn't one of those.
 */
function SectionKicker({ children, className }: SectionKickerProps) {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      <h2 className="font-sans text-xs tracking-widest text-brand uppercase">
        {children}
      </h2>
      <span aria-hidden="true" className="h-px flex-1 bg-border" />
    </div>
  )
}

export { SectionKicker }
