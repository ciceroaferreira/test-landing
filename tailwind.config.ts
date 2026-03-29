// Tailwind CSS v4 — minimal config
// Most configuration is done via CSS (@theme, @layer) in globals.css.
// This file is kept for editor tooling compatibility.
import type { Config } from "tailwindcss";

const config: Config = {
  // v4 resolves content automatically via @source in CSS.
  // Explicit content paths kept here as fallback for tooling.
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
