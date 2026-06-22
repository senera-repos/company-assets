import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Be_Vietnam_Pro, IBM_Plex_Mono, Montserrat } from "next/font/google";

import "./globals.css";

/*
 * Brand type system (senera-typography.md) — all-sans, three roles, via next/font (no layout
 * shift). Each exposes the CSS variable the token preset consumes:
 *   Montserrat     → --font-montserrat  (display, headings ≥20px)
 *   Be Vietnam Pro → --font-bvp         (body + UI — the default face)
 *   IBM Plex Mono  → --font-plex-mono   (figures / IDs / footer page numbers)
 * Display + body ship the `vietnamese` subset so dấu thanh render crisply; mono is figures (latin).
 */
const fontDisplay = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const fontSans = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bvp",
  display: "swap",
});

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Senera — Hồ sơ năng lực",
  description: "Hồ sơ năng lực Công ty Cổ phần Senera — đối tác công nghệ toàn diện.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="vi"
      data-theme="light"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}
      // Browser extensions (Grammarly, dark-mode, password managers) mutate <html>/<body>
      // attributes after SSR. This suppresses only the root elements' own one-level attribute
      // diff — a real mismatch inside our components would still warn.
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
