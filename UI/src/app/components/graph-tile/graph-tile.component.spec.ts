import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { GraphTileComponent } from './graph-tile.component';
import { GraphViewComponent } from './graph-view/graph-view.component';

describe('GraphTileComponent', () => {
  let component: GraphTileComponent;
  let fixture: ComponentFixture<GraphTileComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: 'graphView', component: GraphViewComponent }
        ])
      ],
      declarations: [GraphTileComponent]
    })
      .compileComponents();
    router = TestBed.get(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to graph view', async(() => {
    const navigateSpy = spyOn(router, 'navigate');
    component = fixture.componentInstance;

    component.data = {
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
    };
    fixture.detectChanges();
    component.navigate();
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalledWith(['graphView'], { queryParams: { id: 'grph_2' } });
  }));


  it('should call delete Graph', () => {
    expect(component.deleteGraph()).not.toBeTruthy();
  });

});
