// @ts-check

import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [svelte(), icon(), mdx()],
	server: {
		allowedHosts: ["harshnj-garuda.tailf85ff4.ts.net"],
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
