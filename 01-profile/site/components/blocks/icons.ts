/**
 * Central icon adapter — mirrors core/seneravn/apps/web/src/components/icons.ts so the profile
 * uses the SAME set as the live site. We use **Phosphor** (`/ssr` entry: RSC-safe, no client
 * context) — friendlier, rounded glyphs that read far less "stock". Prominent concept glyphs pass
 * `weight="duotone"` at the call site (two-tone tracks `currentColor` → the pink/teal tokens).
 *
 * Per seneravn's Distinctiveness gate: NO icon-in-a-chip; prefer the folk motifs
 * (`@/components/motifs`) for bullets/nodes. Icons here mark capability cards + the AI roadmap.
 */
export {
  ArrowRight,
  Compass, // Tư vấn & chiến lược
  Code as Code2, // Phát triển, hạ tầng & vận hành
  PenNib as PenTool, // Thiết kế & thương hiệu
  TrendUp as TrendingUp, // Marketing & tăng trưởng
  Eye, // AI · Thấu hiểu
  Sparkle as Sparkles, // AI · Thiết kế (sinh nhanh phương án)
  Cpu, // AI · Phát triển (nhúng AI vào sản phẩm)
  Lifebuoy as LifeBuoy, // AI · Vận hành (trợ lý hỗ trợ)
  Translate, // thế mạnh · đa ngôn ngữ
  Robot, // thế mạnh · tự động hoá việc lặp

  // Kinh nghiệm · hai thị trường
  MapPin, // thị trường chính · Việt Nam
  GlobeHemisphereEast, // khách quốc tế · Hồng Kông (hướng Đông Á)

  // Định vị · bốn khác biệt (thẻ AI dùng lại Cpu ở nhóm AI bên trên)
  Handshake, // một đầu mối, lo trọn
  Ruler, // may đo, không ép khuôn
  UsersThree, // cung cấp nhân sự công nghệ
} from "@phosphor-icons/react/ssr";

export type { Icon as LucideIcon } from "@phosphor-icons/react";
