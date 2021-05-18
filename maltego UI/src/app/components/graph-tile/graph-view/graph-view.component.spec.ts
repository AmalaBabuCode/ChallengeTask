import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphViewComponent } from './graph-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { GraphService } from 'src/app/services/graph.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

describe('GraphViewComponent', () => {
  let component: GraphViewComponent;
  let fixture: ComponentFixture<GraphViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [GraphViewComponent],
      providers: [GraphService,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of(
              {
                id: 'grph_2'
              }
            )
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set graphId params from url ', () => {
    fixture.detectChanges();
    expect(component.graphId).toBe('grph_2');
  });
});
