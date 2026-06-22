import { ImageSlot, Note, Rich, SectionHeading } from "@/components/blocks/primitives";
import { vi } from "@/content/content.vi";

const pr = vi.projects;

/* 12 · DỰ ÁN TIÊU BIỂU — hero Minh Cường (viền nhấn) + hàng 2 cột [Tuyển sinh nhanh | Sumita]. */
export function Projects() {
  return (
    <>
      <SectionHeading eyebrow={pr.eyebrow} title={pr.title} lead={pr.lead} leadItalic sub={pr.sub} subWide />

      <div className="mt-[14px] flex flex-1 flex-col gap-[11px]">
        {/* HERO — Minh Cường / MCS (viên ngọc) */}
        <div className="flex flex-[1.3] flex-col rounded-lg border border-border-strong bg-card px-[13px] py-[11px]">
          <p className="text-[8.4pt] leading-[1.4] tracking-[0.02em] text-muted-foreground">
            <Rich text={pr.hero.kicker} />
          </p>
          <h3 className="mt-[4px] font-display text-[13pt] font-semibold text-foreground">
            {pr.hero.title}
          </h3>
          <p className="mt-[5px] max-w-[165mm] text-[9pt] leading-[1.45] text-muted-foreground">
            <Rich text={pr.hero.desc} />
          </p>

          <div className="mt-[11px] flex items-stretch gap-[12px]">
            <div className="flex flex-[1.75] flex-col gap-[8px]">
              {pr.hero.pillars.map((p) => (
                <div key={p.title}>
                  <div className="text-[9pt] font-semibold text-foreground">{p.title}</div>
                  <p className="mt-[2px] text-[9pt] leading-[1.4] text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
            <ImageSlot className="flex-1" label="ẢNH CHỤP MÀN HÌNH" sub={pr.hero.shot} />
          </div>

          <Note className="mt-auto pt-[9px]">
            <Rich text={pr.hero.note} />
          </Note>
        </div>

        {/* HÀNG 2 BĂNG GỌN */}
        <div className="flex flex-1 items-stretch gap-[11px]">
          {pr.side.map((sd) => (
            <div
              key={sd.title}
              className="flex flex-1 flex-col rounded-lg border border-border bg-card px-[13px] py-[11px]"
            >
              <p className="text-[8.4pt] leading-[1.4] tracking-[0.02em] text-muted-foreground">
                {sd.kicker}
              </p>
              <h3 className="mt-[3px] font-display text-[12pt] font-semibold text-foreground">
                {sd.title}
              </h3>
              <p className="mt-[4px] text-[8.7pt] leading-[1.45] text-muted-foreground">
                <Rich text={sd.desc} />
              </p>
              <p className="mt-[6px] text-[8.4pt] leading-[1.5] text-faint">
                <Rich text={sd.note} />
              </p>
              <ImageSlot className="mt-auto h-[25mm]" label="ẢNH CHỤP MÀN HÌNH" sub={sd.shot} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
