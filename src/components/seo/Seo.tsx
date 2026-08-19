import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { useLanguage } from "@/i18n"

const ORIGIN = "https://stephania-fdt.com"
const OG_IMAGE = `${ORIGIN}/og/stephania-fordant-product-designer.jpg`

type SeoCopy = { title: string; description: string }
type SeoEntry = Record<"en" | "fr", SeoCopy>

const notFoundSeo: SeoEntry = {
  en: {
    title: "Page Not Found | Stéphania Fordant",
    description: "The requested page does not exist or may have moved.",
  },
  fr: {
    title: "Page introuvable | Stéphania Fordant",
    description: "La page demandée n’existe pas ou a été déplacée.",
  },
}

const seoByPath: Record<string, SeoEntry> = {
  "/": {
    en: {
      title: "Stéphania Fordant - Product Designer | Accessibility",
      description:
        "Product Designer based in Brussels, specialising in accessible digital products, scalable Design Systems, UX Research and product collaboration.",
    },
    fr: {
      title: "Stéphania Fordant - Product Designer | Accessibilité",
      description:
        "Product Designer à Bruxelles, spécialisée en Design Systems, accessibilité numérique, UX Research et conception de produits évolutifs.",
    },
  },
  "/work": {
    en: {
      title: "Selected Product Design Work | Stéphania Fordant",
      description:
        "Explore Product Design case studies spanning accessible public services, Design Systems, connected products, UX Research and e-commerce.",
    },
    fr: {
      title: "Projets Product Design sélectionnés | Stéphania Fordant",
      description:
        "Découvrez des études de cas en services publics accessibles, Design Systems, produits connectés, UX Research et expériences e-commerce.",
    },
  },
  "/about": {
    en: {
      title: "About Product Designer Stéphania Fordant | Brussels",
      description:
        "Discover Stéphania Fordant’s approach to Product Design, combining user research, systems thinking, accessibility and technical collaboration.",
    },
    fr: {
      title: "À propos de Stéphania Fordant | Product Designer",
      description:
        "Découvrez l’approche Product Design de Stéphania Fordant, entre recherche utilisateur, pensée systémique, accessibilité et collaboration technique.",
    },
  },
  "/experience": {
    en: {
      title: "Product Design Experience | Stéphania Fordant",
      description:
        "Six years of experience across Product Design, UX Research, accessible Design Systems, UI Design and cross-functional product delivery.",
    },
    fr: {
      title: "Expérience Product Design | Stéphania Fordant",
      description:
        "Plus de six ans d’expérience en Product Design, UX Research, Design Systems accessibles, UI Design et collaboration produit pluridisciplinaire.",
    },
  },
  "/contact": {
    en: {
      title: "Contact — Stéphania | Product Designer",
      description:
        "Get in touch with Stéphania Fordant, Product Designer based in Brussels — email, LinkedIn, location and CV in one place.",
    },
    fr: {
      title: "Contact — Stéphania | Product Designer",
      description:
        "Contactez Stéphania Fordant, Product Designer basée à Bruxelles — e-mail, LinkedIn, localisation et CV réunis sur une page.",
    },
  },
  "/work/spf-design-system": {
    en: {
      title: "Accessible Public-Sector Design System | Stéphania Fordant",
      description:
        "A Product Design case study about standardising public-sector applications with Angular Material, Zeroheight and WCAG 2.1 AA.",
    },
    fr: {
      title: "Design System public accessible | Stéphania Fordant",
      description:
        "Étude de cas sur la standardisation d’applications publiques grâce à Angular Material, Zeroheight et aux exigences d’accessibilité WCAG 2.1 AA.",
    },
  },
  "/work/portfolio": {
    en: {
      title: "Portfolio — Product Design & Design System | Stéphania Fordant",
      description:
        "A Product Design case study about designing and building my own portfolio — positioning, a Design System, accessibility and a bilingual front-end, with AI as a supporting tool.",
    },
    fr: {
      title: "Portfolio — Product Design & Design System | Stéphania Fordant",
      description:
        "Étude de cas Product Design sur la conception et le développement de mon propre portfolio : positionnement, Design System, accessibilité et front-end bilingue, avec l’IA comme outil d’appui.",
    },
  },
  "/work/harmony": {
    en: {
      title: "Harmony - Connected Product Design | Stéphania Fordant",
      description:
        "A Product Design case study focused on user research, usability testing and the design of a connected bracelet product experience.",
    },
    fr: {
      title: "Harmony - Conception d’un produit connecté | Stéphania Fordant",
      description:
        "Étude de cas Product Design consacrée à la recherche utilisateur, aux tests d’utilisabilité et à l’expérience d’un bracelet connecté.",
    },
  },
  "/work/wellpack": {
    en: {
      title: "WellPack - Research-Driven Marketing | Stéphania Fordant",
      description:
        "A Product Design case study about building a reusable UX research method that turned marketing briefs into evidence-based decisions.",
    },
    fr: {
      title: "WellPack - UX Research et Design Marketing | Stéphania Fordant",
      description:
        "Étude de cas Product Design sur la construction d’une méthode UX Research réutilisable, transformant des briefs marketing en décisions fondées sur des preuves.",
    },
  },
  "/work/joga-aura": {
    en: {
      title: "Joga Aura - Shopify E-commerce | Stéphania Fordant",
      description:
        "Designing a premium Shopify experience from yoga mat discovery and visual direction through to the responsive conversion journey.",
    },
    fr: {
      title: "Joga Aura - Expérience Shopify | Stéphania Fordant",
      description:
        "Conception d’une expérience Shopify premium, de la découverte du tapis de yoga et de la direction visuelle jusqu’au parcours de conversion.",
    },
  },
}

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement("meta")
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([name, value]) =>
    element?.setAttribute(name, value),
  )
}

function Seo() {
  const { pathname } = useLocation()
  const { language } = useLanguage()

  useEffect(() => {
    const isKnownRoute = Boolean(seoByPath[pathname])
    const entry = isKnownRoute
      ? seoByPath[pathname][language]
      : notFoundSeo[language]
    const canonical = `${ORIGIN}${pathname === "/" ? "" : pathname}`
    const locale = language === "fr" ? "fr_BE" : "en_GB"

    document.title = entry.title
    document.documentElement.lang = language
    setMeta('meta[name="description"]', {
      name: "description",
      content: entry.description,
    })
    setMeta('meta[name="robots"]', {
      name: "robots",
      content: isKnownRoute ? "index, follow" : "noindex, nofollow",
    })
    setMeta('meta[property="og:title"]', {
      property: "og:title",
      content: entry.title,
    })
    setMeta('meta[property="og:description"]', {
      property: "og:description",
      content: entry.description,
    })
    setMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonical,
    })
    setMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    })
    setMeta('meta[property="og:image"]', {
      property: "og:image",
      content: OG_IMAGE,
    })
    setMeta('meta[property="og:locale"]', {
      property: "og:locale",
      content: locale,
    })
    setMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: entry.title,
    })
    setMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: entry.description,
    })
    setMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: OG_IMAGE,
    })

    let canonicalLink = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    )
    if (!canonicalLink) {
      canonicalLink = document.createElement("link")
      canonicalLink.rel = "canonical"
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = canonical

    document.getElementById("person-jsonld")?.remove()
    if (pathname === "/") {
      const script = document.createElement("script")
      script.id = "person-jsonld"
      script.type = "application/ld+json"
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Stéphania Fordant",
        jobTitle: "Product Designer",
        url: ORIGIN,
        sameAs: ["https://www.linkedin.com/in/stephania-fordant"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Brussels",
          addressCountry: "BE",
        },
        knowsAbout: [
          "Product Design",
          "UX Research",
          "Design Systems",
          "Digital Accessibility",
          "WCAG",
          "DesignOps",
          "Figma",
          "Angular Material",
        ],
      })
      document.head.appendChild(script)
    }
  }, [language, pathname])

  return null
}

export { Seo }
