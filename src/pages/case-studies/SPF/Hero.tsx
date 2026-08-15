import { CaseStudyHero } from "@/components/ui/case-study-hero"
import heroCover from "@/assets/case-studies/spf/product/Desktop - 54.png"
import { useLanguage } from "@/i18n"

const META = [
  { label: "Role", value: "Product Designer" },
  { label: "Timeline", value: "2023 — Present" },
  { label: "Team", value: "4–10+ developers" },
  { label: "Tools", value: "Figma · Angular Material · Zeroheight" },
]

/** The reference cover, now rendered by the shared case-study hero unchanged. */
function Hero() {
  const { language } = useLanguage()
  const content =
    language === "fr"
      ? {
          eyebrow: "Design System · Service public fédéral Affaires étrangères",
          title: "Un Design System public, accessible et évolutif",
          summary:
            "Conception d’un Design System modulaire, accessible et évolutif pour le Service public fédéral belge Affaires étrangères.",
          meta: [
            { label: "Rôle", value: "Product Designer" },
            { label: "Période", value: "2023 — Aujourd’hui" },
            { label: "Équipe", value: "4–10+ développeurs" },
            { label: "Outils", value: "Figma · Angular Material · Zeroheight" },
          ],
        }
      : {
          eyebrow: "Design System · Federal Public Service Foreign Affairs",
          title: "Building a Scalable Government Design System",
          summary:
            "Designing a modular, accessible and scalable design system for Belgium’s Federal Public Service Foreign Affairs.",
          meta: META,
        }

  return (
    <CaseStudyHero
      eyebrow={content.eyebrow}
      title={content.title}
      summary={content.summary}
      meta={content.meta}
      image={{
        src: heroCover,
        alt: "The SPF citizen portal's authentication screen — the government's architecture as backdrop, the sign-in flow as the one deliberate object in frame.",
      }}
    />
  )
}

export { Hero }
