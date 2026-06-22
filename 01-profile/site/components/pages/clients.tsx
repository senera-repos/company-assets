import { Chip, ImageSlot, Note, Rich, SectionHeading, SubHeading } from "@/components/blocks/primitives";
import { vi } from "@/content/content.vi";

const cl = vi.clients;

/* 13 · KHÁCH HÀNG & ĐỐI TÁC — hero Minh Cường + khối giáo dục (3 trường). */
export function Clients() {
  return (
    <>
      <SectionHeading eyebrow={cl.eyebrow} title={cl.title} lead={cl.lead} leadItalic sub={cl.sub} subWide />

      <div className="mt-[16px] flex flex-1 flex-col gap-[13px]">
        {/* Hero — Minh Cường */}
        <div className="flex flex-1 items-stretch gap-[14px] rounded-lg border border-border-strong bg-card px-[13px] py-[11px]">
          <div className="flex flex-[1.55] flex-col">
            <div className="text-[8pt] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              {cl.hero.label}
            </div>
            <h3 className="mt-[5px] font-display text-[14pt] font-semibold text-foreground">
              {cl.hero.name}
            </h3>
            <p className="mt-[6px] max-w-[100mm] text-[9pt] leading-[1.45] text-muted-foreground">
              {cl.hero.desc}
            </p>
            <div className="mt-auto flex flex-wrap gap-[6px] pt-[11px]">
              {cl.hero.chips.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </div>
          </div>
          <ImageSlot className="flex-1" label="Minh Cường" sub={cl.hero.logo} />
        </div>

        {/* Giáo dục — các trường */}
        <div className="flex flex-1 flex-col">
          <SubHeading className="text-[12.5pt]">{cl.eduHeading}</SubHeading>
          <p className="mt-[4px] max-w-[172mm] text-[9pt] leading-[1.45] text-muted-foreground">
            {cl.eduDesc}
          </p>
          <div className="mt-[11px] flex flex-1 items-stretch gap-[11px]">
            {cl.schools.map((sc) => (
              <div
                key={sc.name}
                className="flex flex-1 flex-col rounded-lg border border-border bg-card px-[13px] py-[11px]"
              >
                <ImageSlot className="h-[15mm]" label={sc.name} sub="logo (dán sau)" />
                <Note className="mt-[8px]">{sc.meta}</Note>
                <Chip className="mt-auto self-start">{cl.schoolChip}</Chip>
              </div>
            ))}
          </div>
          <Note className="mt-[9px]">
            <Rich text={cl.eduCaption} />
          </Note>
        </div>
      </div>

      <Note className="mt-[13px] border-t border-border pt-[9px]">
        <Rich text={cl.footnote} />
      </Note>
    </>
  );
}
