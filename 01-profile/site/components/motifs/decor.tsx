import type { ReactElement, SVGProps } from "react";

import { cn } from "@/lib/cn";

import {
  MOTIF_DIMS,
  SenSolid,
  SongNuoc,
  VanMay,
  Vien,
  WATERMARK,
  WaveLines,
  type WatermarkMotif,
} from "./folk-motifs";

/**
 * Folk-motif decorations for the profile — ported from the brand kit
 * (core/senera-frontend-kit/packages/motifs) with the local `cn`. These place the đầm-sen
 * "khắc gỗ" art with the book's discipline: một màu · mờ thấp · sau nội dung · một section
 * một hoạ tiết. They carry the depth-system planes:
 *   <SectionWatermark> — ĐÁY AO: one large hollow motif behind a whole page.
 *   <LotusInlay>       — KHẢM: a sơn-mài corner inlay on a single lifted panel.
 *   <WaveDivider>      — sóng nước, mặt nước as a full-width foot rule.
 *   <BudRule>          — viền nụ sen, a short rule under an eyebrow.
 */

type Tone = "pink" | "green";

/* ── SectionWatermark — đáy ao: one big hollow motif behind a section ─────────────── */
type Place = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const WM_PLACEMENT: Record<Place, string> = {
  "top-left": "left-0 top-0 -translate-x-1/4 -translate-y-1/3",
  "top-right": "right-0 top-0 translate-x-1/4 -translate-y-1/3",
  "bottom-left": "left-0 bottom-0 -translate-x-1/4 translate-y-1/3",
  "bottom-right": "right-0 bottom-0 translate-x-1/4 translate-y-1/3",
};

export function SectionWatermark({
  motif,
  tone = "pink",
  place = "bottom-right",
  size = 360,
  className,
}: {
  motif: WatermarkMotif;
  /** One brand colour only (book rule "một màu"). */
  tone?: Tone;
  place?: Place;
  /** Width in px; height derives from the motif's aspect. Large = watermark, bleeds off-corner. */
  size?: number;
  className?: string;
}) {
  const Motif = WATERMARK[motif];
  const dims = MOTIF_DIMS[motif];
  const height = Math.round((size * dims.h) / dims.w);

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10",
        WM_PLACEMENT[place],
        tone === "green" ? "text-motif-green" : "text-motif-pink",
        className,
      )}
      style={{ opacity: "var(--motif-op-soft)" }}
    >
      <Motif style={{ width: size, height }} />
    </div>
  );
}

/* ── WaveDivider — sóng nước as a full-width boundary (chân section / mép footer) ──── */
const WAVE_TILES = 24; // 24 × 160px ≈ 3840px — covers full A4 width; surplus is clipped.

export function WaveDivider({
  tone = "green",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none flex w-full justify-center overflow-hidden",
        tone === "green" ? "text-motif-green" : "text-motif-pink",
        className,
      )}
      style={{ opacity: "var(--motif-op-wave)" }}
    >
      {Array.from({ length: WAVE_TILES }).map((_, i) => (
        <svg
          key={i}
          viewBox="8 18 160 48"
          width={160}
          height={48}
          className="shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          focusable={false}
        >
          <WaveLines />
        </svg>
      ))}
    </div>
  );
}

/* ── BudRule — viền nụ sen as a short rule under an eyebrow label ──────────────────── */
export function BudRule({
  align = "left",
  className,
}: {
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("text-motif-pink", align === "center" ? "mx-auto" : "", className)}
      style={{ opacity: "var(--motif-op-vien)", width: 132 }}
    >
      <Vien className="h-auto w-full" />
    </div>
  );
}

/* ── LacquerGrain + LotusInlay — khảm: the sơn-mài corner treatment for a lifted panel ─ */

/* Vỏ-trứng grain — a whisper of craquelure so the surface reads worked (sơn-mài vóc), not
 * flat-white. Grayscale fractal noise baked to ~6% alpha, laid with soft-light. */
const GRAIN_SVG =
  "<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'>" +
  "<filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/>" +
  "<feColorMatrix type='saturate' values='0'/>" +
  "<feComponentTransfer><feFuncA type='linear' slope='0.06'/></feComponentTransfer></filter>" +
  "<rect width='100%' height='100%' filter='url(#g)'/></svg>";
const GRAIN_URL = `url("data:image/svg+xml,${encodeURIComponent(GRAIN_SVG)}")`;

export function LacquerGrain({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 mix-blend-soft-light", className)}
      style={{ backgroundImage: GRAIN_URL, backgroundSize: "180px 180px" }}
    />
  );
}

type MotifKind = "sen" | "vanmay" | "songnuoc" | "vien";

/** Each motif's component + a base width tuned to its intrinsic aspect (height derives). */
const INLAY_MOTIFS: Record<
  MotifKind,
  { render: (props: SVGProps<SVGSVGElement>) => ReactElement; w: number }
> = {
  sen: { render: SenSolid, w: 150 },
  vanmay: { render: VanMay, w: 184 },
  songnuoc: { render: SongNuoc, w: 208 },
  vien: { render: Vien, w: 196 },
};

/** Deterministic motif order; coprime in length with PLACEMENTS so the pairing rotates. */
const MOTIF_ORDER: readonly MotifKind[] = ["sen", "vanmay", "songnuoc", "vien"];

interface Placement {
  corner: string;
  rotate: number;
  gx: string;
  gy: string;
}

const P0: Placement = { corner: "-right-8 -top-10", rotate: 14, gx: "86%", gy: "6%" };
const PLACEMENTS: readonly Placement[] = [
  P0,
  { corner: "-left-10 -bottom-9", rotate: -10, gx: "10%", gy: "94%" },
  { corner: "-right-12 -bottom-12", rotate: -26, gx: "92%", gy: "94%" },
  { corner: "-right-9 -top-8", rotate: 9, gx: "90%", gy: "8%" },
  { corner: "-left-11 -top-10", rotate: 30, gx: "8%", gy: "6%" },
];

/**
 * LotusInlay — the sơn-mài (lacquer) corner treatment for one lifted panel: an inlaid khắc-gỗ
 * motif bleeding off a corner on a soft tonal glow ("lit from within"). Cycles the four official
 * motifs by index so a set reads composed, not stamped. One brand tone (pink/green — never the
 * action yellow), low opacity, behind content (`-z-10`). Host must be
 * `relative isolate overflow-hidden`.
 */
export function LotusInlay({
  index = 0,
  tone = "pink",
  grain = true,
  className,
}: {
  index?: number;
  tone?: Tone;
  /** Lay the vỏ-trứng grain over the surface (default on). */
  grain?: boolean;
  className?: string;
}) {
  const p = PLACEMENTS[index % PLACEMENTS.length] ?? P0;
  const kind = MOTIF_ORDER[index % MOTIF_ORDER.length] ?? "sen";
  const motif = INLAY_MOTIFS[kind];
  const Motif = motif.render;
  const toneClass = tone === "green" ? "text-motif-green" : "text-motif-pink";

  return (
    <>
      {grain ? <LacquerGrain /> : null}
      {/* Lacquer glow — light from within, in the brand tone (never the action yellow). */}
      <div
        aria-hidden
        className={cn("pointer-events-none absolute inset-0 -z-10", toneClass)}
        style={{
          background: `radial-gradient(110px 110px at ${p.gx} ${p.gy}, currentColor, transparent 72%)`,
          opacity: "var(--motif-op-glow, 0.06)",
        }}
      />
      {/* Inlaid khắc-gỗ motif (sen khảm / mây / sóng / viền), cropped off the corner. */}
      <div
        aria-hidden
        className={cn("pointer-events-none absolute -z-10", p.corner, toneClass, className)}
        style={{ opacity: "calc(var(--motif-op-soft) + 0.05)" }}
      >
        <Motif style={{ width: motif.w, height: "auto", transform: `rotate(${p.rotate}deg)` }} />
      </div>
    </>
  );
}
