import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GraphService } from 'src/app/services/graph.service';

@Component({
  selector: 'app-add-graph',
  templateUrl: './add-graph.component.html',
  styleUrls: ['./add-graph.component.css']
})
export class AddGraphComponent implements OnInit {

  graphForm: FormGroup;
  isFormValid = false;
  graphName;
  constructor(public dialogRef: MatDialogRef<AddGraphComponent>,
              private api: GraphService) { }

  ngOnInit(): void {
    this.graphForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }



  onSubmit() {
    if (this.graphName) {
      this.api.createGraph(this.graphName).subscribe((res: any) => {
        this.closeDialog(this.graphName);
      }, (err) => {
        console.log(err, 'Error');
      });
    }
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
