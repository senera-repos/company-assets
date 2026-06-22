import { Eyebrow, GradientText } from "@/components/blocks/primitives";
import { vi } from "@/content/content.vi";

const d = vi.divider2;

/* 10 · DIVIDER · PHẦN 2 MINH CHỨNG — dark, ambient; H1 gradient. */
export function Divider2() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="font-display text-[64pt] font-bold leading-none tracking-[-0.02em] text-foreground/15">
        {d.num}
      </div>
      <Eyebrow className="mt-[10px]">{d.part}</Eyebrow>
      <h1 className="mt-[6px] font-display text-[30pt] font-bold leading-[1.08] tracking-[-0.02em]">
        <GradientText>{d.title}</GradientText>
      </h1>
      <p className="mt-[12px] max-w-[125mm] text-[11pt] leading-[1.55] text-muted-foreground">
        {d.sub}
      </p>
    </div>
  );
}
