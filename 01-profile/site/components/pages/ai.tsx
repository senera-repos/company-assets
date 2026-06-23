import { Eyebrow } from "@/components/blocks/primitives";
import { ArrowsClockwise, Code2, Eye, PenTool } from "@/components/blocks/icons";
import { vi } from "@/content/content.vi";

const a = vi.ai;

/* ── Hình học sơ đồ điều phối ─────────────────────────────────────────────────────────
 * Khung VUÔNG 176mm → mọi vòng tròn tròn đều (SVG viewBox 0–176 ↔ 1 đơn-vị = 1mm).
 * Tâm = Senera AI. Vành TRONG (hồng, nét đứt) = 5 mô hình AI. Vành NGOÀI (teal, liền) = 4 pha
 * vòng đời. Brand laws: teal/leaf = quy trình·vòng đời (vành ngoài), hồng/brand = nhận diện·AI
 * (lõi + vành trong), trung tính gánh chữ. Không vàng. */
const BOX = 176;
const C = BOX / 2; // tâm (mm)
const R_OUTER = 72; // vành pha vòng đời (teal)
const R_INNER = 42; // vành mô hình AI (hồng nét đứt)

const polar = (r: number, deg: number) => {
  const t = (deg * Math.PI) / 180;
  return { x: C + r * Math.cos(t), y: C - r * Math.sin(t) }; // y đảo: lên = +
};
const pct = (mm: number) => `${(mm / BOX) * 100}%`;

/* 4 pha — node đặt ở 4 góc chéo của vành ngoài; icon Phosphor teal (quy trình). Thứ tự khớp content. */
const PHASE_ICONS = [Eye, PenTool, Code2, ArrowsClockwise];
const PHASE_ANGLE = [135, 45, 225, 315]; // Thấu hiểu(TT) · Thiết kế(TP) · Phát triển(DT) · Vận hành(DP)

/* 5 mô hình — chip trên vành trong; góc khớp thứ tự content [Claude, ChatGPT, DeepSeek, Gemini, Grok]. */
const MODEL_ANGLE = [90, 155, 25, 325, 215];

/* 7b · AI XUYÊN SUỐT — sơ đồ điều phối "đầm sen": Senera AI ở lõi, vành trong nối các mô hình AI,
 * vành ngoài là 4 pha vòng đời. Sáng (light), sen mờ tràn góc, sóng nước ở chân. */
export function Ai() {
  return (
    <>
      {/* SEN — bông sen mờ tràn góc trên-phải (đồng điệu trang Dịch vụ) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        aria-hidden
        src="/img/decor/lotus/lotus-bloom.png"
        alt=""
        className="pointer-events-none absolute right-[-24mm] top-[6mm] -z-10 w-[88mm] opacity-[0.15]"
      />

      <header className="relative">
        <Eyebrow>{a.eyebrow}</Eyebrow>
        <h2 className="mt-[6px] font-display text-[30pt] font-bold leading-[1.0] tracking-[-0.02em] text-foreground">
          {a.heading}
        </h2>
        <div aria-hidden className="mt-[11px] h-[2.5px] w-[42px] rounded-full bg-brand-strong" />
        <p className="mt-[13px] max-w-[150mm] text-[11.5pt] leading-[1.5] text-muted-foreground">
          {a.sub}
        </p>
      </header>

      {/* VÙNG SƠ ĐỒ — khung vuông căn giữa */}
      <div className="relative flex flex-1 items-center justify-center">
        <div className="relative h-[176mm] w-[176mm]">
          {/* trường sáng hồng dưới lõi (radial, mép mềm) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[128mm] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, var(--color-brand-soft), transparent)",
              opacity: 0.7,
            }}
          />

          {/* DÂY NỐI — vành ngoài teal + vành trong hồng nét đứt + tia nối + chấm */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 size-full"
            viewBox={`0 0 ${BOX} ${BOX}`}
            fill="none"
          >
            {/* vành ngoài — vòng đời (teal liền) */}
            <circle cx={C} cy={C} r={R_OUTER} className="stroke-leaf-strong/45" strokeWidth={0.6} />
            {/* vành trong — mô hình AI (hồng nét đứt) */}
            <circle
              cx={C}
              cy={C}
              r={R_INNER}
              className="stroke-brand-strong/40"
              strokeWidth={0.5}
              strokeDasharray="1.6 2.4"
            />
            {/* tia nối 4 pha: từ vành trong ra sát node */}
            {PHASE_ANGLE.map((deg) => {
              const p1 = polar(R_INNER, deg);
              const p2 = polar(R_OUTER - 16, deg);
              return (
                <line
                  key={`c${deg}`}
                  x1={p1.x}
                  y1={p1.y}
                  x2={p2.x}
                  y2={p2.y}
                  className="stroke-brand-strong/30"
                  strokeWidth={0.45}
                  strokeDasharray="1.2 1.8"
                />
              );
            })}
            {/* chấm hồng nơi tia gặp vành trong */}
            {PHASE_ANGLE.map((deg) => {
              const p = polar(R_INNER, deg);
              return <circle key={`d${deg}`} cx={p.x} cy={p.y} r={1} className="fill-brand-strong/55" />;
            })}
            {/* chấm teal trên vành ngoài (4 hướng chính, giữa các node) */}
            {[0, 90, 180, 270].map((deg) => {
              const p = polar(R_OUTER, deg);
              return <circle key={`o${deg}`} cx={p.x} cy={p.y} r={1.2} className="fill-leaf-strong/55" />;
            })}
          </svg>

          {/* LÕI — Senera AI */}
          <div
            className="absolute left-1/2 top-1/2 flex size-[50mm] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-brand/45 bg-card text-center shadow-sm"
            style={{ boxShadow: "0 0 0 6mm color-mix(in srgb, var(--color-brand-soft) 45%, transparent)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/senera-mark-pink.svg" alt="Senera" className="h-[15mm] w-auto" />
            <div className="mt-[3px] font-display text-[10pt] font-bold uppercase tracking-[0.12em] text-brand-strong">
              {a.hub.name}
            </div>
            <div className="mt-[1px] text-[8.5pt] leading-none text-muted-foreground">{a.hub.role}</div>
          </div>

          {/* CHIP MÔ HÌNH AI — trên vành trong */}
          {a.models.map((m, i) => {
            const p = polar(R_INNER, MODEL_ANGLE[i] ?? 90);
            return (
              <div
                key={m}
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border bg-card px-[11px] py-[5px] text-[9.5pt] font-semibold text-foreground shadow-sm"
                style={{ left: pct(p.x), top: pct(p.y) }}
              >
                {m}
              </div>
            );
          })}

          {/* NODE PHA VÒNG ĐỜI — 4 góc vành ngoài */}
          {a.phases.map((ph, i) => {
            const Icon = PHASE_ICONS[i] ?? Eye;
            const p = polar(R_OUTER, PHASE_ANGLE[i] ?? 45);
            return (
              <div
                key={ph.title}
                className="absolute flex size-[33mm] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[3px] rounded-full border border-leaf-strong/30 bg-card px-[4mm] text-center shadow-sm"
                style={{ left: pct(p.x), top: pct(p.y) }}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-full bg-leaf-strong/[0.07]"
                />
                <Icon className="size-[20px] text-leaf-strong" weight="duotone" aria-hidden />
                <h3 className="font-display text-[11pt] font-semibold leading-[1.1] text-foreground">
                  {ph.title}
                </h3>
                <p className="max-w-[26mm] text-[8.5pt] leading-[1.25] text-muted-foreground">
                  {ph.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CHÂN — sóng nước mờ (đầm) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        aria-hidden
        src="/img/decor/wave/dong-chay.png"
        alt=""
        className="pointer-events-none absolute inset-x-[-16mm] bottom-[-6mm] -z-10 h-[34mm] w-[calc(100%+32mm)] object-cover opacity-[0.4]"
      />
    </>
  );
}
