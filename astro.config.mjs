// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

import svelte from "@astrojs/svelte";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    integrations: [vue(), svelte(), icon()],

    vite: {
        plugins: [tailwindcss()],
    },
});