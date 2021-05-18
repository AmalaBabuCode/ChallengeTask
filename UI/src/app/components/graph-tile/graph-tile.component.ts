import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DeleteGraphComponent } from './delete-graph/delete-graph.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graph-tile',
  templateUrl: './graph-tile.component.html',
  styleUrls: ['./graph-tile.component.css']
})
export class GraphTileComponent implements OnInit {

  @Input() data: any;
  @Output() deleteGraphData: any = new EventEmitter<any>();

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void { }

  ngOnChanges() {  }

  deleteGraph() {
    const dialogRef = this.dialog.open(DeleteGraphComponent, {
      height: '16%',
      width: '35%',
      disableClose: true,
      data: this.data
    });

    const subscription = dialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
        this.deleteGraphData.emit(this.data.id);
      }
    });
  }

  navigate() {
    this.router.navigate( ['graphView'], { queryParams: { id: this.data.id}});
  }

}
