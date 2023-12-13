// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    ssr: true,
    modules: [
        '@pinia/nuxt',
    ],
      css: ['~/assets/scss/style.scss'],
    vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: '@use "sass:math"; @import "@/assets/scss/setup/_all.scss";',
              }
          }
      }
    },
})
