// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  modules: [
    '@nuxtjs/strapi',
    '@nuxt/image',
    'nuxt-simple-sitemap',
    '@nuxtjs/robots',
    'nuxt-simple-robots'
  ],
  strapi: {
    url: 'https://promis.bo.diamondy.dev',
    version: 'v4',
    prefix: '/api'
  },
  runtimeConfig: {

  },
  watchers: {
    webpack: {
      aggregateTimeout: 300,
    },
  },
})