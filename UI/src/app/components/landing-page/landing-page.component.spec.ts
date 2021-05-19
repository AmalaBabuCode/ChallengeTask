import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement, SimpleChange } from '@angular/core';
import { GraphService } from 'src/app/services/graph.service';
import * as Rx from 'rxjs';
import { delay } from 'rxjs/operators';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let de: DebugElement;

  let matSnackBar: MatSnackBar;

  const mockMatSnackBar = {
    open: () => { }
  };

  const graphList = [
    {
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
    },
    {
      id: 'grph_2',
      name: 'Graph 2',
      data: {
        nodes: [
          {
            id: 'nd_1',
            label: 'Node 1'
          },
          {
            id: 'nd_2',
            label: 'Node 2'
          }
        ],
        edges: [
          {
            source: 'nd_1',
            target: 'nd_2'
          }
        ]
      }
    },
    {
      id: 'grph_3',
      name: 'Graph 3',
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
          },
          {
            id: 'nd_5',
            label: 'Node 5'
          },
          {
            id: 'nd_6',
            label: 'Node 6'
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
          },
          {
            source: 'nd_1',
            target: 'nd_5'
          }
        ]
      }
    }
  ];


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      declarations: [
        LandingPageComponent
      ],
      providers: [
        { provide: MatSnackBar, useValue: mockMatSnackBar }
      ]
    })
      .compileComponents();
    matSnackBar = TestBed.inject(MatSnackBar);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open create graph dialog', () => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    component.createGraph();
    fixture.detectChanges();

    const addGraph = document.getElementsByTagName('h2')[0] as HTMLHeadElement;
    expect(addGraph.innerText).toEqual('Create Graph');
  });

  it('should open matDialog', () => {
    const msg = 'Snackbar opened';
    const matSnackBarSpy = spyOn(matSnackBar, 'open').and.stub();
    component.openSnackBar(msg);
    expect(matSnackBarSpy).toHaveBeenCalled();
  });

  it('should delete', () => {
    const graphId = 'grph_2';
    component.deleteGraph(graphId);
    expect(graphList.filter((graph) => graph.id === graphId)).toBeTruthy();
  });

  it('should call ngOnChanges', () => {
    component.searchInputValue = '6';
    const pastSearchInputValue = component.searchInputValue;
    component.ngOnChanges({
      searchInputValue: new SimpleChange(null, component.searchInputValue, null)
    });
    fixture.detectChanges();

    expect(pastSearchInputValue).toBeTruthy(component.searchInputValue);
  });

  it('should start loading for getching graph list', () => {
    spyOn(component, 'getGraphlist').and.callThrough();
    fixture.detectChanges();
    expect(component.isLoading).toBe(true);
  });

  it('should call getAllGraphs and get response as empty array', fakeAsync(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(GraphService);
    const spy = spyOn(service, 'getAllGraphs').and.callFake(() => {
      return Rx.of([]).pipe();
    });
    component.getGraphlist();
    component.setGraphList(spy);
    // tick(1);
    fixture.detectChanges();
    expect(component.graphList).toEqual([]);
  }));

});
