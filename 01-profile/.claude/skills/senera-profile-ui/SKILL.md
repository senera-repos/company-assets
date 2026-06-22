---
name: senera-profile-ui
description: Build or refactor any page of the Senera capability profile (hồ sơ năng lực) in the TRUE Senera visual language. Use whenever creating/editing UI under 01-profile/site/components/pages or its shared blocks. Codifies the brand color laws, the seneravn card+Phosphor-icon pattern, folk motifs, per-page theme, print discipline, content bar, and the hard "don'ts" learned from real corrections. Goal: every page reads unmistakably Senera, not generated.
---

# Senera Profile UI

You are laying out **print-first A4 pages** for Senera's capability profile (`01-profile/site/`,
Next.js + Tailwind v4 + senera-theme tokens). Read [`01-profile/HANDOFF.md`] and the two reference
pages before building: **`components/pages/services.tsx`** (card grid) and
**`components/pages/ai.tsx`** (dark roadmap) — copy their patterns, don't reinvent.

The bar: a page must look like it came from the live site `core/seneravn/apps/web`, not from a
generic component kit. When in doubt, open the seneravn section that matches (`sections/capabilities.tsx`,
`sections/lifecycle.tsx`, `sections/product-card.tsx`) and mirror it.

## Brand laws (never break)
- **Yellow `accent` = ACTION only.** One CTA per *document* (the contact button). Never decoration, never a fill.
- **Pink `brand` = identity.** Eyebrows, capability-card icons/khảm, accents. **Never flood a background with it.**
- **Teal `leaf` = secondary / data / process / eco.** Bullets, data, lifecycle, roadmap nodes.
- **Neutral carries ~70%.** Surfaces (`bg-background`/`bg-card`), text, borders.
- **Per-page tone:** dark for openers/closers/feature pages, light for content. **One tone per page — never a within-page dark band.** Dark pages: `cover · divider-1 · divider-2 · ai · why` (theme + `ambient` set in `content/pages.ts`).
- Reference roles, never hardcode hex. All tokens in `styles/tailwind-preset.css`.

## Component kit (use these — don't hand-roll)
- **Cards = the seneravn capability card.** `relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-[22px] shadow-sm` + `<LotusInlay index={i} tone="pink|green" />` as the first child + a **duotone Phosphor icon** + title + **one concise line**. The per-card khảm IS what stops a grid looking generated.
- **Icons = Phosphor**, imported ONLY from `components/blocks/icons.ts` (the adapter, mirrors seneravn). Concept glyphs use `weight="duotone"`; color via `text-brand-strong` (pink) or `text-leaf-strong` (teal). The **icon replaces the index number** — no "01/02" + icon. **No icon-in-a-chip/badge** (seneravn Distinctiveness gate).
- **Folk motifs** from `components/motifs/decor.tsx`: `LotusInlay` (per-card khảm), `SectionWatermark` (one big đáy-ao motif behind a text page — set via `pages.ts` `watermark`), `WaveDivider` (sóng nước foot, data pages), `BudRule` (viền under an eyebrow). Rule: **one motif moment per page.** If cards already carry khảm, do NOT also add a SectionWatermark.
- **Headings/eyebrows**: `components/blocks/primitives.tsx` — `SectionHeading`, `Eyebrow`, `SubHeading`, `Rich`, `Chip`, `Note`, `ImageSlot`.
- **Depth zones** (when a page wants color fields, used sparingly): `components/blocks/zones.tsx` `HeroZone` (clean tint band, NO muddy fade) and `Panel` (tint-layer + khảm).
- **PageFrame** wraps every page (A4 sheet, theme, footer, optional `watermark`/`wave`). Register order/theme/decor in `content/pages.ts`; the driver `app/page.tsx` maps id→component. Footer numbers auto-derive — never hardcode "NN/TT".

## Typography (print — readable first)
Be generous; this is paper, not a dashboard. Montserrat (display) · Be Vietnam Pro (body) · IBM Plex Mono (data).
- Page H2 title: **24–26pt** bold, `leading-[1.05–1.12]`, `tracking-[-0.015em]`.
- Card/section title (h3): **13–15pt** semibold.
- Body / one-line desc: **10–12pt**, `leading-[1.5]`.
- Captions / sub-items: **≥9pt** (never smaller). Mono labels 8pt, `tracking` wide.
- Vietnamese diacritics need air — keep leading ≥1.45.

## Color & composition
- **Backgrounds stay clean.** Prefer neutral surface + accent-colored cards (the seneravn way) over big tinted bands. If you tint a zone, use the pale `*-soft` token at FULL strength with a crisp edge.
- **NEVER cross-hue fade** (e.g. leaf → page-kem) — it turns grey/muddy. Gradients stay within ONE hue, or don't gradient.
- **Use color confidently — it prints.** Bold moments come from **dark đêm-trăng feature pages** (ambient glow) and **duotone accent icons**, not from washing light pages in tint.
- **Fill the page.** A4 is tall; distribute with `flex-1` + even gaps. No floating cluster stranded in empty space.
- **High-tech, still đầm-sen:** dark page + `bg-glow`/`bg-bloom` ambient + glowing nodes + gradient spine + mono labels + ONE folk motif (see `ai.tsx`). A real sequence (lifecycle, steps) earns a numbered roadmap; parallel items do not.

## Content bar (every line)
Follow `01-profile/HANDOFF.md` "TIÊU CHUẨN NỘI DUNG" + the 8 filters: khiêm nhường · concrete · distinctive · never fabricate (numbers, names, OR voice) · every element earns its place · buyer-benefit first · lead with the gem · "showoff khiêm tốn". Reader copy is **Vietnamese**; setup/code/comments **English**. All strings live in `content/content.vi.ts` (one place for the copy-editor). **Process: brainstorm → user chốt → then fill.** Never write marketing copy into the doc without sign-off; missing data → `[TODO]`, never invented. One concise line per item — kill redundant desc+list duplication. Keep content ON-topic to the page (don't park a market strength on the AI page).

## Don'ts (each one is a real correction — do not repeat)
- ❌ Tiny text (8.4pt walls). → ≥9pt, body 10–12pt.
- ❌ Cross-hue tint fades / murky backgrounds. → clean same-hue or none.
- ❌ Plain border-only boxes. → seneravn card (border + bg-card + shadow + khảm) OR genuinely card-less clean zones.
- ❌ Icon-in-a-chip / badge; numbers next to icons. → raw duotone icon, icon replaces the number.
- ❌ Redundant copy (a sentence that repeats the list under it). → one concise line.
- ❌ Dead empty space / floating content. → distribute to fill A4.
- ❌ Within-page dark band. → make it its own dark page instead.
- ❌ Scattered motifs. → one motif moment per page.
- ❌ Depth via heavy drop-shadow (washes out in print). → tint layers / borders / khảm.

## Process
1. Pick the page; read its content slice in `content.vi.ts` and the matching seneravn section.
2. Choose: card grid (capability/feature pages) or dark feature page (openers, AI-like showcases) — set theme/decor in `pages.ts`.
3. Build ONE page, run `pnpm build` (must pass clean), then **the user proofs** via `pnpm dev` + Chrome Print→PDF (this machine can't render). Self-critique honestly first.
4. Only after the look is approved, roll the pattern to sibling pages.

## Reference files
- `components/pages/services.tsx` — capability card grid (the canonical light page).
- `components/pages/ai.tsx` — dark high-tech roadmap (the canonical feature page).
- `components/blocks/{primitives,zones,icons}.tsx` · `components/motifs/{folk-motifs,decor}.tsx`
- `content/pages.ts` (registry) · `content/content.vi.ts` (copy) · `styles/tailwind-preset.css` (tokens)
- Live patterns: `core/seneravn/apps/web/src/components/sections/{capabilities,lifecycle,product-card}.tsx` + `components/icons.ts`
