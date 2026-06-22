# TÀI SẢN CÔNG TY — COMPANY ASSETS

> File này là **điểm vào** cho Claude Code. Đây là **kho tài sản dùng chung cấp công ty**: hồ sơ pháp lý, hồ sơ năng lực, tài chính, nhân sự, kinh nghiệm, chứng chỉ, thiết bị, nhận diện thương hiệu.
>
> Khác với từng gói thầu (vd `sumita-bid/`) — kho này **không gắn với một dự án cụ thể**. Mọi hồ sơ thầu đều **trích/tham chiếu** tài liệu từ đây, KHÔNG sao chép-sửa tại nguồn.

## Kho này là gì
Nơi lưu **một bản gốc (single source of truth)** cho các tài liệu công ty được dùng đi dùng lại trong nhiều gói thầu. Khi làm hồ sơ thầu, lấy tài liệu từ đây thay vì tạo mới mỗi lần.

## Bản đồ thư mục
| Folder | Chứa gì | Ví dụ tài liệu |
|---|---|---|
| `00-legal/` | **Hồ sơ pháp lý** | Giấy ĐKKD, mã số thuế, điều lệ công ty, quyết định bổ nhiệm, giấy ủy quyền người đại diện |
| `01-profile/` | **Hồ sơ năng lực / Company Profile** (vừa dựng vừa lưu — xem `01-profile/CLAUDE.md`) | Input dựng hồ sơ (`_input/`), nội dung trang VI (`content/`), bản PDF cuối (`output/`), giới thiệu công ty, sơ đồ tổ chức |
| `02-finance/` | **Năng lực tài chính** | Báo cáo tài chính (2–3 năm), xác nhận ngân hàng, doanh thu, hạn mức tín dụng |
| `03-personnel/` | **Nhân sự** | CV/lý lịch nhân sự chủ chốt, chứng chỉ cá nhân, hợp đồng lao động, xác nhận BHXH |
| `04-experience/` | **Kinh nghiệm** | Hợp đồng tương tự đã thực hiện, biên bản nghiệm thu/thanh lý, thư cảm ơn khách hàng |
| `05-certificates/` | **Chứng chỉ & chứng nhận** | ISO, chứng nhận năng lực ngành, giải thưởng, chứng nhận đối tác/hãng |
| `06-equipment/` | **Thiết bị & cơ sở vật chất** | Danh mục máy móc/phần mềm, giấy tờ sở hữu/thuê, văn phòng |
| `07-brand/` | **Nhận diện thương hiệu** | Logo (các định dạng), bảng màu, font, mẫu văn bản/letterhead, dấu mộc số hóa |

Mỗi folder có file `README.md` mô tả chi tiết loại tài liệu, quy ước đặt tên, và checklist tài liệu cần có.

## Quy ước làm việc
- Tài liệu & trao đổi bằng **tiếng Việt**; giữ thuật ngữ tiếng Anh khi cần (ISO, profile, CV...).
- **Đây là bản gốc** — không chỉnh sửa trực tiếp khi soạn 1 gói thầu; copy ra workspace của gói thầu đó rồi mới sửa.
- Đặt tên file: `<loại>_<mô-tả-ngắn>_<YYYY-MM-DD>.<ext>` — vd `dkkd_senera_2024-03-15.pdf`. Bản mới nhất giữ ngày mới nhất; bản cũ đưa vào `_archive/` trong cùng folder.
- File scan/ảnh chụp: ưu tiên PDF, đặt cùng quy ước tên.
- Tài liệu nhạy cảm (BCTC, hợp đồng có giá trị) — cân nhắc **không commit lên git public**; xem `.gitignore` của repo.

## Cách dùng khi làm hồ sơ thầu
1. Mở `07-bid-prep/02-checklist.md` của gói thầu → liệt kê tài liệu công ty cần nộp.
2. Vào đúng folder trong kho này, lấy bản mới nhất.
3. Copy sang `output/` của gói thầu, không sửa bản gốc.
4. Nếu tài liệu trong kho hết hạn / thiếu → cập nhật tại đây trước (để các gói sau dùng lại).
