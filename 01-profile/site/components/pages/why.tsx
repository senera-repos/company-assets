import { CTA, Eyebrow, ImageSlot, Rich, SubHeading } from "@/components/blocks/primitives";
import { vi } from "@/content/content.vi";

const w = vi.why;

/* 15 · VÌ SAO CHỌN + LIÊN HỆ — dark, ambient; CTA vàng = nút hành động DUY NHẤT của hồ sơ. */
export function Why() {
  return (
    <>
      <Eyebrow>{w.eyebrow}</Eyebrow>
      <h2 className="mt-[8px] font-display text-[22pt] font-bold leading-[1.12] tracking-[-0.01em] text-foreground">
        {w.title}
      </h2>
      <p className="mt-[8px] max-w-[160mm] text-[11pt] leading-[1.55] text-muted-foreground">{w.sub}</p>

      <div className="mt-[14px] grid flex-1 grid-cols-2 gap-[10px]">
        {w.reasons.map((r) => (
          <div
            key={r.no}
            className="flex flex-col rounded-lg border border-border bg-card px-[13px] py-[12px]"
          >
            <div className="font-display text-[13pt] font-bold leading-none text-muted-foreground">
              {r.no}
            </div>
            <h3 className="mt-[6px] font-display text-[12.5pt] font-semibold text-foreground">
              {r.title}
            </h3>
            <p className="mt-[6px] text-[9pt] leading-[1.45] text-muted-foreground">
              <Rich text={r.desc} />
            </p>
          </div>
        ))}
      </div>

      <SubHeading className="mt-[18px]">{w.contactHeading}</SubHeading>
      <div className="mt-[10px] flex gap-[10px]">
        <div className="flex flex-[1.4] flex-col rounded-lg border border-border bg-card px-[13px] py-[11px]">
          <div className="text-[7.5pt] font-semibold uppercase tracking-[0.13em] text-faint">
            {w.contactLabel}
          </div>
          <div className="mt-[10px] flex flex-col gap-[9px]">
            <div>
              <div className="text-[8.4pt] text-faint">Email</div>
              <div className="mt-[1px] text-[12pt] font-semibold text-foreground">{w.contact.email}</div>
            </div>
            <div>
              <div className="text-[8.4pt] text-faint">Điện thoại</div>
              <div className="mt-[1px] font-mono text-[12pt] font-semibold text-foreground">
                {w.contact.phone}
              </div>
            </div>
            <div>
              <div className="text-[8.4pt] text-faint">Website</div>
              <div className="mt-[1px] text-[12pt] font-semibold text-foreground">
                {w.contact.website}
              </div>
            </div>
            <div>
              <div className="text-[8.4pt] text-faint">Địa chỉ</div>
              <div className="mt-[1px] text-[10.5pt] font-medium leading-[1.45] text-foreground">
                {w.contact.address}
              </div>
            </div>
          </div>
          <div className="mt-[16px]">
            <CTA>{w.cta}</CTA>
          </div>
        </div>
        <ImageSlot className="max-w-[40mm] flex-1" label="QR" sub={w.qr} />
      </div>
    </>
  );
}
