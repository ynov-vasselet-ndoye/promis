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
  runtimeConfig: {
    strapi: {
      url: 'http://localhost:1337',
      version: 'v4',
      prefix: '/api'
    }
  },
  watchers: {
    webpack: {
      aggregateTimeout: 300,
    },
  },
})