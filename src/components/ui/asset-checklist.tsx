import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"
import { transition } from "@/lib/motion"
import { FIELD_GRID_PATTERN } from "@/lib/patterns"
import type { ExpectedAsset } from "@/content/case-studies/spf-assets"

type AssetChecklistProps = {
  label: string
  status?: string
  missing: ExpectedAsset[]
  className?: string
}

/**
 * SPF infrastructure (Sprint 18.1) — the "waiting for assets" card for a
 * whole section, used when some (or all) of that section's expected
 * images haven't landed yet. Shrinks and eventually disappears on its
 * own as real files get dropped into the folder: it only ever lists
 * what's still missing, not the section's full expected list.
 */
function AssetChecklist({
  label,
  status,
  missing,
  className,
}: AssetChecklistProps) {
  const shouldReduceMotion = useReducedMotion()

  if (missing.length === 0) return null

  return (
    <motion.div
      aria-hidden="true"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={transition.slow}
      className={cn(
        "border border-border bg-secondary/50 p-8 md:p-12",
        className,
      )}
      style={{ backgroundImage: FIELD_GRID_PATTERN }}
    >
      <p className="font-mono text-2xs tracking-widest text-muted-foreground uppercase">
        {label}
        {status ? ` — ${status}` : null}
      </p>
      <ul className="mt-6 space-y-2">
        {missing.map((asset) => (
          <li
            key={asset.filename}
            className="flex items-baseline gap-3 font-mono text-xs"
          >
            <span aria-hidden="true" className="text-border">
              —
            </span>
            <span className="text-muted-foreground">
              <span className="text-foreground">{asset.filename}</span>
              {" — "}
              {asset.description}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export { AssetChecklist }
