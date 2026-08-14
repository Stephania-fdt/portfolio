import { getProcessStages } from "@/content/process"
import { SectionKicker } from "@/components/ui/section-kicker"
import { formatNumeral } from "@/lib/numerals"
import { useLanguage } from "@/i18n"

/**
 * An editorial passage, not a diagram — no arrows, no circles, no
 * progress bar. Roman numerals are its one deliberate distinction from
 * Design Principles' arabic ones, per EDITORIAL_OS §3.
 */
function TheProcess() {
  const { language, copy } = useLanguage()
  const processStages = getProcessStages(language)
  return (
    <section
      id="process"
      aria-label={language === "fr" ? "Le processus" : "The Process"}
      data-screen-label="Approach"
      className="border-b border-border px-[clamp(1.5rem,4vw,4rem)] py-[clamp(3.5rem,7vw,6rem)]"
    >
      <div className="mb-[clamp(2rem,4vw,3rem)] flex items-baseline gap-6">
        <SectionKicker className="flex-1">
          {language === "fr" ? "Le processus" : "The Process"}
        </SectionKicker>
        <span className="font-mono text-[0.625rem] tracking-[0.16em] text-muted-foreground">
          {String(processStages.length).padStart(2, "0")} {copy.common.stages}
        </span>
      </div>

      <div
        data-process-stages
        className="grid grid-cols-1 gap-px border-y border-border bg-border sm:grid-cols-2 lg:grid-cols-5"
      >
        {processStages.map((stage, index) => (
          <article
            key={stage.title}
            className="transition-col duration-standard flex flex-col gap-[0.85rem] bg-background px-5 py-6 pb-8 ease-standard hover:bg-brand-soft"
          >
            <span className="font-mono text-[0.625rem] tracking-[0.18em] text-brand">
              {formatNumeral(index, "roman")}
            </span>
            <h3 className="m-0 font-heading text-[1.35rem] leading-normal font-semibold tracking-tightest text-foreground">
              {stage.title}
            </h3>
            <p className="m-0 text-sm leading-[1.6] text-muted-foreground">
              {stage.sentence}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export { TheProcess }
