import { Module } from 'vuex';
import { DiagramGetters } from '@/constants';
import { DiagramState } from '@/interfaces';

const nodeDataArray = [
  { key: 'Alpha', loc: '0 60' },
  { key: 'Beta', loc: '100 15' },
  { key: 'Gamma', loc: '200 0' },
  { key: 'Delta', loc: '200 30' },
  { key: 'Epsilon', loc: '100 90' },
  { key: 'Zeta', loc: '200 60' },
  { key: 'Eta', loc: '200 90' },
  { key: 'Theta', loc: '200 120' },
  { key: 'End', loc: '0 0' },
];
const linkDataArray = [
  { from: 'Alpha', to: 'Beta' },
  { from: 'Beta', to: 'Gamma' },
  { from: 'Beta', to: 'Delta' },
  { from: 'Alpha', to: 'Epsilon' },
  { from: 'Epsilon', to: 'Zeta' },
  { from: 'Epsilon', to: 'Eta' },
  { from: 'Epsilon', to: 'Theta' },
  { from: 'Zeta', to: 'End' },
  { from: 'Eta', to: 'End' },
  { from: 'Theta', to: 'End' },
  { from: 'Delta', to: 'End' },
  { from: 'Gamma', to: 'End' },
];

const defaultState = (): DiagramState => ({
  diagram: {
    alias: 'Gatinhos',
    options: {
      initialContentAligment: 'center',
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
