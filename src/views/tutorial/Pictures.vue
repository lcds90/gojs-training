<template>
  <div class="container">
    <h1>Bloco de textos</h1>
    <div ref="diagramDiv" id="diagramDiv"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, onMounted, HTMLAttributes,
} from 'vue';
import {
  Diagram,
  GraphObject,
  Part,
  Picture,
  Spot,
  TextBlock,
} from 'gojs';

export default defineComponent({
  setup() {
    const diagramDiv = ref();
    const $ = GraphObject.make;

    const renderCatImage = (diag: Diagram) => {
      const diagram = diag;
      const urlImg = 'https://www.dicaspetz.com.br/wp-content/uploads/2020/08/cat-sitter-pet.jpg';
      diagram.add($(Part, $(Picture, { source: urlImg, width: 200, height: 200 })));
      diagram.add(
        $(Part, 'Table',
          $(Picture, {
            source: urlImg, width: 100, height: 100, column: 0,
          }),
          $(TextBlock, 'gatinho!', { row: 1, column: 0 })),
      );
    };

    onMounted(() => {
      const div: HTMLAttributes = diagramDiv?.value;
      const id = div.id || '';
      const diagram = $(Diagram, id);
      diagram.contentAlignment = Spot.Center;

      renderCatImage(diagram);
    });
    return {
      diagramDiv,
    };
  },
});
</script>

<style scoped>
.container {
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
}

#diagramDiv {
  overflow-x: hidden;
  width: 100%;
  height: 100%;
}
</style>
