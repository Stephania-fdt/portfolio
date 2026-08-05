import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"
import { transition } from "@/lib/motion"
import { FIELD_GRID_PATTERN } from "@/lib/patterns"

type CaseStudyAssetProps = {
  /** Resolved image URL, or `undefined` if the file doesn't exist yet. */
  src: string | undefined
  filename: string
  alt: string
  /** What this slot is waiting for — shown only in the placeholder state. */
  description: string
  caption?: string
  /**
   * A short construction-style note (matches SignatureMark's annotation
   * language) — optional, unused today, kept as a real prop so a future
   * pass can add one without changing this component's shape.
   */
  annotation?: string
  className?: string
  /** Fixed aspect ratio — keeps layout stable whether this renders the
   *  real image or the placeholder, so nothing shifts when assets land. */
  aspect?: string
}

/**
 * SPF infrastructure (Sprint 18.1). One image slot: renders the real
 * asset via `getSpfAsset` if it exists, otherwise a quiet placeholder in
 * the site's own field-grid language — never an empty white box. The
 * `<figure>`/single-child-image shape is deliberately simple so a future
 * zoom/lightbox interaction can wrap it without restructuring anything.
 */
function CaseStudyAsset({
  src,
  filename,
  alt,
  description,
  caption,
  annotation,
  className,
  aspect = "aspect-[4/3]",
}: CaseStudyAssetProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.figure
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.02 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={transition.slow}
      className={cn(
        "w-full overflow-hidden border border-border bg-secondary/50 shadow-xs",
        aspect,
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center"
          style={{ backgroundImage: FIELD_GRID_PATTERN }}
        >
          <span className="font-mono text-2xs tracking-widest text-muted-foreground uppercase">
            Awaiting {filename}
          </span>
          <span className="max-w-xs text-xs text-muted-foreground">
            {description}
          </span>
        </div>
      )}
      {src && (caption || annotation) ? (
        <figcaption className="mt-3 space-y-1 px-1">
          {caption ? (
            <p className="text-xs text-muted-foreground">{caption}</p>
          ) : null}
          {annotation ? (
            <p className="font-mono text-2xs tracking-widest text-muted-foreground uppercase">
              {annotation}
            </p>
          ) : null}
        </figcaption>
      ) : null}
    </motion.figure>
  )
}

export { CaseStudyAsset }
