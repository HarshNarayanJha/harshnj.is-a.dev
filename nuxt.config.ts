// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'node:path'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  router: {
    options: {
      strict: true,
      sensitive: true,
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  alias: {
    '@': resolve(__dirname, '/'),
  },

  css: ['~/assets/css/tailwind.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-feather-icons',
    '@nuxt/content',
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage',
    storageKey: 'nuxt-color-mode',
  },
  anime: {
    composables: true,
  },
})
