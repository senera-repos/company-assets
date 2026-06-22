/**
 * Tailwind v4 uses the dedicated PostCSS plugin — NOT the v3 `tailwindcss` +
 * `autoprefixer` chain (prefixing is built in via Lightning CSS). Mirrors seneravn/apps/web.
 */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
