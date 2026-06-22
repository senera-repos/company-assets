import { Rich, SectionHeading, SubHeading } from "@/components/blocks/primitives";
import { vi } from "@/content/content.vi";

const co = vi.collaboration;

/* 8 · MÔ HÌNH HỢP TÁC — cách làm việc (3) + ba cách hợp tác (3) + dòng phí. */
export function Collaboration() {
  return (
    <>
      <SectionHeading
        eyebrow={co.eyebrow}
        title={co.title}
        lead={co.lead}
        leadItalic
        sub={co.sub}
        subWide
      />

      <SubHeading className="mt-[18px]">{co.howHeading}</SubHeading>
      <div className="mt-[10px] grid grid-cols-3 gap-[10px]">
        {co.how.map((h) => (
          <div key={h.title} className="rounded-lg border border-border bg-card px-[13px] py-[11px]">
            <div className="text-[9.5pt] font-semibold text-foreground">{h.title}</div>
            <p className="mt-[5px] text-[8.6pt] leading-[1.45] text-muted-foreground">{h.desc}</p>
          </div>
        ))}
      </div>

      <SubHeading className="mt-[18px]">{co.waysHeading}</SubHeading>
      <div className="mt-[10px] grid grid-cols-3 gap-[10px]">
        {co.ways.map((w) => (
          <div key={w.no} className="rounded-lg border border-border bg-card px-[13px] py-[11px]">
            <h3 className="font-display text-[11pt] font-semibold text-foreground">
              <span className="font-mono text-[8.5pt] text-faint">{w.no}</span>
              &nbsp;&nbsp;{w.title}
            </h3>
            <p className="mt-[5px] text-[9pt] leading-[1.45] text-muted-foreground">{w.desc}</p>
            <p className="mt-[8px] text-[8.4pt] leading-[1.5] text-faint">
              <Rich text={w.fit} />
            </p>
            <p className="mt-[3px] text-[8.4pt] leading-[1.5] text-faint">
              <Rich text={w.fee} />
            </p>
          </div>
        ))}
      </div>

      <div className="mt-auto rounded-lg border border-border-strong bg-card px-[13px] py-[11px]">
        <p className="text-[9pt] leading-[1.5] text-foreground">
          <Rich text={co.feeline} />
        </p>
      </div>
    </>
  );
}
