/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-empty-function */
import { ObjectData } from '@/interfaces';
import go from '@/shared/goJS';

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

const addConfigs = (config: any, model: go.GraphLinksModel, diagram: go.Diagram) => {
  model.nodeKeyProperty = 'key';
  model.nodeCategoryProperty = 'type';
  diagram.model = config.diagram.type;
  diagram.initialContentAlignment = config.diagram.options.initialContentAligment;
  diagram.padding = config.diagram.options.padding;
  diagram.allowDelete = config.diagram.options.allowDelete;
  diagram.allowCopy = config.diagram.options.allowCopy;
  diagram.allowMove = config.diagram.options.allowMove;
  diagram.layout = setupDiagramLayout();
};

const addNodeTemplate = (diagram: go.Diagram) => {
  diagram.nodeTemplate = $(go.Node, 'Auto',
    new go.Binding('location', 'loc', go.Point.parse),
    $(go.Shape, 'Ellipse', { fill: 'white' }),
    $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key')));
};

const addLinkTemplate = (diagram: go.Diagram) => {
  diagram.linkTemplate = $(go.Link, { routing: go.Link.Orthogonal, corner: 10 }, $(go.Shape));
};

const useGoJS = (
  diagramAlias: string,
  diagramOptions: any,
  diagramEl: HTMLDivElement,
  emit: VueEventEmitter,
  nodeDataArray: ObjectData[], linkDataArray: ObjectData[],
): go.Diagram => {
  console.log(diagramEl, nodeDataArray, linkDataArray);
  const diagramCreated = $(go.Diagram, diagramEl.id, {
    name: 'Diagram',
  });

  const model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
  const config = {
    diagram: {
      alias: 'Campaign',
      type: model,
      options: {
        initialContentAligment: go.Spot.Left,
        padding: 50,
        allowDelete: false,
        allowCopy: false,
        allowMove: false,
      },
      events: {
        clickDiagram: 'click:diagram',
      },
      data: {
        links: linkDataArray,
        nodes: nodeDataArray,
      },
    },
  };
  addConfigs(config, model, diagramCreated);
  addNodeTemplate(diagramCreated);
  addLinkTemplate(diagramCreated);
  // addEventListeners(config, emit, diagramCreated);
  return diagramCreated;
};

const listenersForDiagram = () => {};

export {
  useGoJS,
  listenersForDiagram,
};
