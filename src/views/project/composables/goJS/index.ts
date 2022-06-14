/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-empty-function */
import { ObjectData } from '@/interfaces';
import go from '@/shared/goJS';
import createDiagram from './createDiagram';

const create = (
  diagramAlias: string,
  diagramOptions: any,
  diagramEl: HTMLDivElement,
  emit: any,
  nodeDataArray: ObjectData[], linkDataArray: ObjectData[],
): go.Diagram => {
  const diagramCreated = createDiagram(
    diagramAlias, diagramOptions, diagramEl, emit, nodeDataArray, linkDataArray,
  );
  return diagramCreated;
};

const deleteDiagram = (
  diagramAlias: string,
  diagramOptions: any,
  diagramEl: HTMLDivElement,
  emit: any,
  nodeDataArray: ObjectData[], linkDataArray: ObjectData[],
): go.Diagram | void => {

};

const update = (

): go.Diagram | void => {

};

const useGoJS = {
  create,
  delete: deleteDiagram,
  update,
};

export default useGoJS;
