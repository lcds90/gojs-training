<template>
  <div class="container">
    <nav :class="showActionsMenu ? 'actions-show' : 'actions-hide'">
      <button>Add</button>
      <button>Remove</button>
    </nav>
    <div ref="diagramDiv" id="diagramDiv"></div>
    <footer>
      <button class="showMenu" @click="toggleViewActions">Mostrar menu</button>
      <button class="showDetails" @click="toggleViewDetails">
        Mostrar detalhes do diagrama
      </button>
    </footer>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, onMounted, HTMLAttributes, computed,
} from 'vue';
import {
  Diagram, GraphObject, Part, Picture, Spot, TextBlock,
} from 'gojs';

export default defineComponent({
  setup() {
    const diagramDiv = ref();
    const $ = GraphObject.make;
    const showActionsMenu = ref(true);
    const toggleViewActions = () => {
      showActionsMenu.value = !showActionsMenu.value;
    };
    const renderCatImage = (diag: Diagram) => {
      const diagram = diag;
      const urlImg = 'https://www.dicaspetz.com.br/wp-content/uploads/2020/08/cat-sitter-pet.jpg';
      diagram.add(
        $(Part, $(Picture, { source: urlImg, width: 200, height: 200 })),
      );
      diagram.add(
        $(
          Part,
          'Table',
          $(Picture, {
            source: urlImg,
            width: 100,
            height: 100,
            column: 0,
          }),
          $(TextBlock, 'gatinho!', { row: 1, column: 0 }),
        ),
      );
    };

    onMounted(() => {
      const div: HTMLAttributes = diagramDiv?.value;
      const id = div.id || '';
      const diagram = $(Diagram, id);
      diagram.contentAlignment = Spot.Center;

      renderCatImage(diagram);
    });
    console.log(showActionsMenu);

    return {
      diagramDiv,
      showActionsMenu,
      toggleViewActions,
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

#diagramDiv {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
