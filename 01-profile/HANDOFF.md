# HANDOFF — Hồ sơ năng lực Senera
> Phiên mới: đọc **file này** + `_input/raw/BRIEF.md` + `_input/raw/RESEARCH-nganh-chuyen-sau-2026.md` + mở working file `content/Senera-hoso-nang-luc.html`.
> Cập nhật: 2026-06-22.

## TL;DR — đang ở đâu
- 🆕 **RENDER ĐÃ DỰNG (2026-06-22):** app Next.js chạy được ở **`01-profile/site/`** — `pnpm install && pnpm build` PASS sạch; 15 trang đã có theme/màu/logo (light + 4 trang dark mở/chốt). Chi tiết ở mục **PHASE RENDER** dưới + **`site/README.md`**. (Các bullet "content/grayscale" bên dưới là giai đoạn trước đó — vẫn đúng về *nội dung*, đã được port sang `site/content/content.vi.ts`.)
- Đang dựng **content** cho `content/Senera-hoso-nang-luc.html` (15 trang, copy từ skeleton).
- Giai đoạn: **FULL CONTENT trước** (grayscale). **CHƯA** theme, **CHƯA** màu. Thứ tự bắt buộc: content → theme → màu.
- Xong content (đã điền): Bìa, Định vị & giá trị, **Đội ngũ (4)** ✅, **Kinh nghiệm & thị trường (5)** ✅, **Thương hiệu** (Hướng A — user còn ngẫm), **Dịch vụ** (4 nhóm + dải AI), **Mô hình hợp tác (9)**, **Tiêu chuẩn chất lượng (10)**, **Lĩnh vực chuyên sâu (12)**, **Dự án tiêu biểu (13)**, **Khách hàng & đối tác (14)** ✅. Đã **xóa** trang crux cũ.
- ✅ **CONTENT CẢ 16 TRANG ĐÃ ĐẦY ĐỦ** (2026-06-22). Phiên này xong: trang 4 Đội ngũ (3 nhân sự thật) · 5 Kinh nghiệm (gọn) · 14 Khách hàng (catalog) · 15 Pháp nhân (dữ liệu thật từ biển) · 16 Vì sao chọn (4 lý do) · 2 divider (7,11). Đang **chờ user preview A4** (máy này KHÔNG render — không browser/wkhtmltopdf/weasyprint) check tràn/chật.
- **CÒN LẠI = chỉ là DỮ LIỆU user cấp + ẢNH/LOGO (phase sau), KHÔNG phải viết content nữa:** (a) trang 15: năm thành lập · chức danh người ĐD · lĩnh vực ĐKKD; (b) trang 14: tên 3 trường + cấp/địa bàn + số N; (c) trang 13: trạng thái Sumita + các phần tiếp Minh Cường; (d) ẢNH: 3 chân dung đội ngũ · logo Senera (có ở biển) · logo Minh Cường + 3 trường · 3 screenshot trang 13; (e) QR trang 16. → có thể bắt đầu **PHASE THEME/MÀU** khi user duyệt content.
- ⏭ Việc cuối content: **chốt nốt Thương hiệu (6)** (đang Hướng A, user còn ngẫm) · trang 13 verify mắt · rồi **sắp lại thứ tự trang + đánh số + footer** (làm 1 lượt).
- 🆕 **Demo Sumita ẩn danh** (nguồn ảnh cho cột Sumita trang 13): đã "dọn visual" webapp `bidding/sumita-bid/webapp` — placeholder xám → ảnh công nghiệp thật (`public/img/*.jpg` tải bằng LoremFlickr/Picsum; resolver `src/lib/img.ts`; nâng `Media`/`PageHero` cover/map). **Ẩn danh khách bằng sed:** "Sumita"→**NovaPark**, cụm thật→Đại Phú/Tân Lập/Sông Mã, "Hưng Yên/Thái Bình/Hải Phòng/Cát Bi"→địa danh chung, kể cả slug URL. Build PASS; `pnpm start` cổng 3137 chạy 200. **Mọi sửa nằm trong git riêng của `sumita-bid` → `git restore .` lấy lại bản thật cho bid** (ảnh + img.ts là file thêm). Ảnh là stock ngẫu nhiên → user duyệt mắt, tấm nào lệch tông thì thay.
- ⚠️ **3 ô ẢNH CHỤP MÀN HÌNH ở trang 13 còn TRỐNG** (Minh Cường · Tuyển sinh nhanh · Sumita) — chờ user chụp & gửi; rồi thay placeholder `.img` bằng `<img>` thật (đề xuất để ảnh ở `content/assets/`).
- ⚠️ **Layout:** flex tự dãn lấp A4. Trang 13 = **hero Minh Cường (flex 1.3) + hàng dưới 2 cột [Tuyển sinh nhanh | Sumita]**; đã cắt chữ cho thoáng nhưng **CHƯA verify bằng mắt** — user đang xem preview cổng 8137.
- ⚠️ Kiểm **smart-quote trong attr** + **Cyrillic** trước khi giao (mục QUY ƯỚC KỸ THUẬT).

## PHASE RENDER — Next.js + senera-theme (CHỐT 2026-06-22)
> ✅ **ĐÃ DỰNG XONG S1–S5 (2026-06-22) — app ở `01-profile/site/`, `pnpm build` PASS sạch.**
> Stack: Next 16.2.7 · React 19.2.7 · Tailwind v4 (4.3.0) · tokens senera-theme · next/font (Montserrat/BVP/Plex Mono, subset vietnamese). Mirror cấu hình `core/seneravn/apps/web` để né gotcha v4.
> - **15 trang** render đủ: light cho nội dung; **4 trang dark** (Bìa · Divider P1 · Divider P2 · Vì sao chọn) có ambient/glow/bloom. **Footer tự đánh số** từ thứ tự (sửa lệch cũ `/16` → đúng `/15`; bìa không footer). **Gradient chữ tiết chế** đúng 3 chỗ (wordmark bìa + H1 hai divider). **CTA vàng = 1 nút** (trang cuối). **Logo SVG thật** (mark rice-white) ở bìa. Audit: tokens-only (0 hex), 0 Cyrillic, hồng không flood.
> - **Chữ tách hết ra `site/content/content.vi.ts`** (copy-editor mài 1 chỗ; marker `**đậm**`/`*nghiêng*`, `[ngoặc]`=TODO). Thứ tự + theme map ở `site/content/pages.ts` (đổi thứ tự / bật cấu trúc 5-mạch = xếp lại mảng này). Blocks ở `site/components/`; khung A4 ở `components/print/page-frame.tsx`.
> - ⚠️ **Máy build KHÔNG render pixel/PDF** (không browser) → **user soi A4**: `cd site && pnpm install && pnpm dev` → Chrome **In → A4, lề None, BẬT "Background graphics"** → soi tràn/chật/màu. Hoặc `pnpm pdf` (Playwright, opt-in). Hướng dẫn: `site/README.md`.
> - ⏭ **Còn chờ user:** ① soi A4 thật rồi báo trang nào tràn/chật để tinh chỉnh · ② **ảnh** (3 chân dung · 3 screenshot · logo Minh Cường+3 trường · QR — đang là slot `ẢNH`, bỏ vào `site/public/` rồi thay `<ImageSlot>`→`<img>`) · ③ **dữ liệu** `[ngoặc]` (tên 3 trường+N · năm thành lập · chức danh ĐD · lĩnh vực ĐKKD · trạng thái Sumita) · ④ pass **copy-editor** trên `content.vi.ts`.
>
> 📋 **Plan tổng quát đầy đủ ở `01-profile/PLAN-render.md`** (kiến trúc · theme map · phasing S1–S7 · cấu trúc thư mục · print pipeline). Mục dưới là bản rút gọn.
> Output format ĐÃ CHỐT (trước để ngỏ): **Next.js app, print-first A4 dọc**, dùng **senera-theme**.
- **senera-theme** = Claude Code plugin trên GitHub `quantruong-2518/senera-theme` (clone tạm `/tmp/senera-theme`). Gồm 2 skill: **`senera-ui`** (design language) + **`senera-ui-setup`** (bootstrap repo). Model **shadcn-source**: copy component vào repo, KHÔNG cài package; chỉ share **tokens** (`tailwind-preset.css`).
- **Stack**: Tailwind **v4** (CSS-first, `@theme inline`, `@utility`), React 19, Next App Router, `next/font`. Deps: `tailwindcss@4 @tailwindcss/postcss class-variance-authority clsx tailwind-merge`.
- **Theming**: light "đầm sen bình minh" / dark "đầm sen đêm trăng" qua `data-theme="dark|light"` — **đặt được trên TỪNG element** → mixed per-page native. Luật màu: **vàng `accent`=CHỈ hành động (1 nút/màn)** · hồng `brand`=nhận diện (không flood nền) · xanh `leaf`=phụ/chip/data · trung tính ~70%. Gradient utility: `bg-ambient/glow/bloom/petal/accent-gradient`, **chữ gradient = `bg-wordmark`+`bg-clip-text text-transparent`** — CHỈ hero/header/CTA, KHÔNG bảng dữ liệu. Logo token `--logo-core #f28cb3`.
- **⚠️ senera-theme KHÔNG có lớp IN/A4/PDF** — mình tự dựng: `<PageFrame>` 210×297mm + lề 16/16/14 + `data-theme` per-page; `@page{size:A4;margin:0}` + `break-after:page`; **`print-color-adjust:exact`** (bắt buộc cho dark+gradient); screen xếp dọc preview; script `pnpm pdf` (Playwright headless → `output/profile.pdf`).
- **App ở** `01-profile/site/` (đề xuất); `content/HTML` cũ = bản tham chiếu copy; nội dung tập trung `content.vi.ts` để **copy-editor của user mài 1 chỗ**.
- **4 ngã rẽ user CHỐT**: ① theme map = **Dark mở/chốt · Light nội dung** (Dark: Bìa·Divider P1·Divider P2·Vì sao chọn(16); Thương hiệu(6)=light; còn lại light) · ② **Mixed = per-page** (mỗi trang 1 tone) · ③ **Gradient chữ = tiết chế** (chỉ wordmark bìa + H1 2 divider; H2 khác = brand-strong đặc) · ④ **User tự chạy** `pnpm dev` + Chrome In→PDF (máy này không render).
- **Phasing**: 1) scaffold + tokens + font + chứng minh in 1 trang dark có gradient · 2) PageFrame + per-page theme + pdf script · 3) port 16 trang (light trước) + content.vi.ts · 4) áp dark+gradient 4 trang mở/chốt · 5) ảnh/logo (cần **logo SVG gốc** — file biển là raster) · 6) copy-editor mài · 7) user xuất PDF soi A4.

## CÁCH LÀM VIỆC (user yêu cầu — bám sát)
- **⛔ LUẬT CỨNG #1 — mọi trang, mọi session: LUÔN hỏi & brainstorm RẤT KỸ trước, lặp tới khi user CHỐT, rồi MỚI điền vào file.** Không bao giờ tự ý điền khi chưa chốt — kể cả khi nội dung "có vẻ hiển nhiên" hoặc lấp được 100% từ nguồn. Brainstorm = đưa **phương án cụ thể bằng chữ thật** (không gạch đầu dòng mơ hồ), nêu trade-off, đề xuất mạnh dạn, hỏi đúng chỗ phân vân — và **chờ user gật từng phần** trước khi viết vào HTML.
- Làm **từng trang/section một**, KHÔNG nhảy cóc, KHÔNG fill hàng loạt nhiều trang trong một lượt.
- Giọng: **"showoff khiêm tốn", tự nhiên, khử AI-slop.** Không gồng, không sáo rỗng; chữ phải trả thông tin. (Câu user khen: *"Đội nhỏ, nghề dày."*)
- **KHÔNG bịa số/tên.** Thiếu → hỏi, hoặc để TODO `[trong ngoặc]`.
- Phase này **chỉ content** — bỏ qua mọi câu hỏi styling (logo/màu/sơ đồ trông thế nào).
- Khi user đưa chất liệu thô → gọt cho thật tốt, đề xuất mạnh dạn, nhưng vẫn để user chốt.

## TIÊU CHUẨN NỘI DUNG (content bar — STRICT, mọi câu chữ, mọi session)
> Mỗi câu phải qua HẾT 8 bộ lọc dưới TRƯỚC khi đưa user xem. Rớt bộ lọc nào → cắt hoặc viết lại. (Cũng nằm ở memory `feedback-content-output-standard` — nạp mỗi phiên.)
1. **Khiêm nhường, không hào nhoáng.** Nói cái mình LÀM, không xưng cái mình GIỎI. Cấm claim quét ("làm chủ từ đầu đến cuối", "toàn diện", "tối ưu") và tự khen ("kiểm chứng năng lực"). Dám nói "cái chưa làm được" → vừa khiêm vừa dễ tin. *(user: "ít nói hào nhoáng, thực tế và khiêm nhường")*
2. **Cụ thể — chữ phải trả thông tin.** Mỗi câu gánh 1 dữ kiện/hình ảnh thật. Động từ thuần Việt (dựng·làm·lo·theo) gánh phần rõ; Hán-Việt chỉ điểm xuyết. Bỏ gạch đầu dòng mơ hồ.
3. **Phân biệt, không generic.** Câu "công ty nào cũng nói được" → bỏ. *(đã bỏ: "Sen = bản sắc Việt, mộc mạc bền bỉ")*
4. **Không bịa — số, tên, LẪN giọng.** Không chế số/tên; KHÔNG bịa giọng người thật (lời nhà sáng lập phải do họ viết — bịa thì "rỗng"). Thiếu → hỏi / `[trong ngoặc]`.
5. **Mỗi phần tử phải có mục đích — không thì cắt.** Hỏi "cái này để làm gì?" với từng khối/câu/nhãn. Trang trí/lửng lơ → bỏ cho gọn. Ưu tiên LEAN.
6. **Góc người mua — VÀ ĐẶT LỢI ÍCH KHÁCH LÊN ĐẦU CÂU.** "Với khách, điều này nghĩa là gì." Mở câu bằng cái khách *nhận được*, rồi mới tới cách làm — đừng mở bằng "Chúng tôi làm X…". Hồ sơ thầu: trấn an · đo được · tin được. *(user: "luôn đưa lợi ích khách hàng lên trước")*
7. **Asset mạnh nhất làm trục.** Đừng chôn viên ngọc làm chú thích — đặt câu/ý riêng nhất làm xương sống, phần khác đỡ nó. *(tagline → trục trang Thương hiệu)*
8. **Tông "showoff khiêm tốn".** Cho phép 1 câu banner tự tin; thân bài nhũn nhặn, để facts nói. Tự nhiên, khử AI-slop, không gồng.

## QUYẾT ĐỊNH ĐÃ CHỐT
- **Định vị = enterprise B2B (theo BRIEF).** KHÔNG dùng mạch "tạp hoá số / products-led" của website (ADR-0012) — đó là track riêng của web.
- **Câu định vị (trang Định vị) — REFACTOR 2026-06-22** (user thấy bản cũ "chung chung, dài dòng"; đổi sang **định vị bằng tương phản** theo April Dunford + câu định vị Geoffrey Moore; bỏ "đối tác công nghệ toàn diện"). Nguồn chữ: `site/content/content.vi.ts` → `positioning`. Bản mới (gọn ~32 chữ):
  > Giải pháp đóng gói ít khi vừa một bài toán riêng. Với doanh nghiệp muốn một sản phẩm số đúng nghiệp vụ của mình, Senera **may đo và lo trọn** — một đội dày nghề theo từ nghiên cứu đến khi sản phẩm *chạy thật*.
  - Trang dựng lại **2 section**: ① **câu định vị làm hero** (typo display Montserrat 16.5pt, `text-balance` gói 2 dòng, **gradient highlight** 2 cụm *may đo* · *chạy thật* qua marker `==…==` + token `--grad-highlight`) + dòng cho-ai · ② **4 khác biệt tương phản** (mỗi thẻ ghim tag *"thay vì …"*). **Bỏ section ③ "quyền lợi"** (user: lặp ý câu định vị, vô tác dụng).
  - **4 khác biệt CHỐT** (user soi từng thẻ qua tiêu chí Dunford "đối thủ có nói lại được không"): ① **Một đầu mối, lo trọn** (vs tự ghép nhiều bên) · ② **May đo, không ép khuôn** (vs phần mềm đóng gói) · ③ **Cung cấp nhân sự công nghệ** (vs tự tuyển/đào tạo — lợi thế: nhiều năm tuyển+đào tạo nhân sự gia công phần mềm trong/ngoài nước) · ④ **AI nhúng thật, không dán nhãn** (vs gắn mác AI cho sang). ⚠️ **ĐÃ LOẠI 2 thẻ generic** ("Người dày nghề làm thẳng" + "Theo tới khi chạy thật" — user thấy shop nào cũng nói) và "Dữ liệu tại VN/NĐ13" (user: nhiều DN không coi đó là lợi thế). ⏳ chờ user soi A4 + xác nhận thẻ ④ AI ở đây hay dồn sang trang AI riêng.
  - ~~Bản cũ (đã thay):~~ "Công ty Cổ phần Senera là đối tác công nghệ toàn diện, lấy nghiên cứu – phát triển làm gốc để may đo sản phẩm số linh hoạt theo nhu cầu doanh nghiệp, trên nền những công nghệ mới và đã được kiểm chứng — và đồng hành đến khi sản phẩm vận hành thật."
- **"AI-native" KHÔNG làm nhãn headline** (user: "quá tech, công ty nào chẳng có senior"). AI = **lớp xuyên suốt** ở trang Dịch vụ — giải thích cụ thể, KHÔNG nhồi mọi nhóm (chi tiết ở mục Dịch vụ).
- **Bỏ ẩn dụ "Sen nở từ bùn"** (theo BRIEF). Chuyện tên bản sạch: Sen = bản sắc Việt (mộc mạc, bền bỉ) · Era = kỷ nguyên mới.
- **Senera = Công ty Cổ phần** (dữ kiện user cấp).
- **Thị trường THẬT = Việt Nam + Hồng Kông** — KHÔNG phải "Mỹ/Âu/Á/ĐNÁ" như brief cũ ghi (đã bỏ; chỉ dùng cái user xác nhận).
- **Lĩnh vực:** Quản trị doanh nghiệp · Thương mại điện tử · Ứng dụng tích hợp AI · Giáo dục. ⚠️ **Tài chính: user CHỐT "không động vào"** — KHÔNG làm lĩnh vực chuyên sâu (trang 12). (Trang 5 "lĩnh vực đã làm" **đã BỎ chip Tài chính** 2026-06-22 cho nhất quán.)
- **Đội ngũ:** "đội nhỏ, nghề dày" — từng xây phần mềm cho các **tập đoàn công nghệ lớn** ở VN & Hồng Kông; ghi chú trung thực "do nhân sự chủ chốt thực hiện tại vị trí trước".
- **Tên sản phẩm đối ngoại = "Tuyển sinh nhanh"** (thuần Việt, cô đọng) — **KHÔNG dùng "EduGate"** ở bất kỳ trang nào. Mã nguồn/thư mục nội bộ `market/` vẫn tên "EduGate", chỉ tên hiển thị trong hồ sơ đổi. Đã sửa trang 10 + 12 (2026-06-22).
- ⚠️ **"Tuyển sinh nhanh": 2026-06-22 user ĐÍNH CHÍNH — ĐÃ CÓ TRƯỜNG THẬT ĐANG DÙNG** (khác ghi cũ "chưa có trường trả phí"). Trang 14 dùng "3 trên [N] trường đang dùng" — còn THIẾU: tên 3 trường + được phép đặt logo? + con số N. ⚠️ Vẫn giữ caveat metric: uptime 99,5% / tải <1,5s / nộp <8 phút là **MỤC TIÊU thiết kế**, không phải kết quả đã đo. (Nguồn: `market/specs/PRD.md` §10.)
- **Dự án thứ 3 trang 13 = Sumita** (`bidding/sumita-bid`) — **ẩn danh tên khách theo yêu cầu**: hiển thị "Nền tảng xúc tiến đầu tư công nghiệp" + nhãn "Dự án cho khách · tên khách ẩn danh". ⚠️ **Đang giai đoạn THẦU/ĐỀ XUẤT** (chưa rõ thắng) → KHÔNG ghi "đã bàn giao"; trạng thái để TODO. Khoe bằng quy mô thật: đa cụm CN · **5 ngôn ngữ VI/EN/JP/KR/CN** · cho FDI. Webapp demo đã anonymize "NovaPark" (xem TL;DR).

## CẤU TRÚC MỚI — 5 mạch (user duyệt hướng; FILE CHƯA sắp lại)
Mạch buyer-led:
1. **Bìa**
2. **Chúng tôi bán gì:** Định vị & giá trị · Dịch vụ · Quy trình & hợp tác · Công nghệ & cam kết
3. **Sản phẩm:** Case study · Dự án tiêu biểu
4. **Chúng tôi là ai:** Đội ngũ (đã gộp crux) · Kinh nghiệm & thị trường · Thương hiệu
5. **Khách hàng đã tin tưởng:** Khách hàng & đối tác
6. **Liên hệ:** Tổng quan pháp nhân · Vì sao chọn + Liên hệ (CTA)

⚠️ File HIỆN vẫn theo thứ tự **skeleton cũ**. Việc **sắp lại trang + đánh số trang lại + sửa kicker/footer + comment đầu file = làm 1 LƯỢT Ở CUỐI** (sau khi content xong), tránh churn. Hiện footer còn ghi `.../16` và lệch — kệ, sửa ở cuối.

## TIẾN ĐỘ TỪNG TRANG (vị trí file hiện tại)
| Trang | Trạng thái | Còn thiếu |
|---|---|---|
| Bìa | ✅ descriptor đã sync định vị | logo (để phase màu) |
| Định vị & giá trị | ✅ xong (câu định vị · mạch giá trị · 3 khác biệt) | — |
| ~~Crux~~ | 🗑️ đã xóa | — |
| Đội ngũ | 🟢 ĐÃ ĐIỀN (2026-06-22) — **3 nhân sự nòng cốt THẬT**, 3 dải lãnh đạo đều nhau (ảnh trái · vai trò+tên+tiểu sử phải): **Founder Trương Bá Quân** (kỹ sư→…→QL sản xuất; CMC·FPT·FWD; AI & tự động hoá làm kim chỉ nam) · **Cofounder/CTO Đàm Đình Huy** (VMO; **hiện** kỹ sư cấp cao VinSmart Future; AI/LLM) · **Trưởng NS Nguyễn Thanh Thanh Huyền** (CMC·GMO·VinSmart Future). Trục sub "ba chân kiềng" (sản phẩm·công nghệ·con người). **Đã CẮT** biểu đồ phân bổ năng lực + thẻ thứ 4. Giữ dải chân trung thực "thực hiện tại vị trí trước". **Bỏ "top 1 GG" của Huy** (chốt: mơ hồ). In hết tên tập đoàn (chốt). | ảnh 3 người (3 ô `.img` `[dán sau]`) |
| Kinh nghiệm & thị trường | 🟢 ĐÃ VIẾT GỌN (2026-06-22) — bỏ ô số `[NN]` rỗng + bản đồ 64mm + chip "Tài chính". Còn: lead "bề rộng từ nhiều năm làm thật" · **chip nhẹ bề rộng** (QTDN·TMĐT·AI·Giáo dục·Sản xuất số hoá) + note trỏ chiều sâu sang trang 12 (tránh trùng) · **2 thẻ thị trường**: VN (chính, NĐ13) / Hồng Kông (qua khách nước ngoài + **FWD** gốc HK). | — |
| Thương hiệu | 🟢 ĐÃ ĐIỀN **Hướng A**: tagline làm trục · ép competence (vế "làm chủ cái số" to + 3 nguyên tắc: Thực dụng/Khai phá/Minh bạch nói thẳng; vế "duyên" nhỏ + 1: Tận tâm) · tông **khiêm nhường** · **KHÔNG dòng ký** (đã bỏ cho gọn). User còn ngẫm | kicker "Mở · Bản sắc" hơi lệch hướng mới — cân nhắc đổi |
| Divider P1 / P2 | 🟢 ĐÃ ĐIỀN câu dẫn (2026-06-22): P1 "từ dịch vụ…đến chuẩn chất lượng — làm được tới đâu, làm sao để yên tâm"; P2 "hết phần nói tới phần làm — lĩnh vực đi sâu, dự án thật, khách đã giao việc". | (rework số trang khi sắp cấu trúc) |
| Dịch vụ | ✅ ĐÃ ĐIỀN: 4 nhóm (Tư vấn · Thiết kế · Phát triển-hạ tầng-vận hành · **Marketing & tăng trưởng**) + dải **AI xuyên suốt** (4 nhịp lifecycle + đa ngôn ngữ + tự động hoá) | — (④ Marketing là "đang hướng tới") |
| Mô hình hợp tác (9) | 🟢 ĐÃ ĐIỀN. **A·Cách chúng tôi làm việc** (Ưu tiên Agile/Scrum, làm được waterfall · Chủ động báo cáo, xử lý sớm · Linh hoạt điều chỉnh phạm vi) + **B·Ba cách hợp tác** (① Dự án trọn gói→phí theo cột mốc · ② Đồng hành & vận hành→gói tháng · ③ Tăng cường đội→theo tháng/người) + dòng phí "trả cho giá trị, không gói cứng". **CHỐT:** P9 KHÔNG vẽ lại vòng đời build (để ở dải AI P8) — tránh trùng; mọi câu **đưa lợi ích khách lên đầu**. | — |
| Tiêu chuẩn chất lượng (10) | 🟢 ĐÃ ĐIỀN. Reframe theo user: **bỏ phần stack (quá tech)**; bảng **full SDLC 6 giai đoạn** × (tiêu chuẩn cao + cách đánh giá rõ ràng); trục "chuẩn cho sản phẩm của mình = chuẩn cho bạn". Số thật từ EduGate: **tải <1,5s · uptime 99,5% · NĐ13 (dữ liệu tại VN) · audit log**. Tên cũ "Công nghệ & cam kết" đã đổi. | **Bàn giao/IP** đã tách ra, để dành sang *Vì sao chọn (16)* hoặc *Pháp nhân (15)*. |
| **Lĩnh vực chuyên sâu (12)** (was Case study) | 🟢 ĐÃ ĐIỀN. 3 băng **flex tự dãn đều lấp A4**, mỗi băng = **Bài toán (VN nay) \| Ngách đang đi sâu** (2 cột). Domains CHỐT: ① Giáo dục (Tuyển sinh nhanh) · ② Vận hành & quản trị DN (SME) · ③ **Thương mại điện tử & bán lẻ số** (chọn vì *pháp lý nhẹ + hợp context VN bây giờ*). **AI = lớp xuyên suốt, KHÔNG thành domain.** Đã LOẠI: Tài chính (giấy phép SBV) + Y tế (nhạy cảm/nhiều giấy). Nguồn ngách: `_input/raw/RESEARCH-nganh-chuyen-sau-2026.md`. | (tuỳ chọn) research ngắn TMĐT-VN gắn số demand thật |
| Dự án tiêu biểu (13) | 🟢 ĐÃ ĐIỀN (2026-06-22) — **đổi trục hẳn, KHÔNG còn lưới 4 thẻ**. **3 dự án, layout = hero Minh Cường (full) + hàng dưới 2 cột [Tuyển sinh nhanh \| Sumita].** **HERO (viền nhấn) = Minh Cường:** "Nhóm sản phẩm số hoá cho Xí nghiệp thép Minh Cường · **Phần 1** = MCS — Số hoá sản xuất cơ khí". Tinh hoa = **3 trụ** (① liền mạch BOM Excel→kanban · ② QR từng cấu kiện = "căn cước số" · ③ quy trình = state machine cấu hình) + câu "ngành còn giấy/bảng trắng/Excel, số hoá tới cấu kiện còn rất ít nơi làm — Senera đang nghiên cứu & xây". **Cột trái = Tuyển sinh nhanh** (SaaS của chính Senera): "một nền tảng nhiều trường (NĐ13)" + "mùa sau" (thanh toán · nhắn tin PH–trường · Zalo). **Cột phải = Sumita** (`bidding/sumita-bid`) = **nền tảng xúc tiến đầu tư công nghiệp đa cụm, 5 ngôn ngữ VI/EN/JP/KR/CN, cho FDI** — **TÊN KHÁCH ẨN DANH theo yêu cầu** (ghi "[một chủ đầu tư KCN]", KHÔNG ghi "Sumita"). ⚠️ **Sumita đang GIAI ĐOẠN THẦU/ĐỀ XUẤT** (chưa rõ thắng thầu) → **KHÔNG ghi "đã bàn giao"**; trạng thái để TODO `[đang ở giai đoạn nào — xác nhận]`; KHÔNG bịa kết quả. 3 ô **ẢNH CHỤP MÀN HÌNH** chờ user dán. Tầng "kinh nghiệm đội ngũ trước" bỏ khỏi trang (dồn về 4/5). | **`[bổ sung sau]`**: ① các phần tiếp theo nhóm Minh Cường · ② 3 screenshot · ③ trạng thái thật MCS + Sumita · ④ nêu tên Minh Cường được không (đang để tên) · ⑤ tên trang đổi "Sản phẩm & dự án"? |
| Khách hàng & đối tác (14) | 🟢 ĐÃ ĐIỀN (2026-06-22) — **catalog thẻ** (bỏ "tường logo trơ" vì ít thông tin). Banner "ai giao việc cho mình nói nhiều hơn mọi lời tự giới thiệu". **Thẻ hero Minh Cường** (Cơ khí–Thép · 3 chip: Đang triển khai · BOM→kanban · QR cấu kiện) + **khối Giáo dục** = 3 thẻ trường `[Trường A/B/C]` (logo+`[cấp·địa bàn]`+chip "Đang dùng") + caption "**[N] trường** đang dùng — 3 trong số đó". **Dòng chân tầm vóc** gom 1 dòng: "đội ngũ từng xây cho tập đoàn lớn VN&HK — tại vị trí trước" (KHÔNG logo trơ). Tách rõ với trang 13 (13=dự án/kỹ thuật, 14=quan hệ/social-proof). | tên 3 trường + N · logo/ảnh Minh Cường + logo trường · (khung trích dẫn "Khách nói" đã BỎ ở bản catalog — muốn quote định danh thì thêm lại) |
| Tổng quan pháp nhân (15) | 🟢 ĐÃ ĐIỀN bảng pháp nhân (2026-06-22, từ ảnh biển công ty): **Công ty Cổ phần Senera** · MSDN **0111534180** · ĐC **Số 55, Tổ 12, Xã Thư Lâm, TP Hà Nội** · Người ĐD **Ông Trương Bá Quân** · LH **quantb@senera.vn · 0345913369**. | còn `[bổ sung]`: **năm thành lập** · **chức danh người ĐD** (Giám đốc/TGĐ?) · **lĩnh vực ĐKKD** |
| Vì sao chọn + Liên hệ (16) | 🟢 ĐÃ ĐIỀN (2026-06-22). **4 lý do** (2×2, lợi ích trước–dữ kiện sau): ① Làm thẳng với người dày nghề (CMC·FPT·FWD·VMO·VinSmart) · ② Một đội lo tới khi chạy thật (trọn vòng đời) · ③ Rủi ro thấy trước, nghiệm thu có cơ sở (6 giai đoạn·NĐ13·audit log — KHÔNG pin số uptime/tải đã đo) · ④ AI đặt đúng chỗ cho đỡ việc. **Khối Liên hệ** đã điền (quantb@senera.vn · 0345913369 · senera.vn · ĐC). CTA nhãn "Đặt lịch trao đổi". | **QR** còn placeholder (cần link website/lịch hẹn thật) |

## DỊCH VỤ (8) — đã chốt & điền (ghi lại để nhớ quyết định)
- **4 nhóm (đã tái cấu trúc từ 6 dịch vụ `vi.json`):** ① Tư vấn & chiến lược · ② Thiết kế & thương hiệu · ③ **Phát triển, hạ tầng & vận hành** (gộp ops + "đa nền tảng" vào đây) · ④ **Marketing & tăng trưởng** (nhóm MỚI — tách growth/SEO ra & mở rộng: thương hiệu → web/app SEO → tiếp cận khách → quản lý lead).
- **AI = lớp xuyên suốt, KHÔNG nhồi mọi nhóm.** 4 nhịp lifecycle (Thấu hiểu·Thiết kế·Phát triển·Vận hành) + 2 thế mạnh xuyên suốt (đa ngôn ngữ Việt–Anh–Trung · tự động hoá việc lặp). **Marketing KHÔNG nhận AI** (đã bỏ "AI-SEO" vì yếu/ít khác biệt).
- **Đã user xác nhận làm thật:** trợ lý hỏi–đáp tài liệu · tìm kiếm ngữ nghĩa · trích xuất dữ liệu · chatbot 24/7 · cảnh báo bất thường → khoe thoải mái.
- **⚠️ Marketing (④) = ĐANG HƯỚNG TỚI** (chưa nhiều case) → viết kiểu "dịch vụ cung cấp / nối tiếp từ thế mạnh", **KHÔNG bịa kết quả**.
- Bài học (ghi vào tiêu chuẩn): đừng ép AI tỏa sáng ở *mọi* bước — "đội nhỏ nghề dày" khoe sâu vài thứ thật hơn phủ rộng.

## DỮ LIỆU CÒN THIẾU (chỉ user có — phải hỏi, đừng bịa)
- **Số liệu wow:** năm KN trung bình · số hệ thống/sản phẩm đã làm · số người dùng phục vụ.
- **Tên tập đoàn cụ thể** (được phép nêu không?) — tăng độ tin mạnh cho thầu.
- **Thành viên:** tên · vai trò · năm KN · ảnh.
- **Pháp nhân:** tên pháp lý đầy đủ · MST · địa chỉ ĐKKD · người đại diện · ngày thành lập · SĐT thật.
- **Khách hàng/đối tác:** tên + logo + trích dẫn định danh (web mới có 3 testimonial ẩn danh).
- **Hợp tác/phí · SLA/bảo hành/IP · metric thật Tuyển sinh nhanh · QR/lịch hẹn.**
- Còn **lĩnh vực / thị trường** nào sau dấu "…"?
- **Marketing/lead — case thật** (nếu có) → để nâng ④ Dịch vụ từ "đang hướng tới" lên "đã làm".
- 🆕 **3 screenshot trang 13:** Minh Cường (bảng kanban/BOM) · Tuyển sinh nhanh (cổng tuyển sinh) · Sumita (chụp từ webapp demo cổng 3137: trang chủ + `/san-pham/dat-cong-nghiep/ccn-dai-phu`). User chụp & gửi → thay 3 ô `.img` placeholder bằng `<img>` thật.
- 🆕 **Trạng thái thật để bỏ TODO trang 13:** MCS (đang triển khai / chạy thử tại Minh Cường?) · Sumita (đã thắng thầu / đang chào / đang dựng demo?).
- 🆕 **Các phần tiếp theo của "nhóm sản phẩm Minh Cường"** (ngoài MCS) — đang để "[bổ sung sau]" ở hero trang 13.
- 🆕 **Nêu tên "Minh Cường" được không?** (đang để tên thật ở hero — dễ ẩn danh nếu cần).

## NGUỒN NỘI DUNG (thư viện đã duyệt — trích, đừng chế)
- `core/seneravn/apps/web/src/messages/vi.json` — copy thật: định vị, tagline, tên, giá trị, **6 dịch vụ + tech stack từng nhóm**, **quy trình 4 bước** (Khám phá·Thiết kế·Xây dựng·Vận hành), vai trò AI, 3 testimonial, liên hệ (`hello@senera.vn` — ⚠️ **ĐÃ THAY** bằng liên hệ thật `quantb@senera.vn` · 0345913369 theo user; đừng dùng lại hello@).
- `core/seneravn/docs/CONTENT-MOCK.md` — messaging spine, 3 khác biệt, vòng đời lab→seed→market. ⚠ Có pivot "tạp hoá số" (ADR-0012) — KHÔNG dùng cho hồ sơ.
- `core/seneravn/docs/senera-brand-design-system.md · senera-typography.md · brand-logo.md` — màu (#F28CB3, accent vàng #E9B949), font (Montserrat / Be Vietnam Pro / IBM Plex Mono), logo (để **phase theme/màu**).
- `core/senera-frontend-kit/packages/brand/assets/` — file logo SVG.
- `market/` (EduGate "Tuyển sinh nhanh") + `market/specs/PRD.md` — case study: tech (Next.js+NestJS+Postgres RLS), bảo mật (RLS, data residency VN — NĐ 13/2023), chỉ tiêu hiệu năng.

## FILES
- Working: `content/Senera-hoso-nang-luc.html`
- Template gốc (đừng sửa): `_input/raw/Senera-Hoso-skeleton.html` (+ `-online.html`)
- Brief: `_input/raw/BRIEF.md` · Plan: `~/.claude/plans/swift-napping-swan.md`

## PREVIEW
Chạy lại server (nếu đã tắt):
```
python3 -m http.server 8137 --directory /home/stevetruong/work/Senera/bidding/company-assets/01-profile/content
```
→ mở **http://localhost:8137/Senera-hoso-nang-luc.html** (F5 sau mỗi lần sửa).

## QUY ƯỚC KỸ THUẬT
- Sửa bằng string-replace vào HTML; mỗi `<section class="page">` = 1 trang A4.
- ⚠️ **Cẩn thận gõ tiếng Việt** — từng lỡ lẫn ký tự Cyrillic vào "xây dựng". Sau khi sửa, kiểm: `grep -nP '[\x{0400}-\x{04FF}]' content/Senera-hoso-nang-luc.html` (phải trống).
- ⚠️ **Smart-quote trong attr** — đừng để `class=`/`style=` thành `”…”` (trang mất CSS). Kiểm: `grep -cP 'class=[\x{201C}\x{201D}]|style=[\x{201C}\x{201D}]' content/Senera-hoso-nang-luc.html` (phải = 0). Curly quotes trong *văn bản* thì OK.
- `[trong ngoặc]` = chỗ TODO chưa điền.
