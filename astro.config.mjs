// @ts-check

import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [vue(), svelte(), icon()],

	vite: {
		plugins: [tailwindcss()],
	},
});
