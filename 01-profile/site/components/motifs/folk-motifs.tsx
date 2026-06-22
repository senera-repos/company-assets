import type { ReactElement, SVGProps } from "react";

/**
 * Senera folk-motif library — the four official "khắc gỗ" motifs from the brand book
 * (docs/senera-motif-kit.html · docs/senera-motifs.svg). Paths are the brand's exact artwork.
 * Ported verbatim from core/senera-frontend-kit/packages/motifs/src/folk-motifs.tsx — the
 * profile site copies components in (shadcn-source model), so there is no @senera/ui dependency.
 *
 * Rules the kit sets (enforced by how these are consumed, see <SectionWatermark>/<WaveDivider>/
 * <BudRule>): một màu (one brand colour via `currentColor` → token text-class), mờ thấp
 * (low opacity, +few % in dark), có chủ đích (rìa/góc, sau nội dung), và **một section một
 * hoạ tiết** (đừng rải khắp nơi).
 *
 *  - Sen      — bông sen 9 cánh, the primary brand symbol (hero, năng lực, giá trị cốt lõi).
 *  - VanMay   — vân mây, nhẹ–bay (hero phụ, CTA, khoảng trống phía trên).
 *  - SongNuoc — sóng nước, mặt đầm sen (dải ngăn cách / chân section / mép footer).
 *  - Vien     — viền nụ sen, dải trang trí mảnh (dưới nhãn eyebrow).
 *
 * Pure presentational RSC; every motif is `aria-hidden`, non-focusable, single-colour.
 */

type MotifProps = SVGProps<SVGSVGElement>;

const SHARED = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

/** One lotus petal, drawn from the base pivot; the bloom rotates copies of it. */
const PETAL =
  "M0 0 C -15 -22 -19 -47 -7 -64 C -4 -69 0 -74 0 -74 C 0 -74 4 -69 7 -64 C 19 -47 15 -22 0 0 Z";

/* ── Sen — 9-petal lotus, the brand symbol ───────────────────────────────────────── */
export function Sen(props: MotifProps) {
  return (
    <svg viewBox="0 0 160 150" strokeWidth={3} {...SHARED} {...props}>
      <g transform="translate(80 122)">
        <path transform="rotate(-60)" d={PETAL} />
        <path transform="rotate(-30)" d={PETAL} />
        <path d={PETAL} />
        <path transform="rotate(30)" d={PETAL} />
        <path transform="rotate(60)" d={PETAL} />
        <path transform="rotate(-44) scale(0.68)" d={PETAL} />
        <path transform="rotate(-15) scale(0.68)" d={PETAL} />
        <path transform="rotate(15) scale(0.68)" d={PETAL} />
        <path transform="rotate(44) scale(0.68)" d={PETAL} />
        <path d="M-46 7 Q 0 22 46 7" />
      </g>
    </svg>
  );
}

/* ── SenSolid — filled "khảm" lotus (sơn mài inlay) ─────────────────────────────────
 * The solid-silhouette twin of <Sen>: petals FILL like inlaid material (khảm trai/vỏ trứng)
 * instead of the hollow khắc-gỗ outline, and a fine edge stroke reads as the lacquered "set"
 * bevel. Used by <LotusInlay> as a per-card corner inlay — richer/deeper than the line motif,
 * which is what stops a card grid reading like generated UI. Two petal rows at different
 * fill weights fake the polished light-from-within; everything tracks `currentColor` (the
 * pink/green motif token), so it stays one-colour and theme-aware. */
export function SenSolid(props: MotifProps) {
  return (
    <svg viewBox="0 0 160 150" strokeWidth={1.5} {...SHARED} fill="currentColor" {...props}>
      <g transform="translate(80 122)" stroke="currentColor">
        {/* back row — recessed, lower fill weight */}
        <g fillOpacity={0.5} strokeOpacity={0.8}>
          <path transform="rotate(-60)" d={PETAL} />
          <path transform="rotate(-30)" d={PETAL} />
          <path d={PETAL} />
          <path transform="rotate(30)" d={PETAL} />
          <path transform="rotate(60)" d={PETAL} />
        </g>
        {/* front row — the brighter inlay catching light */}
        <g fillOpacity={0.82}>
          <path transform="rotate(-44) scale(0.68)" d={PETAL} />
          <path transform="rotate(-15) scale(0.68)" d={PETAL} />
          <path transform="rotate(15) scale(0.68)" d={PETAL} />
          <path transform="rotate(44) scale(0.68)" d={PETAL} />
        </g>
        <path d="M-46 7 Q 0 22 46 7" fill="none" strokeOpacity={0.85} />
      </g>
    </svg>
  );
}

/* ── VanMay — folk cloud ──────────────────────────────────────────────────────────── */
export function VanMay(props: MotifProps) {
  return (
    <svg viewBox="0 0 170 90" strokeWidth={3} {...SHARED} {...props}>
      <path d="M32 66 C 12 66 8 45 28 43 C 23 27 50 25 56 40 C 62 25 90 25 94 42 C 100 27 128 29 128 48 C 146 46 150 66 128 66 Z" />
      <path d="M40 56 C 38 48 49 46 53 52" />
      <path d="M90 54 C 88 47 99 46 103 52" />
      <path d="M32 66 c -11 5 -19 -6 -10 -14 c 5 -5 13 0 10 8" />
      <path d="M128 66 c 12 5 20 -6 11 -14 c -5 -5 -14 0 -10 8" />
    </svg>
  );
}

/** The repeating scallop lines of sóng nước (one 160-wide span = 4 periods). Shared by the
 *  standalone motif and the tiling <WaveDivider> so the period stays seamless. */
export function WaveLines() {
  return (
    <>
      <path d="M8 44 q 20 -30 40 0 q 20 -30 40 0 q 20 -30 40 0 q 20 -30 40 0" />
      <path d="M8 60 q 20 -24 40 0 q 20 -24 40 0 q 20 -24 40 0 q 20 -24 40 0" />
      <path d="M24 30 c -4 -6 4 -11 9 -6 c 3 3 1 7 -3 6" />
      <path d="M104 30 c -4 -6 4 -11 9 -6 c 3 3 1 7 -3 6" />
    </>
  );
}

/* ── SongNuoc — water ripples of the lotus pond ───────────────────────────────────── */
export function SongNuoc(props: MotifProps) {
  return (
    <svg viewBox="0 0 200 76" strokeWidth={3} {...SHARED} {...props}>
      <WaveLines />
    </svg>
  );
}

/* ── Vien — lotus-bud border rule ─────────────────────────────────────────────────── */
export function Vien(props: MotifProps) {
  return (
    <svg viewBox="0 0 200 26" strokeWidth={2.6} {...SHARED} {...props}>
      <path d="M4 22 H196" />
      <path d="M24 22 C 18 14 18 6 24 2 C 30 6 30 14 24 22 Z" />
      <path d="M64 22 C 58 14 58 6 64 2 C 70 6 70 14 64 22 Z" />
      <path d="M104 22 C 98 14 98 6 104 2 C 110 6 110 14 104 22 Z" />
      <path d="M144 22 C 138 14 138 6 144 2 C 150 6 150 14 144 22 Z" />
      <path d="M184 22 C 178 14 178 6 184 2 C 190 6 190 14 184 22 Z" />
      <circle cx="44" cy="17" r="2" fill="currentColor" stroke="none" />
      <circle cx="84" cy="17" r="2" fill="currentColor" stroke="none" />
      <circle cx="124" cy="17" r="2" fill="currentColor" stroke="none" />
      <circle cx="164" cy="17" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** The two watermark motifs + their intrinsic aspect, consumed by <SectionWatermark>. */
export type WatermarkMotif = "sen" | "vanmay";

export const WATERMARK: Record<WatermarkMotif, (props: MotifProps) => ReactElement> = {
  sen: Sen,
  vanmay: VanMay,
};

export const MOTIF_DIMS: Record<WatermarkMotif, { w: number; h: number }> = {
  sen: { w: 160, h: 150 },
  vanmay: { w: 170, h: 90 },
};
