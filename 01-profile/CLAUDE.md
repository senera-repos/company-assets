# 01 — COMPANY PROFILE (Build + Store)

> Entry point for this folder. It both **builds** and **stores** the company capability profile (hồ sơ năng lực).
> **Setup/config/docs here are in English. Generated page content is in Vietnamese.**

## Pipeline
```
_input/   →   (Claude generates)   →   content/   →   output/
your raw      Vietnamese pages          VI source       profile.pdf (final, stored)
```

## Where to put YOUR input  →  `_input/`
1. `_input/company-info.md` — fill the questionnaire (English labels; **write values in Vietnamese**).
2. `_input/raw/` — drop existing files: old profile PDF, brief, project list, CVs, logos, photos, figures.

Provide what you have — blanks are fine. Claude reads `_input/` + the official source files in the sibling asset folders (`../00-legal/`, `../02-finance/`, `../03-personnel/`, `../05-certificates/`, …), then generates the Vietnamese pages into `content/`. The final exported file lands in `output/`.

## Folder map
- `_input/` — your raw materials (intake)
- `content/` — generated Vietnamese page content (the deliverable source)
- `output/` — final exported profile (e.g. `profile.pdf`)
- `README.md` — storage checklist (what finished artifacts live here)

## Conventions
- Setup, config, code, comments → **English**.
- All reader-facing page content → **Vietnamese**.
- Do not invent facts. Empty `_input/` fields become clearly-marked TODOs, never fabricated.
- Official documents (legal scans, audited financials, certificates) stay in their own sibling folders under `company-assets/` — don't duplicate them here.

## Status
Output format (Next.js microsite / print-first HTML→PDF / Markdown→PDF) **not yet chosen**. Fill `_input/` first; the renderer is added on top of the same `content/`.
