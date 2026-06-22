import { Eyebrow } from "@/components/blocks/primitives";
import { cn } from "@/lib/cn";
import { vi } from "@/content/content.vi";

const lg = vi.legal;

type LegalRow = {
  key: string;
  value: string;
  strong?: boolean;
  mono?: boolean;
  todo?: boolean;
  valueNote?: string;
};
const rows = lg.rows as readonly LegalRow[];

/* 14 · TỔNG QUAN PHÁP NHÂN — bảng thông tin (KHÔNG gradient). */
export function Legal() {
  return (
    <>
      <Eyebrow>{lg.eyebrow}</Eyebrow>
      <h2 className="mt-[8px] font-display text-[22pt] font-bold leading-[1.12] tracking-[-0.01em] text-foreground">
        {lg.title}
      </h2>
      <p className="mt-[8px] text-[11pt] leading-[1.55] text-muted-foreground">{lg.sub}</p>

      <div className="mt-[16px] flex-1 rounded-lg border border-border bg-card px-[18px] py-[16px]">
        <div className="text-[7.5pt] font-semibold uppercase tracking-[0.13em] text-faint">
          {lg.tableLabel}
        </div>
        <div className="mt-[12px]">
          {rows.map((r, i) => (
            <div
              key={r.key}
              className={cn(
                "flex items-baseline py-[11px]",
                i < rows.length - 1 && "border-b border-border",
              )}
            >
              <div className="w-[48mm] shrink-0 text-[8.4pt] leading-[1.4] text-faint">{r.key}</div>
              <div className="flex-1">
                <span
                  className={cn(
                    r.mono
                      ? "font-mono text-[11pt] font-semibold text-foreground"
                      : r.todo
                        ? "text-[10pt] font-medium text-faint"
                        : r.strong
                          ? "text-[11.5pt] font-semibold text-foreground"
                          : "text-[11pt] font-medium leading-[1.45] text-foreground",
                  )}
                >
                  {r.value}
                </span>
                {r.valueNote && (
                  <span className="text-[10pt] font-normal text-faint">&nbsp;&nbsp;{r.valueNote}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
