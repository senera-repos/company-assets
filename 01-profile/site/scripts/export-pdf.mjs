/**
 * Export the profile to A4 PDF via headless Chromium (Playwright).
 *
 * This is the AUTOMATED path. The PRIMARY proof path stays manual Chrome (most faithful):
 *   pnpm dev → open the URL → Ctrl/Cmd+P → A4, margins "None", tick "Background graphics".
 *
 * One-time setup for this script:
 *   pnpm add -D playwright && pnpm exec playwright install chromium
 *
 * Run (needs the app serving — `pnpm dev` or `pnpm build && pnpm start` in another terminal):
 *   pnpm pdf                       # uses http://localhost:3000
 *   PDF_URL=http://localhost:3137 pnpm pdf
 *
 * Output: ../output/profile.pdf (the company-assets 01-profile/output folder).
 */
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { mkdir } from "node:fs/promises";

const here = dirname(fileURLToPath(import.meta.url));
const URL = process.env.PDF_URL ?? "http://localhost:3000";
const OUT_DIR = resolve(here, "../../output");
const OUT = resolve(OUT_DIR, "profile.pdf");

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error(
    "\n✗ Playwright chưa cài. Chạy:\n  pnpm add -D playwright && pnpm exec playwright install chromium\n",
  );
  process.exit(1);
}

await mkdir(OUT_DIR, { recursive: true });

console.log(`→ Mở ${URL} …`);
const browser = await chromium.launch();
const page = await browser.newPage();
try {
  await page.goto(URL, { waitUntil: "networkidle", timeout: 60_000 });
  // Honour @page A4 + print-only rules; printBackground keeps dark pages + gradients.
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: OUT,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
  });
  console.log(`✓ Đã ghi ${OUT}`);
} finally {
  await browser.close();
}
