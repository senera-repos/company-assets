import type { ReactNode } from "react";

import { SectionWatermark, WaveDivider } from "@/components/motifs/decor";
import type { WatermarkMotif } from "@/components/motifs/folk-motifs";
import { cn } from "@/lib/cn";

export type PageTheme = "light" | "dark";

/** ĐÁY AO — one big hollow motif behind the whole page (anchored to the true sheet corners). */
export interface WatermarkConfig {
  motif: WatermarkMotif;
  tone?: "pink" | "green";
  place?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: number;
}

/** Sóng nước foot rule — for the minh-chứng / data pages. */
export interface WaveConfig {
  tone?: "pink" | "green";
}

export interface PageFooter {
  /** Page name shown centre (e.g. "Đội ngũ"). */
  label: string;
  /** 1-based page number (auto-derived from page order). */
  page: number;
  /** Total page count. */
  total: number;
}

export interface PageFrameProps {
  /** Per-page theme — dark for openers/closers, light for content. Cascades tokens to the subtree. */
  theme?: PageTheme;
  /** Footer block; omit/null on the cover. */
  footer?: PageFooter | null;
  /** Paint the đầm-sen ambient/glow (+ dark bloom) gradient field — dark openers/closers only. */
  ambient?: boolean;
  /** One large folk-motif watermark behind the page (đáy ao). */
  watermark?: WatermarkConfig;
  /** Sóng nước rule across the foot (above the footer). */
  wave?: WaveConfig;
  className?: string;
  children: ReactNode;
}

/**
 * One A4 page (210×297mm). `data-theme` cascades the senera-theme tokens to everything inside,
 * so a `dark` page flips background/foreground/gradients without per-element `dark:` variants.
 * The ambient field + motif watermark are inset layers behind the content (content sits at z-10).
 */
export function PageFrame({
  theme = "light",
  footer,
  ambient = false,
  watermark,
  wave,
  className,
  children,
}: PageFrameProps) {
  return (
    <section
      data-theme={theme}
      className={cn("page-sheet isolate bg-background text-foreground", className)}
    >
      {ambient && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-ambient" />
          <div className="absolute inset-0 bg-glow" />
          <div className="absolute inset-0 bg-bloom" />
        </div>
      )}

      {/* ĐÁY AO — sits behind content; anchored to the sheet so it bleeds off the real corner. */}
      {watermark && (
        <SectionWatermark
          motif={watermark.motif}
          tone={watermark.tone}
          place={watermark.place}
          size={watermark.size}
        />
      )}

      <div className="relative z-10 flex h-full flex-col px-[16mm] pt-[16mm] pb-[14mm]">
        {children}
      </div>

      {/* Sóng nước — full-bleed foot rule, just above the footer line. */}
      {wave && (
        <div aria-hidden className="absolute inset-x-0 bottom-[10.5mm] -z-10">
          <WaveDivider tone={wave.tone} />
        </div>
      )}

      {footer && (
        <div className="absolute inset-x-[16mm] bottom-[7mm] z-10 flex items-center justify-between border-t border-border/70 pt-[6px] font-mono text-[7.2pt] uppercase tracking-[0.1em] text-muted-foreground">
          <span>Senera</span>
          <span className="tracking-[0.05em] normal-case">{footer.label}</span>
          <span>
            {String(footer.page).padStart(2, "0")} / {footer.total}
          </span>
        </div>
      )}
    </section>
  );
}
