import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import { formatNumeral } from "@/lib/numerals"
import { transition } from "@/lib/motion"
import { EditorialEntry } from "@/components/ui/editorial-entry"
import type { WorkProject } from "@/content/work"
import { getLocalizedContent, useLanguage } from "@/i18n"

type WorkItemProps = {
  project: WorkProject
  index: number
  /** Mirrors the image to the opposite side — Work's one alternating-rhythm device. */
  reverse?: boolean
  /**
   * Editorial weight, in descending order. "lead" (SPF) is the section's
   * one dominant plate — wider image column, larger title, the slow
   * motion beat. "secondary" (the Portfolio entry) is a real second proof
   * point — more room to breathe than the rest — expressed through space
   * and image presence only, never through title size or motion pacing,
   * so it can't visually compete with "lead". "standard" is everything
   * else. Space/sequence/motion carry the hierarchy — never color, per
   * the approved Product Vision.
   */
  tier?: "lead" | "secondary" | "standard"
  /** `/work` is the canonical index, so every listed project keeps its route link. */
  linkToProject?: boolean
}

/**
 * Sprint 14 — the whole card is the link, not just the "Read Case Study"
 * text. One real, stretched `<Link>` (the standard accessible "clickable
 * card" pattern: single tab stop, no nested interactive elements) covers
 * the full row via `after:absolute after:inset-0`; the image frame and
 * title react to that same hover through Tailwind's `group`, even though
 * neither is a descendant of the link itself.
 */
function WorkItem({
  project,
  index,
  reverse,
  tier = "standard",
  linkToProject = false,
}: WorkItemProps) {
  const { language, copy } = useLanguage()
  const shouldReduceMotion = useReducedMotion()
  const isLead = tier === "lead"
  const isSecondary = tier === "secondary"
  // Home links only projects with completed case studies. The canonical
  // `/work` index intentionally exposes every project's existing route.
  // Completed studies come from either the generic registry (heading +
  // paragraphs, rendered by `pages/CaseStudy`) or a hand-built route like
  // Portfolio's, flagged directly on the project.
  const hasCaseStudy = linkToProject || project.hasCaseStudy === true

  return (
    <div
      className={cn(
        // Mobile-only gap trimmed (10→8): below `md` this is the vertical
        // space between a card's text block and its stacked image — the
        // desktop row gap (md:gap-16, lead's md:gap-20/24) is untouched.
        "group relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16",
        isLead && "lg:gap-20 xl:gap-24",
        reverse && "lg:flex-row-reverse",
      )}
    >
      <div className="lg:basis-1/2">
        <EditorialEntry
          index={index}
          eyebrow={project.cardLabel}
          title={project.cardTitle}
          sentence={project.sentence}
          titleClassName={cn(
            "text-2xl leading-tight md:text-2xl",
            hasCaseStudy &&
              "transition-colors duration-(--duration-standard) ease-standard group-hover:text-brand",
          )}
        >
          <p className="mt-5 font-sans text-xs tracking-widest text-muted-foreground uppercase">
            {project.category} · {project.year}
          </p>
          <p className="mt-6 font-mono text-xs tracking-wide text-muted-foreground">
            {project.technologies.map((tech, i) => (
              <span key={tech}>
                {i > 0 && " · "}
                <span
                  className={cn(
                    project.signalTechnologies?.includes(tech) &&
                      "font-medium text-foreground",
                  )}
                >
                  {tech}
                </span>
              </span>
            ))}
          </p>

          {hasCaseStudy ? (
            // Deliberately not `relative` — the stretched `after` pseudo-
            // element needs its containing block to be the outer card
            // (the nearest `relative` ancestor), not this link itself, or
            // the hit area collapses back down to the link's own text.
            <Link
              to={project.href}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-brand after:absolute after:inset-0 after:content-['']"
            >
              {copy.common.viewCaseStudy}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-(--duration-fast) ease-standard group-hover:translate-x-0.5"
              />
            </Link>
          ) : null}
        </EditorialEntry>
      </div>

      <div className="lg:basis-1/2">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={transition.slow}
          className={cn(
            "flex w-full items-center justify-center overflow-hidden border border-border bg-secondary/50 shadow-xs transition-shadow duration-(--duration-standard) ease-standard",
            isLead && "aspect-[16/10] md:aspect-[16/11]",
            isSecondary && "aspect-[16/10]",
            // Wider on mobile only (3:2 vs the desktop 4:3) — below `md`
            // this image stacks full-width under its text, so the ratio
            // directly sets how tall the card gets; desktop (where the
            // image sits at 60% column width in the two-column row) is
            // untouched, same aspect-[4/3] as before.
            !isLead && !isSecondary && "aspect-[3/2] md:aspect-[4/3]",
            hasCaseStudy && "group-hover:shadow-md",
          )}
        >
          {project.previewImage ? (
            <img
              src={project.previewImage}
              alt={getLocalizedContent(
                {
                  en:
                    project.previewAlt ??
                    `${project.title} — selected interface`,
                  fr:
                    project.previewAltFr ??
                    project.previewAlt ??
                    `${project.title} — interface sélectionnée`,
                },
                language,
              )}
              width={project.previewWidth}
              height={project.previewHeight}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-(--duration-slow) ease-standard group-hover:scale-[1.03]"
            />
          ) : (
            // The "plate" — a drafting sheet before the image is inset,
            // not an empty box. Same field-grid language as the Hero's
            // architectural composition, at a quieter register: honest
            // about there being nothing to show yet, not a placeholder
            // that reads as broken.
            <div
              aria-hidden="true"
              className="relative flex h-full w-full items-center justify-center"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, var(--color-border) 0, var(--color-border) 1px, transparent 1px, transparent 20%), repeating-linear-gradient(to bottom, var(--color-border) 0, var(--color-border) 1px, transparent 1px, transparent 25%)",
              }}
            >
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Plate {formatNumeral(index)}
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export { WorkItem }
