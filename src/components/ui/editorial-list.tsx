import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"
import { fadeUp } from "@/lib/motion"
import { EditorialEntry } from "@/components/ui/editorial-entry"
import type { NumeralStyle } from "@/lib/numerals"

type EditorialListItem = {
  title: string
  sentence: string | string[]
  eyebrow?: React.ReactNode
}

type EditorialListProps = {
  items: EditorialListItem[]
  numeral?: NumeralStyle | false
  className?: string
}

/**
 * The bare-EditorialEntry list rhythm shared by Design Principles and The
 * Process: hairline-divided, scroll-triggered fadeUp per entry. Selected
 * Work stays its own composition (WorkItem) since it adds an image, a
 * CTA, and alternating sides — genuinely different, not this pattern.
 */
function EditorialList({ items, numeral, className }: EditorialListProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className={cn("mt-14 divide-y divide-border", className)}>
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={fadeUp}
          className="py-section-sm first:pt-0 last:pb-0"
        >
          <EditorialEntry
            index={index}
            numeral={numeral}
            eyebrow={item.eyebrow}
            title={item.title}
            sentence={item.sentence}
          />
        </motion.div>
      ))}
    </div>
  )
}

export { EditorialList }
