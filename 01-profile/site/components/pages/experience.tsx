import {
  Buildings,
  Factory,
  GlobeHemisphereEast,
  GraduationCap,
  MapPin,
  SealCheck,
  Sparkles,
  Storefront,
} from "@/components/blocks/icons";
import { Rich, SectionHeading, SubHeading } from "@/components/blocks/primitives";
import { LotusInlay } from "@/components/motifs/decor";
import { cn } from "@/lib/cn";
import { vi } from "@/content/content.vi";

const e = vi.experience;

/* Lĩnh vực đã làm — icon duotone trong đĩa neutral (theo mockup user). Thứ tự khớp e.fields. */
const FIELD_ICONS = [Buildings, Storefront, Sparkles, GraduationCap, Factory];

/* 4 · KINH NGHIỆM & THỊ TRƯỜNG — hai dải CAO BẰNG NHAU, ngăn bằng sóng nước:
 *   (1) BỀ RỘNG — lưới 2 cột thẻ lĩnh vực (icon trong đĩa + tiêu đề + 1 dòng lợi ích).
 *   (2) ĐỘ PHỦ — Việt Nam (nhà, thẻ khảm sơn-mài, nhấn hồng = signature) + độ phủ quốc tế
 *       APAC/EU/US (danh sách node teal + dấu "quen chuẩn quốc tế"). */
export function Experience() {
  return (
    <>
      {/* DECOR CHÌM — sen line-art ở góc phải trên, tràn nhẹ mép tờ, nằm sau nội dung */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/decor/lotus/lotus-bloom.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-[16mm] -top-[20mm] -z-10 h-[80mm] w-auto rotate-[12deg] select-none opacity-[0.18]"
      />

      <SectionHeading eyebrow={e.eyebrow} title={e.title} lead={e.lead} sub={e.sub} subWide />

      <div className="mt-[14px] flex flex-1 flex-col">
        {/* (1) BỀ RỘNG — lưới 2 cột thẻ lĩnh vực */}
        <section className="flex min-h-0 flex-1 flex-col">
          <SubHeading>{e.fieldsHeading}</SubHeading>
          <div className="mt-[10px] grid min-h-0 flex-1 grid-cols-2 auto-rows-fr gap-[12px]">
            {e.fields.map((f, i) => {
              const Icon = FIELD_ICONS[i] ?? Buildings;
              return (
                <div
                  key={f.label}
                  className="flex items-center gap-[14px] rounded-2xl border border-border bg-card px-[16px] py-[12px] shadow-xs"
                >
                  <div className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-muted">
                    <Icon className="size-[24px] text-leaf-strong" weight="duotone" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display text-[12pt] font-semibold leading-[1.15] text-card-foreground">
                      {f.label}
                    </h4>
                    <p className="mt-[3px] text-[9.5pt] leading-[1.4] text-pretty text-muted-foreground">
                      {f.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Sóng nước (decor chìm) — ranh giới Bề rộng ↔ Độ phủ, căn giữa trang */}
        <div aria-hidden className="-mx-[16mm] flex justify-center py-[4px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/decor/wave/song-nuoc-bup.png"
            alt=""
            className="pointer-events-none h-[30mm] w-auto select-none opacity-[0.55]"
          />
        </div>

        {/* (2) ĐỘ PHỦ — thị trường: VN (nhà) + quốc tế */}
        <section className="flex min-h-0 flex-1 flex-col">
          <SubHeading>{e.marketsHeading}</SubHeading>
          <div className="mt-[10px] flex min-h-0 flex-1 gap-[14px]">
            {/* VIỆT NAM — nhà: thẻ khảm sơn-mài, nhấn hồng (signature) */}
            <article className="relative isolate flex w-[58mm] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-card p-[18px] shadow-sm">
              <LotusInlay index={0} tone="pink" />
              <MapPin className="size-9 text-brand-strong" weight="duotone" aria-hidden />
              <div className="mt-[12px] font-mono text-[7.5pt] font-semibold uppercase tracking-[0.14em] text-brand-strong">
                {e.homeLabel}
              </div>
              <h3 className="mt-[4px] font-display text-[19pt] font-semibold leading-[1.05] text-card-foreground">
                {e.home.name}
              </h3>
              <p className="mt-[7px] text-[10pt] leading-[1.45] text-pretty text-muted-foreground">
                {e.home.desc}
              </p>
              <div className="mt-auto pt-[12px]">
                <div className="font-mono text-[7pt] font-medium uppercase tracking-[0.14em] text-faint">
                  {e.home.proofLabel}
                </div>
                <p className="mt-[3px] text-[9pt] leading-[1.4] text-pretty text-muted-foreground">
                  <Rich text={e.home.proof} />
                </p>
              </div>
            </article>

            {/* QUỐC TẾ — APAC/EU/US: danh sách node teal, chia đều chiều cao */}
            <div className="flex min-h-0 flex-1 flex-col rounded-2xl border border-border bg-muted/50 px-[18px] py-[15px]">
              <div className="flex items-center gap-[9px]">
                <GlobeHemisphereEast className="size-[24px] text-leaf-strong" weight="duotone" aria-hidden />
                <span className="font-mono text-[8pt] font-semibold uppercase tracking-[0.14em] text-leaf-strong">
                  {e.reachLabel}
                </span>
              </div>
              <ul className="mt-[4px] flex min-h-0 flex-1 flex-col">
                {e.reach.map((r, i) => (
                  <li
                    key={r.code}
                    className={cn(
                      "flex flex-1 items-center gap-[14px]",
                      i > 0 && "border-t border-border/55",
                    )}
                  >
                    <div className="flex size-[40px] shrink-0 items-center justify-center rounded-full border border-leaf-strong/40 bg-leaf-soft font-mono text-[8pt] font-bold tracking-[0.02em] text-leaf-strong">
                      {r.code}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-display text-[12pt] font-semibold leading-[1.1] text-card-foreground">
                        {r.name}
                      </h4>
                      <p className="mt-[1px] text-[9pt] leading-[1.35] text-pretty text-muted-foreground">
                        {r.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              {/* dấu "quen chuẩn quốc tế" — hộp ghi chú có con dấu */}
              <div className="mt-[10px] flex items-start gap-[10px] rounded-xl border border-border/70 bg-card/60 px-[12px] py-[9px]">
                <SealCheck className="mt-[1px] size-[18px] shrink-0 text-leaf-strong" weight="duotone" aria-hidden />
                <p className="text-[8.5pt] leading-[1.4] text-pretty text-faint">
                  <Rich text={e.reachNote} />
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
