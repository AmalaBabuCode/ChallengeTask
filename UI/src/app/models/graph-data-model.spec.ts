import { GraphDataModel } from './graph-data-model';

describe('GraphDataModel', () => {
  const grapData = {
    id: 'grph_1',
    name: 'Graph 1',
    data: {
      nodes: [
        {
          id: 'nd_1',
          label: 'Node 1'
        },
        {
          id: 'nd_2',
          label: 'Node 2'
        },
        {
          id: 'nd_3',
          label: 'Node 3'
        },
        {
          id: 'nd_4',
          label: 'Node 4'
        }
      ],
      edges: [
        {
          source: 'nd_1',
          target: 'nd_2'
        },
        {
          source: 'nd_1',
          target: 'nd_3'
        },
        {
          source: 'nd_1',
          target: 'nd_4'
        }
      ]
    }
  };
  it('should create a graph model', () => {
    expect(new GraphDataModel(grapData)).toBeTruthy();
  });
});
