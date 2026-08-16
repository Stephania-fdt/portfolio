/* global document, window */
import { mkdir } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { chromium } from "playwright"
import { preview } from "vite"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const output = path.join(root, "docs", "qa", "route-splitting")
await mkdir(output, { recursive: true })

const views = [
  { name: "home-en", path: "/", language: "en" },
  { name: "work-en", path: "/work", language: "en" },
  { name: "harmony-en", path: "/work/harmony", language: "en" },
  { name: "404-en", path: "/missing-page", language: "en" },
  { name: "404-fr", path: "/page-inconnue", language: "fr" },
]
const widths = [375, 768, 1440]
const errors = []
const server = await preview({
  root,
  preview: { host: "127.0.0.1", port: 4173 },
})
const browser = await chromium.launch({ headless: true })

try {
  for (const view of views) {
    for (const width of widths) {
      const page = await browser.newPage({ viewport: { width, height: 1000 } })
      await page.addInitScript((language) => {
        window.localStorage.setItem("portfolio-language", language)
      }, view.language)
      page.on("pageerror", (error) =>
        errors.push(`${view.name}/${width}: ${error.message}`),
      )
      await page.goto(`http://127.0.0.1:4173${view.path}`, {
        waitUntil: "networkidle",
      })
      const hasOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      )
      if (hasOverflow) errors.push(`${view.name}/${width}: horizontal overflow`)
      await page.screenshot({
        path: path.join(output, `${view.name}-${width}.png`),
      })
      await page.close()
    }
  }
} finally {
  await browser.close()
  await new Promise((resolve, reject) =>
    server.httpServer.close((error) => (error ? reject(error) : resolve())),
  )
}

if (errors.length) throw new Error(errors.join("\n"))
globalThis.console.log(output)
