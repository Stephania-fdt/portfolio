import { mkdir, writeFile } from "node:fs/promises"
import { Buffer } from "node:buffer"
import path from "node:path"
import { pathToFileURL, fileURLToPath } from "node:url"
import { chromium } from "playwright"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const source = path.join(root, "src", "assets", "case-studies", "harmony", "home-thumbnail.webp.png")
const destination = path.join(root, "src", "assets", "case-studies", "harmony", "home-thumbnail.webp")
const archive = path.join(root, "docs", "source-assets", "harmony", "home-thumbnail-original-4000x2667.png")

await mkdir(path.dirname(archive), { recursive: true })
const { copyFile } = await import("node:fs/promises")
await copyFile(source, archive)

const browser = await chromium.launch({ headless: true })
try {
  const page = await browser.newPage()
  await page.goto(pathToFileURL(source).href)
  const result = await page.evaluate(async () => {
    const image = globalThis.document.querySelector("img")
    if (!image) throw new Error("Source image did not load")
    await image.decode()
    const canvas = globalThis.document.createElement("canvas")
    canvas.width = 1600
    canvas.height = 900
    const context = canvas.getContext("2d", { alpha: false })
    if (!context) throw new Error("Canvas context unavailable")
    context.imageSmoothingEnabled = true
    context.imageSmoothingQuality = "high"
    context.drawImage(image, 0, 0, canvas.width, canvas.height)
    return {
      sourceWidth: image.naturalWidth,
      sourceHeight: image.naturalHeight,
      data: canvas.toDataURL("image/webp", 0.9).split(",")[1],
    }
  })
  await writeFile(destination, Buffer.from(result.data, "base64"))
  globalThis.console.log({ sourceWidth: result.sourceWidth, sourceHeight: result.sourceHeight, destination })
} finally {
  await browser.close()
}
