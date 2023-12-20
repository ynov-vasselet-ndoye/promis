<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({
  dropdown: false,
  collapse: false,
});
</script>

<template>
  <div class="navbar">
    <NuxtLink to="/">
      <img src="/image/logo.svg" alt="Logo Naee" class="logo" />
    </NuxtLink>
    <div class="links-div">
      <span @click="state.dropdown = !state.dropdown"
        >Blog <img src="/image/dropdown.svg" alt="Blog" />
        <div class="dropdown" v-if="state.dropdown">
          <ul>
            <li>
              <NuxtLink to="/notre-histoire">Notre histoire</NuxtLink>
            </li>
            <li><NuxtLink to="/#conception">L'éco-conception</NuxtLink></li>
            <li><NuxtLink to="/blog">Actualités</NuxtLink></li>
          </ul>
        </div>
      </span>
      <a href="https://www.shop.lamarquepromis.fr/">
        <span>Nos luminaires</span>
      </a>
      <NuxtLink to="/#nous-retrouver">
        <span>Où trouver nos produits ?</span>
      </NuxtLink>
    </div>
    <div class="mobile-links">
      <img
        v-if="!state.collapse"
        @click="state.collapse = true"
        src="/image/collapse.svg"
        alt="Menu"
      />
      <img
        src="/image/cancel.svg"
        alt="annuler"
        v-else
        @click="state.collapse = false"
      />
      <div class="sidebar" v-if="state.collapse">
        <ul>
          <li @click="state.collapse = false">
            <Router-link to="/notre-histoire"> Notre histoire </Router-link>
          </li>
          <hr />
          <li @click="state.collapse = false">
            <Router-link to="/#conception">L'éco-conception </Router-link>
          </li>
          <hr />
          <li @click="state.collapse = false">
            <Router-link to="/blog">Actualités </Router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  padding: 2rem 10%;
  font-size: 17px;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
}

.links-div {
  text-align: right;
}

.links-div span:first-child {
  position: relative;
}

.links-div > * {
  margin-right: 1rem;
  cursor: pointer;
}

.navbar a {
  color: inherit;
  text-decoration: none;
  display: inline-block;
}

.mobile-links {
  display: none;
}

.dropdown {
  position: absolute;
  left: 0;
  width: 200px;
  border: 1px solid grey;
  border-radius: 5px;
  text-align: left;
  margin-top: 0.5rem;
  z-index: 2;
  background-color: #fff;
}

.dropdown ul {
  padding: 0;
  cursor: pointer;
}

.dropdown ul li {
  margin: 1rem;
  list-style: none;
  font-weight: bold;
}

@media screen and (max-width: 769px) {
  .logo {
    width: 120px;
  }
  .links-div {
    display: none;
  }
  .mobile-links {
    display: block;
    text-align: right;
  }
  .sidebar {
    top: 100px;
    right: 0;
    width: 70%;
    position: absolute;
    border: 1px solid whitesmoke;
    text-align: right;
    padding: 1rem 5%;
    background-color: #fff;
    z-index: 2;
  }

  .sidebar ul {
    padding: 0;
  }

  .sidebar ul li {
    list-style: none;
    font-weight: bold;
    margin: 1rem;
  }

  .sidebar hr {
    border: none;
    height: 1px;
    background-color: whitesmoke;
  }
}
</style>