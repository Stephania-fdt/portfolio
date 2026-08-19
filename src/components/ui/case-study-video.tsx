import { useState } from "react"
import { Play } from "lucide-react"

import { useLanguage } from "@/i18n"

type CaseStudyVideoProps = {
  src: string
  poster: string
  posterAlt: string
  label?: string
  caption?: string
  sizeNote?: string
  className?: string
  /** The poster image's real pixel dimensions — reserves its aspect ratio before load. */
  width?: number
  height?: number
}

/**
 * A real prototype recording, never fetched until someone asks for it.
 * Renders a poster frame with a play affordance; the `<video>` element
 * itself only mounts on click, so nothing downloads on page load and
 * nobody's mobile data is spent by surprise. Once mounted, playback uses
 * native controls — these are full walkthroughs meant to be watched, not
 * decorative background loops.
 */
function CaseStudyVideo({
  src,
  poster,
  posterAlt,
  label,
  caption,
  sizeNote,
  className,
  width,
  height,
}: CaseStudyVideoProps) {
  const { copy } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <figure className={className}>
      <div className="relative overflow-hidden border border-border bg-secondary/50">
        {isPlaying ? (
          <video
            src={src}
            poster={poster}
            controls
            autoPlay
            playsInline
            preload="none"
            className="h-auto w-full"
          >
            <track kind="captions" />
          </video>
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={
              sizeNote
                ? `${copy.controls.playVideo} — ${sizeNote}`
                : copy.controls.playVideo
            }
            className="group relative block w-full"
          >
            <img
              src={poster}
              alt={posterAlt}
              loading="lazy"
              width={width}
              height={height}
              className="h-auto w-full"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center bg-foreground/20 transition-colors duration-(--duration-fast) ease-standard group-hover:bg-foreground/30"
            >
              <span className="inline-flex size-16 items-center justify-center rounded-full bg-background/95 text-foreground shadow-md transition-transform duration-(--duration-fast) ease-standard group-hover:scale-105">
                <Play aria-hidden="true" className="ml-1 size-6 fill-current" />
              </span>
            </span>
            {sizeNote ? (
              <span
                aria-hidden="true"
                className="absolute right-3 bottom-3 bg-background/90 px-2 py-1 font-mono text-2xs tracking-widest text-muted-foreground uppercase"
              >
                {sizeNote}
              </span>
            ) : null}
          </button>
        )}
      </div>
      {label || caption ? (
        <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
          {label ? <span>{label}</span> : null}
          {label && caption ? " — " : null}
          {caption ? <span>{caption}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  )
}

export { CaseStudyVideo }
