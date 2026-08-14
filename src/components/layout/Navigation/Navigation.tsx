import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { IndexNavigation } from "@/components/layout/Navigation/IndexNavigation"
import { useScrolled } from "@/hooks/use-scrolled"
import { useActiveSection } from "@/hooks/use-active-section"
import { navigationContent } from "@/content/navigation"
import { heroContent } from "@/content/hero"

/**
 * Module-level, not computed per render — useActiveSection depends on this
 * array by reference, and navigationContent never changes at runtime.
 */
const SECTION_IDS = navigationContent.links.map((link) => link.href.slice(1))

/**
 * Fixed, transparent-over-Hero chrome that picks up a blurred surface and
 * hairline border once the page scrolls past it. Left/center/right sit in
 * a 3-column grid (not flex + justify-between) so the link group stays
 * optically centered on the row regardless of how the name and CTA widths
 * compare — flex centering only looks centered when both sides match.
 *
 * The glass stays (Architected Light, Sprint 11.4 — explicitly kept, not
 * a SaaS default here) but refined warmer and subtler: a lighter blur so
 * more of what's behind bleeds through, and backdrop-saturate so that
 * bleed-through reads richer/warmer instead of just softened.
 */
function Navigation() {
  const scrolled = useScrolled(8)
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-(--duration-standard) ease-standard",
        scrolled
          ? "border-border bg-background/95 backdrop-blur-md backdrop-saturate-150"
          : "border-transparent bg-transparent",
      )}
    >
      <Container size="wide">
        <nav
          aria-label="Primary"
          className="grid h-16 grid-cols-[1fr_auto] items-center gap-2 sm:gap-4 md:h-20 md:grid-cols-[1fr_auto_1fr] md:gap-0"
        >
          <Link
            to="/#hero"
            className="inline-flex min-h-11 items-center justify-self-start font-heading text-sm font-medium tracking-tight text-foreground"
          >
            {heroContent.name}
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navigationContent.links.map((link) => {
              const isActive = activeId === link.href.slice(1)

              return (
                <li key={link.href}>
                  <Link
                    to={`/${link.href}`}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "text-sm font-medium tracking-tight transition-colors duration-(--duration-fast) ease-standard hover:text-brand",
                      isActive ? "text-brand" : "text-muted-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3 justify-self-end min-[375px]:gap-4 min-[390px]:gap-6 sm:gap-8 md:gap-0">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-muted-foreground/70 hover:border-muted-foreground"
            >
              <Link to={`/${navigationContent.cta.href}`}>
                {navigationContent.cta.label}
                <ArrowRight
                  aria-hidden="true"
                  className="transition-transform duration-(--duration-fast) ease-standard group-hover:translate-x-0.5"
                />
              </Link>
            </Button>
            <IndexNavigation />
          </div>
        </nav>
      </Container>
    </header>
  )
}

export { Navigation }
