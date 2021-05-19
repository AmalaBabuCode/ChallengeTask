import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { GraphService } from './graph.service';

describe('GraphService', () => {
  let graphService: GraphService;
  let httpTestController: HttpTestingController;
  let getUrl = '';
  const createUrl = '/createGraph/';
  let graph;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestController = TestBed.get(HttpTestingController);
    graph = {
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
  });

  beforeEach(inject(
    [GraphService],
    (service: GraphService) => {
      graphService = service;
    }
  ));

  it('should  retrieve all graph list....', () => {
    let result;
    getUrl = 'http://localhost:3000/getAllGraphs';
    graphService.getAllGraphs().subscribe(t => {
      result = t;
    });
    const req = httpTestController.expectOne({
      method: 'GET',
      url: getUrl
    });
    req.flush([graph]);
    expect(result[0]).toEqual(graph);
  });

  it('should  fetch particular graph', () => {
    let result;
    const graphId = 'grph_2';
    getUrl = `http://localhost:3000/getGraph/${graphId}`;
    graphService.getGraph(graphId).subscribe(t => {
      result = t;
    });
    const req = httpTestController.expectOne(getUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(graphId);

    httpTestController.verify();

  });

  it('should call POST API to create a new graph', () => {
    const graphName = 'Graph z';
    getUrl = `http://localhost:3000/createGraph/${graphName}`;
    graphService.createGraph(graphName).subscribe();
    const req = httpTestController.expectOne({
      method: 'POST',
      url: getUrl
    });
    expect(req.request.body.name).toEqual(graphName);
  });
});
