import { Eyebrow, Rich } from "@/components/blocks/primitives";
import { Cpu, Eye, LifeBuoy, Sparkles } from "@/components/blocks/icons";
import { vi } from "@/content/content.vi";

const a = vi.ai;

/* Phase icons (Phosphor duotone, seneravn set). */
const PHASE_ICONS = [Eye, Sparkles, Cpu, LifeBuoy];

/* 7b · AI XUYÊN SUỐT — trang riêng, đêm-trăng high-tech. Bốn pha vẽ thành lộ trình dọc (spine
 * gradient + node phát sáng + nhãn mono); hai thế mạnh ở dải chân. "High tech" mà vẫn đầm-sen. */
export function Ai() {
  return (
    <>
      {/* lưới chấm mờ — chất "dữ liệu/tech", whisper-faint, tan dần */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-[16mm] -top-[16mm] bottom-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(rgb(255 255 255 / 0.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(120% 75% at 70% 0%, black, transparent 78%)",
          WebkitMaskImage: "radial-gradient(120% 75% at 70% 0%, black, transparent 78%)",
        }}
      />

      <Eyebrow>{a.eyebrow}</Eyebrow>
      <h2 className="mt-[10px] font-display text-[26pt] font-bold leading-[1.05] tracking-[-0.015em] text-foreground">
        {a.heading}
      </h2>
      <p className="mt-[10px] max-w-[150mm] text-[12pt] leading-[1.5] text-muted-foreground">
        <Rich text={a.note} />
      </p>

      {/* LỘ TRÌNH DỌC — bốn pha */}
      <div className="relative mt-[18px] flex flex-1 flex-col">
        {/* spine: sợi AI chạy suốt, gradient hồng↔teal */}
        <div className="absolute left-[19px] top-[24px] bottom-[24px] w-[2px] rounded-full bg-gradient-to-b from-brand-strong/70 via-leaf-strong/55 to-brand-strong/35" />

        {a.phases.map((ph, i) => {
          const Icon = PHASE_ICONS[i] ?? Eye;
          return (
            <div key={ph.title} className="relative flex flex-1 items-start gap-[18px]">
              {/* node phát sáng trên spine */}
              <div className="relative z-10 mt-[1px] flex size-[38px] shrink-0 items-center justify-center rounded-2xl border border-border-strong bg-card shadow-md">
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-2xl bg-leaf-strong/20 blur-[6px]"
                />
                <Icon className="size-[19px] text-leaf-strong" weight="duotone" aria-hidden />
              </div>

              <div className="pt-[1px]">
                <div className="font-mono text-[8pt] font-medium uppercase tracking-[0.16em] text-leaf-strong">
                  Giai đoạn {String(i + 1).padStart(2, "0")} / {String(a.phases.length).padStart(2, "0")}
                </div>
                <h3 className="mt-[3px] font-display text-[13.5pt] font-semibold leading-[1.2] text-foreground">
                  {ph.title}
                </h3>
                <p className="mt-[5px] max-w-[148mm] text-[10pt] leading-[1.5] text-muted-foreground">
                  {ph.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
