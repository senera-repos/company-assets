# _input/ — Put your input here

Single intake point for building the company capability profile.

## Two ways to give input (use either or both)

### 1. Fill the questionnaire
Open `company-info.md` and fill it in. Field labels are in English; **write your answers in Vietnamese**. Provide what you have — blanks are fine.

### 2. Drop existing files
Put any existing materials into `raw/`:
- Old / current company profile (PDF, PPT, DOCX)
- Company brief, marketing one-pager
- Project / contract list (Excel, PDF)
- Team CVs, org chart
- Logos, photos, diagrams
- Revenue / financial figures

No naming rules here — Claude will sort it out. (Official, final documents belong in the sibling folders under `company-assets/`, e.g. `../../02-finance/`, not here.)

## What happens next
Claude reads everything in `_input/` (+ the sibling asset folders) and generates the Vietnamese profile pages into `../content/`. Empty/unknown items become marked TODOs, never fabricated facts.
