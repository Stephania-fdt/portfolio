import { motion, useReducedMotion } from "framer-motion"
import { FileText } from "lucide-react"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL } from "@/components/ui/case-study-capture"
import { CaseStudyImage } from "@/components/ui/case-study-image"
import { CaseStudyVideo } from "@/components/ui/case-study-video"
import { CaseStudyDisclosure } from "@/components/ui/case-study-disclosure"
import { SectionSubBlock } from "@/pages/CaseStudy/CaseStudy"
import { harmonyCaseStudy } from "@/content/case-studies/harmony"
import { translateCaseStudy } from "@/content/case-studies/translate"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/i18n"

/**
 * Visual-composition pass: same real gallery, videos and document as
 * before, now in a `spacing="sm"` chapter (the generic renderer's
 * `spacing="md"` — 9rem/144px top and bottom — was the second-largest
 * contributor to Harmony's excess height). Crop and poster tuning is
 * untouched, read straight from each image/video object rather than
 * re-specified here.
 */
function Result() {
  const { language } = useLanguage()
  const [, , result] = translateCaseStudy(harmonyCaseStudy, language).sections
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="harmony-result" spacing="sm">
      <Container size="content">
        <SectionKicker>{result.heading}</SectionKicker>

        <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-foreground">
          {result.paragraphs.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              {...(shouldReduceMotion
                ? { initial: false }
                : REVEAL(index * 0.08))}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {result.images && result.images.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {result.images.map((image) => (
              <figure key={image.src}>
                <CaseStudyImage
                  src={image.src}
                  alt={image.alt}
                  zoomable={image.zoomable}
                  width={image.width}
                  height={image.height}
                  cropAspectClassName={image.cropAspectClassName}
                  cropZoomClassName={image.cropZoomClassName}
                  cropPositionClassName={image.cropPositionClassName}
                />
                {image.label || image.caption ? (
                  <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                    {image.label ? <span>{image.label}</span> : null}
                    {image.label && image.caption ? " — " : null}
                    {image.caption ? <span>{image.caption}</span> : null}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        ) : null}

        {result.videos && result.videos.length > 0 ? (
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {result.videos.map((video) => (
              <CaseStudyVideo
                key={video.src}
                src={video.src}
                poster={video.poster}
                posterAlt={video.posterAlt}
                label={video.label}
                caption={video.caption}
                sizeNote={video.sizeNote}
                width={video.width}
                height={video.height}
                posterAspectClassName={video.posterAspectClassName}
                posterZoomClassName={video.posterZoomClassName}
                posterPositionClassName={video.posterPositionClassName}
                className={cn(
                  "mx-auto w-full",
                  video.displayWidth === "website" && "max-w-[440px]",
                  video.displayWidth === "mobile" && "max-w-[320px]",
                )}
              />
            ))}
          </div>
        ) : null}

        {result.document ? (
          <a
            href={result.document.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-3 border border-border px-5 py-4 text-sm font-medium text-foreground transition-colors duration-(--duration-fast) ease-standard hover:border-brand hover:text-brand"
          >
            <FileText aria-hidden="true" className="size-5 shrink-0" />
            <span>
              {result.document.label}
              {result.document.sizeNote ? (
                <span className="ml-2 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                  {result.document.sizeNote}
                </span>
              ) : null}
            </span>
          </a>
        ) : null}

        {result.disclosure ? (
          <CaseStudyDisclosure
            summary={result.disclosure.summary}
            className="mt-12"
          >
            {result.disclosure.sections.map((sub, index) => (
              <SectionSubBlock
                key={sub.title ?? index}
                sub={sub}
                index={index}
              />
            ))}
          </CaseStudyDisclosure>
        ) : null}
      </Container>
    </Section>
  )
}

export { Result }
