import type { ReactNode } from "react";

import { LotusInlay } from "@/components/motifs/decor";
import { cn } from "@/lib/cn";

/**
 * Depth primitives for the "Đầm sen phân tầng" layout — the three planes of the pond.
 * Depth is read from STACKED TINT LAYERS (not drop-shadow, which Chrome Print can flatten):
 *
 *   <HeroZone>  — MẶT NƯỚC: a full-bleed tint band at the page top carrying the header, its
 *                 lower edge fading to the page background like a waterline. The band tint
 *                 encodes the chapter family (pink = bản sắc, leaf = năng lực, neutral = data).
 *   <Panel>     — LÁ SEN: the one or two content blocks that lift, sitting a surface plane on a
 *                 tinted cushion offset to the corner, with a <LotusInlay> sơn-mài khảm corner.
 *
 * (ĐÁY AO, the big hollow watermark behind the whole page, is <SectionWatermark>, placed at the
 * PageFrame level so it anchors to the true page corners.)
 *
 * Both break out of the PageFrame's 16mm content padding with negative margins to bleed to the
 * sheet edge — the one bold move per page. Brand laws kept: pink never floods (the band is the
 * pale `*-soft` tint and fades out), yellow stays action-only (no accent here).
 */

type Family = "pink" | "leaf" | "neutral";

const BAND_TINT: Record<Family, string> = {
  pink: "bg-brand-soft",
  leaf: "bg-leaf-soft",
  neutral: "bg-muted",
};

/* Same-hue richness so the band reads as a confident colour zone (print asset), not a flat
 * wash — and never a muddy CROSS-hue fade into the kem page background. */
const BAND_GRAD: Record<Family, string> = {
  pink: "bg-gradient-to-br from-transparent via-transparent to-brand/30",
  leaf: "bg-gradient-to-br from-transparent via-transparent to-leaf/35",
  neutral: "bg-gradient-to-br from-transparent to-border/40",
};

/**
 * Full-bleed top register — a clean chapter colour zone with a crisp bottom edge (the divider
 * motif is placed by the page). Children are the page header (eyebrow + H2 + lead/sub).
 */
export function HeroZone({
  family = "leaf",
  className,
  children,
}: {
  family?: Family;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative -mx-[16mm] -mt-[16mm] mb-[2px] px-[16mm] pb-[20px] pt-[15mm]",
        className,
      )}
    >
      {/* MẶT NƯỚC — the chapter tint, edge to edge, crisp */}
      <div aria-hidden className={cn("absolute inset-0 -z-10", BAND_TINT[family])} />
      <div aria-hidden className={cn("absolute inset-0 -z-10", BAND_GRAD[family])} />
      {children}
    </div>
  );
}

type PanelTone = "pink" | "green";

/**
 * One lifted "lá sen" panel: a surface plane floating on a tinted cushion (offset to the
 * bottom-right corner) + a sơn-mài khảm inlay. `index` cycles the four motifs across panels so a
 * set reads composed. Use SPARINGLY — at most one or two per page (the lift means "read me").
 */
export function Panel({
  tone = "green",
  index = 0,
  grain = true,
  className,
  children,
}: {
  tone?: PanelTone;
  index?: number;
  grain?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const cushion = tone === "green" ? "bg-leaf-soft" : "bg-brand-soft";
  return (
    <div className="relative">
      {/* tinted cushion peeking at the bottom-right — the "water" under the floating leaf */}
      <div
        aria-hidden
        className={cn("absolute -bottom-[5px] -right-[5px] left-[3px] top-[3px] rounded-2xl", cushion)}
      />
      <div
        className={cn(
          "relative isolate overflow-hidden rounded-2xl border border-border/70 bg-card px-[15px] py-[13px] shadow-xs",
          className,
        )}
      >
        <LotusInlay index={index} tone={tone} grain={grain} />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
