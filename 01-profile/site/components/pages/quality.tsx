import { Note, Rich, SectionHeading } from "@/components/blocks/primitives";
import { cn } from "@/lib/cn";
import { vi } from "@/content/content.vi";

const q = vi.quality;
const COLS = "grid grid-cols-[36mm_1fr_1fr]";

/* 9 · TIÊU CHUẨN CHẤT LƯỢNG — bảng full SDLC 6 giai đoạn (KHÔNG gradient). */
export function Quality() {
  return (
    <>
      <SectionHeading eyebrow={q.eyebrow} title={q.title} lead={q.lead} leadItalic sub={q.sub} subWide />

      <div className="mt-[16px] overflow-hidden rounded-lg border border-border">
        <div className={cn(COLS, "border-b border-border bg-muted")}>
          {[q.columns.stage, q.columns.standard, q.columns.evaluation].map((h, i) => (
            <div
              key={h}
              className={cn(
                "px-[11px] py-[8px] text-[7.5pt] font-semibold uppercase tracking-[0.13em] text-faint",
                i > 0 && "border-l border-border",
              )}
            >
              {h}
            </div>
          ))}
        </div>

        {q.rows.map((r, i) => (
          <div key={r.stage} className={cn(COLS, i > 0 && "border-t border-border")}>
            <div className="px-[11px] py-[11px] text-[9pt] font-semibold text-foreground">
              {r.stage}
            </div>
            <div className="border-l border-border px-[11px] py-[11px] text-[9pt] leading-[1.45] text-muted-foreground">
              <Rich text={r.standard} />
            </div>
            <div className="border-l border-border px-[11px] py-[11px] text-[9pt] leading-[1.45] text-muted-foreground">
              <Rich text={r.evaluation} />
            </div>
          </div>
        ))}
      </div>

      <Note className="mt-[8px]">{q.note}</Note>

      <div className="mt-auto rounded-lg border border-border-strong bg-card px-[13px] py-[11px]">
        <p className="text-[9.5pt] font-semibold text-foreground">
          <Rich text={q.banner} />
        </p>
      </div>
    </>
  );
}
