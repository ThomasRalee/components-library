import { defineNuxtConfig } from 'nuxt/config'
import AppComponents from '..'

export default defineNuxtConfig({
  modules: [AppComponents, '@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: './../assets/tailwind.config.cjs',
    cssPath: './../assets/css/tailwind.css'
  }
})
