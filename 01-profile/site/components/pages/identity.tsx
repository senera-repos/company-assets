import { Eyebrow, Rich } from "@/components/blocks/primitives";
import { vi } from "@/content/content.vi";

const i = vi.identity;
const q = i.founderQuote;

/* 2 · BẢN SẮC — trang riêng cho LỜI người sáng lập. Dàn cảnh đầm sen kiểu dân gian:
 *   một bông sen (vươn lên) làm tâm điểm phía trên · câu verse cỡ lớn, in nghiêng ở giữa ·
 *   dải sóng nước + nụ sen ở chân (đầm). Thoáng — cả trang chỉ để cho lời founder thở. */
export function Identity() {
  return (
    <div className="flex h-full flex-col">
      <div className="text-center">
        <Eyebrow>{i.eyebrow}</Eyebrow>
      </div>

      {/* CẢNH SEN + VERSE — căn giữa cả khối */}
      <figure className="flex flex-1 flex-col items-center justify-center text-center">
        {/* bông sen vươn lên — tâm điểm (line-art hồng, mờ nhẹ) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/decor/lotus/lotus-bloom.png"
          alt=""
          aria-hidden
          className="h-[44mm] w-auto select-none opacity-80"
        />

        {/* vế sen — verse cỡ lớn, in nghiêng (lyric · dân gian), vài chữ tô hồng */}
        <blockquote className="mt-[9mm] max-w-[152mm] text-balance font-display text-[24pt] font-semibold italic leading-[1.3] tracking-[-0.01em] text-foreground">
          <Rich text={q.lead} />
        </blockquote>

        {/* vế triết lý — gom 4 giá trị */}
        <p className="mt-[14px] max-w-[126mm] text-[11pt] leading-[1.6] text-pretty text-muted-foreground">
          {q.body}
        </p>

        {/* chữ ký — hai vạch ngắn ôm tên, kiểu triện */}
        <figcaption className="mt-[16px] flex items-center gap-[10px] text-[9.5pt] font-semibold uppercase tracking-[0.14em] text-brand-strong">
          <span aria-hidden className="h-px w-[22px] bg-brand-strong/45" />
          {q.author}
          <span className="font-medium normal-case tracking-normal text-faint">· {q.role}</span>
          <span aria-hidden className="h-px w-[22px] bg-brand-strong/45" />
        </figcaption>
      </figure>

      {/* CHÂN ĐẦM — sóng nước + nụ sen, full-bleed, mờ; fade hai đầu */}
      <div
        className="-mx-[16mm]"
        style={{
          maskImage: "linear-gradient(to right, transparent, #000 14%, #000 86%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 14%, #000 86%, transparent)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/decor/wave/song-nuoc-bup.png"
          alt=""
          aria-hidden
          className="pointer-events-none w-full select-none opacity-40"
        />
      </div>
    </div>
  );
}
