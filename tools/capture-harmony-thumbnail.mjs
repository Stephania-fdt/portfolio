import { mkdir } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { chromium } from "playwright"
import { preview } from "vite"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const output = path.join(root, "docs", "qa", "harmony-thumbnail")
await mkdir(output, { recursive: true })

const server = await preview({ root, preview: { host: "127.0.0.1", port: 4173 } })
const browser = await chromium.launch({ headless: true })
const errors = []

try {
  for (const width of [375, 768, 1024, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 }, deviceScaleFactor: 2 })
    page.on("pageerror", (error) => errors.push(`${width}: ${error.message}`))
    page.on("requestfailed", (request) => {
      if (!request.url().startsWith("https://api.fontshare.com/")) {
        errors.push(`${width}: ${request.url()} — ${request.failure()?.errorText}`)
      }
    })
    await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" })
    const image = page.getByAltText("Harmony connected-bracelet website displayed on a desktop monitor")
    await image.scrollIntoViewIfNeeded()
    await image.locator("xpath=..").screenshot({ path: path.join(output, `harmony-${width}@2x.png`) })
    await page.close()
  }
} finally {
  await browser.close()
  await new Promise((resolve, reject) => server.httpServer.close((error) => (error ? reject(error) : resolve())))
}

if (errors.length) throw new Error(errors.join("\n"))
globalThis.console.log(output)
