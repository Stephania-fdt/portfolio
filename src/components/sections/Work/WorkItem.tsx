import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import { formatNumeral } from "@/lib/numerals"
import { transition } from "@/lib/motion"
import { EditorialEntry } from "@/components/ui/editorial-entry"
import { caseStudies } from "@/content/case-studies"
import type { WorkProject } from "@/content/work"

type WorkItemProps = {
  project: WorkProject
  index: number
  /** Mirrors the image to the opposite side — Work's one alternating-rhythm device. */
  reverse?: boolean
}

/**
 * Sprint 14 — the whole card is the link, not just the "Read Case Study"
 * text. One real, stretched `<Link>` (the standard accessible "clickable
 * card" pattern: single tab stop, no nested interactive elements) covers
 * the full row via `after:absolute after:inset-0`; the image frame and
 * title react to that same hover through Tailwind's `group`, even though
 * neither is a descendant of the link itself.
 */
function WorkItem({ project, index, reverse }: WorkItemProps) {
  const shouldReduceMotion = useReducedMotion()
  // A project only links to a case study once one has actually been
  // written — a promised page that doesn't exist is worse than no link.
  const slug = project.href.replace("/work/", "")
  const hasCaseStudy = slug in caseStudies

  return (
    <div
      className={cn(
        "group relative flex flex-col gap-10 md:flex-row md:items-center md:gap-16",
        reverse && "md:flex-row-reverse",
      )}
    >
      <div className="md:basis-2/5">
        <EditorialEntry
          index={index}
          eyebrow={`${project.category} · ${project.year}`}
          title={project.title}
          sentence={project.sentence}
          titleClassName={
            hasCaseStudy
              ? "transition-colors duration-(--duration-standard) ease-standard group-hover:text-brand"
              : undefined
          }
        >
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
              Read Case Study
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-(--duration-fast) ease-standard group-hover:translate-x-0.5"
              />
            </Link>
          ) : null}
        </EditorialEntry>
      </div>

      <div className="md:basis-3/5">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={transition.slow}
          className={cn(
            "flex aspect-[4/3] w-full items-center justify-center overflow-hidden border border-border bg-secondary/50 shadow-xs transition-shadow duration-(--duration-standard) ease-standard",
            hasCaseStudy && "group-hover:shadow-md",
          )}
        >
          {project.previewImage ? (
            <img
              src={project.previewImage}
              alt={`${project.title} — selected interface`}
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
