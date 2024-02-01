// https://nuxt.com/docs/api/configuration/nuxt-config
import ru from './locales/ru.json'
import sr from './locales/uz.json'
export default defineNuxtConfig({
  ssr: true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  modules: [
    '@nuxt/image',
    'nuxt-swiper',
    '@nuxtjs/i18n',
    'nuxt-primevue',
    '@formkit/auto-animate/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  i18n: {
    locales: ['ru', 'sr'],
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'ru',
      messages: {
        ru,
        sr,
      },
    },
    // vueI18n: './i18n.config.ts', // if you are using custom path, default
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
      alwaysRedirect: true,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildModules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: ['swiper/swiper.scss'],
  },
  toast: {
    timeout: 2000,
    closeOnClick: false,
  },
})
