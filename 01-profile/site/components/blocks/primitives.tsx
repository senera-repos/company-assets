import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * Shared brand primitives for the profile pages. RSC-safe (no client hooks).
 * Tokens only — yellow=action (CTA), pink=identity (eyebrow/wordmark), leaf=chip/data,
 * neutral carries the rest. Layout stays bespoke per page (no generic 3-up card kit).
 */

/* Inline emphasis from a plain copy string:
 *   `==highlight==` → gradient-clip key phrase (hero/positioning only — restrained),
 *   `**bold**`      → <strong>,
 *   `*italic*`      → <em>.
 * `==` is matched first so it wins over `*`. */
const RICH_TOKEN = /==(.+?)==|\*\*(.+?)\*\*|\*(.+?)\*/g;

export function Rich({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  RICH_TOKEN.lastIndex = 0;
  while ((m = RICH_TOKEN.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      out.push(
        <span
          key={key++}
          className="bg-highlight bg-clip-text font-semibold text-transparent [-webkit-box-decoration-break:clone] [box-decoration-break:clone]"
        >
          {m[1]}
        </span>,
      );
    } else if (m[2] !== undefined) {
      out.push(
        <strong key={key++} className="font-semibold text-foreground">
          {m[2]}
        </strong>,
      );
    } else {
      out.push(
        <em key={key++} className="italic">
          {m[3]}
        </em>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

/* Eyebrow — small pink kicker (identity). Optional, never restating the title. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-[8pt] font-semibold uppercase tracking-[0.14em] text-brand-strong",
        className,
      )}
    >
      {children}
    </p>
  );
}

/* Section sub-heading (the old `.h3` role) — display face, size overridable via className. */
export function SubHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3
      className={cn(
        "font-display text-[12.5pt] font-semibold leading-[1.25] text-foreground",
        className,
      )}
    >
      {children}
    </h3>
  );
}

/* Standard page header: eyebrow + H2 + optional lead + sub. Used by most content pages. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  leadItalic,
  sub,
  subWide,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  leadItalic?: boolean;
  sub?: string;
  subWide?: boolean;
}) {
  return (
    <header>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-[8px] font-display text-[22pt] font-bold leading-[1.12] tracking-[-0.01em] text-foreground">
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-[10px] max-w-[160mm] text-[13pt] font-medium leading-[1.45] text-foreground",
            leadItalic && "italic",
          )}
        >
          <Rich text={lead} />
        </p>
      )}
      {sub && (
        <p
          className={cn(
            "mt-[8px] text-[11pt] leading-[1.55] text-muted-foreground",
            subWide ? "max-w-[172mm]" : "max-w-[165mm]",
          )}
        >
          <Rich text={sub} />
        </p>
      )}
    </header>
  );
}

/* Chip — leaf (teal) pill for tags / breadth / status. Secondary role. */
export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-leaf-soft px-[11px] py-[3.5px] text-[8pt] font-medium text-leaf-strong",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* Slot — neutral content card. `emphasis` = stronger border for the one item that leads. */
export function Slot({
  children,
  className,
  emphasis,
}: {
  children: ReactNode;
  className?: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card px-[13px] py-[11px]",
        emphasis ? "border-border-strong" : "border-border",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* Note — small faint caption; pass <Rich> children for inline emphasis. */
export function Note({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-[8.4pt] leading-[1.5] text-faint", className)}>{children}</p>
  );
}

/* Placeholder for a user-supplied asset (photo / screenshot / logo / QR). Obvious dashed slot. */
export function ImageSlot({
  label,
  sub,
  className,
}: {
  label?: string;
  sub?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-[3px] rounded-lg border-2 border-dashed border-border-strong bg-muted px-3 py-3 text-center",
        className,
      )}
    >
      {label && <div className="text-[9pt] font-semibold text-muted-foreground">{label}</div>}
      {sub && <div className="max-w-[85%] text-[8pt] leading-[1.4] text-faint">{sub}</div>}
    </div>
  );
}

/* Gradient wordmark fill — cover wordmark + the two divider H1 only (restrained). */
export function GradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("bg-wordmark bg-clip-text text-transparent", className)}>{children}</span>
  );
}

/* The ONE action moment in the whole document — yellow accent gradient (contact CTA). */
export function CTA({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center rounded-lg bg-accent-gradient px-[18px] py-[10px] text-[11pt] font-semibold text-primary-foreground shadow-xs">
      {children}
    </span>
  );
}
