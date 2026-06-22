import type { NextConfig } from "next";

/*
 * Print-first microsite — no API, no images service, no i18n runtime. Keep it minimal.
 * `turbopack.root` pins the workspace root to this app so Next doesn't latch onto a stray
 * lockfile higher up the tree. (Next 16 decouples ESLint from `build`, so no eslint key needed.)
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
