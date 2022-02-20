<template>
  <nav :class="showActionsMenu ? 'actions-show' : 'actions-hide'">
    <button>Add</button>
    <button>Remove</button>
  </nav>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue';

export default defineComponent({
  setup() {
    const showActionsMenu = inject('showActionsMenu');

    return {
      showActionsMenu,
    };
  },
});
</script>

<style scoped>
.actions-hide,
.actions-show {
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  overflow: hidden;
  transition: all 2s ease;
  position: absolute;
  height: 95%;
  z-index: 5;
  border-radius: 15px;
  cursor: move;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
}

.actions-show {
  left: 0;
  width: 25vw;
  background: lightslategrey;
}

.actions-hide {
  left: -5vw;
  width: 5vw;
  background: black;
}
</style>
