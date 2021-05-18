import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { GraphService } from 'src/app/services/graph.service';

import { AddGraphComponent } from './add-graph.component';

describe('AddGraphComponent', () => {
  let component: AddGraphComponent;
  let fixture: ComponentFixture<AddGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientTestingModule
      ],
      declarations: [AddGraphComponent],
      providers: [
        GraphService,
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should create the app', async(inject([GraphService], (myService: GraphService) => {
  //   const fixture = TestBed.createComponent(AddGraphComponent);
  //   const app = fixture.debugElement.componentInstance;

  //   expect(app).toBeTruthy();
  // })));
});
