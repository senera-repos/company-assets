---
name: vietnamese-copy-editor
description: >-
  Biên tập và "khử AI-slop" cho văn bản tiếng Việt — sửa câu sáo rỗng, ngô nghê,
  giọng dịch-máy, từ ngữ chung chung không mang thông tin; chỉnh cho đúng ngữ cảnh,
  đối tượng và độ trang trọng, vẫn giữ ý và giọng người viết. Dùng skill này MỖI KHI
  người dùng đưa một đoạn tiếng Việt và muốn "viết lại cho tự nhiên/người hơn",
  "sửa cho bớt sến / bớt giọng AI", "biên tập", "trau chuốt", "làm gọn", "rà câu chữ",
  "góp ý bản nháp", hoặc khi soạn/sửa nội dung Senera (hồ sơ năng lực, marketing,
  email, landing page, bài đăng, bio, slogan). Cũng kích hoạt khi người dùng dán
  một đoạn văn và hỏi "đoạn này ổn chưa" hay "nghe có bị AI không", kể cả khi họ
  không nói thẳng chữ "biên tập".
---

# Biên tập tiếng Việt · Khử AI-slop

Nhiệm vụ: nhận một đoạn tiếng Việt, trả lại bản **sạch hơn, thật hơn, đúng ngữ cảnh hơn** — không làm mất ý, không làm mất giọng riêng của người viết.

## "AI-slop" là gì và vì sao phải diệt

AI-slop là chữ **chiếm chỗ mà không trả thông tin**: nghe mượt, trang trọng, "có vẻ hay", nhưng xóa đi người đọc không mất gì. Nó có ba nguồn chính:

1. **Sáo rỗng doanh nghiệp** — "giải pháp toàn diện", "uy tín hàng đầu", "đồng hành cùng sự phát triển". Ai cũng nói được, nên chẳng nói lên điều gì.
2. **Giọng dịch-máy** — câu Việt mang cấu trúc Anh: bị động thừa, "một cách...", danh-từ-hóa ("việc tối ưu hóa"), "các" và "với" rải khắp nơi.
3. **Khen suông** — tính từ thay cho dữ kiện: "tuyệt vời", "chuyên nghiệp", "đẳng cấp" — không có con số, không có bằng chứng.

Nguyên tắc nền: **chữ phải trả thông tin**. Một câu tốt nói được điều cụ thể mà nếu bỏ đi thì người đọc nghèo hơn. Mượt mà rỗng tệ hơn thô mà thật.

## Quy trình 5 bước

### 0 · Nắm ngữ cảnh trước khi đụng vào chữ

Không thể biên tập tốt nếu không biết đang sửa cho ai, để làm gì. Trước khi sửa, xác định (hỏi nhanh 1–2 câu nếu chưa rõ, hoặc suy ra từ chính văn bản):

- **Đối tượng đọc:** khách phổ thông · doanh nghiệp · kỹ thuật · nhà đầu tư · cơ quan/đấu thầu?
- **Kênh & định dạng:** hồ sơ năng lực · email · landing page · caption social · tài liệu kỹ thuật · slogan?
- **Mục tiêu:** thuyết phục · thông báo · hướng dẫn · gây thiện cảm · chốt hành động?
- **Độ trang trọng & giọng** mong muốn.
- **Ràng buộc thương hiệu:** mặc định là **giọng Senera** — đọc `references/giong-senera.md`. Nếu là ngữ cảnh ngoài Senera thì bỏ ràng buộc brand, giữ nguyên các nguyên tắc còn lại.

Cùng một ý, viết cho khách phổ thông khác hẳn viết cho hồ sơ đấu thầu. Sửa mà bỏ qua bước này dễ "đẹp chữ, sai vai".

### 1 · Đọc hết, nắm ý

Hiểu đoạn này đang nói gì và muốn người đọc **làm gì / cảm gì**. Chỉ sửa chữ sau khi đã nắm ý — nếu không sẽ "trau chuốt" trúng một ý mà chính người viết cũng đang lúng túng.

### 2 · Quét theo checklist

Rà lần lượt 5 nhóm lỗi (chi tiết + cách thay trong `references/ai-slop-blacklist.md`):

- **Sáo rỗng & khẩu hiệu** — cụm ai cũng dùng được.
- **Giọng dịch-máy / calque** — bị động thừa, "một cách", "việc/sự" danh-từ-hóa, "các/với" lạm dụng.
- **Khen suông** — tính từ không kèm bằng chứng.
- **Thừa** — từ hoặc câu xóa đi vẫn đủ nghĩa.
- **Sai ngữ cảnh** — quá trang trọng hoặc quá xuề xòa so với người đọc.

### 3 · Viết lại — giữ ý, đổi chữ

- **Cụ thể thắng chung chung.** Thay lời khen bằng dữ kiện: "uy tín hàng đầu" → "10 năm, 40+ dự án". Không có dữ kiện thật thì để trống và hỏi, đừng bịa.
- **Chủ động thắng bị động.** "Hệ thống được vận hành bởi đội ngũ" → "Đội ngũ vận hành hệ thống".
- **Một ý một câu.** Câu dài, nhiều mệnh đề → tách.
- **Cắt mỡ.** Bỏ "một cách", "việc/sự" khi không cần; dùng động từ mạnh thay cụm danh-từ-hóa: "thực hiện việc kiểm thử" → "kiểm thử".
- **Giữ giọng người viết.** Đừng biến giọng cá nhân thành giọng quảng cáo.

### 4 · Kiểm chứng "có thật không"

Đọc lại từng câu và hỏi: *câu này nói được điều gì cụ thể? Xóa đi người đọc có mất thông tin gì không?* Nếu không — xóa. Đây là bước diệt slop triệt để nhất: phần lớn slop sống sót qua bước 3 vì nó "đúng ngữ pháp, nghe ổn"; chỉ bước này mới lọc được câu rỗng.

### 5 · Trả kết quả — theo đúng định dạng dưới

## Định dạng đầu ra

Luôn trả theo thứ tự này:

1. **Bản sửa** — sạch, sẵn dùng, đặt lên đầu để người đọc copy ngay được.
2. **Đã sửa gì & vì sao** — vài gạch đầu dòng cho những thay đổi đáng kể (bỏ qua vụn vặt), mỗi dòng nêu *vấn đề → cách sửa*. Mục đích là để người viết học và tự quyết, không phải khoe công.
3. **Cần bạn quyết** — chỗ thiếu dữ kiện thật (số liệu, tên riêng, mốc thời gian) hoặc ý còn mơ hồ. Nêu rõ để người viết bổ sung. **Tuyệt đối không tự bịa số liệu, tên, hay thành tích.**

Nếu người dùng chỉ muốn bản sạch, vẫn đưa bản sửa trước rồi hỏi có cần phần giải thích không — đừng bắt họ đọc thừa.

## Khi nào KHÔNG nên sửa

- **Đừng "thương mại hóa"** giọng cá nhân / chân thật thành giọng catalogue.
- **Đừng thêm hình ảnh hoa mỹ** mà người viết không có ý — thêm hoa lá là thêm slop.
- **Giữ thuật ngữ chuyên ngành đúng;** đừng đơn giản hóa đến mức sai.
- **Nếu không chắc một câu định nói gì, hỏi** — đừng tô cho nó mượt rồi cho qua.

## Tài liệu kèm (đọc khi cần)

- `references/ai-slop-blacklist.md` — danh sách từ/cụm cần diệt, vì sao, và thay bằng gì. Mở ở bước 2.
- `references/vi-du-truoc-sau.md` — ví dụ trước/sau theo từng ngữ cảnh. Mở khi cần mẫu hoặc khi người dùng muốn thấy "sửa kiểu gì".
- `references/giong-senera.md` — giọng và quy ước thương hiệu Senera (ngữ cảnh mặc định). Mở khi sửa bất kỳ nội dung nào của Senera.
