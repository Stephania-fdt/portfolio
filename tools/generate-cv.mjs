import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import {
  AlignmentType,
  BorderStyle,
  Document,
  ExternalHyperlink,
  HeadingLevel,
  LevelFormat,
  Packer,
  PageBreak,
  Paragraph,
  ShadingType,
  TextRun,
} from "docx"
import { chromium } from "playwright"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const docsDir = path.join(root, "docs", "cv")
const publicDir = path.join(root, "public")
const qaDir = path.join(docsDir, "previews")
const accent = "590F29"

const shared = {
  name: "STÉPHANIA FORDANT",
  phone: "+33 7 81 64 61 32",
  email: "hello@stephania-fdt.com",
  website: "https://stephania-fdt.com",
  linkedin: "https://www.linkedin.com/in/stephania-fordant",
}

const resumes = {
  fr: {
    locale: "fr-FR",
    title: "Stéphania Fordant - Product Designer - CV français",
    role: "Product Designer - Design Systems, Accessibilité et UX Research",
    location: "Bruxelles, Belgique",
    sections: {
      summary: "Profil professionnel",
      skills: "Compétences clés",
      experience: "Expériences professionnelles",
      projects: "Projets sélectionnés",
      education: "Formation",
      training: "Formation complémentaire",
      languages: "Langues",
      tools: "Outils et technologies",
    },
    summary:
      "Product Designer avec plus de 6 ans d’expérience, je transforme des problématiques complexes en produits numériques simples, accessibles et évolutifs. J’interviens sur l’ensemble du processus de Product Design, de l’UX Research et l’UI Design jusqu’à la livraison. Mon expertise couvre les Design Systems, l’accessibilité numérique WCAG et la collaboration avec les équipes produit, métier et développement, en conciliant besoins utilisateurs, cohérence des interfaces et faisabilité technique.",
    skills: [
      "Product Design", "UX Research", "UI Design", "Design Systems et UI Kits",
      "Design Tokens", "Accessibilité numérique - WCAG 2.1 AA",
      "DesignOps et gouvernance", "Recherche utilisateur et entretiens",
      "Personas et parcours utilisateurs", "Wireframes et prototypage",
      "Tests utilisateurs", "Tests A/B et heatmaps", "Card sorting",
      "Animation d’ateliers de Design Thinking",
      "Collaboration avec Product Owners, Business Analysts et développeurs",
      "Méthodes Agile et Scrum",
    ],
    skillGroups: [
      ["Expertise produit", "Product Design, Product Strategy, UX/UI Design et DesignOps"],
      ["Recherche", "UX Research, entretiens, personas, parcours utilisateurs, tests utilisateurs, tests A/B, heatmaps et card sorting"],
      ["Systèmes", "Design Systems, UI Kits, Design Tokens, Angular Material et accessibilité numérique WCAG 2.1 AA"],
      ["Collaboration", "Ateliers de Design Thinking, facilitation, Agile, Scrum, Product Owners, Business Analysts et développeurs"],
    ],
    experiences: [
      {
        role: "IT Product Designer",
        company: "SPF Affaires étrangères de Belgique",
        context: "Mission de conseil via Cream Consulting puis eGov Select",
        place: "Bruxelles, Belgique",
        dates: "04/2023 - Aujourd’hui",
        bullets: [
          "Piloter la standardisation de plusieurs applications publiques à partir d’audits UX, d’entretiens utilisateurs, de benchmarks et de l’analyse des contraintes techniques.",
          "Créer un UI Kit fondé sur Angular Material et contribuer à un Design System évolutif combinant composants réutilisables, Design Tokens et documentation Zeroheight.",
          "Appliquer les exigences d’accessibilité WCAG 2.1 AA en collaboration avec les Business Analysts, Product Owners et développeurs.",
          "Animer des ateliers, des sessions de card sorting et des tests utilisateurs, avec une augmentation de 20 % de la participation active en six mois.",
        ],
      },
      {
        role: "UX Designer / Cheffe de projet marketing",
        company: "WellPack",
        place: "Paris, France",
        dates: "02/2021 - 01/2023",
        bullets: [
          "Conduire des entretiens utilisateurs, études de marché, benchmarks et tests afin de transformer les briefs clients en décisions produit et marketing documentées.",
          "Créer des personas, parcours utilisateurs et modèles de recherche réutilisables pour les projets SMS, RCS et acquisition mobile.",
          "Définir la direction artistique et créer un UI Kit standardisé, réduisant le temps de production de quatre à deux jours.",
          "Concevoir des expériences mobile-first et optimiser des sites WordPress, le référencement SEO et les parcours de conversion.",
        ],
      },
      {
        role: "UI Designer / Social Media Manager",
        company: "Femmes d’Influence",
        place: "Paris, France",
        dates: "09/2019 - 12/2020",
        bullets: [
          "Créer des personas, empathy maps et parcours utilisateurs pour une communauté digitale de trois millions d’abonnés.",
          "Réaliser des analyses concurrentielles et des tests A/B afin d’améliorer l’expérience utilisateur sur les plateformes digitales.",
          "Contribuer à l’acquisition de 330 000 nouveaux abonnés et à une progression de 13 % des utilisateurs fidèles.",
          "Concevoir des interfaces et des contenus dans le cadre d’une stratégie digitale multicanale.",
        ],
      },
    ],
    projects: [
      ["SPF Affaires étrangères", "Standardisation de produits publics grâce à un Design System accessible fondé sur Angular Material."],
      ["Stéphania Portfolio", "Conception et développement d’un portfolio accessible avec React, TypeScript, Tailwind CSS et un workflow assisté par l’intelligence artificielle."],
      ["Harmony", "Conception d’une expérience de produit connecté fondée sur la recherche utilisateur."],
      ["Joga Aura", "Conception et optimisation d’une expérience e-commerce Shopify, de la découverte du produit jusqu’à la conversion."],
    ],
    education: [
      ["Master UX Designer", "Digital School of Paris"],
      ["Bachelor Web Marketing", "ESCEN - École supérieure de commerce et d’économie numérique"],
    ],
    training: ["École 42 - Piscine, 2024", "Opquast / AT Internet, 2019", "Interaction Design Foundation - Formation continue"],
    languages: ["Français - Langue maternelle", "Anglais - C1", "Allemand - B2"],
    tools: "Figma, Tokens Studio, Zeroheight, Angular Material, Miro, Jira, Hotjar, Google Analytics, WordPress, Adobe Photoshop, React, TypeScript, Tailwind CSS, HTML, CSS et Git.",
    filenames: {
      docx: "stephania-fordant-product-designer-cv-fr.docx",
      pdf: "stephania-fordant-product-designer-cv-fr.pdf",
    },
  },
  en: {
    locale: "en-GB",
    title: "Stéphania Fordant - Product Designer - English Resume",
    role: "Product Designer - Design Systems, Accessibility & UX Research",
    location: "Brussels, Belgium",
    sections: {
      summary: "Professional Summary", skills: "Core Skills",
      experience: "Professional Experience", projects: "Selected Projects",
      education: "Education", training: "Additional Training",
      languages: "Languages", tools: "Tools and Technologies",
    },
    summary:
      "Product Designer with over six years of experience turning complex challenges into simple, accessible and scalable digital products. I work across the full Product Design process, from UX Research and UI Design to delivery, with strong expertise in Design Systems, WCAG digital accessibility and cross-functional collaboration with product, business and engineering teams. My approach connects user needs, interface consistency and technical feasibility.",
    skills: [
      "Product Design", "UX Research", "UI Design", "Design Systems and UI Kits",
      "Design Tokens", "Digital Accessibility - WCAG 2.1 AA",
      "DesignOps and Governance", "User Research and Interviews",
      "Personas and User Journeys", "Wireframing and Prototyping",
      "User Testing", "A/B Testing and Heatmaps", "Card Sorting",
      "Design Thinking Workshops", "Cross-functional Collaboration",
      "Agile and Scrum Methodologies",
    ],
    skillGroups: [
      ["Product Expertise", "Product Design, Product Strategy, UX/UI Design and DesignOps"],
      ["Research", "UX Research, interviews, personas, user journeys, user testing, A/B testing, heatmaps and card sorting"],
      ["Systems", "Design Systems, UI Kits, Design Tokens, Angular Material and WCAG 2.1 AA digital accessibility"],
      ["Collaboration", "Design Thinking workshops, facilitation, Agile, Scrum, Product Owners, Business Analysts and developers"],
    ],
    experiences: [
      {
        role: "IT Product Designer",
        company: "SPF Affaires étrangères de Belgique",
        context: "Consulting assignment through Cream Consulting and eGov Select",
        place: "Brussels, Belgium",
        dates: "April 2023 - Present",
        bullets: [
          "Led the standardisation of several public-sector applications through UX audits, user interviews, benchmarking and technical constraint analysis.",
          "Created an Angular Material UI Kit and contributed to a scalable Design System combining reusable components, Design Tokens and Zeroheight documentation.",
          "Applied WCAG 2.1 AA accessibility requirements while collaborating with Business Analysts, Product Owners and developers.",
          "Facilitated workshops, card sorting sessions and user testing, increasing active participation by 20% within six months.",
        ],
      },
      {
        role: "UX Designer / Marketing Project Manager",
        company: "WellPack", place: "Paris, France",
        dates: "February 2021 - January 2023",
        bullets: [
          "Conducted user interviews, market research, benchmarking and testing to turn client briefs into evidence-based product and marketing decisions.",
          "Created personas, user journeys and reusable research frameworks for SMS, RCS and mobile acquisition projects.",
          "Defined the art direction and created a standardised UI Kit, reducing production time from four days to two.",
          "Designed mobile-first experiences and optimised WordPress websites, SEO and conversion journeys.",
        ],
      },
      {
        role: "UI Designer / Social Media Manager",
        company: "Femmes d’Influence", place: "Paris, France",
        dates: "September 2019 - December 2020",
        bullets: [
          "Created personas, empathy maps and user journeys for a digital community of three million followers.",
          "Conducted competitive analysis and A/B testing to improve the user experience across digital platforms.",
          "Contributed to the acquisition of 330,000 new followers and a 13% increase in loyal users.",
          "Designed user interfaces and digital content as part of a multichannel strategy.",
        ],
      },
    ],
    projects: [
      ["SPF Foreign Affairs", "Standardising public-sector digital products through an accessible Angular Material Design System."],
      ["Stéphania Portfolio", "Designing and developing an accessible portfolio with React, TypeScript, Tailwind CSS and an AI-assisted workflow."],
      ["Harmony", "Designing a connected product experience based on user research."],
      ["Joga Aura", "Designing and optimising a Shopify e-commerce journey from product discovery to conversion."],
    ],
    education: [
      ["Master’s Degree in UX Design", "Digital School of Paris"],
      ["Bachelor’s Degree in Web Marketing", "ESCEN - École supérieure de commerce et d’économie numérique"],
    ],
    training: ["École 42 - Piscine Programme, 2024", "Opquast / AT Internet, 2019", "Interaction Design Foundation - Continuing Education"],
    languages: ["French - Native", "English - C1", "German - B2"],
    tools: "Figma, Tokens Studio, Zeroheight, Angular Material, Miro, Jira, Hotjar, Google Analytics, WordPress, Adobe Photoshop, React, TypeScript, Tailwind CSS, HTML, CSS and Git.",
    filenames: {
      docx: "stephania-fordant-product-designer-cv-en.docx",
      pdf: "stephania-fordant-product-designer-cv-en.pdf",
    },
  },
}

const safe = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")

function sectionHeading(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 210, after: 90 },
    border: { bottom: { color: "DED4D7", style: BorderStyle.SINGLE, size: 6, space: 5 } },
    keepNext: true,
    children: [new TextRun({ text: text.toUpperCase(), bold: true, color: accent, size: 24, characterSpacing: 12 })],
  })
}

function textParagraph(text, options = {}) {
  return new Paragraph({
    spacing: { after: options.after ?? 70, line: 276 },
    keepNext: options.keepNext,
    children: [new TextRun({ text, size: 21, bold: options.bold, color: options.color })],
  })
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 50, line: 260 },
    children: [new TextRun({ text, size: 21 })],
  })
}

function buildDocx(data) {
  const children = [
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { after: 65 },
      children: [new TextRun({ text: shared.name, bold: true, size: 58, color: "171315", characterSpacing: 18 })],
    }),
    new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: data.role, bold: true, size: 28, color: accent })] }),
    new Paragraph({ spacing: { after: 25 }, children: [new TextRun({ text: `${data.location}  |  ${shared.phone}  |  `, size: 19, color: "665E62" }), new ExternalHyperlink({ link: `mailto:${shared.email}`, children: [new TextRun({ text: shared.email, size: 19, color: "665E62", underline: {} })] })] }),
    new Paragraph({
      spacing: { after: 130 },
      border: { bottom: { color: accent, style: BorderStyle.SINGLE, size: 10, space: 8 } },
      children: [
        new ExternalHyperlink({ link: shared.website, children: [new TextRun({ text: shared.website, size: 19, color: "665E62", underline: {} })] }),
        new TextRun({ text: "  |  ", size: 19, color: "665E62" }),
        new ExternalHyperlink({ link: shared.linkedin, children: [new TextRun({ text: shared.linkedin, size: 19, color: "665E62", underline: {} })] }),
      ],
    }),
    sectionHeading(data.sections.summary),
    new Paragraph({
      spacing: { before: 25, after: 105, line: 286 },
      indent: { left: 180, right: 120 },
      shading: { type: ShadingType.CLEAR, fill: "F6EFF1", color: "auto" },
      border: { left: { color: accent, style: BorderStyle.SINGLE, size: 16, space: 8 } },
      children: [new TextRun({ text: data.summary, size: 21, color: "171315" })],
    }),
    sectionHeading(data.sections.skills),
    ...data.skillGroups.map(([label, value]) => new Paragraph({ spacing: { after: 42, line: 255 }, children: [new TextRun({ text: `${label}: `, bold: true, color: accent, size: 21 }), new TextRun({ text: value, size: 21, color: "171315" })] })),
    sectionHeading(data.sections.experience),
  ]

  data.experiences.forEach((experience, index) => {
    if (index === 1) children.push(new Paragraph({ children: [new PageBreak()] }))
    children.push(
      new Paragraph({
        spacing: { before: 95, after: 20 }, keepNext: true,
        children: [new TextRun({ text: experience.role, bold: true, size: 23, color: "171315" })],
      }),
      new Paragraph({ spacing: { after: 16 }, keepNext: true, children: [new TextRun({ text: experience.company, bold: true, size: 21, color: accent })] }),
      ...(experience.context ? [textParagraph(experience.context, { after: 15, keepNext: true, color: "665E62" })] : []),
      textParagraph(`${experience.place} | ${experience.dates}`, { after: 45, keepNext: true, color: "665E62" }),
      ...experience.bullets.map(bullet),
    )
  })

  children.push(sectionHeading(data.sections.projects))
  for (const [name, description] of data.projects) {
    children.push(new Paragraph({ spacing: { after: 45 }, children: [new TextRun({ text: `${name}: `, bold: true, size: 21 }), new TextRun({ text: description, size: 21 })] }))
  }
  children.push(sectionHeading(data.sections.education))
  for (const [degree, school] of data.education) children.push(textParagraph(`${degree} | ${school}`, { after: 30 }))
  children.push(sectionHeading(data.sections.training), ...data.training.map((item) => textParagraph(item, { after: 24 })))
  children.push(sectionHeading(data.sections.languages), textParagraph(data.languages.join(" | ")))
  children.push(sectionHeading(data.sections.tools), textParagraph(data.tools))

  return new Document({
    creator: "Stéphania Fordant", title: data.title,
    description: data.role, subject: "Product Designer CV", keywords: "Product Design, UX Research, UI Design, Design Systems, Accessibility, WCAG",
    numbering: { config: [{ reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 300, hanging: 160 } } } }] }] },
    styles: { default: { document: { run: { font: "Arial", size: 21, color: "000000" }, paragraph: { spacing: { line: 250 } } } } },
    sections: [{ properties: { page: { margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 } } }, children }],
  })
}

function htmlSection(title, content) {
  return `<section><h2>${safe(title)}</h2>${content}</section>`
}

function buildHtml(data) {
  const experienceHtml = (item) => `<article class="experience"><h3>${safe(item.role)}</h3><p class="company">${safe(item.company)}</p>${item.context ? `<p class="context">${safe(item.context)}</p>` : ""}<p class="meta">${safe(item.place)} <span>|</span> ${safe(item.dates)}</p><ul>${item.bullets.map((text) => `<li>${safe(text)}</li>`).join("")}</ul></article>`
  const skillGroups = data.skillGroups.map(([label, value]) => `<p class="skill"><strong>${safe(label)}:</strong> ${safe(value)}</p>`).join("")
  const projects = data.projects.map(([name, description]) => `<p><strong>${safe(name)}:</strong> ${safe(description)}</p>`).join("")
  const education = data.education.map(([degree, school]) => `<p><strong>${safe(degree)}</strong><br>${safe(school)}</p>`).join("")
  return `<!doctype html><html lang="${data.locale}"><head><meta charset="utf-8"><title>${safe(data.title)}</title><meta name="author" content="Stéphania Fordant"><meta name="subject" content="Product Designer CV"><style>
    @page { size: A4; margin: 0; } * { box-sizing: border-box; } html, body { margin: 0; padding: 0; color: #171315; background: #fff; font-family: Arial, Helvetica, sans-serif; font-size: 10.5pt; line-height: 1.2; } .page { width: 210mm; height: 297mm; padding: 20mm; overflow: hidden; break-after: page; background: #fff; } .page:last-child { break-after: auto; } header { padding-bottom: 6mm; border-bottom: 1.2px solid #590f29; } h1 { margin: 0 0 2.5mm; color: #171315; font-size: 29pt; line-height: 1; letter-spacing: .025em; } .role { margin: 0 0 4mm; color: #590f29; font-size: 14pt; font-weight: 700; } .contact { margin: 0 0 1.2mm; color: #665e62; font-size: 9.5pt; } a { color: inherit; text-decoration: underline; text-underline-offset: 1.5px; } section { margin-top: 5mm; } h2 { margin: 0 0 2.5mm; padding-bottom: 1.7mm; border-bottom: .6px solid #ded4d7; color: #590f29; font-size: 12pt; line-height: 1; letter-spacing: .07em; text-transform: uppercase; } p { margin: 0 0 2mm; } .summary { margin-top: 1mm; padding: 4mm 4.5mm; border-left: 2px solid #590f29; background: #f6eff1; line-height: 1.25; } .skill { margin-bottom: 1.5mm; line-height: 1.2; } .skill strong { color: #590f29; } .experience { margin-top: 3.5mm; break-inside: avoid; } h3 { margin: 0 0 1mm; font-size: 11.5pt; line-height: 1.1; } .company { margin-bottom: .7mm; color: #590f29; font-weight: 700; } .context, .meta { margin-bottom: .7mm; color: #665e62; font-size: 9.7pt; } .meta { margin-bottom: 1.8mm; } .meta span { color: #590f29; } ul { margin: 0; padding-left: 4.8mm; } li { margin: 0 0 1.35mm; padding-left: .7mm; } .compact p { margin-bottom: 2.2mm; } .page-two section:first-child { margin-top: 0; } .page-two .experience { margin-top: 0; margin-bottom: 3mm; } .page-two section:not(:first-child) { margin-top: 3.4mm; } .page-two h2 { margin-bottom: 1.8mm; padding-bottom: 1.4mm; } .page-two li { margin-bottom: 1mm; } .page-two .compact p { margin-bottom: 1.5mm; } @media screen { body { width: 210mm; } .page + .page { border-top: 1px solid #ded4d7; } }
  </style></head><body>
  <main class="page page-one"><header><h1>${shared.name}</h1><p class="role">${safe(data.role)}</p><p class="contact">${safe(data.location)} &nbsp;|&nbsp; ${safe(shared.phone)} &nbsp;|&nbsp; <a href="mailto:${shared.email}">${shared.email}</a></p><p class="contact"><a href="${shared.website}">${shared.website}</a> &nbsp;|&nbsp; <a href="${shared.linkedin}">${shared.linkedin}</a></p></header>
  ${htmlSection(data.sections.summary, `<p class="summary">${safe(data.summary)}</p>`)}
  ${htmlSection(data.sections.skills, skillGroups)}
  ${htmlSection(data.sections.experience, experienceHtml(data.experiences[0]))}</main>
  <main class="page page-two">${htmlSection(data.sections.experience, data.experiences.slice(1).map(experienceHtml).join(""))}<div class="compact">${htmlSection(data.sections.projects, projects)}${htmlSection(data.sections.education, education)}${htmlSection(data.sections.training, data.training.map((item) => `<p>${safe(item)}</p>`).join(""))}${htmlSection(data.sections.tools, `<p>${safe(data.tools)}</p>`)}${htmlSection(data.sections.languages, `<p>${data.languages.map(safe).join(" &nbsp;|&nbsp; ")}</p>`)}</div></main>
  </body></html>`
}

await mkdir(docsDir, { recursive: true })
await mkdir(publicDir, { recursive: true })
await mkdir(qaDir, { recursive: true })
const browser = await chromium.launch({ headless: true })

try {
  for (const data of Object.values(resumes)) {
    const docx = await Packer.toBuffer(buildDocx(data))
    await writeFile(path.join(docsDir, data.filenames.docx), docx)
    const page = await browser.newPage()
    await page.setContent(buildHtml(data), { waitUntil: "load" })
    const pageBounds = await page.locator(".page").evaluateAll((pages) =>
      pages.map((pageElement) => {
        const pageRect = pageElement.getBoundingClientRect()
        const content = [...pageElement.children].map((element) => element.getBoundingClientRect())
        const pixelsPerMillimetre = 96 / 25.4
        return {
          top: Math.min(...content.map((rect) => rect.top - pageRect.top)) / pixelsPerMillimetre,
          right: Math.min(...content.map((rect) => pageRect.right - rect.right)) / pixelsPerMillimetre,
          bottom: Math.min(...content.map((rect) => pageRect.bottom - rect.bottom)) / pixelsPerMillimetre,
          left: Math.min(...content.map((rect) => rect.left - pageRect.left)) / pixelsPerMillimetre,
        }
      }),
    )
    for (const [index, bounds] of pageBounds.entries()) {
      if (Object.values(bounds).some((margin) => margin < 19.9)) {
        throw new Error(`${data.locale} page ${index + 1} violates 20 mm content bounds: ${JSON.stringify(bounds)}`)
      }
    }
    globalThis.console.log(`${data.locale} content bounds (mm):`, pageBounds)
    await page.pdf({
      path: path.join(publicDir, data.filenames.pdf), format: "A4",
      printBackground: true, preferCSSPageSize: true, displayHeaderFooter: false,
      tagged: true, outline: true,
    })
    await page.setViewportSize({ width: 794, height: 1123 })
    await page.emulateMedia({ media: "print" })
    const pages = page.locator(".page")
    for (let index = 0; index < await pages.count(); index += 1) {
      await pages.nth(index).screenshot({
        path: path.join(qaDir, `cv-${data.locale.slice(0, 2)}-page-${index + 1}.png`),
      })
    }
    await page.close()
  }
} finally {
  await browser.close()
}

globalThis.console.log("Generated FR/EN ATS CVs in docs/cv and public")
