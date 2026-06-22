/**
 * TOÀN BỘ chữ tiếng Việt của hồ sơ — tách khỏi JSX để copy-editor mài MỘT chỗ.
 * Quy ước nhấn mạnh inline trong chuỗi: `**đậm**` → <strong>, `*nghiêng*` → <em>
 * (component <Rich> ở blocks/primitives.tsx dựng lại). `[trong ngoặc]` = TODO chờ user.
 *
 * Bám tiêu chuẩn 8 bộ lọc (feedback-content-output-standard): khiêm nhường · cụ thể ·
 * phân biệt · không bịa · mỗi câu có việc · lợi ích khách lên đầu · trục là asset mạnh nhất.
 */

export const vi = {
  // 1 · BÌA -------------------------------------------------------------------
  cover: {
    wordmark: "SENERA",
    descriptor:
      "Đối tác công nghệ toàn diện — may đo sản phẩm số theo nhu cầu doanh nghiệp, đồng hành đến khi vận hành thật.",
    tagline: "Làm chủ cái số, bằng cái duyên.",
    kicker: "Hồ sơ năng lực · 2026",
  },

  // 2 · ĐỊNH VỊ & BẢN SẮC ------------------------------------------------------
  // Gộp "Định vị & giá trị" + "Thương hiệu" thành một trang nhận diện (2026-06-23):
  // tên→tagline (gem) · câu định vị · 4 khác biệt (April Dunford "định vị bằng tương phản").
  positioning: {
    eyebrow: "Mở · Senera là ai",
    title: "Định vị & bản sắc",
    // Tên gói sẵn cách làm nghề: Sen (gốc Việt) + era (kỷ nguyên số) → tagline là trục.
    nameGloss: "Sen — gốc Việt, bền bỉ · era — kỷ nguyên số",
    tagline: "Làm chủ cái số, bằng cái duyên.",
    // Câu định vị — cái "làm": may đo + lo trọn + chạy thật.
    statement:
      "Senera **may đo** sản phẩm số đúng nghiệp vụ của bạn — một đội dày nghề lo trọn, theo tới khi **chạy thật**.",
    target: "Hợp khi bạn có bài toán riêng mà giải pháp đóng gói không vừa.",
    diffHeading: "Khác biệt của Senera",
    diffs: [
      {
        title: "Một đầu mối, lo trọn",
        desc: "Một đội Senera tự làm từ nghiên cứu, thiết kế, dựng đến vận hành — không lắp ghép từ mảnh thuê ngoài.",
        vs: "thay vì tự ghép và điều phối nhiều nhà cung cấp",
      },
      {
        title: "May đo, không ép khuôn",
        desc: "Sản phẩm bám đúng nghiệp vụ của bạn; gặp bài toán lạ thì tự mò cách giải, không chép mẫu.",
        vs: "thay vì phần mềm đóng gói cứng nhắc",
      },
      {
        title: "AI nhúng thật, không dán nhãn",
        desc: "Hỏi–đáp tài liệu, tìm kiếm ngữ nghĩa, trích xuất dữ liệu, cảnh báo bất thường — AI làm việc thật trong sản phẩm.",
        vs: "thay vì gắn mác 'AI' cho sang",
      },
      {
        title: "Minh bạch, theo tới cùng",
        desc: "Quy trình rõ, tiến độ thấy được; nói thẳng cái làm được và cái chưa, theo tới khi sản phẩm sống thật.",
        vs: "thay vì hứa hẹn rồi buông giữa chừng",
      },
    ],
  },

  // 3 · ĐỘI NGŨ ---------------------------------------------------------------
  team: {
    eyebrow: "Mở · Con người",
    title: "Đội ngũ quản lý",
    sub: "Không chạy theo số lượng mà chọn độ tinh: người trẻ tiềm năng được lớp đi trước — dày kinh nghiệm thực chiến — dìu dắt để vươn nhanh trong nghề.",
    members: [
      {
        role: "Nhà sáng lập",
        name: "Trương Bá Quân",
        photo: "/img/team/truong-ba-quan-cut.png",
        bio: "Đi qua hầu hết các vị trí trong nghề — kỹ sư, trưởng nhóm kỹ thuật, quản lý dự án rồi quản lý sản xuất — qua nhiều năm làm việc trực tiếp với khách hàng nước ngoài. Từng gắn bó với **CMC, FPT, FWD**. Lấy **AI và tự động hoá** làm kim chỉ nam, không ngừng học hỏi những cách tiếp cận mới để mang lại trải nghiệm công nghệ tốt nhất cho khách hàng.",
      },
      {
        role: "Đồng sáng lập · Giám đốc Công nghệ (CTO)",
        name: "Đàm Đình Huy",
        photo: "/img/team/dam-dinh-huy-cut.png",
        bio: "Nhiều năm phát triển ứng dụng trọn vẹn từ đầu đến cuối; từng là kỹ sư trưởng nhiều dự án trọng điểm tại **tập đoàn VMO**, nay là kỹ sư cấp cao tại **VinSmart Future**. Hiện tập trung **R&D**: nghiên cứu tầm ảnh hưởng và cách ứng dụng thực chất **AI tạo sinh** cho chuyển đổi số đa ngành.",
      },
      {
        role: "Trưởng Nhân sự",
        name: "Nguyễn Thanh Thanh Huyền",
        photo: "/img/team/nguyen-thanh-thanh-huyen-cut.png",
        bio: "Nhiều năm làm nhân sự ở vị trí nhóm trưởng tại các tập đoàn lớn — **CMC, GMO, VinSmart Future**. Xây dựng quy trình tuyển chọn và đào tạo bài bản; giữ vai trò then chốt trong chiến lược **đặt con người làm trung tâm** của Senera.",
      },
    ],
  },

  // 4 · KINH NGHIỆM & THỊ TRƯỜNG ---------------------------------------------
  experience: {
    eyebrow: "Mở · Bằng chứng",
    title: "Kinh nghiệm & thị trường",
    lead: "Bề rộng đến từ nhiều năm làm thật.",
    sub: "Đội ngũ đã đưa sản phẩm chạy thật ở nhiều lĩnh vực — tích luỹ qua những năm ở các tập đoàn lớn, nay tiếp tục ở Senera. Vốn nghề đó đi thẳng vào sản phẩm cho bạn.",
    fieldsHeading: "Lĩnh vực đã làm",
    fieldsNote: "Đây là bề rộng; chiều sâu nằm ở phần **Lĩnh vực chuyên sâu**.",
    fieldChips: [
      "Quản trị & vận hành doanh nghiệp",
      "Thương mại điện tử & bán lẻ số",
      "Ứng dụng tích hợp AI",
      "Giáo dục",
      "Sản xuất & cơ khí số hoá",
    ],
    marketsHeading: "Hai thị trường",
    markets: [
      {
        label: "Thị trường chính",
        name: "Việt Nam",
        desc: "Phần lớn sản phẩm, khách hàng và đội ngũ đều ở đây.",
        proof: "Dữ liệu đặt tại Việt Nam · tuân thủ **NĐ 13**.",
      },
      {
        label: "Khách quốc tế",
        name: "Hồng Kông",
        desc: "Nhiều năm làm cho khách nước ngoài, quen chuẩn và nhịp làm việc quốc tế.",
        proof: "Đội ngũ từng ở **FWD** — tập đoàn gốc Hồng Kông.",
      },
    ],
  },

  // 6 · DIVIDER · PHẦN 1 NĂNG LỰC --------------------------------------------
  divider1: {
    num: "01",
    part: "Phần 1",
    title: "Năng lực",
    sub: "Từ dịch vụ, cách hợp tác đến chuẩn chất lượng — phần này nói thẳng Senera làm được tới đâu, và làm sao để bạn yên tâm giao việc.",
  },

  // 7 · DỊCH VỤ ---------------------------------------------------------------
  services: {
    eyebrow: "Phần 1 · Năng lực",
    title: "Dịch vụ",
    sub: "Bốn nhóm dịch vụ phủ trọn vòng đời sản phẩm, cùng một lớp AI xuyên suốt.",
    groups: [
      {
        no: "01",
        title: "Tư vấn & chiến lược",
        desc: "Chọn đúng bài toán đáng giải trước khi viết dòng mã đầu — gói về MVP đủ nhỏ để ra nhanh, đủ thật để học.",
        items: "Làm rõ bài toán & người dùng · Khoanh vùng MVP · Lộ trình theo cột mốc",
      },
      {
        no: "02",
        title: "Thiết kế & thương hiệu",
        desc: "Giao diện rõ ràng, nhận diện nhất quán — đặt trên design system để màn hình về sau vẫn đồng bộ.",
        items: "Design system & token · Bản mẫu tương tác · Nhận diện cốt lõi (logo·màu·chữ)",
      },
      {
        no: "03",
        title: "Phát triển, hạ tầng & vận hành",
        desc: "Web, app, API đa nền tảng dựng để chạy thật khi đông người dùng; kiểm thử, CI/CD, quan sát từ ngày đầu — và giám sát, bảo trì, hỗ trợ giữ sản phẩm sống khoẻ sau lên sóng.",
        items: "Web/app/API đa nền tảng · CI/CD & quan sát · Giám sát, bảo trì & hỗ trợ",
      },
      {
        no: "04",
        title: "Marketing & tăng trưởng",
        desc: "Đưa sản phẩm đến đúng khách: web/app chuẩn SEO, tiếp cận đúng tệp, thu và quản lý lead — nối tiếp tự nhiên từ thương hiệu và sản phẩm đã dựng.",
        items: "SEO & nội dung · Tiếp cận & quảng bá · Thu & quản lý lead",
      },
    ],
  },

  // 7b · AI XUYÊN SUỐT (trang riêng) ------------------------------------------
  ai: {
    eyebrow: "Phần 1 · Năng lực",
    heading: "AI xuyên suốt",
    note: "Đặt AI đúng nơi tạo ra giá trị trong cả vòng đời sản phẩm — không phô trương.",
      phases: [
        {
          title: "Thấu hiểu",
          desc: "Phân tích insight doanh nghiệp, đối thủ, thị trường để sản phẩm bám đúng nhu cầu từ đầu.",
        },
        {
          title: "Thiết kế",
          desc: "Dựng nhanh nhiều phương án và nội dung mẫu, rút ngắn thời gian ra MVP.",
        },
        {
          title: "Phát triển",
          desc: "Tăng tốc phát triển; đưa AI vào sản phẩm: trợ lý hỏi–đáp tài liệu, tìm kiếm theo ngữ nghĩa, trích xuất dữ liệu.",
        },
        {
          title: "Vận hành",
          desc: "Trợ lý hỗ trợ 24/7 và cảnh báo bất thường sớm, giữ sản phẩm vận hành ổn định.",
        },
      ],
      strengths: [
        {
          title: "Đa ngôn ngữ",
          desc: "Sản phẩm phục vụ khách bằng chính ngôn ngữ của họ — Việt, Anh, Trung — sẵn cho thị trường Việt Nam và Hồng Kông.",
        },
        {
          title: "Tự động hoá việc lặp",
          desc: "Giao AI các thao tác thủ công lặp lại (nhập liệu, phân loại, soạn thảo), để người tập trung vào phần cần suy xét.",
        },
      ],
    },

  // 8 · MÔ HÌNH HỢP TÁC -------------------------------------------------------
  collaboration: {
    eyebrow: "Phần 1 · Năng lực",
    title: "Mô hình hợp tác",
    lead: "Đủ kỷ luật để chắc tay, đủ linh hoạt để uốn theo bài toán.",
    sub: "Chúng tôi làm theo nhịp ngắn, tiến độ rõ ràng — và mở ba cách hợp tác để bạn chọn theo đúng giai đoạn của mình.",
    howHeading: "Cách chúng tôi làm việc",
    how: [
      {
        title: "Ưu tiên Agile/Scrum",
        desc: "Bạn được thấy sản phẩm chạy thật ngay từ những đợt đầu — dùng thử, đánh giá và điều chỉnh trong suốt quá trình làm, thay vì đợi đến cuối mới biết kết quả có đúng ý. Vì vậy chúng tôi ưu tiên Agile/Scrum, chia việc thành từng đợt ngắn; khi dự án đòi hỏi, vẫn triển khai được theo mô hình waterfall.",
      },
      {
        title: "Chủ động báo cáo, xử lý sớm",
        desc: "Bạn luôn biết dự án đang ở đâu và vướng chỗ nào mà không cần hỏi. Chúng tôi chủ động cập nhật từng công đoạn, nêu khó khăn ngay khi xuất hiện và cùng bạn xử lý sớm — thay vì để vấn đề dồn lại đến cuối.",
      },
      {
        title: "Linh hoạt điều chỉnh phạm vi",
        desc: "Nhu cầu thay đổi giữa chừng cũng không khiến bạn mắc kẹt: phạm vi công việc được điều chỉnh theo từng đợt, thay vì cố định trong một bản kế hoạch ký từ đầu.",
      },
    ],
    waysHeading: "Ba cách hợp tác",
    ways: [
      {
        no: "01",
        title: "Dự án trọn gói",
        desc: "Senera nhận trọn một sản phẩm số — từ ý tưởng đầu tiên đến khi vận hành thật.",
        fit: "**Hợp khi:** bạn cần một sản phẩm mới, hoặc làm mới một hệ thống cũ.",
        fee: "**Phí:** tính theo phạm vi; nghiệm thu và thanh toán theo từng cột mốc.",
      },
      {
        no: "02",
        title: "Đồng hành & vận hành",
        desc: "Senera tiếp nhận và chăm sóc sản phẩm sau khi lên sóng — kể cả sản phẩm do đội khác xây dựng.",
        fit: "**Hợp khi:** bạn đã có sản phẩm, cần giữ vận hành ổn định và cải tiến đều.",
        fee: "**Phí:** gói theo tháng, kèm cam kết thời gian phản hồi.",
      },
      {
        no: "03",
        title: "Tăng cường đội",
        desc: "Bổ sung người của Senera — kỹ sư hoặc nhân sự truyền thông — vào đội ngũ sẵn có của bạn.",
        fit: "**Hợp khi:** bạn đã có đội, nhưng thiếu người hoặc kỹ năng cho một giai đoạn cao điểm.",
        fee: "**Phí:** theo tháng, theo người.",
      },
    ],
    feeline:
      "**Dù chọn cách nào** — Senera báo giá theo nhu cầu thực tế: bạn trả cho giá trị nhận được, không trả cho một gói cứng.",
  },

  // 9 · TIÊU CHUẨN CHẤT LƯỢNG -------------------------------------------------
  quality: {
    eyebrow: "Phần 1 · Năng lực",
    title: "Tiêu chuẩn chất lượng",
    lead: "Chuẩn chúng tôi đặt cho sản phẩm của mình, cũng là chuẩn bạn nhận được.",
    sub: "Senera giữ một bộ tiêu chuẩn cao xuyên suốt vòng đời phát triển — và mỗi tiêu chuẩn đều gắn một cách đánh giá đo được, không hứa suông.",
    columns: { stage: "Giai đoạn", standard: "Tiêu chuẩn cao", evaluation: "Cách đánh giá" },
    rows: [
      {
        stage: "1 · Phân tích & yêu cầu",
        standard: "Chốt đúng bài toán, phạm vi và tiêu chí thành công trước khi viết dòng mã đầu.",
        evaluation: "Mỗi yêu cầu có tiêu chí chấp nhận đo được; phạm vi do bạn xác nhận.",
      },
      {
        stage: "2 · Thiết kế",
        standard: "Nhất quán trên một hệ thống chung, ưu tiên điện thoại, tính sẵn khả năng tiếp cận.",
        evaluation: "Duyệt bản mẫu tương tác trước khi dựng; đối chiếu chuẩn tiếp cận WCAG; thử trên màn hình nhỏ.",
      },
      {
        stage: "3 · Phát triển",
        standard: "Mã sạch, chặt chẽ; bảo mật từ gốc — cô lập dữ liệu nhiều lớp, phân quyền theo vai trò.",
        evaluation: "Mã qua rà soát đồng cấp và cổng chất lượng tự động trước khi nhập nhánh chính.",
      },
      {
        stage: "4 · Kiểm thử",
        standard: "Luồng quan trọng được kiểm thử tự động; không lỗi chặn trước khi giao.",
        evaluation: "Bộ kiểm thử chạy ở mỗi thay đổi; thử trên thiết bị thật; nghiệm thu theo checklist.",
      },
      {
        stage: "5 · Triển khai",
        standard: "Phát hành có kiểm soát, ít rủi ro; dữ liệu đặt tại Việt Nam.",
        evaluation: "Phát hành tự động kèm bản xem trước, quay lui được; dữ liệu & sao lưu tại VN theo **Nghị định 13/2023**.",
      },
      {
        stage: "6 · Vận hành & bảo trì",
        standard: "Giữ sản phẩm nhanh, luôn sẵn sàng; vá bảo mật và cải tiến đều.",
        evaluation: "Giám sát & cảnh báo thời gian thực; mục tiêu **tải < 1,5s**, **uptime 99,5%** mùa cao điểm; mọi thao tác ghi vết.",
      },
    ],
    note: "* Các con số là mục tiêu Senera đặt cho sản phẩm của chính mình (ví dụ Tuyển sinh nhanh); với mỗi dự án, mức cụ thể được thống nhất cùng khách.",
    banner: "**Nhận dự án của bạn, chúng tôi không hạ chuẩn.**",
  },

  // 10 · DIVIDER · PHẦN 2 MINH CHỨNG -----------------------------------------
  divider2: {
    num: "02",
    part: "Phần 2",
    title: "Minh chứng",
    sub: "Hết phần nói, tới phần làm — những lĩnh vực đang đi sâu, dự án có thật, và khách đã giao việc cho Senera.",
  },

  // 11 · LĨNH VỰC CHUYÊN SÂU --------------------------------------------------
  fields: {
    eyebrow: "Phần 2 · Minh chứng",
    title: "Lĩnh vực chuyên sâu",
    lead: "Chọn vài ngành để đi thật sâu, hơn là biết qua loa nhiều ngành.",
    sub: "Ba lĩnh vực Senera tập trung — mỗi lĩnh vực gắn một bài toán đắt giá của Việt Nam hôm nay và những ngách chúng tôi đang đi sâu.",
    nicheLabel: "Ngách đang đi sâu",
    domains: [
      {
        no: "01",
        title: "Giáo dục",
        problem:
          "**Bài toán.** K-12 và ngoại ngữ đã chật; mầm non, đại học, đào tạo nghề gần như chưa có công cụ số tử tế; giáo viên quá tải soạn và chấm.",
        niches: [
          "Tuyển sinh nhanh — số hoá tuyển sinh & vận hành cho trường",
          "Công cụ AI cho giáo viên: soạn học liệu, chấm bài, ngân hàng đề",
          "Cảnh báo sớm học sinh bỏ học",
        ],
      },
      {
        no: "02",
        title: "Vận hành & quản trị doanh nghiệp (SME)",
        problem:
          "**Bài toán.** 97% doanh nghiệp là SME, phần lớn còn chạy bằng Excel và giấy; hoá đơn điện tử bắt buộc và Quyết định 433 đang thúc số hoá; phần mềm ngoại thường không vừa. Khó nhất: dùng vài tháng rồi bỏ.",
        niches: [
          "Đối soát hoá đơn điện tử tự động theo từng ngành",
          "Trợ lý hỏi dữ liệu vận hành bằng tiếng Việt",
          "Tự động hoá một quy trình đau, tạo giá trị ngay tuần đầu",
        ],
      },
      {
        no: "03",
        title: "Thương mại điện tử & bán lẻ số",
        problem:
          "**Bài toán.** Bán hàng đã dịch sang đa sàn và livestream (TikTok Shop, Shopee, Lazada, fanpage); người bán ngợp vì quản đơn, kho, khách và nội dung trên nhiều kênh; tỉ lệ hoàn và bom hàng COD cao.",
        niches: [
          "Gom đơn và kho đa sàn về một mối",
          "Sinh nội dung sản phẩm & trả lời khách bằng AI",
          "Phân tích đánh giá/hoàn đơn; chatbot CSKH cho shop",
        ],
      },
    ],
  },

  // 12 · DỰ ÁN TIÊU BIỂU ------------------------------------------------------
  projects: {
    eyebrow: "Phần 2 · Minh chứng",
    title: "Dự án tiêu biểu",
    lead: "Ba dự án, ba ngành rất khác nhau.",
    sub: "Số hoá sản xuất cho xí nghiệp cơ khí · nền tảng giáo dục tự xây · cổng xúc tiến đầu tư đa ngôn ngữ.",
    hero: {
      kicker: "Nhóm sản phẩm số hoá cho Xí nghiệp thép Minh Cường · **Phần 1**",
      title: "MCS — Số hoá sản xuất cơ khí",
      desc: "Biến file BOM Excel của phòng kỹ thuật thành một **dây chuyền sản xuất số liền mạch** — theo dõi được tới từng cấu kiện thép ngoài sàn xưởng.",
      pillars: [
        {
          title: "① Liền mạch bản vẽ → sàn xưởng",
          desc: "BOM Excel (cấu kiện–phôi, tiêu đề song ngữ) tự bóc tách thành lệnh sản xuất sống trên kanban — thay cho chép tay, đọc miệng.",
        },
        {
          title: "② Mỗi cấu kiện một “căn cước số”",
          desc: "Mã QR vĩnh viễn cho từng cấu kiện vật lý (N cái = N mã riêng) — quét là biết đang ở xưởng nào, bước nào, ai làm.",
        },
        {
          title: "③ Quy trình là “động cơ” cấu hình được",
          desc: "Cắt → hàn → tổ hợp → sơn → nghiệm thu dựng thành state machine có cổng chuyển bước, phân quyền từng bước, ghi trọn lịch sử.",
        },
      ],
      shot: "bảng kanban điều phối / BOM (dán sau)",
      note: "Ngành cơ khí/thép phần lớn còn chạy bằng thẻ giấy, bảng trắng và Excel chuyền tay — số hoá tới từng cấu kiện còn rất ít nơi làm; đây là hướng Senera đang nghiên cứu và xây thật. **Các phần tiếp theo của nhóm sản phẩm Minh Cường:** [bổ sung sau].",
    },
    side: [
      {
        kicker: "Sản phẩm của chính Senera",
        title: "Tuyển sinh nhanh",
        desc: "Nền tảng tuyển sinh số đa trường: mỗi trường một cổng riêng; phụ huynh nộp & tra hồ sơ ngay trên điện thoại. Dữ liệu tại Việt Nam (NĐ 13).",
        note: "**Mùa sau:** thanh toán phí · nhắn tin phụ huynh–trường · nhắc lịch qua Zalo.",
        shot: "cổng tuyển sinh (dán sau)",
      },
      {
        kicker: "Dự án cho khách · tên khách ẩn danh theo yêu cầu",
        title: "Nền tảng xúc tiến đầu tư công nghiệp",
        desc: "Cổng cho thuê quỹ đất, nhà xưởng xây sẵn & hạ tầng cho nhà đầu tư trong nước và FDI — đa cụm, **5 ngôn ngữ** (Việt·Anh·Nhật·Hàn·Trung), bản đồ tương tác, phễu khảo sát.",
        note: "**Trạng thái:** [đang ở giai đoạn nào — xác nhận].",
        shot: "trang chủ / trang cụm CN (dán sau)",
      },
    ],
  },

  // 13 · KHÁCH HÀNG & ĐỐI TÁC -------------------------------------------------
  clients: {
    eyebrow: "Phần 2 · Minh chứng",
    title: "Khách hàng & đối tác",
    lead: "Ai giao việc cho mình nói nhiều hơn mọi lời tự giới thiệu.",
    sub: "Một xí nghiệp cơ khí đang số hoá sản xuất, và những trường học đã đưa tuyển sinh lên nền số — chọn Senera đồng hành.",
    hero: {
      label: "Khách tiêu biểu · Cơ khí – Thép",
      name: "Xí nghiệp thép Minh Cường",
      desc: "Chọn Senera để số hoá sản xuất — theo dõi được tới từng cấu kiện thép ngoài sàn xưởng, thay cho thẻ giấy và Excel chuyền tay.",
      chips: ["Đang triển khai", "BOM → kanban", "QR từng cấu kiện"],
      logo: "logo / ảnh xưởng (dán sau)",
    },
    eduHeading: "Giáo dục — các trường dùng Tuyển sinh nhanh",
    eduDesc:
      "Nền tảng tuyển sinh số nhiều trường: mỗi trường một cổng riêng, phụ huynh nộp & tra hồ sơ ngay trên điện thoại. Dữ liệu đặt tại Việt Nam (NĐ 13).",
    schools: [
      { name: "[Trường A]", meta: "[Cấp học · địa bàn]" },
      { name: "[Trường B]", meta: "[Cấp học · địa bàn]" },
      { name: "[Trường C]", meta: "[Cấp học · địa bàn]" },
    ],
    schoolChip: "Đang dùng",
    eduCaption: "**[N] trường** đang dùng Tuyển sinh nhanh — đây là 3 trong số đó.",
    footnote:
      "Trước Senera, đội ngũ chủ chốt từng xây hệ thống cho các **tập đoàn công nghệ lớn ở Việt Nam và Hồng Kông** — thực hiện tại vị trí trước.",
  },

  // 14 · TỔNG QUAN PHÁP NHÂN --------------------------------------------------
  legal: {
    eyebrow: "Kết · Hồ sơ pháp nhân",
    title: "Tổng quan",
    sub: "Thông tin pháp nhân — giữ cho hồ sơ thầu.",
    tableLabel: "Bảng thông tin pháp nhân",
    rows: [
      { key: "Tên pháp nhân", value: "Công ty Cổ phần Senera", strong: true },
      { key: "Mã số doanh nghiệp (MST)", value: "0111534180", mono: true },
      { key: "Năm thành lập", value: "[bổ sung]", todo: true },
      { key: "Địa chỉ", value: "Số 55, Tổ 12, Xã Thư Lâm, Thành phố Hà Nội, Việt Nam" },
      { key: "Người đại diện", value: "Ông Trương Bá Quân", valueNote: "· [chức danh — xác nhận]" },
      { key: "Lĩnh vực ĐKKD", value: "[bổ sung]", todo: true },
      { key: "Liên hệ chính thức", value: "quantb@senera.vn  ·  0345913369", strong: true },
    ],
  },

  // 15 · VÌ SAO CHỌN + LIÊN HỆ ------------------------------------------------
  why: {
    eyebrow: "Kết · Chốt",
    title: "Vì sao chọn Senera",
    sub: "Bốn điều, gói lại từ những gì hồ sơ đã cho thấy.",
    reasons: [
      {
        no: "01",
        title: "Làm thẳng với người dày nghề",
        desc: "Đội nhỏ, nghề dày — người từng dựng hệ thống ở **CMC, FPT, FWD, VMO, VinSmart** trực tiếp làm việc của bạn; quyết nhanh, ít qua tầng trung gian.",
      },
      {
        no: "02",
        title: "Một đội lo tới khi chạy thật",
        desc: "Nghiên cứu → thiết kế → dựng → vận hành do cùng một đội theo suốt; nhận việc nào theo tới lúc sản phẩm sống thật, không buông giữa chừng.",
      },
      {
        no: "03",
        title: "Rủi ro thấy trước, nghiệm thu có cơ sở",
        desc: "Quy trình 6 giai đoạn, mỗi bước có tiêu chí nghiệm thu rõ; dữ liệu đặt tại Việt Nam (NĐ 13), có nhật ký truy vết — chuẩn chúng tôi dùng cho sản phẩm của mình.",
      },
      {
        no: "04",
        title: "AI đặt đúng chỗ cho đỡ việc",
        desc: "Hỏi–đáp tài liệu, tìm kiếm ngữ nghĩa, trích xuất dữ liệu, cảnh báo bất thường, đa ngôn ngữ Việt·Anh·Trung — đặt nơi thật sự bớt việc tay, không nhồi cho có.",
      },
    ],
    contactHeading: "Liên hệ",
    contactLabel: "Liên hệ",
    contact: {
      email: "quantb@senera.vn",
      phone: "0345913369",
      website: "senera.vn",
      address: "Số 55, Tổ 12, Xã Thư Lâm, Thành phố Hà Nội",
    },
    cta: "Đặt lịch trao đổi",
    qr: "link website / lịch hẹn",
  },
} as const;

export type Vi = typeof vi;
