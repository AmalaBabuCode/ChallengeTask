import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GraphService } from 'src/app/services/graph.service';

@Component({
  selector: 'app-add-graph',
  templateUrl: './add-graph.component.html',
  styleUrls: ['./add-graph.component.css']
})
export class AddGraphComponent implements OnInit {

  public graphForm: FormGroup;
  public isFormValid = false;
  public graphName;
  public graphCreatedMsg;
  constructor(public dialogRef: MatDialogRef<AddGraphComponent>,
              private snackBar: MatSnackBar,
              private api: GraphService) { }

  ngOnInit(): void {
    this.graphForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.graphName) {
      this.api.createGraph(this.graphName).subscribe((res: any) => {
        this.graphCreatedMsg = res;
        this.closeDialog(this.graphName);
      }, (err) => {
        console.log(err, 'Error');
        this.openSnackBar();
      });
    }
  }

  openSnackBar() {
    const message = 'Some error occured. Please restart server';
    const action = 'OK';
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  validateForm() {
    this.graphName = this.graphForm.get('name').value;
    this.graphName = this.graphName.trim();
    if (this.graphName) {
      this.isFormValid = true;
    } else {
      this.isFormValid = false;
    }
  }

  closeDialog(bool?: any): void {
    this.dialogRef.close(bool);
  }

}
