# NGHIÊN CỨU NGÁCH CHUYÊN SÂU — định hướng lĩnh vực
> Nguồn: deep-research (đã loại Tài chính), dữ liệu 2025–2026. Lập 2026-06-22.
> Mục đích: chọn 3 lĩnh vực chuyên sâu cho hồ sơ năng lực (trang 12) + định hướng sản phẩm.
> Kỷ luật: chỉ tin **xu hướng + ví dụ doanh thu thật**; **không** tin số $ thị trường tuyệt đối (nhiều cái đã bị bác khi kiểm chứng — xem mục Caveat).

## TL;DR
- Bỏ Fintech. 3 vertical sống qua bằng chứng cho một **studio nhỏ**: **(1) Giáo dục · (2) Vận hành & quản trị DN SME · (3) Y tế cơ sở / AI tài liệu** — cộng **lớp AI xuyên suốt: workflow nặng ngôn ngữ & tài liệu** (đây là *động cơ*, không phải ngành riêng → đúng quyết định "AI là lớp, không là domain").
- **Sự thật phũ #1 (SME):** giữ chân mới khó, không phải bán lần đầu. World Bank RCT tại VN (605 DN): ~80% dùng lúc đầu → **chỉ 35% còn dùng sau 18 tháng**. Wedge phải tạo giá trị ngay tuần đầu + onboarding cực nhẹ.
- **Sự thật phũ #2:** demand "validated" (doanh thu/định giá thật) chủ yếu ở **Mỹ**; **WTP thật ở VN CHƯA ai chứng minh** (mọi con số WTP/thị trường VN cụ thể đều bị bác trong vòng kiểm chứng).

## 1. Giáo dục — tránh chỗ bão hoà, vào chỗ trống
- **Bằng chứng:** Sách trắng EdTech VN 2025 (EdTech Agency) — ~1000 sản phẩm khảo sát, >50% K-12, ~25% ngoại ngữ → **bão hoà**; mầm non / đại học / đào tạo nghề **gần như trống** (~30 sp cho ĐH+nghề so với ~1.8 triệu SV).
- **Ngách:**
  - Số hoá tuyển sinh + vận hành **mầm non / trung tâm** (EduGate mở rộng).
  - Công cụ AI cho **giảng viên ĐH / đào tạo nghề**: soạn học liệu, chấm bài, ngân hàng đề (mẫu MagicSchool — 6tr giáo viên, ~$44.9tr doanh thu; Brisk Teaching).
  - **Cảnh báo sớm sinh viên bỏ học** (learning analytics) cho ĐH/CĐ.
- Xã hội: **cao** · Kiếm tiền: **có** (MagicSchool chứng minh) · POC: **nhanh** (LLM + rubric; EduGate sẵn).
- ⚠️ Caveat: claim "đào tạo nghề là phân khúc hứa hẹn nhất" **đã BỊ BÁC** — coi là giả thuyết, phải tự kiểm chứng WTP ở VN. Chỉ "tránh K-12/ngoại ngữ bão hoà" là chắc.

## 2. Vận hành & quản trị DN SME — hẹp theo ngành, chống churn
- **Bằng chứng:** ~97% DN VN là SME; ERP penetration thấp (~5.6%) → whitespace lớn; **driver chính = bản địa hoá theo ngành** (ERP generic không vừa); cloud app tăng ~hai chữ số/năm; **Quyết định 433/QĐ-TTg (ký 16/3/2026)** bảo trợ chuyển đổi số SME 2026–2030 (hỗ trợ 500.000+ SME; e-contract, chữ ký số, cloud, AI). AI-native ERP (Rillet, Doss, Everest) đang lên ở SMB/mid-market, cạnh tranh trên "giá trị gấp 10 lần".
- **NGUYÊN TẮC: KHÔNG làm ERP chung.** Làm **một quy trình hẹp & sắc cho một ngành VN cụ thể**, giá trị tức thì.
- **Ngách:**
  - **Trích xuất + đối soát hoá đơn điện tử tự động** cho một ngành (vd chuỗi F&B / bán lẻ vừa) — bám NĐ123 + QĐ433. POC rất nhanh (OCR + LLM, quy trình rõ, dữ liệu sẵn).
  - **Trợ lý hỏi dữ liệu vận hành bằng tiếng Việt** (text-to-SQL / BI nhẹ): sếp hỏi "doanh thu tháng này?" ra số ngay.
  - **Tự động hoá một quy trình đau** (duyệt đơn / tồn kho) — thiết kế để "giá trị trong tuần đầu" → chống churn.
- Xã hội: **vừa** (giúp SME sống & tuân thủ) · Kiếm tiền: **rõ** (state-backed, hoá đơn điện tử bắt buộc) · POC: **nhanh**.
- ⚠️ Caveat: **retention là tử huyệt** (TL;DR #1). Số $ thị trường VN cụ thể đã bị bác → chỉ dùng "SME thống trị · tăng hai chữ số · bản địa hoá là driver".

## 3. Y tế cơ sở / AI tài liệu — vertical thứ 3 "đắt giá" nhất (nhưng rào cao)
- **Bằng chứng:** Ambient clinical documentation (AI ghi chép bệnh án) = mảng AI y tế **lớn nhất**, ~$600tr (2025), **+2.4×/năm** (bác sĩ tốn ~1h ghi chép cho mỗi 5h khám); "cửa ngõ bệnh nhân" (đặt lịch/phân loại) +~20×/năm, phần mềm mới chiếm ~5% của $100B+ chi phí hành chính. Abridge ~$100tr ARR / ~$5.3B định giá. (Menlo Ventures 10/2025)
- **Ngách:**
  - **AI ghi chép bệnh án (scribe)** cho phòng khám / cơ sở y tế.
  - **Cửa ngõ bệnh nhân**: đặt lịch, phân loại, hỏi-đáp 24/7.
- Xã hội: **rất cao** · Kiếm tiền: **chứng minh toàn cầu** · POC: **nhanh** (speech-to-text + LLM đã chín).
- ⚠️ Caveat MẠNH: (1) **pháp lý dữ liệu y tế VN + rủi ro hallucination** → vào bằng ngách hành chính (đặt lịch/tài liệu) trước, **tránh chẩn đoán**; (2) **đội Senera nhiều khả năng KHÔNG có "rễ" y tế** → với hồ sơ năng lực, đây là **"đang nghiên cứu / hướng tới"**, KHÔNG ghi "đã làm".

## Lớp AI xuyên suốt (động cơ, không phải ngành)
- Wedge AI sắc nhất = **workflow nặng ngôn ngữ & tài liệu**: trợ lý tài liệu, rà soát hợp đồng, trích xuất dữ liệu, semantic search. (BVP State of AI 2025; a16z: ~80% tri thức DN nằm trong tài liệu phi cấu trúc; Document AI ~$14.7B → $27.6B, 2025–2030.)
- Ví dụ doanh thu thật: EvenUp (~$2B, 2000+ firms), EliseAI (~$2.2B, ~10% thị trường căn hộ Mỹ, ~$100tr ARR).
- ⚠️ Caveat: legal AI hallucination ~1/6 (Stanford HAI) → bắt buộc human-in-the-loop.

## Sự thật phũ phải nhớ (đừng tô hồng)
1. **SME: giữ chân > bán lần đầu** (35% còn dùng sau 18 tháng).
2. **Số $ thị trường VN**: phần lớn là ước tính/dự báo của vendor; nhiều cái **đã bị bác** khi kiểm chứng — gồm: WTP $84/tháng, ERP VN $277tr / $947tr / $1.2B, CAGR 30%, "60% SMB Mỹ dùng vertical SaaS", "85% chi tiêu AI y tế chảy vào startup". **Không dùng các số này.**
3. **Demand validated chủ yếu ở Mỹ**; WTP thật ở VN chưa rõ.
4. **Y tế**: rào pháp lý cao + (với Senera) thiếu rễ.

## Câu hỏi mở (cần bạn / cần xác minh thêm)
- WTP thật của SME VN cho phần mềm vận hành/AI là bao nhiêu?
- Ngành SME-VN nào có **quy trình rõ + dữ liệu sẵn** để POC nhanh nhất (F&B / sản xuất nhỏ / logistics / bán lẻ)? Wedge đối soát/quy trình hẹp nào sắc nhất?
- Rào pháp lý dữ liệu y tế VN cho đội nhỏ — khả thi không, hay cần đối tác/giấy phép?
- **Đội Senera có "rễ" thật ở ngành nào** (để chọn 3 domain cho đúng "đã làm", không chỉ "muốn làm")?

## Nguồn chính
- Menlo Ventures — *The State of AI in Healthcare 2025*
- Bessemer (BVP) — *State of AI 2025*
- World Bank — *SME digital technology adoption RCT (Vietnam)*
- Vietnam Briefing — *VN ERP market / SME digital transformation*; Quyết định 433/QĐ-TTg
- EdTech Agency — *Sách trắng Công nghệ Giáo dục VN 2025*
- Contrary Research — *The Vertical AI Playbook*
