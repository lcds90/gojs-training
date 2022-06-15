<template>
  <div class="container">
    <Actions />
    <main ref="diagramEl" id="diagramEl"></main>
    <Footer />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  unref,
  computed,
} from 'vue';
import { useStore } from 'vuex';

import { DiagramGetters } from '@/constants';
import { ObjectData } from '@/interfaces';
import go from '@/shared/goJS';

import { Actions, Footer } from './components';
import { useActionMenu, useGoJS } from './composables';

export default defineComponent({
  components: {
    Actions,
    Footer,
  },
  setup(_p, { emit }) {
    useActionMenu();

    const store = useStore();
    const diagramEl = ref<HTMLDivElement>();
    const diagramData = computed(() => store.getters[DiagramGetters.GET_DATA]);

    let diagram: go.Diagram;

    const startDiagram = async (): Promise<void> => {
      const diagramElement = unref(diagramEl);
      const diagramAlias = unref(computed(() => store.getters[DiagramGetters.GET_ALIAS]));
      const diagramOptions = computed(() => store.getters[DiagramGetters.GET_OPTIONS]);
      const nodeDataArray = unref(diagramData).nodes as ObjectData[];
      const linkDataArray = unref(diagramData).links as ObjectData[];

      if (!diagramElement) return;
      useGoJS.create(
        diagramAlias,
        diagramOptions,
        diagramElement,
        emit,
        nodeDataArray,
        linkDataArray,
      );
    };

    onMounted(async () => {
      startDiagram();
    });

    return {
      diagramEl,
    };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  /* flex-direction: column; */
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.05);
}

#diagramEl {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
