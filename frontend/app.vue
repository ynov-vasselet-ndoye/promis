<script setup>
import '~/styles/main.css'

useSeoMeta({
  title: 'Promis',
  ogTitle: 'Promis',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    Test
    <AppNavbar />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
