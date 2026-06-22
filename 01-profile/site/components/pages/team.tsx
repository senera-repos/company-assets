import { Fragment, type CSSProperties } from "react";

import { Eyebrow, Rich } from "@/components/blocks/primitives";
import { cn } from "@/lib/cn";
import { vi } from "@/content/content.vi";

const t = vi.team;

/* Sen rải mỗi zone — DÁNG / góc / cỡ / xoay khác nhau (ngẫu nhiên có chủ đích), mờ, sau nội dung.
 * Thư viện sen ở /img/decor/lotus/. Bleed khỏi góc (offset âm) rồi bị overflow-hidden của zone
 * cắt → thành hoạ tiết góc. Mandala dày nét nên để mờ hơn. */
const LOTUS: { src: string; style: CSSProperties }[] = [
  {
    src: "/img/decor/lotus/lotus-side.png",
    style: { top: "-15mm", right: "-12mm", width: "58mm", transform: "rotate(9deg)", opacity: 0.4 },
  },
  {
    src: "/img/decor/lotus/lotus-bud.png",
    style: { bottom: "-12mm", left: "-3mm", width: "26mm", transform: "rotate(-14deg)", opacity: 0.44 },
  },
  {
    src: "/img/decor/lotus/lotus-mandala.png",
    style: { top: "-13mm", right: "-9mm", width: "52mm", transform: "rotate(26deg)", opacity: 0.32 },
  },
];

/* 3 · ĐỘI NGŨ QUẢN LÝ — ba vùng (zone) cho ba người, ngăn bằng divider ngang NGẮN; chân dung đã
 * tách nền đặt SO LE trái–phải; mỗi zone rải một bông sen ở góc/cỡ/độ-xoay khác nhau. Vùng để
 * trống thoáng (không khung), divider mảnh — sen là điểm nhấn nhận diện. */
export function Team() {
  return (
    <>
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <h2 className="mt-[8px] font-display text-[24pt] font-bold leading-[1.08] tracking-[-0.015em] text-foreground">
        {t.title}
      </h2>
      <p className="mt-[10px] max-w-[176mm] text-[10.5pt] leading-[1.55] text-pretty text-muted-foreground">
        {t.sub}
      </p>

      <div className="mt-[10px] flex flex-1 flex-col">
        {t.members.map((m, i) => {
          const photoLeft = i % 2 === 0;
          return (
            <Fragment key={m.name}>
              {i > 0 && (
                <div aria-hidden className="mx-auto my-[1.5mm] h-px w-[46mm] bg-border-strong/60" />
              )}

              <div
                className={cn(
                  "relative flex flex-1 items-center overflow-hidden",
                  photoLeft ? "flex-row" : "flex-row-reverse",
                )}
              >
                {/* sen rải — sau nội dung */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LOTUS[i % LOTUS.length].src}
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute -z-10 select-none"
                  style={LOTUS[i % LOTUS.length].style}
                />

                {/* chân dung tách nền */}
                <div className="relative h-full w-[40mm] shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>

                {/* nội dung */}
                <div
                  className={cn(
                    "relative z-10 flex flex-1 flex-col justify-center py-[8px]",
                    photoLeft ? "pl-[20px] pr-[14px]" : "pr-[20px] pl-[14px]",
                  )}
                >
                  <div className="text-[8.5pt] font-semibold uppercase tracking-[0.1em] text-brand-strong">
                    {m.role}
                  </div>
                  <h3 className="mt-[3px] font-display text-[15.5pt] font-semibold leading-[1.12] text-foreground">
                    {m.name}
                  </h3>
                  <p className="mt-[7px] text-[9.5pt] leading-[1.5] text-pretty text-muted-foreground">
                    <Rich text={m.bio} />
                  </p>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
