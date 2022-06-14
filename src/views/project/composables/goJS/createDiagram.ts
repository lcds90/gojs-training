/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-empty-function */
import { DiagramState, ObjectData } from '@/interfaces';
import go from '@/shared/goJS';
import { unref } from 'vue';

const $ = go.GraphObject.make;

type VueEventEmitter = (eventName: string, ...args: unknown[]) => void;

const addEventListeners = (config: any, emit: VueEventEmitter, target: go.Diagram): void => {
  target.addChangedListener((e) => {
    if (['position', 'location'].includes(e.propertyName as string)) {
      emit('click:diagram');
    }
  });

  ['BackgroundSingleClicked', 'ViewportBoundsChanged'].forEach((evtType) => {
    target.addDiagramListener(evtType as go.DiagramEventName, () => {
      emit('click:diagram');
    });
  });
};

const setupDiagramLayout = (): go.LayeredDigraphLayout => {
  const diagramLayout = new go.LayeredDigraphLayout();
  diagramLayout.direction = 0;
  diagramLayout.layerSpacing = 100;
  return diagramLayout;
};

interface IInitialContentAlignment {
    [key: string]: go.Spot
}

const addConfigs = (diagramOptions: any, model: go.GraphLinksModel, diagram: go.Diagram) => {
  const config = unref(diagramOptions);
  const initialContentAlignment: IInitialContentAlignment = {
    center: go.Spot.Left,
  };
  model.nodeKeyProperty = 'key';
  model.nodeCategoryProperty = 'type';

  diagram.model = model;
  diagram.initialContentAlignment = initialContentAlignment[config.initialContentAligment];
  diagram.padding = config.padding;
  diagram.allowDelete = config.allowDelete;
  diagram.allowCopy = config.allowCopy;
  diagram.allowMove = config.allowMove;
  diagram.layout = setupDiagramLayout();
};

const addNodeTemplate = (diagram: go.Diagram) => {
  diagram.nodeTemplate = $(go.Node, 'Auto',
    new go.Binding('location', 'loc', go.Point.parse),
    $(go.Shape, 'Ellipse', { fill: 'white' }),
    $(go.TextBlock, { margin: 5, background: 'red' }, new go.Binding('text', 'key')));
};

const addLinkTemplate = (diagram: go.Diagram) => {
  diagram.linkTemplate = $(go.Link, { routing: go.Link.Orthogonal, corner: 10 }, $(go.Shape));
};

const createDiagram = (
  diagramAlias: string,
  diagramOptions: any,
  diagramEl: HTMLDivElement,
  emit: VueEventEmitter,
  nodeDataArray: ObjectData[], linkDataArray: ObjectData[],
): go.Diagram => {
  const diagramCreated = $(go.Diagram, diagramEl.id, {
    name: diagramAlias,
  });
  // console.log(diagramOptions.value);

  const model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
  addConfigs(diagramOptions, model, diagramCreated);
  addNodeTemplate(diagramCreated);
  addLinkTemplate(diagramCreated);
  // addEventListeners(config, emit, diagramCreated);
  return diagramCreated;
};

export default createDiagram;
