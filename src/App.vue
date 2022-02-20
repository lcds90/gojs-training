<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/tutorial">Tutorial</router-link>
    <router-link to="/project">Projeto</router-link>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
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
  },
});
</script>

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
  grid: 15vh 1fr / 1fr;
  grid-auto-rows: 10vh;

}

#nav {
  padding: 30px;
  background: lightgrey;
  border-bottom: 0.5px black solid;
  display: grid;
  gap: 25px;
  grid-auto-flow: column;
  overflow-y: hidden;
  a {
    font-weight: bold;
    color: #2e2e2e;
    text-decoration: none;
    padding: 5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.15);
    transition: all 0.5s ease;
    display: grid;
    place-items: center;

    &.router-link-exact-active {
      background: #42b983;
      border-radius: 5px;
    }
  }
}
</style>
