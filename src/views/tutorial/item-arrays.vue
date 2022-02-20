<template>
  <div class="container">
    <h1>Bloco de textos</h1>
    <div class="diagrams">
      <div ref="firstConnection" id="firstConnection"></div>
      <div ref="secondConnection" id="secondConnection"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, onMounted, HTMLAttributes,
} from 'vue';
import {
  Binding,
  Diagram,
  GraphLinksModel,
  GraphObject,
  ObjectData,
  Node,
  Shape,
  Panel,
  TextBlock,
} from 'gojs';

export default defineComponent({
  setup() {
    const firstConnection = ref();
    const secondConnection = ref();
    const $ = GraphObject.make;

    const renderItemArray = (
      diag: Diagram,
      nodeDataArray: ObjectData[],
      linkDataArray: ObjectData[],
    ) => {
      const diagram = diag;
      diagram.nodeTemplate = $(
        Node,
        'Vertical',
        new Binding('itemArray', 'items'),
      );
      diagram.model = new GraphLinksModel(nodeDataArray, linkDataArray);
    };

    const renderItemArrayCustomized = (
      diag: Diagram,
      nodeDataArray: ObjectData[],
      linkDataArray: ObjectData[],
    ) => {
      const diagram = diag;
      diagram.nodeTemplate = $(
        Node,
        'Auto',
        $(Shape, 'RoundedRectangle', { fill: '#3AA7A3' }),
        $(Panel, 'Vertical', new Binding('itemArray', 'items'), {
          itemTemplate: $(
            Panel,
            'Auto',
            { margin: 5, padding: 5 },
            $(Shape, 'Circle', { fill: '#911E3E' }),
            $(TextBlock, new Binding('text', ''), { margin: 4 }),
          ),
        }),
      );
      diagram.model = new GraphLinksModel(nodeDataArray, linkDataArray);
    };

    onMounted(() => {
      const firstConnectionDiv: HTMLAttributes = firstConnection?.value;
      const secondConnectionDiv: HTMLAttributes = secondConnection?.value;
      const firstDiagram = $(Diagram, firstConnectionDiv.id || '');
      const secondDiagram = $(Diagram, secondConnectionDiv.id || '');

      const nodeDataArray = [
        { key: 'foo', items: ['Alpha', 'Beta', 'Gamma', 'Delta'] },
        { key: 'bar', items: ['first', 'second', 'third'] },
      ];
      const linkDataArray = [{ from: 'foo', to: 'bar' }];

      renderItemArray(firstDiagram, nodeDataArray, linkDataArray);
      renderItemArrayCustomized(secondDiagram, nodeDataArray, linkDataArray);
    });
    return {
      firstConnection,
      secondConnection,
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

.diagrams {
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
}

.diagrams > div {
  border-bottom: 0.5px solid black;
}

#firstConnection,
#secondConnection {
  overflow-x: hidden;
  width: 100%;
  height: 100%;
}
</style>
