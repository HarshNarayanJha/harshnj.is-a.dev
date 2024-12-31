// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },

  alias: {
    "@": resolve(__dirname, "/")
  },

  css: [
    "~/assets/main.css"
  ],

  modules: ["@nuxtjs/tailwindcss", "nuxt-feather-icons"]
})
