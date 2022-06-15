<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, RouteRecordNormalized } from 'vue-router';

const router = useRouter();
const getAllRoutes = router.getRoutes();
const filteredRoutes = getAllRoutes.filter((route: RouteRecordNormalized) => route.name?.toString().includes('tutorial/'));
interface Link {
  name: string;
  path: string;
}
const links = ref<Link[]>([]);

filteredRoutes.forEach((route: RouteRecordNormalized) => {
  const { name, path } = route;
  const separateNameAndPath = name?.toString()?.split('/') || [];
  const newName = separateNameAndPath[1];
  links.value.push({ name: newName, path });
});

</script>

<template>
  <div class="container">
    <nav>
      <router-link
        v-for="route in links"
        :to="route.path"
        :key="route.path"
      >{{ route.name }}</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: grid;
  grid: 10vh 1fr / 1fr;
  place-items: center;

  nav {
    border-bottom: 0.5px rgb(175, 175, 175) solid;
    padding-block: 10px;
    background: rgb(112, 112, 112);
  }

  a {
    width: 80%;
    padding: 10px;
    background: #281e3c;
    color: white;
    text-decoration: none;
    border-radius: 15px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
    transition: background 0.5s ease;

    &.router-link-exact-active {
      background: #b894ff;
    }

    * {
      overflow: hidden;
    }
  }
}

nav {
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  gap: 25px;
  width: 100%;
}
</style>
