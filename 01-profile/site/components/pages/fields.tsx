import { Rich, SectionHeading } from "@/components/blocks/primitives";
import { vi } from "@/content/content.vi";

const f = vi.fields;

/* 11 · LĨNH VỰC CHUYÊN SÂU — 3 băng [Bài toán | Ngách đang đi sâu]. */
export function Fields() {
  return (
    <>
      <SectionHeading eyebrow={f.eyebrow} title={f.title} lead={f.lead} leadItalic sub={f.sub} subWide />

      <div className="mt-[14px] flex flex-1 flex-col gap-[11px]">
        {f.domains.map((d) => (
          <div
            key={d.no}
            className="flex flex-1 flex-col justify-center rounded-lg border border-border bg-card px-[13px] py-[11px]"
          >
            <h3 className="font-display text-[12pt] font-semibold text-foreground">
              <span className="font-mono text-[8.5pt] text-faint">{d.no}</span>
              &nbsp;&nbsp;{d.title}
            </h3>
            <div className="mt-[9px] flex items-start gap-[14px]">
              <p className="flex-1 text-[9pt] leading-[1.45] text-muted-foreground">
                <Rich text={d.problem} />
              </p>
              <div className="flex-1 border-l border-border pl-[14px]">
                <div className="text-[7.5pt] font-semibold uppercase tracking-[0.13em] text-brand-strong">
                  {f.nicheLabel}
                </div>
                <ul className="mt-[6px] space-y-[3px] text-[9pt] leading-[1.4] text-muted-foreground">
                  {d.niches.map((n) => (
                    <li key={n}>• {n}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
