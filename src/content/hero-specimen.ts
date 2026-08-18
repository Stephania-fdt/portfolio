import type { LocalizedContent } from "@/i18n"

const heroSpecimenContent: LocalizedContent<{
  header: string
  capHeight: string
  xHeight: string
  baseline: string
  descender: string
  units: string
}> = {
  en: {
    header: "SPECIMEN — S · General Sans 600",
    capHeight: "cap-height",
    xHeight: "x-height",
    baseline: "baseline",
    descender: "descender",
    units: "40 units",
  },
  fr: {
    header: "SPÉCIMEN — S · General Sans 600",
    capHeight: "hauteur des capitales",
    xHeight: "hauteur d’x",
    baseline: "ligne de base",
    descender: "jambage inférieur",
    units: "40 unités",
  },
}

export { heroSpecimenContent }
