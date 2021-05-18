import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddGraphComponent } from './components/add-graph/add-graph.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public searchInputValue: any;
  public location = location;
  public navText = 'Graphs App';
  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  callSearch(searchValue: any) {
    this.searchInputValue = searchValue;
  }

  createGraph(): void {
    const dialogRef = this.dialog.open(AddGraphComponent, {
      width: '35%',
      disableClose: true,
      // data: "hlo"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }
}
