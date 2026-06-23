import { Cpu, Eye, Handshake, Ruler } from "@/components/blocks/icons";
import { SectionHeading } from "@/components/blocks/primitives";
import { LotusInlay } from "@/components/motifs/decor";
import { cn } from "@/lib/cn";
import { vi } from "@/content/content.vi";

const p = vi.positioning;

/* Icon mỗi khác biệt (Phosphor duotone). Icon thay cho số.
 * ① một đầu mối · ② may đo · ③ AI nhúng thật · ④ minh bạch/theo tới cùng. */
const DIFF_ICONS = [Handshake, Ruler, Cpu, Eye];
/* Tone khảm xen kẽ để bộ thẻ đọc "có sắp đặt"; icon ăn THEO tông khảm cho cùng nhịp. */
const DIFF_TONE = ["pink", "green", "pink", "green"] as const;

/* 3 · ĐỊNH VỊ — 4 thẻ khác biệt (định vị bằng tương phản, April Dunford). Trang riêng, thoáng:
 *   icon ăn tông khảm · nội dung · cột "THAY VÌ" (vế thay-thế) ngăn bằng vạch. */
export function Positioning() {
  return (
    <>
      <SectionHeading eyebrow={p.eyebrow} title={p.title} sub={p.sub} subWide />

      <div className="mt-[18px] flex flex-1 flex-col gap-[12px]">
        {p.diffs.map((d, i) => {
          const Icon = DIFF_ICONS[i] ?? Handshake;
          const tone = DIFF_TONE[i] ?? "pink";
          const iconColor = tone === "green" ? "text-leaf-strong" : "text-brand-strong";
          return (
            <article
              key={d.title}
              className="relative isolate flex flex-1 items-center gap-[18px] overflow-hidden rounded-2xl border border-border bg-card px-[22px] py-[15px] shadow-sm"
            >
              <LotusInlay index={i} tone={tone} />
              <Icon className={cn("size-10 shrink-0", iconColor)} weight="duotone" aria-hidden />
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-[14pt] font-semibold leading-[1.2] text-card-foreground">
                  {d.title}
                </h3>
                <p className="mt-[4px] text-[10.5pt] leading-[1.5] text-pretty text-muted-foreground">
                  {d.desc}
                </p>
              </div>
              {/* Phép tương phản (Dunford) — nhãn THAY VÌ + vế thay-thế, ngăn bằng vạch. */}
              <div className="flex w-[46mm] shrink-0 flex-col justify-center self-stretch border-l border-border/70 pl-[16px]">
                <span className="font-mono text-[8pt] font-medium uppercase tracking-[0.16em] text-faint">
                  Thay vì
                </span>
                <p className="mt-[3px] text-[9.5pt] leading-[1.4] text-pretty text-muted-foreground">
                  {d.vs}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
