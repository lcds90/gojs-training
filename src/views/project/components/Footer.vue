<template>
  <footer>
    <button class="showMenu" @click="toggleViewActions">Mostrar menu</button>
    <button class="showDetails" @click="toggleViewDetails">
      Mostrar detalhes do diagrama
    </button>
  </footer>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue';

export default defineComponent({
  setup() {
    const toggleViewActions = inject('toggleViewActions');
    return {
      toggleViewActions,
    };
  },
});
</script>
