import { Component, NgModule } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DeleteGraphComponent } from './delete-graph.component';

describe('DeleteGraphComponent', () => {
  let component: DeleteGraphComponent;
  let fixture: ComponentFixture<DeleteGraphComponent>;

  let dialog: MatDialog;
  let overlayContainerElement: HTMLElement;

  let noop: ComponentFixture<NoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        DialogTestModule
      ],
      declarations: [DeleteGraphComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: OverlayContainer, useFactory: () => {
            overlayContainerElement = document.createElement('div');
            return { getContainerElement: () => overlayContainerElement };
          }
        }
      ]
    })
      .compileComponents();
    dialog = TestBed.get(MatDialog);

    noop = TestBed.createComponent(NoopComponent);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('shows information without details', () => {
  //   const config = {
  //     data: {
  //       title: 'User cannot be saved without an email',
  //       details: []
  //     }
  //   };
  //   dialog.open(DeleteGraphComponent, config);

  //   noop.detectChanges(); // Updates the dialog in the overlay

  //   const h2 = overlayContainerElement.querySelector('#mat-dialog-title-0');
  //   const button = overlayContainerElement.querySelector('button');

  //   expect(h2.textContent).toBe('User cannot be saved without an email');
  //   expect(button.textContent).toBe('Close');
  // });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // it('should close dialog when close button clicked', fakeAsync(() => {
  //   component.closeDialog(true);
  //   fixture.detectChanges();
  //   tick();
  //   expect(component).toBeTruthy('dialog closed');
  // }));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // it('shows an error message with some details', () => {

  //   const config = {
  //     data: {
  //       title: 'Validation Error - Not Saved',
  //       details: ['Need an email', 'Username already in use']
  //     }
  //   };
  //   dialog.open(DeleteGraphComponent, config);

  //   noop.detectChanges(); // Updates the dialog in the overlay

  //   const h4 = overlayContainerElement.querySelectorAll('h4');
  //   expect(h4).
  //   expect(h4.).toContain('Username already in use');
  // });

});

// Noop component is only a workaround to trigger change detection
@Component({
  template: ''
})
class NoopComponent { }

const TEST_DIRECTIVES = [
  DeleteGraphComponent,
  NoopComponent
];

@NgModule({
  imports: [MatDialogModule, NoopAnimationsModule],
  exports: TEST_DIRECTIVES,
  declarations: TEST_DIRECTIVES,
  entryComponents: [
    DeleteGraphComponent
  ],
})
class DialogTestModule { }

