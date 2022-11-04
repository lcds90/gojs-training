<script setup lang="ts">
import { reactive } from 'vue';
import { useHead } from '@vueuse/head';

const siteData = reactive({
  title: 'GoJS Training',
  description: 'Training my skills with lib GoJS.',
});

useHead({
  title: siteData.title,
  meta: [
    {
      name: 'description',
      content: siteData.description,
    },
  ],
});

</script>

<template>
  <div id="nav">
    <router-link to="/">
      Home
    </router-link>
    <router-link to="/tutorial">
      Tutorial
    </router-link>
    <router-link to="/project">
      Projeto
    </router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  max-width: 100%;
  width: 100vw;
  display: grid;
  grid: max-content 1fr / 1fr;
}

#nav {
  padding: 30px;
  background: rgb(72, 72, 72);
  border-bottom: 0.5px rgb(175, 175, 175) solid;
  display: grid;
  gap: 25px;
  grid-auto-flow: column;
  overflow-y: hidden;
  a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    padding: 5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.15);
    transition: all 0.5s ease;
    display: grid;
    place-items: center;
    background: #281e3c;

    &.router-link-exact-active {
      background: #b894ff;
      border-radius: 5px;
    }
  }
}
</style>
