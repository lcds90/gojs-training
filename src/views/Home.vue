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
</style>
