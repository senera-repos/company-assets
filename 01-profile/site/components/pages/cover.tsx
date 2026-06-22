import { GradientText } from "@/components/blocks/primitives";
import { vi } from "@/content/content.vi";

const c = vi.cover;

/* 1 · BÌA — dark, ambient (PageFrame). Lotus mark (rice-white, for dark) + gradient wordmark. */
export function Cover() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      {/* Real lotus mark — senera-mark-white.svg (Rice White #F7F5F0, đúng cho nền tối). */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/senera-mark-white.svg" alt="Senera" className="h-[28mm] w-auto" />

      <div className="mt-[11mm] font-display text-[46pt] font-bold tracking-[0.04em]">
        <GradientText>{c.wordmark}</GradientText>
      </div>

      <p className="mt-[14px] max-w-[135mm] text-[13pt] font-medium leading-[1.45] text-foreground">
        {c.descriptor}
      </p>

      <p className="mt-[14px] text-[11pt] italic text-muted-foreground">“{c.tagline}”</p>

      <p className="mt-[9mm] text-[8.5pt] font-semibold uppercase tracking-[0.16em] text-brand-strong">
        {c.kicker}
      </p>
    </div>
  );
}
