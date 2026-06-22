import { SectionHeading } from "@/components/blocks/primitives";
import { Code2, Compass, PenTool, TrendingUp } from "@/components/blocks/icons";
import { LotusInlay } from "@/components/motifs/decor";
import { vi } from "@/content/content.vi";

const s = vi.services;

/* Icon per group (seneravn capability set, Phosphor duotone). The icon is the marker — no number. */
const GROUP_ICONS = [Compass, PenTool, Code2, TrendingUp];

/* 7 · DỊCH VỤ — đúng dạng hồ sơ năng lực: lưới 4 thẻ năng lực kiểu seneravn (border + bg-card +
 * khảm sơn-mài + icon duotone hồng), mỗi thẻ một dòng cô đọng. AI tách sang trang riêng. */
export function Services() {
  return (
    <>
      <SectionHeading eyebrow={s.eyebrow} title={s.title} sub={s.sub} subWide />

      <div className="mt-[20px] grid flex-1 grid-cols-2 gap-[16px]">
        {s.groups.map((g, i) => {
          const Icon = GROUP_ICONS[i] ?? Compass;
          return (
            <article
              key={g.no}
              className="relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-[22px] shadow-sm"
            >
              <LotusInlay index={i} tone="pink" />
              <Icon className="size-9 text-brand-strong" weight="duotone" aria-hidden />
              <h3 className="mt-[16px] font-display text-[14.5pt] font-semibold leading-[1.2] text-card-foreground">
                {g.title}
              </h3>
              <p className="mt-[9px] text-[10.5pt] leading-[1.5] text-pretty text-muted-foreground">
                {g.desc}
              </p>
            </article>
          );
        })}
      </div>
    </>
  );
}
