<template>
  <div class="about">
    <h1>Construindo blocos</h1>
    <div ref="divRef" id="divRef"></div>
    <div ref="divRefTwo" id="divRefTwo"></div>
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
  Link,
  Node,
  Panel,
  Shape,
  TextBlock,
  TreeModel,
} from 'gojs';

export default defineComponent({
  setup() {
    const divRef = ref();
    const divRefTwo = ref();

    const $ = GraphObject.make;

    const addTwoNodesConnecteds = (diagram: Diagram) => {
      const node1 = $(
        Node,
        Panel.Spot,
        $(Shape, {
          figure: 'Diamond',
          fill: 'blue',
        }),
        $(TextBlock, {
          text: 'Hello!',
          margin: 5,
        }),
      );

      const node2 = $(
        Node,
        Panel.Auto,
        $(Shape, {
          figure: 'Circle',
          fill: 'lightblue',
        }),
        $(TextBlock, {
          text: 'Need help?',
          margin: 5,
        }),
      );
      const link = $(Link, { fromNode: node1, toNode: node2 }, $(Shape));
      diagram.add(node1);
      diagram.add(node2);
      diagram.add(link);
    };

    const addTwoLinks = (diag: Diagram, nodeData: any, linkData: any) => {
      const diagram = diag;
      diagram.model = new GraphLinksModel(nodeData, linkData);
    };

    const addDefaultAppareance = (diag: Diagram) => {
      const diagram = diag;
      diagram.nodeTemplate = $( // provide custom Node appearance
        Node,
        'Auto',
        $(Shape, {
          figure: 'RoundedRectangle',
          fill: 'white',
        }),
        $(TextBlock, {
          text: 'hello!',
          margin: 5,
        }),
      );
    };

    const addLinkWithBinding = (diag: Diagram) => {
      const diagram = diag;
      diagram.nodeTemplate = $(Node, 'Auto',
        $(Shape,
          {
            figure: 'RoundedRectangle',
            fill: 'white',
          }, // default Shape.fill value
          new Binding('fill', 'color')), // binding to get fill from nodedata.color
        $(TextBlock,
          { margin: 5 },
          new Binding('text', 'key')));
    };

    const addTreeModel = (diag: Diagram, nodeData: any) => {
      const diagram = diag;
      diagram.nodeTemplate = $(Node, 'Auto',
        $(Shape,
          { figure: 'Ellipse' },
          new Binding('fill', 'color')),
        $(TextBlock,
          { margin: 5 },
          new Binding('text', 'key')));
      diagram.model = new TreeModel(nodeData);
    };

    onMounted(() => {
      const div: HTMLAttributes = divRef?.value;
      const div2: HTMLAttributes = divRefTwo?.value;
      const id = div.id || '';
      const id2 = div2.id || '';
      const diagram = new Diagram(id);
      const diagram2 = new Diagram(id2);
      const nodeDataArray = [{ key: 'Alpha', color: 'blue' }, { key: 'Beta', color: 'purple' }, { key: 'Batata' }];
      const linkDataArray = [{ from: 'Alpha', to: 'Beta' }, { from: 'Beta', to: 'Batata' }];
      const nodeTreeDataArray = [
        { key: 'Alpha', color: 'lightblue' },
        { key: 'Beta', parent: 'Alpha', color: 'yellow' }, // note the "parent" property
        { key: 'Gamma', parent: 'Alpha', color: 'orange' },
        { key: 'Delta', parent: 'Alpha', color: 'lightgreen' },
      ];
      addTwoNodesConnecteds(diagram);
      addTwoLinks(diagram, nodeDataArray, linkDataArray);
      // anteriormente estava padrão para todas
      addDefaultAppareance(diagram);
      // com binding está herdando dos objetos
      addLinkWithBinding(diagram);

      addTreeModel(diagram2, nodeTreeDataArray);
    });
    return {
      divRef,
      divRefTwo,
    };
  },
});
</script>

<style scoped>

.about {
  display: grid;
  grid: min-content 1fr / 50vw 50vw;
  width: 100%;
  height: 100%;
}

h1 {
  grid-column: span 2;
}
</style>
