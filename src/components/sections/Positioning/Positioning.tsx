import { SectionKicker } from "@/components/ui/section-kicker"
import { useLanguage } from "@/i18n"

const metrics = [
  {
    value: "2023",
    label: "Federal design system",
    description:
      "Built and governed for a Belgian federal institution — still running.",
  },
  {
    value: "WCAG",
    label: "Accessibility, embedded",
    description:
      "Audits and standards written into components, not appended as reports.",
  },
  {
    value: "05",
    label: "Shipped products",
    description: "Public sector, hardware startup, B2B SaaS, e-commerce.",
  },
  {
    value: "AI",
    label: "Assisted workflow",
    description:
      "This portfolio designed and coded end to end with AI in the loop.",
  },
]

/** Reference Positioning section, placed directly below the Home hero. */
function Positioning() {
  const { language } = useLanguage()
  const content =
    language === "fr"
      ? {
          label: "Positionnement",
          heading:
            "Une Product Designer qui construit le système, pas seulement l’écran — et le niveau d’accessibilité qui le rend exigeant.",
          metrics: [
            {
              value: "2023",
              label: "Design System fédéral",
              description:
                "Conçu et gouverné pour une institution fédérale belge — toujours actif.",
            },
            {
              value: "WCAG",
              label: "Accessibilité intégrée",
              description:
                "Audits et standards inscrits dans les composants, pas ajoutés en fin de parcours.",
            },
            {
              value: "05",
              label: "Produits livrés",
              description:
                "Secteur public, start-up hardware, SaaS B2B, e-commerce.",
            },
            {
              value: "IA",
              label: "Workflow assisté",
              description:
                "Ce portfolio a été conçu et codé de bout en bout avec l’IA dans la boucle.",
            },
          ],
        }
      : {
          label: "Positioning",
          heading:
            "A product designer who builds the system, not just the screen — and the accessibility standard that keeps it honest.",
          metrics,
        }
  return (
    <section
      id="positioning"
      aria-label={content.label}
      className="border-b border-border px-[clamp(1.5rem,4vw,4rem)] py-[clamp(3rem,6vw,5rem)]"
    >
      <SectionKicker className="mb-[clamp(2rem,4vw,3rem)]">
        {content.label}
      </SectionKicker>

      <div className="grid grid-cols-1 gap-6 min-[900px]:grid-cols-12 min-[900px]:items-end">
        <div className="flex flex-col gap-5 min-[900px]:col-span-5">
          <p className="m-0 font-heading text-[clamp(1.6rem,2.3vw,2.4rem)] leading-[1.12] font-medium tracking-tightest text-pretty text-foreground">
            {content.heading}
          </p>
        </div>

        <div
          data-positioning-metrics
          className="grid grid-cols-1 gap-px border border-border bg-border min-[480px]:grid-cols-2 min-[900px]:col-span-6 min-[900px]:col-start-7"
        >
          {content.metrics.map((metric) => (
            <article
              key={metric.value}
              className="flex flex-col gap-2 bg-background px-6 py-6 pb-7"
            >
              <span className="font-heading text-[2.6rem] leading-none font-semibold tracking-[-0.04em] text-foreground">
                {metric.value}
              </span>
              <span className="font-mono text-[0.625rem] tracking-[0.16em] text-brand uppercase">
                {metric.label}
              </span>
              <p className="m-0 text-[0.8125rem] leading-[1.5] text-muted-foreground">
                {metric.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Positioning }
