import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { useScrolled } from "@/hooks/use-scrolled"
import { navigationContent } from "@/content/navigation"
import { heroContent } from "@/content/hero"

/**
 * Fixed, transparent-over-Hero chrome that picks up a blurred surface and
 * hairline border once the page scrolls past it. Left/center/right sit in
 * a 3-column grid (not flex + justify-between) so the link group stays
 * optically centered on the row regardless of how the name and CTA widths
 * compare — flex centering only looks centered when both sides match.
 */
function Navigation() {
  const scrolled = useScrolled(8)

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-(--duration-standard) ease-standard",
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container size="wide">
        <nav
          aria-label="Primary"
          className="grid h-16 grid-cols-[1fr_auto_1fr] items-center md:h-20"
        >
          <a
            href="#hero"
            className="justify-self-start font-heading text-sm font-medium tracking-tight text-foreground"
          >
            {heroContent.name}
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navigationContent.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium tracking-tight text-muted-foreground transition-colors duration-(--duration-fast) ease-standard hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="justify-self-end border-muted-foreground/70 hover:border-muted-foreground"
          >
            <a href={navigationContent.cta.href}>
              {navigationContent.cta.label}
              <ArrowRight
                aria-hidden="true"
                className="transition-transform duration-(--duration-fast) ease-standard group-hover:translate-x-0.5"
              />
            </a>
          </Button>
        </nav>
      </Container>
    </header>
  )
}

export { Navigation }
