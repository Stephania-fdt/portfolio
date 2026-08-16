import { readFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { getDocument, OPS } from "pdfjs-dist/legacy/build/pdf.mjs"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const variants = ["fr", "en"]
const requiredFacts = [
  "20%",
  "330",
  "13%",
  "WCAG 2.1 AA",
  "Angular Material",
  "Zeroheight",
  "Harmony",
  "Joga Aura",
]

for (const language of variants) {
  const filename = `stephania-fordant-product-designer-cv-${language}.pdf`
  const bytes = new Uint8Array(await readFile(path.join(root, "public", filename)))
  const pdf = await getDocument({ data: bytes, useSystemFonts: true }).promise
  const metadata = await pdf.getMetadata()
  const pages = []
  const fonts = new Set()
  let imageOperations = 0

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber)
    const content = await page.getTextContent()
    Object.values(content.styles).forEach((style) => fonts.add(style.fontFamily))
    const operators = await page.getOperatorList()
    imageOperations += operators.fnArray.filter((operator) =>
      [OPS.paintImageXObject, OPS.paintInlineImageXObject, OPS.paintImageMaskXObject].includes(operator),
    ).length
    pages.push(content.items.map((item) => item.str).join(" "))
  }

  const extractedText = pages.join("\n")
  const normalisedText = extractedText.replace(/\s+(?=%)/g, "")
  const missingFacts = requiredFacts.filter((fact) => !normalisedText.includes(fact))
  const links = []
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const annotations = await (await pdf.getPage(pageNumber)).getAnnotations()
    links.push(...annotations.filter((item) => item.subtype === "Link").map((item) => item.url))
  }

  globalThis.console.log(JSON.stringify({
    language,
    pages: pdf.numPages,
    title: metadata.info?.Title,
    encrypted: Boolean(metadata.info?.IsEncrypted),
    fonts: [...fonts],
    imageOperations,
    extractedCharacters: extractedText.length,
    pageCharacters: pages.map((page) => page.length),
    missingFacts,
    links,
    startsWith: extractedText.slice(0, 160),
  }, null, 2))
}
