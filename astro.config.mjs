// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import fontPicker from "astro-font-picker";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), icon(), mdx(), fontPicker(), sitemap()],
  server: {
    allowedHosts: ["harshnj-garuda.tailf85ff4.ts.net"],
  },
  site: "https://harshnj.is-a.dev",
  experimental: {
    fonts: [
      {
        name: "Plein",
        cssVariable: "--font-plein",
        provider: fontProviders.fontshare(),
        weights: ["800", "900"],
      },
      {
        name: "Satoshi",
        cssVariable: "--font-satoshi",
        provider: fontProviders.fontshare(),
        weights: ["400", "500", "600", "700", "800"],
      },
      {
        name: "Switzer",
        cssVariable: "--font-switzer",
        provider: fontProviders.fontshare(),
        weights: ["400", "500", "600", "700", "800"],
      },
      {
        name: "Array",
        cssVariable: "--font-array",
        provider: fontProviders.fontshare(),
        weights: ["600"],
      },
      {
        name: "Architects Daughter",
        cssVariable: "--font-architects-daughter",
        provider: fontProviders.fontsource(),
        weights: ["400"],
      },
      {
        name: "Monaspace Argon",
        cssVariable: "--font-monaspace-argon",
        provider: fontProviders.fontsource(),
        weights: ["400", "500", "600", "700", "800"],
      },
    ],
  },

  // markdown: {
  //   // remarkPlugins: [[remarkToc, { heading: "In this Blog", maxDepth: 3 }]]
  // },

  vite: {
    plugins: [tailwindcss()],
  },
});
