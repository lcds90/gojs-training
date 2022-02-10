<template>
  <div class="about">
    <h1>Introdução</h1>
    <div ref="model" id="model"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, onMounted, HTMLAttributes,
} from 'vue';
import go, { Diagram, GraphObject } from 'gojs';

export default defineComponent({
  name: 'Diagram',
  setup() {
    const model = ref();

    onMounted(() => {
      const $ = GraphObject.make;
      const div: HTMLAttributes = model?.value;
      const id = div.id || '';
      const diagram = $(Diagram, id);
      diagram.nodeTemplate = $(go.Node, 'Auto',
        $(go.Shape, 'RoundedRectangle',
          { fill: 'white' },
          new go.Binding('fill', 'color')),
        $(go.TextBlock,
          { margin: 5 },
          new go.Binding('text', 'key')));

      diagram.linkTemplate = $(go.Link,
        $(go.Shape,
          new go.Binding('stroke', 'color'),
          new go.Binding('strokeWidth', 'thick')),
        $(go.Shape,
          { toArrow: 'OpenTriangle', fill: null },
          new go.Binding('stroke', 'color'), // shape.stroke = data.color
          new go.Binding('strokeWidth', 'thick')));

      const nodeDataArray = [
        { key: 'Alpha', color: 'lightblue' },
        { key: 'Beta', color: 'pink' },
      ];
      const linkDataArray = [
        {
          from: 'Alpha', to: 'Beta', color: 'blue', thick: 2,
        },
      ];
      diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
    });
    return {
      model,
    };
  },
});
</script>

<style scoped>
  #model {
    width: 100vw;
    height: 100vh;
  }
</style>
