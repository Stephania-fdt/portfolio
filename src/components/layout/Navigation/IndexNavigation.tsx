import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

import { navigationContent } from "@/content/navigation"
import { transition } from "@/lib/motion"

const PANEL_ID = "portfolio-index"

/**
 * The small-screen table of contents. It deliberately stays a dialog rather
 * than a navigation disclosure: opening it gives the publication-like index
 * its own reading surface and keeps keyboard focus inside that surface.
 */
function IndexNavigation() {
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
          `#${PANEL_ID} button:not(:disabled), #${PANEL_ID} a[href]`,
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
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls={PANEL_ID}
        onClick={() => setIsOpen((open) => !open)}
        className="group inline-flex min-h-11 items-center gap-2 border border-border px-3 font-mono text-2xs tracking-widest text-foreground transition-[border-color,color] duration-(--duration-fast) ease-standard hover:border-brand hover:text-brand"
      >
        <span>INDEX</span>
        <motion.span
          aria-hidden="true"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : transition.fast}
          className="text-sm leading-none"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.section
            id={PANEL_ID}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${PANEL_ID}-title`}
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={
              shouldReduceMotion ? { duration: 0 } : transition.standard
            }
            className="fixed inset-0 z-[60] flex min-h-dvh flex-col overflow-y-auto bg-background px-container py-6"
          >
            <div className="flex items-start justify-between border-b border-border pb-5">
              <h2
                id={`${PANEL_ID}-title`}
                className="font-mono text-xs font-medium tracking-widest text-foreground"
              >
                INDEX
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="min-h-11 font-mono text-2xs tracking-widest text-foreground transition-colors duration-(--duration-fast) ease-standard hover:text-brand"
              >
                CLOSE <span aria-hidden="true">×</span>
              </button>
            </div>

            <nav aria-label="Index" className="mt-8">
              <ol>
                {navigationContent.links.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? undefined : { opacity: 0, y: 4 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { ...transition.standard, delay: 0.06 * (index + 1) }
                    }
                    className="border-b border-border"
                  >
                    <Link
                      to={`/${link.href}`}
                      onClick={close}
                      className="group flex min-h-20 items-center py-4"
                    >
                      <span className="w-12 font-mono text-2xs tracking-widest text-muted-foreground transition-colors duration-(--duration-fast) ease-standard group-hover:text-brand group-focus-visible:text-brand">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-2xl leading-[1.2] font-normal tracking-[0.14em] text-foreground sm:text-3xl">
                        {link.label.toUpperCase()}
                      </span>
                      <span
                        aria-hidden="true"
                        className="ml-auto text-lg text-brand opacity-0 transition-opacity duration-(--duration-fast) ease-standard group-hover:opacity-100 group-focus-visible:opacity-100"
                      >
                        →
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ol>
            </nav>

            <div className="mt-auto pt-10 font-mono text-2xs tracking-widest text-muted-foreground">
              <p>PRODUCT DESIGNER</p>
              <p className="mt-2 tracking-normal normal-case">
                Design Systems · Accessibility · AI
              </p>
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export { IndexNavigation }
