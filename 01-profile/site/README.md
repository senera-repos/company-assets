# Senera — Hồ sơ năng lực (Next.js A4 print app)

Microsite in-A4-dọc dựng từ content 15 trang ở `../content/Senera-hoso-nang-luc.html`, theme bằng
**senera-theme** (Tailwind v4 + tokens). Mỗi `<PageFrame>` = đúng 1 trang A4 (210×297mm).

## Chạy
```bash
pnpm install
pnpm dev          # → http://localhost:3000  (F5 sau mỗi lần sửa)
```

## Xuất PDF / soi bản in A4
**Cách chính (chuẩn nhất) — Chrome thủ công:**
1. `pnpm dev`, mở trang.
2. Ctrl/Cmd + P → **Khổ A4**, **Lề: None/Không**, và **BẬT "Background graphics"**
   (bắt buộc — nếu không, 4 trang nền tối + gradient sẽ in ra trắng).
3. Save as PDF.

**Cách tự động (tuỳ chọn) — Playwright:**
```bash
pnpm add -D playwright && pnpm exec playwright install chromium   # 1 lần
pnpm dev                                                          # terminal khác
pnpm pdf                                                          # → ../output/profile.pdf
```

## Cấu trúc
| Nơi | Việc |
|---|---|
| `content/content.vi.ts` | **TOÀN BỘ chữ tiếng Việt** — copy-editor mài ở đây. `**đậm**`/`*nghiêng*` = nhấn mạnh; `[trong ngoặc]` = TODO. |
| `content/pages.ts` | Thứ tự 15 trang + theme (dark/light) từng trang. **Đổi thứ tự = sửa mảng này**; footer tự đánh số lại. |
| `components/pages/*` | 15 trang (mỗi trang 1 file), render phần *trong* khung. |
| `components/blocks/primitives.tsx` | Block dùng chung (Eyebrow, Chip, Slot, SectionHeading, ImageSlot, CTA, GradientText, Rich…). |
| `components/print/page-frame.tsx` | Khung A4 + per-page `data-theme` + footer auto-number. |
| `styles/tailwind-preset.css` | Tokens senera-theme (copy — **không sửa tay**). |
| `public/brand/*.svg` | Logo Senera (mark + lockup, light/dark). |
| `app/globals.css` | Tailwind v4 entry + print layer (`@page` A4, `print-color-adjust:exact`). |

## Luật màu (giữ khi sửa)
- 🟡 **Vàng = hành động** → đúng **1 nút CTA** (trang cuối). Không trang trí.
- 🌸 **Hồng = nhận diện** (eyebrow, wordmark, tagline) — không flood nền.
- 🌿 **Xanh leaf = chip/tag**. ⬜ Trung tính gánh ~70%.
- Gradient chữ chỉ ở: wordmark bìa + H1 hai divider. **Tokens-only, không hardcode hex.**
- Theme map: dark = Bìa · Divider 1 · Divider 2 · Vì sao chọn; còn lại light.

## Còn chờ (chưa render được nếu thiếu)
- **Ảnh** (đang là slot `ẢNH …`): 3 chân dung đội ngũ · 3 screenshot dự án (Minh Cường/Tuyển sinh
  nhanh/Sumita) · logo Minh Cường + 3 trường · QR (trang cuối). Bỏ ảnh vào `public/` rồi thay
  `<ImageSlot/>` bằng `<img>` trong page tương ứng.
- **Dữ liệu** `[trong ngoặc]` trong `content.vi.ts`: tên 3 trường + N · năm thành lập · chức danh
  người đại diện · lĩnh vực ĐKKD · trạng thái Sumita.
- **Copy-editor**: chạy trên `content.vi.ts`.
