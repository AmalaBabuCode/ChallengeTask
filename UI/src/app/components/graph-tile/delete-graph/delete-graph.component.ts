import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-graph',
  templateUrl: './delete-graph.component.html',
  styleUrls: ['./delete-graph.component.css']
})
export class DeleteGraphComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteGraphComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void { }

  closeDialog(bool?: any): void {
    this.dialogRef.close(bool);
  }

}
