import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { cn } from "@/lib/utils"
import {
  isNavLinkActive,
  navigationContent,
  getNavigationContent,
  resolveNavHref,
} from "@/content/navigation"
import { useActiveSection } from "@/hooks/use-active-section"
import { transition } from "@/lib/motion"
import { useLanguage } from "@/i18n"
import { LanguageSwitcher } from "@/components/layout/Navigation/LanguageSwitcher"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const PANEL_ID = "portfolio-index"
const SECTION_IDS = navigationContent.links
  .filter((link) => link.href.startsWith("#"))
  .map((link) => link.href.slice(1))

/**
 * The small-screen table of contents. It deliberately stays a dialog rather
 * than a navigation disclosure: opening it gives the publication-like index
 * its own reading surface and keeps keyboard focus inside that surface.
 */
function IndexNavigation() {
  const { language, copy } = useLanguage()
  const navigation = getNavigationContent(language)
  const [isOpen, setIsOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const { pathname } = useLocation()
  const activeId = useActiveSection(SECTION_IDS)
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
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={
          isOpen ? copy.controls.closeNavigation : copy.controls.openNavigation
        }
        aria-expanded={isOpen}
        aria-controls={PANEL_ID}
        onClick={() => setIsOpen((open) => !open)}
        className="group inline-flex min-h-11 items-center gap-2 border border-border px-3 font-mono text-2xs tracking-widest text-foreground transition-[border-color,color] duration-(--duration-fast) ease-standard hover:border-brand hover:text-brand"
      >
        <span>{copy.controls.index.toUpperCase()}</span>
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
                {copy.controls.index.toUpperCase()}
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="min-h-11 font-mono text-2xs tracking-widest text-foreground transition-colors duration-(--duration-fast) ease-standard hover:text-brand"
              >
                {copy.controls.close.toUpperCase()}{" "}
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <nav aria-label="Index" className="mt-8">
              <ol>
                {navigation.links.map((link, index) => {
                  const isActive = isNavLinkActive(
                    link.href,
                    pathname,
                    activeId,
                  )

                  return (
                    <motion.li
                      key={link.href}
                      initial={
                        shouldReduceMotion ? false : { opacity: 0, y: 8 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      exit={
                        shouldReduceMotion ? undefined : { opacity: 0, y: 4 }
                      }
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : {
                              ...transition.standard,
                              delay: 0.06 * (index + 1),
                            }
                      }
                      className="border-b border-border"
                    >
                      <Link
                        to={resolveNavHref(link.href)}
                        onClick={close}
                        aria-current={isActive ? "location" : undefined}
                        className={cn(
                          "group flex min-h-20 items-center py-4",
                          isActive && "text-brand",
                        )}
                      >
                        <span className="w-12 font-mono text-2xs tracking-widest text-muted-foreground transition-colors duration-(--duration-fast) ease-standard group-hover:text-brand group-focus-visible:text-brand">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "font-mono text-2xl leading-[1.2] font-normal tracking-[0.14em] text-foreground sm:text-3xl",
                            isActive && "text-brand",
                          )}
                        >
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
                  )
                })}
              </ol>
            </nav>

            <Button asChild variant="outline" size="lg" className="mt-8 w-full">
              <Link to={resolveNavHref(navigation.cta.href)} onClick={close}>
                {navigation.cta.label}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>

            <div className="mt-auto pt-10 font-mono text-2xs tracking-widest text-muted-foreground">
              <p>{copy.common.productDesigner.toUpperCase()}</p>
              <p className="mt-2 tracking-normal normal-case">
                Design Systems · Accessibility · AI
              </p>
              <div className="mt-8 border-t border-border pt-6">
                <p className="mb-3 font-sans text-sm font-medium tracking-normal text-foreground normal-case">
                  {copy.controls.language}
                </p>
                <LanguageSwitcher fullWidth />
              </div>
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export { IndexNavigation }
