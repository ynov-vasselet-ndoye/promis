<script setup lang="ts">
</script>

<template>
  <div class="footer">
    <NuxtLink to="/">
      <img src="/image/logo.svg" class="logo" alt="Logo Naee" />
    </NuxtLink>
    <div class="links-div">
      <NuxtLink to="">
        <span>Mentions légales</span>
      </NuxtLink>
      <NuxtLink to="">
        <span>Contact</span>
      </NuxtLink>
      <NuxtLink to="">
        <span>Localisations</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.footer {
  padding: 50px 10%;
  font-size: 17px;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
}

.links-div {
  text-align: right;
}

.links-div > * {
  margin-right: 1rem;
}

.footer a {
  color: inherit;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

@media screen and (max-width: 426px) {
  .logo {
    width: 120px;
  }
}
</style>