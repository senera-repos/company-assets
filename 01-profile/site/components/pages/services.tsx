import { Fragment } from "react";

import { Eyebrow, Rich } from "@/components/blocks/primitives";
import { Code2, Compass, PenTool, TrendingUp } from "@/components/blocks/icons";
import { Sen } from "@/components/motifs/folk-motifs";
import { vi } from "@/content/content.vi";

const s = vi.services;

/* Icon per group (seneravn capability set, Phosphor duotone) — đi cùng số thứ tự dọc dòng chảy. */
const GROUP_ICONS = [Compass, PenTool, Code2, TrendingUp];

/* Node anchor = TÂM vòng số, theo % của vùng dòng chảy (x, y). Nhóm lẻ nép trái, nhóm chẵn dạt
 * phải → đường sóng nước uốn lượn nối giữa chúng. Path bên dưới đi đúng qua các điểm này. */
const NODES = [
  { x: 10, y: 12 },
  { x: 40, y: 38 },
  { x: 11, y: 64 },
  { x: 42, y: 90 },
];

/* Chấm nằm ĐÚNG trên dòng chảy (giữa hai nhóm) — cùng hệ % với các neo của path. */
const FLOW_DOTS = [
  { x: 26, y: 25 },
  { x: 26, y: 51 },
  { x: 28, y: 77 },
];

/* Vài chấm rải nhẹ cạnh bông sen góc trên-phải (echo bản mẫu). */
const SCATTER_DOTS = [
  { x: 60, y: 6, s: 4 },
  { x: 69, y: 10, s: 3 },
  { x: 56, y: 13, s: 2.5 },
];

/* The serpentine "dòng chảy" — đi qua N1·D1·N2·D2·N3·D3·N4 rồi buông đuôi. viewBox 0–100 kéo giãn
 * lấp khung (preserveAspectRatio none); non-scaling-stroke giữ nét mảnh đều khi co giãn. */
const FLOW_PATH =
  "M 18 2 C 13 5 10 8 10 12 C 10 18 22 20 26 25 C 31 31 37 33 40 38 " +
  "C 43 45 30 46 26 51 C 21 57 12 59 11 64 C 10 71 24 72 28 77 " +
  "C 33 82 39 85 42 90 C 45 94 49 97 52 100";

/* 7 · DỊCH VỤ — dàn cảnh "dòng chảy đầm sen": bốn nhóm trôi trên một dải sóng nước uốn lượn, sen
 * mờ tràn góc trên-phải, câu kết "cùng một nhịp" ở chân. Số + icon đánh dấu từng chặng dọc dòng
 * chảy (đây là trang infographic theo bản mẫu founder — số thứ tự là một phần của ẩn dụ flow). */
export function Services() {
  return (
    <>
      {/* SEN — bông sen mờ tràn góc trên-phải (đầm sen, mở trang) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        aria-hidden
        src="/img/decor/lotus/lotus-bloom.png"
        alt=""
        className="pointer-events-none absolute right-[-24mm] top-[5mm] -z-10 w-[92mm] opacity-[0.16]"
      />

      <header className="relative">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <h2 className="mt-[6px] font-display text-[30pt] font-bold leading-[1.0] tracking-[-0.02em] text-foreground">
          {s.title}
        </h2>
        <div aria-hidden className="mt-[11px] h-[2.5px] w-[42px] rounded-full bg-brand-strong" />
        <p className="mt-[13px] max-w-[132mm] text-[11.5pt] leading-[1.5] text-muted-foreground">
          {s.lead}
        </p>
        <p className="mt-[1px] max-w-[132mm] text-[11.5pt] leading-[1.5] text-muted-foreground">
          {s.sub}
        </p>
      </header>

      {/* VÙNG DÒNG CHẢY — sóng nước nối 4 nhóm, mỗi nhóm trôi trên một khúc */}
      <div className="relative mt-[12px] flex-1">
        {/* sóng nước: đường cong nối các node */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full text-brand-strong"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d={FLOW_PATH}
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinecap="round"
            opacity={0.42}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* chấm trên dòng chảy */}
        {FLOW_DOTS.map((d, i) => (
          <span
            key={`f${i}`}
            aria-hidden
            className="absolute size-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-strong/55"
            style={{ left: `${d.x}%`, top: `${d.y}%` }}
          />
        ))}
        {/* chấm rải cạnh bông sen */}
        {SCATTER_DOTS.map((d, i) => (
          <span
            key={`s${i}`}
            aria-hidden
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/60"
            style={{ left: `${d.x}%`, top: `${d.y}%`, width: `${d.s}px`, height: `${d.s}px` }}
          />
        ))}

        {/* 4 nhóm — đặt tuyệt đối, TÂM vòng số trùng neo path */}
        {s.groups.map((g, i) => {
          const Icon = GROUP_ICONS[i] ?? Compass;
          const n = NODES[i] ?? NODES[0];
          return (
            <div
              key={g.no}
              className="absolute flex items-center gap-[4mm]"
              style={{
                left: `${n.x}%`,
                top: `${n.y}%`,
                width: "104mm",
                transform: "translate(-6.5mm, -50%)",
              }}
            >
              {/* số thứ tự — vòng viền hồng */}
              <div className="flex size-[13mm] shrink-0 items-center justify-center rounded-full border border-brand/70 bg-brand-soft/50">
                <span className="font-display text-[15pt] font-bold leading-none text-brand-strong">
                  {g.no}
                </span>
              </div>
              {/* icon — vòng khảm hồng (icon nhận diện nhóm) */}
              <div className="flex size-[15mm] shrink-0 items-center justify-center rounded-full bg-brand-soft">
                <Icon className="size-[26px] text-brand-strong" weight="duotone" aria-hidden />
              </div>
              {/* nội dung nhóm */}
              <div className="min-w-0">
                <h3 className="font-display text-[13.5pt] font-semibold leading-[1.15] text-foreground">
                  {g.title}
                </h3>
                <p className="mt-[4px] text-[10pt] leading-[1.45] text-pretty text-muted-foreground">
                  {g.desc}
                </p>
                <div className="mt-[8px] flex flex-wrap items-center gap-[5px]">
                  {g.chips.map((c, j) => (
                    <Fragment key={c}>
                      {j > 0 && (
                        <span aria-hidden className="text-[8pt] text-brand/60">
                          ·
                        </span>
                      )}
                      <span className="rounded-full bg-brand-soft px-[10px] py-[3px] text-[8pt] font-medium text-brand-strong">
                        {c}
                      </span>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CHÂN — sen + nhịp kết */}
      <div className="relative mt-[8px] flex items-center gap-[5mm]">
        {/* sóng nước mờ ở chân (đầm) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          aria-hidden
          src="/img/decor/wave/dong-chay.png"
          alt=""
          className="pointer-events-none absolute inset-x-[-16mm] bottom-[-12mm] -z-10 h-[30mm] w-[calc(100%+32mm)] object-cover opacity-[0.45]"
        />
        <Sen className="size-[14mm] shrink-0 text-brand-strong/70" strokeWidth={3} />
        <div aria-hidden className="h-[12mm] w-px bg-border-strong" />
        <p className="font-display text-[13pt] leading-[1.35] text-muted-foreground">
          <Rich text={s.flow} />
        </p>
      </div>
    </>
  );
}
