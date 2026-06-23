import type { PageTheme, WatermarkConfig, WaveConfig } from "@/components/print/page-frame";

/**
 * Ordered page registry — the SINGLE SOURCE OF TRUTH for sequence, per-page theme, and
 * footer numbering. The driver (app/page.tsx) renders pages in this order and derives the
 * footer page number from the index, so renumbering = reorder this array (no manual "NN / TT").
 *
 * Theme map (locked, PLAN-render §4): dark for the openers/closers, light for content.
 *   DARK = cover · divider-1 · divider-2 · why  → đầm-sen "đêm trăng" + ambient field.
 *   brand = light, but the tagline carries text-brand-strong.
 *
 * Order = the current preview order (Phần 1 Năng lực → Phần 2 Minh chứng). The buyer-led
 * 5-mạch reorder is a content decision deferred to later — when wanted, just reorder here.
 */
export type PageId =
  | "cover"
  | "identity"
  | "positioning"
  | "team"
  | "experience"
  | "divider-1"
  | "services"
  | "ai"
  | "collaboration"
  | "quality"
  | "divider-2"
  | "fields"
  | "projects"
  | "clients"
  | "legal"
  | "why";

export interface PageMeta {
  id: PageId;
  /** Footer centre label. */
  label: string;
  theme: PageTheme;
  /** Paint the ambient/glow(/bloom) gradient field — dark openers/closers only. */
  ambient?: boolean;
  /** ĐÁY AO — one large folk-motif watermark behind the page (motif = chapter family). */
  watermark?: WatermarkConfig;
  /** Sóng nước foot rule — minh-chứng / data pages. */
  wave?: WaveConfig;
  /** Cover has no footer/page number. */
  noFooter?: boolean;
}

export const PAGES: readonly PageMeta[] = [
  { id: "cover", label: "Bìa", theme: "dark", ambient: true, noFooter: true },
  { id: "identity", label: "Bản sắc", theme: "light" },
  { id: "positioning", label: "Định vị", theme: "light" },
  { id: "team", label: "Đội ngũ quản lý", theme: "light" },
  { id: "experience", label: "Kinh nghiệm & thị trường", theme: "light" },
  { id: "divider-1", label: "Phần 1 · Năng lực", theme: "dark", ambient: true },
  // Năng lực: per-card khảm (LotusInlay) IS the motif here → no page watermark.
  { id: "services", label: "Dịch vụ", theme: "light" },
  // AI = sơ đồ điều phối sáng (đầm sen), decor lotus/sóng nước đặt trong page → no ambient/watermark.
  { id: "ai", label: "AI xuyên suốt", theme: "light" },
  { id: "collaboration", label: "Mô hình hợp tác", theme: "light" },
  { id: "quality", label: "Tiêu chuẩn chất lượng", theme: "light" },
  { id: "divider-2", label: "Phần 2 · Minh chứng", theme: "dark", ambient: true },
  { id: "fields", label: "Lĩnh vực chuyên sâu", theme: "light" },
  { id: "projects", label: "Dự án tiêu biểu", theme: "light" },
  { id: "clients", label: "Khách hàng & đối tác", theme: "light" },
  { id: "legal", label: "Tổng quan pháp nhân", theme: "light" },
  { id: "why", label: "Vì sao chọn · Liên hệ", theme: "dark", ambient: true },
];

/** Total pages — drives the "NN / TOTAL" footer (fixes the old /16 drift; real count is 15). */
export const TOTAL = PAGES.length;
