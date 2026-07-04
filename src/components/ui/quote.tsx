import { cn } from "@/lib/utils"

type QuoteProps = {
  quote: string
  attribution?: string
  className?: string
}

/**
 * Large statement + small mono attribution. Built for Editorial Quote's
 * full-breather scale; Selected Thoughts will need a smaller, left-aligned
 * variant later — left unbuilt until that section has real content to
 * validate the API against.
 */
function Quote({ quote, attribution, className }: QuoteProps) {
  return (
    <div className={cn("text-center", className)}>
      <p className="text-4xl font-medium text-balance font-heading leading-snug md:text-5xl">
        {quote}
      </p>
      {attribution ? (
        <p className="mt-8 font-mono text-xs tracking-widest text-muted-foreground uppercase">
          — {attribution}
        </p>
      ) : null}
    </div>
  )
}

export { Quote }
