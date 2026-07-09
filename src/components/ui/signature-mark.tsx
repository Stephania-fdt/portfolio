import { motion, useReducedMotion } from "framer-motion"

import { transition } from "@/lib/motion"
import { cn } from "@/lib/utils"

type SignatureMarkProps = {
  letter: string
  className?: string
}

/**
 * The studio's signature device (Sprint 12). Not a logo laid over a grid —
 * one constructed object, the way a type-specimen sheet shows a letterform:
 * an 8-unit grid (the real 8pt convention, not invented decoration),
 * baseline/cap-height/x-height guides with their real typographic labels,
 * sidebearing ticks, one corner registration mark, and the letter itself,
 * all in the same SVG so the geometry is measured against the actual glyph
 * rather than floating near it. Near-invisible at rest — the letter sits at
 * the same 5% opacity GhostMark has always used — and the construction
 * layer reveals itself a beat later on the `atmosphere` motion tier
 * (Architected Light, Sprint 11.4) so "found on closer look" is literally
 * how it renders, not just how faint it is. Line weight is deliberately
 * hierarchical, not one uniform hairline: field grid (0.12) < canvas edge
 * (0.3) < drafted construction lines (0.35) < the one brand accent (0.6,
 * heaviest on purpose). One accent, same rule as every other component: a
 * single brand
 * tick, nothing else in this mark ever gets that color.
 */
function SignatureMark({ letter, className }: SignatureMarkProps) {
  const shouldReduceMotion = useReducedMotion()
  const gridLines = [4, 15.5, 27, 38.5, 50, 61.5, 73, 84.5, 96]

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none relative aspect-square w-full max-w-[34rem] select-none",
        className,
      )}
    >
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* The 8-unit grid — a design system's own base unit made visible,
            same idea as HeroBackground's coarser field grid, one register
            finer: the module inside the module. */}
        <motion.g
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={transition.atmosphere}
        >
          <rect
            x={4}
            y={4}
            width={92}
            height={92}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth={0.3}
          />
          {gridLines.slice(1, -1).map((pos) => (
            <line
              key={`v-${pos}`}
              x1={pos}
              y1={4}
              x2={pos}
              y2={96}
              stroke="var(--color-border)"
              strokeWidth={0.12}
            />
          ))}
          {gridLines.slice(1, -1).map((pos) => (
            <line
              key={`h-${pos}`}
              x1={4}
              y1={pos}
              x2={96}
              y2={pos}
              stroke="var(--color-border)"
              strokeWidth={0.12}
            />
          ))}

          {/* The letter — same 5% opacity GhostMark has always used, still
              the quietest element in the composition. */}
          <text
            x={50}
            y={74}
            textAnchor="middle"
            dominantBaseline="alphabetic"
            fontFamily="var(--font-heading)"
            fontWeight={600}
            fontSize={58}
            fill="var(--color-primary)"
            className="opacity-[0.05]"
          >
            {letter}
          </text>
        </motion.g>

        {/* Construction guides — real typographic terms, not invented
            data, so the labels stay honest. Arrives a beat after the base
            layer settles: the "discover it after looking" quality is
            sequenced, not just low-opacity. */}
        <motion.g
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ...transition.atmosphere,
            delay: shouldReduceMotion ? 0 : 0.45,
          }}
        >
          {/* Primary drafted lines — the weight a real construction line
              carries, not a diagram hairline. */}
          <g stroke="var(--color-muted-foreground)" strokeWidth={0.35}>
            <line x1={8} y1={32} x2={92} y2={32} strokeDasharray="1.2 2" />
            <line x1={8} y1={45} x2={92} y2={45} strokeDasharray="1.2 2" />
            <line x1={8} y1={74} x2={92} y2={74} strokeDasharray="1.2 2" />
            <line x1={32} y1={32} x2={32} y2={74} strokeDasharray="1.2 2" />
            <line x1={68} y1={32} x2={68} y2={74} strokeDasharray="1.2 2" />
          </g>

          <g
            fontFamily="var(--font-mono)"
            fontSize={2.6}
            fill="var(--color-muted-foreground)"
            className="opacity-60"
          >
            <text x={8} y={30}>
              cap-height
            </text>
            <text x={8} y={43}>
              x-height
            </text>
            <text x={8} y={72}>
              baseline
            </text>
          </g>

          {/* Corner registration mark — the print-sheet convention this
              whole device borrows from. */}
          <g
            stroke="var(--color-muted-foreground)"
            strokeWidth={0.35}
            className="opacity-40"
          >
            <line x1={8.5} y1={6} x2={8.5} y2={11} />
            <line x1={6} y1={8.5} x2={11} y2={8.5} />
            <circle cx={8.5} cy={8.5} r={2.4} fill="none" strokeWidth={0.25} />
          </g>

          {/* The one accent in the whole mark — a single measured tick,
              not a flourish. Heaviest line in the composition on purpose. */}
          <line
            x1={32}
            y1={74}
            x2={32}
            y2={78}
            stroke="var(--color-brand)"
            strokeWidth={0.6}
            className="opacity-80"
          />
        </motion.g>
      </svg>
    </div>
  )
}

export { SignatureMark }
