import { ArrowRight, Cpu, Eye, Handshake, Ruler } from "@/components/blocks/icons";
import { SectionHeading } from "@/components/blocks/primitives";
import { LotusInlay } from "@/components/motifs/decor";
import { cn } from "@/lib/cn";
import { vi } from "@/content/content.vi";

const p = vi.positioning;

/* Icon mỗi khác biệt (Phosphor duotone) — icon thay cho số.
 * ① một đầu mối · ② may đo · ③ AI nhúng thật · ④ minh bạch / theo tới cùng. */
const DIFF_ICONS = [Handshake, Ruler, Cpu, Eye];
/* Tông khảm xen kẽ để bộ thẻ đọc "có sắp đặt"; icon + mũi tên ăn THEO tông khảm cho cùng nhịp. */
const DIFF_TONE = ["pink", "green", "pink", "green"] as const;

/* 3 · ĐỊNH VỊ — "hai lối đối chiếu" (định vị bằng tương phản, April Dunford). Mỗi hàng đặt
 * LỐI THƯỜNG GẶP (vế trái, mờ + dấu ✕) cạnh CÁCH SENERA (thẻ khảm + icon duotone), nối bằng mũi
 * tên băng qua trục dọc. Khối được GOM GỌN & căn giữa theo chiều dọc (làn sát nhau, thẻ vừa phải)
 * để đọc liền mạch — không kéo dãn full A4. */
export function Positioning() {
  /* Cột: vế trái (lối thường gặp) · mũi tên · vế phải (thẻ Senera). Trục dọc nằm giữa cột mũi tên. */
  const LEFT = "w-[44mm]";
  const ARROW = "w-[12mm]";
  return (
    <>
      <SectionHeading eyebrow={p.eyebrow} title={p.title} sub={p.sub} subWide />

      {/* Khối đối chiếu gom gọn, căn giữa khoảng còn lại */}
      <div className="flex flex-1 flex-col justify-center">
        <div>
          {/* Nhãn hai làn — căn đúng cột của hàng bên dưới */}
          <div className="flex items-center">
            <div className={cn(LEFT, "pr-[7px] text-right")}>
              <span className="font-mono text-[8pt] font-medium uppercase tracking-[0.18em] text-faint">
                {p.commonLabel}
              </span>
            </div>
            <div className={ARROW} />
            <div className="flex-1">
              <span className="font-mono text-[8pt] font-medium uppercase tracking-[0.18em] text-brand-strong">
                {p.seneraLabel}
              </span>
            </div>
          </div>

          {/* Bốn hàng — trục dọc (chấm) chia hai làn, mũi tên băng qua */}
          <div className="relative mt-[10px] flex flex-col gap-[10px]">
            <div
              aria-hidden
              className="pointer-events-none absolute left-[50mm] top-[6px] bottom-[6px] border-l border-dotted border-border-strong/60"
            />

            {p.diffs.map((d, i) => {
              const Icon = DIFF_ICONS[i] ?? Handshake;
              const tone = DIFF_TONE[i] ?? "pink";
              const accent = tone === "green" ? "text-leaf-strong" : "text-brand-strong";
              return (
                <div key={d.title} className="relative flex items-stretch">
                  {/* VẾ TRÁI — lối thường gặp (mờ, không khung; chữ hút về trục) */}
                  <div className={cn(LEFT, "flex items-center justify-end gap-[7px] pr-[7px] text-right")}>
                    <p className="text-[9.5pt] leading-[1.35] text-pretty text-faint">{d.common}</p>
                    <span aria-hidden className="shrink-0 text-[9pt] font-semibold text-faint">
                      ✕
                    </span>
                  </div>

                  {/* MŨI TÊN — băng qua trục, ăn tông khảm của thẻ */}
                  <div className={cn(ARROW, "flex items-center justify-center")}>
                    <ArrowRight className={cn("size-[17px]", accent)} weight="bold" aria-hidden />
                  </div>

                  {/* VẾ PHẢI — cách Senera (thẻ khảm seneravn) */}
                  <article className="relative isolate flex min-h-[40mm] flex-1 items-center gap-[14px] overflow-hidden rounded-2xl border border-border bg-card px-[18px] py-[12px] shadow-sm">
                    <LotusInlay index={i} tone={tone} />
                    <Icon className={cn("size-10 shrink-0", accent)} weight="duotone" aria-hidden />
                    <div className="min-w-0">
                      <h3 className="font-display text-[14pt] font-semibold leading-[1.2] text-card-foreground">
                        {d.title}
                      </h3>
                      <p className="mt-[4px] text-[10pt] leading-[1.45] text-pretty text-muted-foreground">
                        {d.desc}
                      </p>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
