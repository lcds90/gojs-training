<template>
  <div class="about">
    <h1>Introdução</h1>
    <div ref="divRef" id="divRef"></div>
    <div ref="divRef2" id="divRef2"></div>
    <div ref="divRef3" id="divRef3"></div>
    <div ref="divRef4" id="divRef4"></div>
    <div ref="divRef5" id="divRef5"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, onMounted, HTMLAttributes,
} from 'vue';
import {
  Binding, Diagram, GraphLinksModel, GraphObject, Link, Point, Shape, TextBlock, Node, Spot, Model,
} from 'gojs';

export default defineComponent({
  setup() {
    const divRef = ref();
    const divRef2 = ref();
    const divRef3 = ref();
    const divRef4 = ref();
    const divRef5 = ref();
    const $ = GraphObject.make;

    const coloredLines = (diag: Diagram) => {
      const diagram = diag;
      diagram.nodeTemplate = $(Node, 'Auto',
        $(Shape, 'RoundedRectangle',
          { fill: 'white' },
          new Binding('fill', 'color')), // shape.fill = data.color
        $(TextBlock,
          { margin: 5 },
          new Binding('text', 'key'))); // textblock.text = data.key

      diagram.linkTemplate = $(Link,
        $(Shape,
          new Binding('stroke', 'color'), // shape.stroke = data.color
          new Binding('strokeWidth', 'thick')), // shape.strokeWidth = data.thick
        $(Shape,
          { toArrow: 'OpenTriangle', fill: null },
          new Binding('stroke', 'color'), // shape.stroke = data.color
          new Binding('strokeWidth', 'thick'))); // shape.strokeWidth = data.thick

      const nodeDataArray = [
        { key: 'Alpha', color: 'lightblue' },
        { key: 'Beta', color: 'pink' },
      ];
      const linkDataArray = [
        {
          from: 'Alpha', to: 'Beta', color: 'blue', thick: 2,
        },
      ];
      diagram.model = new GraphLinksModel(nodeDataArray, linkDataArray);
    };

    const parsedPoints = (diag: Diagram, nodeData: any[], linkData: any[]) => {
      const diagram = diag;
      diagram.nodeTemplate = $(Node, 'Auto',
        new Binding('location', 'loc', Point.parse), // convert string into a Point value
        $(Shape, 'RoundedRectangle',
          { fill: 'white' },
          new Binding('fill', 'color')),
        $(TextBlock,
          { margin: 5 },
          new Binding('text', 'key')));

      diagram.model = new GraphLinksModel(nodeData, linkData);
    };

    const changeData = (diag: Diagram) => {
      const diagram = diag;
      diagram.nodeTemplate = $(Node, 'Auto',
        { locationSpot: Spot.Center },
        $(Shape, 'RoundedRectangle',
          { // default values if the data.highlight is undefined:
            fill: 'yellow', stroke: 'orange', strokeWidth: 2,
          },
          new Binding('fill', 'highlight', ((v) => (v ? 'pink' : 'lightblue'))),
          new Binding('stroke', 'highlight', ((v) => (v ? 'red' : 'blue'))),
          new Binding('strokeWidth', 'highlight', ((v) => (v ? 3 : 1)))),
        $(TextBlock,
          { margin: 5 },
          new Binding('text', 'key')));

      diagram.model.nodeDataArray = [
        { key: 'Alpha', highlight: false }, // just one node, and no links
      ];

      function flash() {
        // all model changes should happen in a transaction
        diagram.model.commit((m) => {
          const data = m.nodeDataArray[0]; // get the first node data
          m.set(data, 'highlight', !data.highlight);
        }, 'flash');
      }
      function loop() {
        setTimeout(() => { flash(); loop(); }, 500);
      }
      loop();
    };

    const changeConnections = (diag: Diagram) => {
      const diagram = diag;
      diagram.nodeTemplate = $(Node, 'Auto',
        { locationSpot: Spot.Center },
        $(Shape, 'RoundedRectangle',
          { fill: 'yellow', stroke: 'orange', strokeWidth: 2 }),
        $(TextBlock,
          { margin: 5 },
          new Binding('text', 'key')));

      const nodeDataArray = [
        { key: 'Alpha' },
        { key: 'Beta' },
        { key: 'Gamma' },
      ];
      const linkDataArray = [
        { from: 'Alpha', to: 'Beta' },
      ];
      diagram.model = new GraphLinksModel(nodeDataArray, linkDataArray);

      function switchTo() {
        // all model changes should happen in a transaction
        diagram.model.commit((m: any) => {
          const data = m.linkDataArray[0]; // get the first link data
          if (m.getToKeyForLinkData(data) === 'Beta') m.setToKeyForLinkData(data, 'Gamma');
          else m.setToKeyForLinkData(data, 'Beta');
        }, 'reconnect link');
      }
      function loop() {
        setTimeout(() => { switchTo(); loop(); }, 1000);
      }
      loop();
    };

    const turnBlueWhenSelected = (diag: Diagram) => {
      const diagram = diag;
      diagram.nodeTemplate = $(Node, 'Auto',
        { selectionAdorned: false }, // no blue selection handle!
        $(Shape, 'RoundedRectangle',
          // bind Shape.fill to Node.isSelected converted to a color
          new Binding('fill', 'isSelected', ((sel) => (sel ? 'dodgerblue' : 'lightgray'))).ofObject()), // no name means bind to the whole Part
        $(TextBlock,
          { margin: 5 },
          new Binding('text', 'isSelected', ((sel) => (sel ? `is selected descr${sel}` : 'descr'))).ofObject()));

      diagram.model.nodeDataArray = [
        { descr: 'Select me!' },
        { descr: 'I turn blue when selected.' },
      ];
    };

    onMounted(() => {
      const div: HTMLAttributes = divRef?.value;
      const div2: HTMLAttributes = divRef2?.value;
      const div3: HTMLAttributes = divRef3?.value;
      const div4: HTMLAttributes = divRef4?.value;
      const div5: HTMLAttributes = divRef5?.value;
      const id = div.id || '';
      const id2 = div2.id || '';
      const id3 = div3.id || '';
      const id4 = div4.id || '';
      const id5 = div5.id || '';
      const diagram = $(Diagram, id);
      const diagram2 = $(Diagram, id2);
      const diagram3 = $(Diagram, id3);
      const diagram4 = $(Diagram, id4);
      const diagram5 = $(Diagram, id5);
      const nodeDataArray = [
        { key: 'Alpha', color: 'lightblue', loc: '0 0' }, // note string values for location
        { key: 'Beta', color: 'pink', loc: '100 50' },
      ];
      const linkDataArray = [
        { from: 'Alpha', to: 'Beta' },
      ];
      coloredLines(diagram);
      parsedPoints(diagram2, nodeDataArray, linkDataArray);
      changeData(diagram3);
      changeConnections(diagram4);
      turnBlueWhenSelected(diagram5);
    });
    return {
      divRef,
      divRef2,
      divRef3,
      divRef4,
      divRef5,
    };
  },
});
</script>

<style scoped>
  .about {
    width: 100vw;
    height: 80vh;
    display: grid;
    grid: min-content repeat(3, 1fr) / 1fr 1fr;
  }

  div {
    border-inline: 0.5px solid black;
  }

  h1 {
    grid-column: span 2;
  }
</style>
