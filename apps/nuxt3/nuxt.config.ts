// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  modules: ['@local/components-nuxt3'],
  components: ['~/components'],
  css: [
    '@mskcc/fundamentals/css/styles-all.css',
    '@mskcc/components/css/styles-treeshake.css',
    '@mskcc/icons/dist/msk-icon.css',
  ],
  app: {
    baseURL: './', // for github pages, baseURL: '/<repository>/'
    head: {
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: 'https://cdn.jsdelivr.net/npm/@mskcc/fundamentals@latest/src/favicons/assets/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: 'https://cdn.jsdelivr.net/npm/@mskcc/fundamentals@latest/src/favicons/assets/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: 'https://cdn.jsdelivr.net/npm/@mskcc/fundamentals@latest/src/favicons/assets/favicon-32x32.png',
        },
      ],
    },
  },
})
