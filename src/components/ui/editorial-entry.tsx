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
}

function EditorialEntry({
  index,
  numeral = "arabic",
  eyebrow,
  title,
  sentence,
  children,
  className,
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
          {eyebrow ? (
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              {eyebrow}
            </span>
          ) : null}
        </div>
      ) : null}

      <h3 className="mt-4 text-5xl font-bold md:text-6xl">{title}</h3>

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
