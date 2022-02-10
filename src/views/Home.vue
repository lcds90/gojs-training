<template>
  <div class="home">
    <Welcome />
  </div>
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
