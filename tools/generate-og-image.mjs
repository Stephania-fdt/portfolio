import { mkdir } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { chromium } from "playwright"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const output = path.join(root, "public", "og", "stephania-fordant-product-designer.jpg")
await mkdir(path.dirname(output), { recursive: true })

const browser = await chromium.launch({ headless: true })
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
  await page.setContent(`<!doctype html><html><head><style>
    *{box-sizing:border-box}html,body{margin:0;width:1200px;height:630px;background:#faf8f5;color:#171315;font-family:Arial,Helvetica,sans-serif}.frame{position:relative;display:flex;height:100%;padding:82px 92px;flex-direction:column;justify-content:center;border-top:16px solid #590f29}.eyebrow{margin:0 0 30px;color:#590f29;font-size:22px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}.name{margin:0;font-size:76px;line-height:.95;letter-spacing:-.045em}.role{margin:28px 0 0;color:#590f29;font-size:36px;font-weight:700}.topics{margin:34px 0 0;color:#665e62;font-size:24px}.rule{position:absolute;right:92px;bottom:82px;width:180px;height:2px;background:#590f29}
  </style></head><body><main class="frame"><p class="eyebrow">Portfolio · Brussels</p><h1 class="name">Stéphania Fordant</h1><p class="role">Product Designer</p><p class="topics">Design Systems · Accessibility · UX Research</p><span class="rule"></span></main></body></html>`)
  await page.screenshot({ path: output, type: "jpeg", quality: 90 })
} finally {
  await browser.close()
}

globalThis.console.log(output)
