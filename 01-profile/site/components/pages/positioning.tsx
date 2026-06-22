import { Cpu, Eye, Handshake, Ruler } from "@/components/blocks/icons";
import { Eyebrow, Rich } from "@/components/blocks/primitives";
import { LotusInlay } from "@/components/motifs/decor";
import { cn } from "@/lib/cn";
import { vi } from "@/content/content.vi";

const p = vi.positioning;

/* Icon mỗi khác biệt (Phosphor duotone). Icon thay cho số.
 * ① một đầu mối · ② may đo · ③ AI nhúng thật · ④ minh bạch/theo tới cùng. */
const DIFF_ICONS = [Handshake, Ruler, Cpu, Eye];
/* Tone khảm xen kẽ để bộ thẻ đọc "có sắp đặt", không bị dập khuôn. */
const DIFF_TONE = ["pink", "green", "pink", "green"] as const;

/* 2 · ĐỊNH VỊ & BẢN SẮC — gộp nhận diện (tên→tagline) + định vị (April Dunford "tương phản"):
 *   ① HERO — gloss tên (Sen+era) · tagline (viên ngọc, brand-strong) · câu định vị · dòng cho-ai
 *   ② KHÁC BIỆT — 4 thẻ năng lực seneravn, mỗi thẻ ghim tag "thay vì …" (phương án thị trường)
 * Tagline là điểm-màu duy nhất của hero; câu định vị để mộc (đậm, không gradient) cho khỏi tranh. */
export function Positioning() {
  return (
    <>
      <Eyebrow>{p.eyebrow}</Eyebrow>
      <h2 className="mt-[8px] font-display text-[24pt] font-bold leading-[1.08] tracking-[-0.015em] text-foreground">
        {p.title}
      </h2>

      {/* ① HERO — tên gói sẵn cách làm nghề → tagline làm trục */}
      <div className="mt-[13px] font-mono text-[8.5pt] font-medium uppercase tracking-[0.13em] text-faint">
        {p.nameGloss}
      </div>
      <p className="mt-[7px] font-display text-[21pt] font-bold italic leading-[1.12] tracking-[-0.015em] text-brand-strong">
        {p.tagline}
      </p>
      <p className="mt-[11px] max-w-[162mm] text-balance text-[12.5pt] leading-[1.5] text-foreground">
        <Rich text={p.statement} />
      </p>
      <p className="mt-[8px] flex items-start gap-[8px] text-[9.5pt] leading-[1.5] text-muted-foreground">
        <span aria-hidden className="mt-[7px] h-[1.5px] w-[16px] shrink-0 rounded-full bg-brand-strong/55" />
        {p.target}
      </p>

      {/* ② KHÁC BIỆT — 4 thẻ năng lực seneravn, lối tương phản (2×2 lấp A4) */}
      <h3 className="mt-[18px] font-display text-[13pt] font-semibold tracking-[-0.005em] text-foreground">
        {p.diffHeading}
      </h3>
      <div className="mt-[10px] grid flex-1 grid-cols-2 gap-[13px]">
        {p.diffs.map((d, i) => {
          const Icon = DIFF_ICONS[i] ?? Handshake;
          return (
            <article
              key={d.title}
              className="relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-[18px] shadow-sm"
            >
              <LotusInlay index={i} tone={DIFF_TONE[i] ?? "pink"} />
              <Icon className="size-8 text-brand-strong" weight="duotone" aria-hidden />
              <h4 className="mt-[12px] font-display text-[13pt] font-semibold leading-[1.22] text-card-foreground">
                {d.title}
              </h4>
              <p className="mt-[7px] text-[10pt] leading-[1.5] text-pretty text-muted-foreground">
                {d.desc}
              </p>
              {/* tag tương phản — ghim đáy thẻ: vừa là "dẫn chứng khác biệt", vừa lấp khoảng trống */}
              <div className="mt-auto flex items-center gap-[8px] pt-[12px] text-[9pt] font-medium leading-[1.4] text-faint">
                <span aria-hidden className="h-[1px] w-[14px] shrink-0 bg-border-strong" />
                {d.vs}
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
