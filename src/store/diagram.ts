import { Module } from 'vuex';
import { DiagramGetters } from '@/constants';
import { DiagramState } from '@/interfaces';

const nodeDataArray = [
  { key: 'Alpha' }, { key: 'Beta' }, { key: 'Gamma' }, { key: 'Delta' },
  { key: 'Epsilon' }, { key: 'Zeta' }, { key: 'Eta' }, { key: 'Theta' },
];
const linkDataArray = [
  { from: 'Beta', to: 'Alpha' },
  { from: 'Gamma', to: 'Alpha' },
  { from: 'Delta', to: 'Alpha' },
  { from: 'Alpha', to: 'Epsilon' },
  { from: 'Alpha', to: 'Zeta' },
  { from: 'Alpha', to: 'Eta' },
  { from: 'Alpha', to: 'Theta' },
];

const defaultState = (): DiagramState => ({
  diagram: {
    alias: 'Gatinhos',
    // type: model,
    options: {
      // initialContentAligment: go.Spot.Left,
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
});

const diagram: Module<DiagramState, any> = {
  state: defaultState(),
  getters: {
    [DiagramGetters.GET_ALIAS]: (state) => state.diagram.alias,
    [DiagramGetters.GET_EVENTS]: (state) => state.diagram.events,
    [DiagramGetters.GET_DATA]: (state) => state.diagram.data,
    [DiagramGetters.GET_OPTIONS]: (state) => state.diagram.options,
  },
  mutations: {},
  actions: {},
};

export default diagram;
