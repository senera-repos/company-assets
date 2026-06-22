# Ảnh cho hồ sơ năng lực — DROP ZONE

Thả ảnh vào đúng thư mục + đúng **tên file** dưới đây. Đặt đúng tên là tự khớp slot,
không cần sửa code. Đây là tài liệu in A4 @300dpi → ảnh phải đủ nét.

**Quy ước chung**
- Khổ in: A4 dọc (210 × 297 mm), vùng nội dung 178 mm ngang. 1 mm @300dpi ≈ 11.8 px.
- "Cỡ tối thiểu" = đủ nét đúng khổ in. Cứ dư hơn một chút cho an toàn (đừng nhỏ hơn).
- Ảnh chụp màn hình / sản phẩm → **PNG** (chữ sắc nét). Chân dung / ảnh thật → **JPG** chất lượng cao.
- Logo → **PNG nền trong** (hoặc SVG nếu có) — đừng để nền trắng vuông.
- Tên file **không dấu, không khoảng trắng** (đã đặt sẵn bên dưới).
- Các slot dùng layout co giãn (flex) nên kích thước là **xấp xỉ** — căn theo tỉ lệ là chính.

---

## 1) team/ — Chân dung 3 người  (trang "Đội ngũ")
Khung ~30 × 52 mm mỗi người → **chân dung dọc, tỉ lệ ~4:5**. Crop sát mặt–vai, nền gọn.

| File | Người |
|---|---|
| `team/truong-ba-quan.jpg` | Trương Bá Quân — Nhà sáng lập |
| `team/dam-dinh-huy.jpg` | Đàm Đình Huy — CTO |
| `team/nguyen-thanh-thanh-huyen.jpg` | Nguyễn Thanh Thanh Huyền — Trưởng Nhân sự |

- **Tỉ lệ:** 4:5 (dọc) · **Cỡ tối thiểu:** 800 × 1000 px · **Nên dùng:** 1000 × 1250 px · **JPG**

---

## 2) projects/ — Ảnh chụp màn hình  (trang "Dự án tiêu biểu")

| File | Dùng cho | Tỉ lệ / khung | Cỡ tối thiểu |
|---|---|---|---|
| `projects/mcs-kanban-bom.png` | MCS — bảng kanban điều phối / BOM (ảnh lớn, hero) | ~16:10 ngang, khung ~62 × 40 mm | **1600 × 1000 px** |
| `projects/tuyen-sinh-nhanh.png` | Tuyển sinh nhanh — cổng tuyển sinh (băng ngang) | ~3:1 ngang, khung ~77 × 25 mm | **1600 × 540 px** |
| `projects/xuc-tien-dau-tu.png` | Xúc tiến đầu tư — trang chủ / trang cụm CN (băng ngang) | ~3:1 ngang, khung ~77 × 25 mm | **1600 × 540 px** |

- **PNG**, chụp ở màn hình rộng, cắt sát khung trình duyệt (bỏ thanh địa chỉ nếu rối).

---

## 3) clients/ — Logo khách hàng & trường  (trang "Khách hàng & đối tác")

| File | Dùng cho | Tỉ lệ / khung | Cỡ tối thiểu |
|---|---|---|---|
| `clients/minh-cuong.png` | Xí nghiệp thép Minh Cường — **logo** hoặc **ảnh xưởng** | logo ~4:3 / ảnh ~4:3 ngang, khung ~67 × 50 mm | logo ≥ 1200 px ngang · ảnh **1600 × 1200 px** |
| `clients/truong-a.png` | Trường A — logo | lockup ngang ~10:3, khung ~50 × 15 mm | **1200 × 360 px** |
| `clients/truong-b.png` | Trường B — logo | nt | **1200 × 360 px** |
| `clients/truong-c.png` | Trường C — logo | nt | **1200 × 360 px** |

- Logo: **PNG nền trong** (hoặc SVG). Nếu Minh Cường dùng ảnh xưởng → JPG ngang.

---

## 4) qr/ — Mã QR  (trang "Vì sao chọn · Liên hệ")

| File | Dùng cho |
|---|---|
| `qr/lien-he.png` | QR trỏ website / lịch hẹn (senera.vn) |

- **Vuông 1:1**, khung 40 × 40 mm · **Cỡ tối thiểu:** 1000 × 1000 px · **PNG** (hoặc SVG).
- Đen thuần trên nền trắng, chừa lề trắng (quiet zone) quanh mã. Quét thử trước khi nộp.

---

## Logo bìa & nhận diện — ĐÃ CÓ, không cần thả
Bìa + footer dùng SVG vector sẵn trong `public/brand/` (`senera-mark-white.svg`, …).
Chỉ bổ sung nếu muốn đổi/đưa bản logo gốc mới.

---

> Sau khi thả ảnh: hiện các slot còn là ô gạch nét đứt ("dán sau"). Báo mình để **nối ImageSlot
> tự hiển thị ảnh** khi có file — lúc đó cứ thả đúng tên là ảnh lên trang, không cần đụng code.
