# PLAN TỔNG QUÁT — Hồ sơ năng lực Senera (phase RENDER)

> Bản plan tổng cho việc dựng hồ sơ thành **Next.js app, in A4 dọc**, theme bằng **senera-theme**.
> Đọc kèm: `HANDOFF.md` (trạng thái + content) · memory `project-senera-profile-render-stack`.
> Lập 2026-06-22. Mọi quyết định trong đây user đã CHỐT.

---

## 1. Mục tiêu & phạm vi
- Biến 16 trang content (đang ở `content/Senera-hoso-nang-luc.html`, grayscale) thành **microsite Next.js** render đẹp, **in/xuất PDF A4 dọc** chuẩn để nộp thầu & gửi khách.
- Theme bám **senera-theme** (brand-consistent), hỗ trợ **light/dark per-page** + **gradient tiết chế**.
- Content giữ chất "showoff khiêm tốn" (8 bộ lọc), wording cuối **đi qua copy-editor** của user.
- **KHÔNG** bịa số/tên; TODO dữ liệu để field rõ ràng, chờ user.

## 2. Kiến trúc
| Mảng | Chọn |
|---|---|
| Framework | **Next.js** (App Router, TypeScript, RSC mặc định) |
| Styling | **Tailwind v4** (CSS-first: `@import "tailwindcss"`, `@theme inline`, `@utility`) |
| Design system | **senera-theme** (`quantruong-2518/senera-theme`) — shadcn-source: copy tokens + recipe vào repo, không cài package |
| Tokens | copy `tailwind-preset.css` (kernel) vào app; KHÔNG hand-edit |
| Font | `next/font/google` — Montserrat `--font-montserrat` · Be Vietnam Pro `--font-bvp` · IBM Plex Mono `--font-plex-mono` (subset `vietnamese`, `display:swap`) |
| Helper | `cn` (clsx + tailwind-merge) từ recipe |
| Print → PDF | tự dựng print layer + script Playwright headless |
| Package manager | **pnpm** *(chờ user xác nhận)* |

**Deps:** `next react react-dom` · `-D tailwindcss@4 @tailwindcss/postcss typescript @types/*` · `class-variance-authority clsx tailwind-merge` · `-D playwright` (chỉ cho bước xuất PDF).

## 3. Cấu trúc thư mục (đề xuất — app ở `01-profile/site/`)
```
01-profile/
├─ content/Senera-hoso-nang-luc.html   # bản tham chiếu copy (giữ nguyên)
├─ output/profile.pdf                  # PDF cuối (script ghi ra)
└─ site/                               # ← Next.js app MỚI
   ├─ app/
   │  ├─ layout.tsx                    # nạp font, data-theme="light" gốc, globals
   │  ├─ globals.css                   # @import tailwindcss + preset + print.css
   │  └─ page.tsx                      # ráp 16 trang theo thứ tự
   ├─ components/
   │  ├─ ui/                           # primitive copy từ senera-ui (Button…)
   │  ├─ print/PageFrame.tsx           # hộp A4 + per-page theme + footer
   │  └─ blocks/                       # SectionHeading, Chip, StatCard, SpecTable,
   │                                   #   LeaderRow, CatalogCard, ProjectBand, Divider,
   │                                   #   ContactBlock, CTAButton, GradientText…
   ├─ content/content.vi.ts            # TOÀN BỘ chữ (copy-editor mài ở đây)
   ├─ content/theme-map.ts             # trang → 'dark'|'light'
   ├─ lib/cn.ts
   ├─ styles/tailwind-preset.css       # tokens (copy từ senera-theme)
   ├─ styles/print.css                 # @page, break, color-adjust
   ├─ public/assets/                   # logo SVG, ảnh đội ngũ, screenshot, QR
   └─ scripts/export-pdf.ts            # Playwright → ../output/profile.pdf
```

## 4. Theming
**Cơ chế:** `data-theme="dark|light"` đặt trên **từng `<PageFrame>`** (token cascade xuống cả trang). `<html data-theme="light">` làm nền mặc định (khử OS-dark → in tất định).

**Luật màu senera-ui (cứng):**
- 🟡 **Vàng `accent` = CHỈ hành động** → đúng **1 nút CTA** toàn hồ sơ (trang 16). Không trang trí.
- 🌸 **Hồng `brand` = nhận diện** (eyebrow, badge, logo, chữ gradient) — **không flood nền hồng**.
- 🌿 **Xanh `leaf` = phụ** → chip/tag, số liệu, minh hoạ.
- ⬜ **Trung tính mực-sen ~70%** → nền/chữ/thẻ/viền. Budget hero 55/35/10, nội dung 70/20/10.

**Theme map per-page (CHỐT):**
| # | Trang | Theme |
|---|---|---|
| 1 | Bìa | **DARK** (wordmark gradient) |
| 2 | Định vị & giá trị | light |
| 4 | Đội ngũ | light |
| 5 | Kinh nghiệm & thị trường | light |
| 6 | Thương hiệu | light *(tagline nhấn brand-strong)* |
| 7 | Divider · Năng lực | **DARK** |
| 8 | Dịch vụ | light |
| 9 | Mô hình hợp tác | light |
| 10 | Tiêu chuẩn chất lượng | light *(bảng — không gradient)* |
| 11 | Divider · Minh chứng | **DARK** |
| 12 | Lĩnh vực chuyên sâu | light |
| 13 | Dự án tiêu biểu | light |
| 14 | Khách hàng & đối tác | light |
| 15 | Tổng quan pháp nhân | light *(bảng — không gradient)* |
| 16 | Vì sao chọn + Liên hệ | **DARK** (CTA vàng nổi) |

**Gradient (tiết chế — CHỐT):**
- Chữ gradient (`bg-clip-text text-transparent`): **chỉ** wordmark "SENERA" ở bìa + **H1** hai divider. H2 các trang khác = `text-brand-strong` đặc.
- Quầng nền: `bg-ambient`+`bg-glow`(/`bg-bloom` dark) cho 4 trang dark + hero trang 13/14. `bg-accent-gradient` chỉ nút CTA.
- **Cấm:** gradient lên bảng Tiêu chuẩn(10)/Pháp nhân(15); chữ thân bài; nền hồng lớn.

## 5. Content
- **Port 16 trang** từ HTML → block component, **chữ tách hết ra `content.vi.ts`** (typed). Lý do: copy-editor mài 1 chỗ · không trộn chữ vào JSX · không bịa.
- **Copy-editor**: chạy trên `content.vi.ts` (chống AI-slop), wording polish chảy ngược vào.
- **TODO dữ liệu** (field rõ, chờ user): tên 3 trường + N (14) · năm thành lập · chức danh người ĐD · lĩnh vực ĐKKD (15) · trạng thái Sumita · các phần tiếp Minh Cường (13).
- **Asset cần file thật:** **logo SVG gốc** (biển công ty là raster, in to rỗ) · 3 chân dung đội ngũ · screenshot 3 dự án · QR (16) · logo Minh Cường + 3 trường.

## 6. Component inventory (ý thức chống "AI default kit")
`PageFrame` · `Eyebrow` · `SectionHeading`(eyebrow+title+lead) · `LeadParagraph` · `Note/Caption` · `Chip`(leaf) · `Badge`(brand) · `StatCard` · `SpecTable`(6 giai đoạn) · `LeaderRow`(đội ngũ) · `CatalogCard`(khách) · `ProjectBand`(13) · `TwoTier`/`LogoSlot` · `Divider`(bignum) · `ContactBlock` · `CTAButton`(vàng — nút DUY NHẤT) · `GradientText`.
> Tránh: icon-chip rập khuôn trên mỗi thẻ · lưới 3-up đều tăm tắp · eyebrow lặp tiêu đề · border cho khối không click được.

## 7. Print / PDF pipeline
```css
/* print.css */
@page { size: A4 portrait; margin: 0; }
* { -webkit-print-color-adjust: exact; print-color-adjust: exact; }   /* BẮT BUỘC */
@media screen { body{ background:#e9e9ec; } .page{ margin:0 auto 22px; box-shadow:0 1px 12px rgba(0,0,0,.16);} }
@media print  { body{ background:#fff; }    .page{ margin:0; box-shadow:none; break-after:page; } }
```
- `PageFrame` = `width:210mm; height:297mm; overflow:hidden; position:relative;` + padding `16mm 16mm 14mm` + `data-theme`.
- **Screen:** xếp 16 trang dọc + shadow (preview nhanh, F5).
- **Xuất PDF:** `pnpm pdf` → Playwright `chromium`, `page.pdf({ format:'A4', printBackground:true, preferCSSPageSize:true })` → `../output/profile.pdf`.
- **Proof:** user mở `pnpm dev` → Chrome **In → Save as PDF** (bật "Background graphics") soi A4 thật.

## 8. Phasing (milestones)
- [ ] **S1 · Nền + chứng minh in.** Scaffold app, tokens, font, `cn`, print.css, `PageFrame` + **1 trang Bìa dark có wordmark gradient**. Mục tiêu: user `pnpm install && pnpm dev` → In→PDF thấy **nền dark + gradient ra đúng màu trên A4**.
- [ ] **S2 · Khung in hoàn chỉnh.** `theme-map.ts`, per-page theme, footer/đánh số, script `export-pdf`.
- [ ] **S3 · Port nội dung.** 16 trang → block + `content.vi.ts` (làm light trước, từng trang một).
- [ ] **S4 · Dark + gradient.** Áp cho 4 trang mở/chốt; soát luật màu (vàng 1 chỗ, hồng không flood).
- [ ] **S5 · Asset.** Gắn logo SVG, ảnh đội ngũ, screenshot, QR.
- [ ] **S6 · Copy-editor.** User mài `content.vi.ts` → tích hợp.
- [ ] **S7 · Proof & polish.** User xuất PDF, soi A4 (tràn/chật/màu) → tinh chỉnh → `output/profile.pdf`.

## 9. Cần ở user
- Xác nhận: tên thư mục `site/` · package manager (pnpm?).
- Chạy `pnpm install`/`dev`/`pdf` ở máy user (máy build này không render được).
- File asset thật (logo SVG, ảnh, QR) + dữ liệu TODO §5.
- Chạy **copy-editor** trên `content.vi.ts` ở bước S6.

## 10. Rủi ro & cách chặn
- **Mất màu khi in** → `print-color-adjust:exact` + bật Background graphics (đã tính ở S1).
- **Tràn trang A4** (chữ VN dài hơn) → `PageFrame` `overflow:hidden` + verify mắt từng trang; co `content.vi.ts`.
- **Tailwind v4 mới** (cú pháp khác v3) → bám đúng `senera-ui-setup`; không dùng `@tailwind` directive.
- **Lệch brand** → chỉ dùng role utility (không hex), checklist senera-ui mỗi component.
- **Máy này không render** → mọi verify hình do user; mình giao code + script chạy được.
