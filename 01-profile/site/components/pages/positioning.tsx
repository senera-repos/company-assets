import { Cpu, Eye, Handshake, Ruler } from "@/components/blocks/icons";
import { Eyebrow, Rich } from "@/components/blocks/primitives";
import { LotusInlay } from "@/components/motifs/decor";
import { vi } from "@/content/content.vi";

const p = vi.positioning;

/* Icon mỗi khác biệt (Phosphor duotone). Icon thay cho số.
 * ① một đầu mối · ② may đo · ③ AI nhúng thật · ④ minh bạch/theo tới cùng. */
const DIFF_ICONS = [Handshake, Ruler, Cpu, Eye];
/* Tone khảm xen kẽ để bộ thẻ đọc "có sắp đặt", không bị dập khuôn. */
const DIFF_TONE = ["pink", "green", "pink", "green"] as const;

/* 2 · ĐỊNH VỊ & BẢN SẮC — gộp nhận diện + định vị.
 *   HERO: CÂU ĐỊNH VỊ làm trục (display, tô sáng "may đo"·"chạy thật"). Tagline KHÔNG ở đây —
 *         đã là trục của BÌA (tránh trùng hai trang liền nhau). Bản sắc do gloss tên + 4 khác biệt gánh.
 *   KHÁC BIỆT: 4 thẻ NGANG (icon · nội dung · "thay vì" ngăn vạch) — lấp đều chiều cao,
 *         không lủng giữa thẻ như lưới vuông. */
export function Positioning() {
  return (
    <>
      {/* HERO — câu định vị làm trục. Eyebrow hỏi "Senera là ai" → gloss tên trả lời → câu định vị. */}
      <Eyebrow>{p.eyebrow}</Eyebrow>
      <p className="mt-[6px] text-[9.5pt] leading-[1.45] text-faint">{p.nameGloss}</p>
      <h2 className="mt-[12px] max-w-[172mm] text-balance font-display text-[17pt] font-semibold leading-[1.3] tracking-[-0.015em] text-foreground">
        <Rich text={p.statement} />
      </h2>
      <p className="mt-[10px] flex items-start gap-[8px] text-[10pt] leading-[1.5] text-muted-foreground">
        <span aria-hidden className="mt-[8px] h-[1.5px] w-[16px] shrink-0 rounded-full bg-brand-strong/55" />
        {p.target}
      </p>

      {/* KHÁC BIỆT — 4 thẻ ngang, lấp đều phần còn lại của A4 */}
      <div className="mt-[16px] text-[8.5pt] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
        {p.diffHeading}
      </div>
      <div className="mt-[9px] flex flex-1 flex-col gap-[10px]">
        {p.diffs.map((d, i) => {
          const Icon = DIFF_ICONS[i] ?? Handshake;
          return (
            <article
              key={d.title}
              className="relative isolate flex flex-1 items-center gap-[16px] overflow-hidden rounded-2xl border border-border bg-card px-[20px] py-[13px] shadow-sm"
            >
              <LotusInlay index={i} tone={DIFF_TONE[i] ?? "pink"} />
              <Icon className="size-9 shrink-0 text-brand-strong" weight="duotone" aria-hidden />
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-[13pt] font-semibold leading-[1.2] text-card-foreground">
                  {d.title}
                </h3>
                <p className="mt-[3px] text-[10pt] leading-[1.5] text-pretty text-muted-foreground">
                  {d.desc}
                </p>
              </div>
              {/* tag tương phản — cột phải, ngăn bằng vạch: "what we do | thay vì …" */}
              <div className="w-[44mm] shrink-0 self-stretch border-l border-border/70 pl-[14px] flex items-center text-[9pt] leading-[1.4] text-faint">
                {d.vs}
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
