// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: process.env.API_BASE_URL,
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  experimental: {
    clientFallback: true
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
