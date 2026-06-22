import { GlobeHemisphereEast, MapPin } from "@/components/blocks/icons";
import { Chip, Note, Rich, SectionHeading, SubHeading } from "@/components/blocks/primitives";
import { LotusInlay } from "@/components/motifs/decor";
import { cn } from "@/lib/cn";
import { vi } from "@/content/content.vi";

const e = vi.experience;

/* Mỗi thị trường một icon + tông màu mã hoá thứ bậc: VN = chính → hồng (nhận diện);
 * HK = khách quốc tế → xanh (thứ cấp). Icon thay cho số. */
const MARKET = [
  { Icon: MapPin, tone: "pink", color: "text-brand-strong" },
  { Icon: GlobeHemisphereEast, tone: "green", color: "text-leaf-strong" },
] as const;

/* 4 · KINH NGHIỆM & THỊ TRƯỜNG — bề rộng (chip, "liếc một cái thấy độ phủ") + hai thị
 * trường thật dựng thành thẻ năng lực seneravn: khảm sơn-mài + icon duotone + dòng minh
 * chứng ghim đáy thẻ. Khảm là khoảnh-khắc-hoạ-tiết duy nhất của trang. */
export function Experience() {
  return (
    <>
      <SectionHeading eyebrow={e.eyebrow} title={e.title} lead={e.lead} sub={e.sub} subWide />

      <div className="mt-[20px] flex flex-1 flex-col gap-[20px]">
        {/* BỀ RỘNG — lĩnh vực đã làm, dạng chip để quét nhanh độ phủ (không card hoá). */}
        <div>
          <SubHeading>{e.fieldsHeading}</SubHeading>
          <Note className="mt-[5px]">
            <Rich text={e.fieldsNote} />
          </Note>
          <div className="mt-[12px] flex flex-wrap gap-[8px]">
            {e.fieldChips.map((chip) => (
              <Chip key={chip} className="px-[13px] py-[5px] text-[9pt]">
                {chip}
              </Chip>
            ))}
          </div>
        </div>

        {/* HAI THỊ TRƯỜNG — thẻ năng lực, lấp phần còn lại của A4. */}
        <div className="flex flex-1 flex-col">
          <SubHeading>{e.marketsHeading}</SubHeading>
          <div className="mt-[12px] grid flex-1 grid-cols-2 gap-[14px]">
            {e.markets.map((mk, i) => {
              const m = MARKET[i % MARKET.length];
              const Icon = m.Icon;
              return (
                <article
                  key={mk.name}
                  className="relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-[20px] shadow-sm"
                >
                  <LotusInlay index={i} tone={m.tone} />
                  <Icon className={cn("size-10", m.color)} weight="duotone" aria-hidden />
                  <div className="mt-[14px] font-mono text-[8pt] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {mk.label}
                  </div>
                  <h3 className="mt-[5px] font-display text-[17pt] font-semibold leading-[1.15] text-card-foreground">
                    {mk.name}
                  </h3>
                  <p className="mt-[9px] text-[10.5pt] leading-[1.5] text-pretty text-muted-foreground">
                    <Rich text={mk.desc} />
                  </p>
                  {/* dòng minh chứng — ghim đáy thẻ: dữ kiện cứng + lấp khoảng trống. */}
                  <div className="mt-auto flex items-start gap-[8px] pt-[14px] text-[9pt] leading-[1.45] text-faint">
                    <span aria-hidden className="mt-[6px] h-[1px] w-[14px] shrink-0 bg-border-strong" />
                    <span>
                      <Rich text={mk.proof} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
