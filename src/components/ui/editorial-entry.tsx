import * as React from "react"

import { cn } from "@/lib/utils"
import { formatNumeral, type NumeralStyle } from "@/lib/numerals"

/**
 * The shared "chapter" primitive per EDITORIAL_OS.md — numeral + eyebrow,
 * large title, one or two editorial paragraphs. Selected Work adds an
 * image and a CTA via `children`; Design Principles and The Process
 * (roman numerals) use it bare. Selected Thoughts sets `numeral={false}`
 * — it's a collection of essays, not a numbered sequence.
 */
type EditorialEntryProps = {
  index: number
  numeral?: NumeralStyle | false
  eyebrow?: React.ReactNode
  title: string
  sentence: string | string[]
  children?: React.ReactNode
  className?: string
  /** Extra classes on the `<h3>` itself — e.g. a hover color transition
   *  driven by a `group` ancestor outside this component (WorkItem's
   *  whole-card hover). Optional: every other caller leaves it unset. */
  titleClassName?: string
}

function EditorialEntry({
  index,
  numeral = "arabic",
  eyebrow,
  title,
  sentence,
  children,
  className,
  titleClassName,
}: EditorialEntryProps) {
  const paragraphs = Array.isArray(sentence) ? sentence : [sentence]

  return (
    <div className={cn(className)}>
      {numeral || eyebrow ? (
        <div className="flex items-baseline gap-4">
          {numeral ? (
            // Decorative wayfinding, not content — "II" and "01" both read
            // poorly aloud, and the entry's own heading already carries
            // the meaning.
            <span
              aria-hidden="true"
              className="font-mono text-2xl text-muted-foreground md:text-3xl"
            >
              {formatNumeral(index, numeral)}
            </span>
          ) : null}
          {/* Sans, not mono — same Architected Light rule as SectionKicker:
              mono stays reserved for construction/technical moments, and
              a category · year caption isn't one. */}
          {eyebrow ? (
            <span className="font-sans text-xs tracking-widest text-brand uppercase">
              {eyebrow}
            </span>
          ) : null}
        </div>
      ) : null}

      <h3 className={cn("mt-4 text-5xl font-bold md:text-6xl", titleClassName)}>
        {title}
      </h3>

      <div className="mt-5 max-w-xl space-y-4 text-xl text-foreground md:text-2xl">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {children}
    </div>
  )
}

export { EditorialEntry }
