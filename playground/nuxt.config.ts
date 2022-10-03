import { defineNuxtConfig } from 'nuxt/config'
import AppComponents from '..'

export default defineNuxtConfig({
  modules: [AppComponents, '@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: './../assets/css/tailwind.css'
  }
})
