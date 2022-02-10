<template>
  <div class="about">
    <h1>Bloco de textos</h1>
    <div ref="diagramDiv" id="diagramDiv"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, onMounted, HTMLAttributes,
} from 'vue';
import {
  Diagram, GraphObject, Panel, Part, Spot, TextBlock,
} from 'gojs';

export default defineComponent({
  setup() {
    const diagramDiv = ref();
    const $ = GraphObject.make;

    const renderFontWithColors = (diag: Diagram) => {
      const diagram = diag;
      diagram.add(
        $(Part, 'Vertical',
          $(TextBlock, { text: 'a Text Block' }),
          $(TextBlock, { text: 'a Text Block', stroke: 'red' }),
          $(TextBlock, { text: 'a Text Block', background: 'lightblue' }),
          $(TextBlock, { text: 'a Text Block', font: 'bold 14pt serif' })),
      );
    };

    const renderSizingAndClipping = (diag: Diagram) => {
      const diagram = diag;
      diagram.add(
        $(Part, 'Vertical',
          $(TextBlock, { text: 'a Text Block', background: 'lightgreen', margin: 2 }),
          $(TextBlock, {
            text: 'a Text Block',
            background: 'lightgreen',
            margin: 2,
            width: 100,
            height: 33,
          }),
          $(TextBlock, {
            text: 'a Text Block',
            background: 'lightgreen',
            margin: 2,
            width: 60,
            height: 33,
          }),
          $(TextBlock, {
            text: 'a Text Block',
            background: 'lightgreen',
            margin: 2,
            width: 50,
            height: 22,
          }),
          $(TextBlock, {
            text: 'a Text Block',
            background: 'lightgreen',
            margin: 2,
            width: 40,
            height: 9,
          })),
      );
    };

    const renderMaxLinesAndOverflow = (diag: Diagram) => {
      const diagram = diag;
      diagram.add(
        $(Part, 'Vertical',
          // Allow any number of lines, no clipping needed:
          $(TextBlock, {
            text: 'a Text Block that takes 4 lines',
            font: '14pt sans-serif',
            background: 'lightblue',
            overflow: TextBlock.OverflowClip /* the default value */,
            // No max lines
            margin: 2,
            width: 90,
          }),
          // Allow only 2 lines, OverflowClip:
          $(TextBlock, {
            text: 'a Text Block that takes 4 lines',
            font: '14pt sans-serif',
            background: 'lightblue',
            overflow: TextBlock.OverflowClip /* the default value */,
            maxLines: 2,
            margin: 2,
            width: 90,
          }),
          // Allow only 2 lines, OverflowEllipsis:
          $(TextBlock, {
            text: 'a Text Block that takes 4 lines',
            font: '14pt sans-serif',
            background: 'lightblue',
            overflow: TextBlock.OverflowEllipsis,
            maxLines: 2,
            margin: 2,
            width: 90,
          })),
      );
    };

    const renderWrapping = (diag: Diagram) => {
      const diagram = diag;
      diagram.add(
        $(Part, 'Vertical',
          $(TextBlock, { text: 'a Text Block', background: 'lightgreen', margin: 2 }),
          $(TextBlock, {
            text: 'a Text Block',
            background: 'lightgreen',
            margin: 2,
            width: 50,
            wrap: TextBlock.None,
          }),
          $(TextBlock, {
            text: 'a Text Block',
            background: 'lightgreen',
            margin: 2,
            width: 50,
            wrap: TextBlock.WrapDesiredSize,
          }),
          $(TextBlock, {
            text: 'a Text Block',
            background: 'lightgreen',
            margin: 2,
            width: 50,
            wrap: TextBlock.WrapFit,
          })),
      );
    };

    const renderTextAligned = (diagram: Diagram) => {
      diagram.add(
        $(Part, 'Vertical',
          $(TextBlock, { text: 'a Text Block', background: 'lightgreen', margin: 2 }),
          $(TextBlock, {
            text: 'a Text Block',
            background: 'lightgreen',
            margin: 2,
            width: 50,
            wrap: TextBlock.None,
          }),
          $(TextBlock, {
            text: 'a Text Block',
            background: 'lightgreen',
            margin: 2,
            width: 50,
            wrap: TextBlock.WrapDesiredSize,
          }),
          $(TextBlock, {
            text: 'a Text Block',
            background: 'lightgreen',
            margin: 2,
            width: 50,
            wrap: TextBlock.WrapFit,
          })),
      );

      diagram.add(
        $(Part, 'Horizontal',
          $(Panel, 'Vertical',
            { width: 150, defaultStretch: GraphObject.Horizontal },
            $(TextBlock, {
              text: "textAlign: 'left'",
              background: 'lightgreen',
              margin: 2,
              textAlign: 'left',
            }),
            $(TextBlock, {
              text: "textAlign: 'center'",
              background: 'lightgreen',
              margin: 2,
              textAlign: 'center',
            }),
            $(TextBlock, {
              text: "textAlign: 'right'",
              background: 'lightgreen',
              margin: 2,
              textAlign: 'right',
            })),
          $(Panel, 'Vertical',
            { width: 150, defaultStretch: GraphObject.None },
            $(TextBlock, {
              text: 'alignment: Left',
              background: 'lightgreen',
              margin: 2,
              alignment: Spot.Left,
            }),
            $(TextBlock, {
              text: 'alignment: Center',
              background: 'lightgreen',
              margin: 2,
              alignment: Spot.Center,
            }),
            $(TextBlock, {
              text: 'alignment: Right',
              background: 'lightgreen',
              margin: 2,
              alignment: Spot.Right,
            }))),
      );
      diagram.add(
        $(Part, 'Horizontal',
          $(TextBlock, {
            text: 'verticalAlignment: Top',
            verticalAlignment: Spot.Top,
            width: 170,
            height: 60,
            background: 'lightgreen',
            margin: 10,
          }),
          $(TextBlock, {
            text: 'verticalAlignment: Center',
            verticalAlignment: Spot.Center,
            width: 170,
            height: 60,
            background: 'lightgreen',
            margin: 10,
          }),
          $(TextBlock, {
            text: 'verticalAlignment: Bottom',
            verticalAlignment: Spot.Bottom,
            width: 170,
            height: 60,
            background: 'lightgreen',
            margin: 10,
          })),
      );
      diagram.add(
        $(Part, 'Vertical',
          $(TextBlock, {
            text: 'a Text Block\nwith three logical lines\nof text',
            background: 'lightgreen',
            margin: 2,
            isMultiline: false,
          }),
          $(TextBlock, {
            text: 'a Text Block\nwith three logical lines\nof text',
            background: 'lightgreen',
            margin: 2,
            isMultiline: true,
          }),
          $(TextBlock, {
            text: 'a Text Block\nwith three logical lines\nof centered text',
            background: 'lightgreen',
            margin: 2,
            isMultiline: true,
            textAlign: 'center',
          }),
          $(TextBlock, {
            text: 'a single line of centered text that should'
                            + ' wrap because we will limit the width',
            background: 'lightgreen',
            margin: 2,
            width: 80,
            wrap: TextBlock.WrapFit,
            textAlign: 'center',
          })),
      );

      diagram.add(
        $(Part, 'Vertical',
          $(TextBlock, {
            text: 'left aligned\n\u200B  indent two\n\u200B    indent four',
            background: 'lightgreen',
            margin: 2,
            width: 150,
          }),
          $(TextBlock, {
            text: '\u200B  This is an indented paragraph consisting of lots of text that wraps naturally.',
            background: 'lightgreen',
            margin: 2,
            width: 150,
          })),
      );
    };

    const renderTextFlipped = (diagram: Diagram) => {
      diagram.add(
        $(Part, 'Table',
          { defaultColumnSeparatorStrokeWidth: 3, defaultColumnSeparatorStroke: 'gray', defaultSeparatorPadding: 5 },
          $(TextBlock, {
            text: 'Hello',
            column: 0,
            margin: 2,
            font: '26px serif',
            flip: GraphObject.None,
          }),
          $(TextBlock, 'None (default)', { row: 1, column: 0 }),
          $(TextBlock, {
            text: 'Hello',
            column: 1,
            margin: 2,
            font: '26px serif',
            flip: GraphObject.FlipHorizontal,
          }),
          $(TextBlock, 'FlipHorizontal', { row: 1, column: 1 }),
          $(TextBlock, {
            text: 'Hello',
            column: 2,
            margin: 2,
            font: '26px serif',
            flip: GraphObject.FlipVertical,
          }),
          $(TextBlock, 'FlipVertical', { row: 1, column: 2 }),
          $(TextBlock, {
            text: 'Hello',
            column: 3,
            margin: 2,
            font: '26px serif',
            flip: GraphObject.FlipBoth,
          }),
          $(TextBlock, 'FlipBoth', { row: 1, column: 3 })),
      );
    };

    const renderTextCanBeEdited = (diagram: Diagram) => {
      diagram.add(
        $(Part,
          $(TextBlock,
            {
              text: 'select and then click to edit',
              background: 'lightblue',
              editable: true,
              isMultiline: false,
            })),
      );
      diagram.add(
        $(Part,
          $(TextBlock,
            {
              text: 'this one allows embedded newlines',
              background: 'lightblue',
              editable: true,
            })),
      );
    };
    onMounted(() => {
      const div: HTMLAttributes = diagramDiv?.value;
      const id = div.id || '';
      const diagram = $(Diagram, id);
      diagram.contentAlignment = Spot.Center;

      renderFontWithColors(diagram);
      renderSizingAndClipping(diagram);
      renderMaxLinesAndOverflow(diagram);
      renderWrapping(diagram);
      renderTextAligned(diagram);
      renderTextFlipped(diagram);
      renderTextCanBeEdited(diagram);
    });
    return {
      diagramDiv,
    };
  },
});
</script>

<style scoped>
  #diagramDiv {
    width: 100%;
    height: 90%;
  }
</style>
