import { GradientText } from "@/components/blocks/primitives";
import { vi } from "@/content/content.vi";

const c = vi.cover;

/* 1 · BÌA — đầm-sen "đêm trăng": PageFrame ambient + một watermark ĐẦM SEN phủ CẢ BÌA (raster decor
 * /img/decor/wave/dam-sen — sen + lá + sóng loang, mờ, sau nội dung). Trên đó: lotus mark trong quầng
 * cánh sen, wordmark gradient, tagline làm trục, một dòng "công ty là ai", và meta tài liệu ở chân.
 * Brand laws: no yellow (action) on the cover; pink = wordmark + halo + đầm sen, never flooded. */
export function Cover() {
  return (
    <div className="relative flex h-full flex-col">
      {/* ── Đầm sen watermark — full-bleed cả bìa, sau nội dung (trên lớp ambient của PageFrame) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[16mm] -right-[16mm] -top-[16mm] -bottom-[14mm] -z-10 overflow-hidden"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/decor/wave/dam-sen.png"
          alt=""
          className="h-full w-full select-none object-cover opacity-[0.45]"
        />
      </div>

      {/* ── Brand moment, centred ─────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        {/* Sen nở trong quầng cánh sen — lotus mark (Rice White, đúng cho nền tối) on a soft halo. */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 m-auto aspect-square w-[56mm] rounded-full bg-petal opacity-[0.2] blur-3xl"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/senera-mark-white.svg" alt="Senera" className="h-[26mm] w-auto" />
        </div>

        {/* Wordmark — the one sanctioned gradient text on the cover (pink → trắng gạo on đêm-trăng). */}
        <div className="mt-[12mm] font-display text-[48pt] font-bold leading-none tracking-[0.06em]">
          <GradientText>{c.wordmark}</GradientText>
        </div>

        {/* The gem — câu định vị thương hiệu làm trục. */}
        <p className="mt-[9mm] font-display text-[17pt] font-semibold leading-[1.3] tracking-[-0.01em] text-foreground">
          “{c.tagline}”
        </p>

        {/* Concise "công ty là ai" — one muted line. */}
        <p className="mt-[6mm] max-w-[126mm] text-[11.5pt] leading-[1.55] text-muted-foreground">
          {c.descriptor}
        </p>
      </div>

      {/* ── Foot — document meta ─────────────────────────────────────────────────── */}
      <p className="mt-auto text-center font-mono text-[8pt] font-medium uppercase tracking-[0.22em] text-brand-strong">
        {c.docTitle} · {c.year}
      </p>
    </div>
  );
}
