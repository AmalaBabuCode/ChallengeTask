import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { GraphService } from 'src/app/services/graph.service';
import { By } from '@angular/platform-browser';

import { AddGraphComponent } from './add-graph.component';
import { DebugElement } from '@angular/core';

describe('AddGraphComponent', () => {
  let component: AddGraphComponent;
  let fixture: ComponentFixture<AddGraphComponent>;
  let matSnackBar: MatSnackBar;
  let debugElement: DebugElement;
  const event = new KeyboardEvent('keyup', {
    bubbles: true, cancelable: true, shiftKey: false
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        MatSnackBarModule
      ],
      declarations: [AddGraphComponent],
      providers: [
        GraphService,
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();
    matSnackBar = TestBed.inject(MatSnackBar);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open matDialog', () => {
    const matSnackBarSpy = spyOn(matSnackBar, 'open').and.stub();
    component.openSnackBar();
    expect(matSnackBarSpy).toHaveBeenCalled();
  });

  it('should graph name is invalid', () => {
    const graphName = component.graphForm.controls.name;
    graphName.setValue('');
    expect(graphName.valid).toBeFalsy();
    expect(graphName.errors.required).toBeTruthy();
  });

  it('should graph name is valid', () => {
    const graphName = component.graphForm.controls.name;
    graphName.setValue('Graph 10');
    expect(graphName.errors).toBeNull();
  });

  it('should validate graph name', () => {
    const input = fixture.debugElement.query(By.css('.form-control'));
    const inputElement = input.nativeElement;
    inputElement.value = 'Graph 009';
    inputElement.dispatchEvent(event);
    debugElement = fixture.debugElement;
    const name = component.graphForm.controls.name.value;

    expect(component.graphName).toBe(name);
  });

  it('should test form validity', () => {
    const form = component.graphForm;
    expect(form.valid).toBeFalsy();

    const graphName = form.controls.name;
    graphName.setValue('Graph 009');
    expect(form.valid).toBeTruthy();
  });

});
