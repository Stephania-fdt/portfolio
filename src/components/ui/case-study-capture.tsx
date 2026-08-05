import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"
import { transition } from "@/lib/motion"

/**
 * Shared between every SPF chapter that mixes real captures needing a
 * deliberate crop with already-clean exports (first used in Foundations,
 * Sprint 18.3; extracted once Tokens needed the exact same two
 * treatments — the second real use case, not a hypothetical one).
 *
 * Renamed from `case-study-figma-capture.tsx` in Sprint 18.6, once
 * Product Interfaces needed the same cropping treatment for clean,
 * chrome-free website screenshots (Blog, the mobile auth screen) —
 * "FigmaCapture" stopped being an accurate name the moment it was
 * cropping something that was never a Figma editor window.
 */
export const REVEAL = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { ...transition.slow, delay },
})

type CroppedCaptureProps = {
  src: string
  alt: string
  caption: string
  /** Tuned per image — how much to zoom past `object-cover`'s natural fill to frame the useful part of the capture. */
  zoomClassName?: string
  /** Tailwind `object-position` arbitrary value, e.g. "object-[38%_40%]". */
  positionClassName?: string
  aspectClassName?: string
  className?: string
}

/**
 * A real capture — a raw Figma screen (editor chrome and all) or a tall
 * full-page website screenshot — framed to show only what the surrounding
 * copy is actually about. Cropped in the browser via a narrow aspect
 * ratio, zoom and object-position, never recreated or artificially
 * cleaned. Per-image tuning happens at the call site since every capture's
 * useful content sits in a different part of the frame.
 */
function CroppedCapture({
  src,
  alt,
  caption,
  zoomClassName = "scale-[1.7]",
  positionClassName = "object-[38%_40%]",
  aspectClassName = "aspect-[16/10]",
  className,
}: CroppedCaptureProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.figure
      {...(shouldReduceMotion ? { initial: false } : REVEAL())}
      className={cn("w-full", className)}
    >
      <div
        className={cn(
          "w-full overflow-hidden border border-border bg-secondary/50",
          aspectClassName,
        )}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn(
            "h-full w-full object-cover",
            zoomClassName,
            positionClassName,
          )}
        />
      </div>
      <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
        {caption}
      </figcaption>
    </motion.figure>
  )
}

type AssetFrameProps = {
  src: string
  alt: string
  className?: string
}

/** An already-clean, already-exported asset — shown whole (`object-contain`), never cropped, since nothing needs hiding. */
function AssetFrame({ src, alt, className }: AssetFrameProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      {...(shouldReduceMotion ? { initial: false } : REVEAL())}
      className={cn(
        "w-full overflow-hidden border border-border bg-secondary/50 p-4 md:p-6",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-auto w-full object-contain"
      />
    </motion.div>
  )
}

function SubsectionText({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "max-w-xl space-y-4 text-lg leading-relaxed text-foreground",
        className,
      )}
    >
      {children}
    </div>
  )
}

export { CroppedCapture, AssetFrame, SubsectionText }
