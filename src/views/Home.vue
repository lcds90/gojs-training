<template>
  <div class="home">
    <Welcome />
  </div>
  <footer>
    <code>Todos os direitos são reservados aos dono da biblioteca.</code>
    <a href="https://lcds.vercel.app/" target="_blank"
      >Feito por Leonardo Santos</a
    >
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Welcome } from '@/components';

export default defineComponent({
  name: 'Home',
  components: {
    Welcome,
  },
});
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}

footer {
  border: 4px double black;
  box-shadow: 0 5px 2px rgba(0, 0, 0, 0.25);
  background: grey;
  display: grid;
  place-items: center;
  grid: 1fr / 1fr 1fr;
}
</style>
