export interface ObjectData {
  [index: string]: any;
}

export interface DiagramState {
  diagram: {
    alias: string,
    events: {
      clickDiagram: string,
    },
    options: {
      initialContentAligment: string,
      padding: number,
      allowDelete: boolean,
      allowCopy: boolean,
      allowMove: boolean,
    }
    data: {
      links: Array<any>
      nodes: Array<any>
    },
  }
}
