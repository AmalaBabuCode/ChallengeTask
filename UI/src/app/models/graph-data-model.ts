export class GraphDataModel {
    id: string;
    name: string;
    data: GraphModel;

    constructor(graphdata: any) {
        this.id = graphdata.id;
        this.name = graphdata.name;
        this.data = new GraphModel(graphdata.data);
    }
}

export class GraphModel {
    nodes: NodeModel[] = [];
    edges: EdgeModel[] = [];

    constructor(data: any) {

        if (data) {
            if (data.nodes) {
                data.nodes.map((item) => {
                    const node = new NodeModel(item);
                    this.nodes.push(node);
                });
            }
            if (data.edges) {
                data.edges.map((item) => {
                    const edge = new EdgeModel(item);
                    this.edges.push(edge);
                });
            }
        }
    }
}

export class NodeModel {
    id: number;
    label: string;

    constructor(node: any) {
        this.id = node.id;
        this.label = node.label;
    }
}

export class EdgeModel {
    source: number;
    target: number;

    constructor(node: any) {
        this.source = node.source;
        this.target = node.target;
    }
}
