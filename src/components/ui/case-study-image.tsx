import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Maximize2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { transition } from "@/lib/motion"
import { useLanguage } from "@/i18n"

const OVERLAY_ID = "case-study-lightbox"

type CaseStudyImageProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  contain?: boolean
  /** Opts dense, text-heavy artifacts into the click-to-enlarge overlay. */
  zoomable?: boolean
  selected?: boolean
  /** Real source-file pixel dimensions — reserves the right aspect ratio before load. */
  width?: number
  height?: number
}

/**
 * One case-study image slot. Adds a click-to-enlarge overlay for
 * `zoomable` artifacts (research decks, wireframe sheets) so full-page
 * scans stay legible without forcing every reader to zoom their own
 * browser. Follows the same hand-built accessible-dialog pattern as
 * `IndexNavigation` (focus trap, Escape, body-scroll lock) rather than
 * introducing a second dialog primitive for one use case.
 */
function CaseStudyImage({
  src,
  alt,
  className,
  imgClassName,
  contain,
  zoomable,
  selected,
  width,
  height,
}: CaseStudyImageProps) {
  const { copy } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const wasOpenRef = useRef(false)

  const close = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) {
      if (wasOpenRef.current) {
        triggerRef.current?.focus()
        wasOpenRef.current = false
      }
      return
    }

    wasOpenRef.current = true
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        close()
        return
      }
      if (event.key !== "Tab") return

      const focusable = Array.from(
        document.querySelectorAll<HTMLElement>(
          `#${OVERLAY_ID} button:not(:disabled)`,
        ),
      )
      const first = focusable[0]
      const last = focusable.at(-1)
      if (!first || !last) return

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <div
        className={cn(
          "relative overflow-hidden border border-border bg-secondary/50",
          selected && "border-brand",
          contain && "bg-secondary/30 p-4 shadow-xs md:p-6",
          className,
        )}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          width={width}
          height={height}
          className={cn(
            "h-auto w-full",
            contain && "object-contain",
            imgClassName,
          )}
        />
        {zoomable ? (
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label={copy.controls.zoomImage}
            className="absolute right-3 bottom-3 inline-flex size-10 items-center justify-center border border-border bg-background/90 text-foreground shadow-xs backdrop-blur-sm transition-colors duration-(--duration-fast) ease-standard hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Maximize2 aria-hidden="true" className="size-4" />
          </button>
        ) : null}
      </div>

      {zoomable ? (
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              id={OVERLAY_ID}
              role="dialog"
              aria-modal="true"
              aria-label={alt}
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0 }}
              transition={
                shouldReduceMotion ? { duration: 0 } : transition.standard
              }
              className="fixed inset-0 z-100 flex flex-col bg-background/97 p-4 backdrop-blur-sm md:p-10"
            >
              <div className="flex justify-end">
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  className="inline-flex min-h-11 items-center gap-2 border border-border px-4 font-mono text-2xs tracking-widest text-foreground transition-colors duration-(--duration-fast) ease-standard hover:border-brand hover:text-brand"
                >
                  {copy.controls.close.toUpperCase()}
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="mt-4 flex flex-1 items-center justify-center overflow-auto">
                <img
                  src={src}
                  alt={alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      ) : null}
    </>
  )
}

export { CaseStudyImage }
