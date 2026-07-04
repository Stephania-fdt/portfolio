import { cn } from "@/lib/utils"
import { containerVariants } from "@/components/ui/container"
import { GhostMark } from "@/components/ui/ghost-mark"
import { heroContent } from "@/content/hero"

/**
 * Purely decorative editorial framing: an oversized ghost initial, a
 * hairline guide with a collectible spine-tag label (left), and a small
 * edition marker (right) — like a magazine cover's folio. All hidden
 * below `md` so a small viewport isn't fighting the copy for attention.
 */
function HeroBackground() {
  const initial = heroContent.name.charAt(0)

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden select-none md:block"
    >
      <GhostMark className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[12%]">
        {initial}
      </GhostMark>

      <div className={cn(containerVariants({ size: "content" }), "h-full")}>
        <div className="relative h-full">
          {/* Anchored to a fixed top offset (matching the content column's
              own pt-section start), not the visual center — a fixed
              reference can't drift when copy elsewhere changes height. */}
          <div className="absolute top-section left-4 flex origin-left -rotate-90 items-center gap-2">
            <span className="h-px w-3 bg-muted-foreground/25" />
            <span className="font-mono text-2xs tracking-widest text-muted-foreground uppercase">
              {heroContent.title}
            </span>
            <span className="h-px w-3 bg-muted-foreground/25" />
          </div>

          <span className="absolute top-0 right-0 font-mono text-2xs tracking-widest text-muted-foreground">
            Nº 01
          </span>
        </div>
      </div>
    </div>
  )
}

export { HeroBackground }
