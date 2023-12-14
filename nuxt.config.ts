// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    ssr: true,
    modules: [
        '@pinia/nuxt',
    ],
    components: [
        '~/components/form',
        '~/components/global',
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
    runtimeConfig:{
      public: {
          api_url: process.env.API_URL
      }
    }
})
