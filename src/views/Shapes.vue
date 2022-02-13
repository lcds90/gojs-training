<template>
  <div class="about">
    <h1>Formas</h1>
    <div ref="shape" id="shape"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, onMounted, HTMLAttributes,
} from 'vue';
import {
  Diagram, GraphObject, Part, Shape,
} from 'gojs';

export default defineComponent({
  name: 'Diagram',
  setup() {
    const shape = ref();

    onMounted(() => {
      const $ = GraphObject.make;
      const div: HTMLAttributes = shape?.value;
      const id = div.id || '';
      const diagram = $(Diagram, id);
      diagram.add(
        $(
          Part,
          'Horizontal',
          $(Shape, 'Rectangle', {
            width: 40,
            height: 60,
            margin: 4,
            fill: null,
          }),
          $(Shape, 'RoundedRectangle', {
            width: 40,
            height: 60,
            margin: 4,
            fill: null,
          }),
          $(Shape, 'Ellipse', {
            width: 40,
            height: 60,
            margin: 4,
            fill: null,
          }),
          $(Shape, 'Diamond', {
            width: 40,
            height: 60,
            margin: 4,
            fill: null,
          }),
          $(Shape, 'TriangleRight', {
            width: 40,
            height: 60,
            margin: 4,
            fill: null,
          }),
          $(Shape, 'TriangleDown', {
            width: 40,
            height: 60,
            margin: 4,
            fill: null,
          }),
          $(Shape, 'TriangleLeft', {
            width: 40,
            height: 60,
            margin: 4,
            fill: null,
          }),
          $(Shape, 'TriangleUp', {
            width: 40,
            height: 60,
            margin: 4,
            fill: null,
          }),
          $(Shape, 'MinusLine', {
            width: 40,
            height: 60,
            margin: 4,
            fill: null,
          }),
          $(Shape, 'PlusLine', {
            width: 40,
            height: 60,
            margin: 4,
            fill: null,
          }),
          $(Shape, 'XLine', {
            width: 40,
            height: 60,
            margin: 4,
            fill: null,
          }),
        ),
      );

      diagram.add(
        $(Part, 'Horizontal',
          $(Shape, {
            figure: 'Ellipse', width: 40, height: 40, margin: 4,
          }), // default fill and stroke are "black"
          $(Shape, {
            figure: 'Ellipse',
            width: 40,
            height: 40,
            margin: 4,
            fill: 'green',
          }),
          $(Shape, {
            figure: 'Ellipse',
            width: 40,
            height: 40,
            margin: 4,
            fill: 'green',
            stroke: null,
          }),
          $(Shape, {
            figure: 'Ellipse',
            width: 40,
            height: 40,
            margin: 4,
            fill: null,
            stroke: 'green',
          }),
          $(Shape, {
            figure: 'Ellipse',
            width: 40,
            height: 40,
            margin: 4,
            fill: null,
            stroke: 'green',
            strokeWidth: 3,
          }),
          $(Shape, {
            figure: 'Ellipse',
            width: 40,
            height: 40,
            margin: 4,
            fill: null,
            stroke: 'green',
            strokeWidth: 6,
          }),
          $(Shape, {
            figure: 'Ellipse',
            width: 40,
            height: 40,
            margin: 4,
            fill: 'green',
            background: 'orange',
          })),
      );
    });
    return {
      shape,
    };
  },
});
</script>

<style scoped>
.about {
  display: grid;
  grid: 1fr 1fr / 1fr;
  place-items: center;
}

#shape {
  width: 100%;
  height: 100%;
}
</style>
