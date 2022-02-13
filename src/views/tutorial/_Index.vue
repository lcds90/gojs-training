<template>
  <div class="container">
    <nav>
      <router-link v-for="route in links" :to="route.path" :key="route.path">{{
        route.name
      }}</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter, RouteRecordNormalized } from 'vue-router';

export default defineComponent({
  name: 'Tutorial',
  setup() {
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

    return {
      links,
    };
  },
});
</script>

<style scoped>
.container {
   width: 100%;
  height: 100%;
  display: grid;
  grid: 10vh 1fr / 1fr;
  place-items: center;
}

nav {
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  gap: 25px;
  width: 100%;
}

.container a {
  width: 80%;
  padding: 10px;
  background: green;
  color: white;
  text-decoration: none;
  border-radius: 15px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
}
</style>
