import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GraphDataModel } from 'src/app/models/graph-data-model';
import { GraphService } from 'src/app/services/graph.service';
import { AddGraphComponent } from '../add-graph/add-graph.component';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnChanges {

    @Input() searchInputValue: any;

    public graphList: GraphDataModel[] = [];
    public resultList: GraphDataModel[] = [];

    public isNoData = false;
    public isLoading = false;
    public isSearchValue = false;
    constructor(private api: GraphService,
                private snackBar: MatSnackBar,
                public dialog: MatDialog) { }

    ngOnInit(): void {
        this.getGraphlist();
    }

    getGraphlist() {
        this.isLoading = true;
        this.api.getAllGraphs().subscribe((res: any) => {
            this.graphList = [];
            this.isLoading = false;
            this.setGraphList(res);
            if (this.graphList.length) {
                this.isNoData = false;
            } else {
                this.isNoData = true;
            }
        }, (err) => {
            console.log(err, 'Error');
          }
        );
    }

    setGraphList(result) {
        if (result.length) {
            result.map((graph) => {
                const currentGraph = new GraphDataModel(graph);
                this.graphList.push(currentGraph);
            });
        }
    }

    deleteGraph(id) {
        this.isLoading = true;

        this.api.deleteGraph(id).subscribe((res: any) => {
            const message = 'Graph deleted successfully';
            this.openSnackBar(message);
            this.isLoading = false;
            this.graphList = res;
        }, (err) => {
            console.log(err, 'Error');
          }
        );
    }

    openSnackBar(message) {
        const action = 'OK';
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }

    createGraph(): void {
        const dialogRef = this.dialog.open(AddGraphComponent, {
            width: '35%',
            disableClose: true,
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const message = 'Graph created successfully';
                this.openSnackBar(message);
                this.getGraphlist();
            }
        });
    }


    ngOnChanges(changes: SimpleChanges) {
        if (changes.searchInputValue && changes.searchInputValue.currentValue !== undefined) {
            if (this.searchInputValue !== '') {
                this.isLoading = true;
                this.isSearchValue = true;
                this.doSearch();
            } else {
                this.isSearchValue = false;
                this.getGraphlist();
            }
        }
    }

    doSearch() {
        this.isLoading = false;
        this.searchGraph();
        this.isNoData = false;
        if (this.resultList.length > 0) {
            this.isNoData = false;
            this.graphList = this.resultList;
        } else {
            this.isNoData = true;
        }
    }

    searchGraph() {
        this.resultList = [];
        this.graphList.forEach(graph => {
            let searchString = '';
            graph.data.nodes?.forEach(node => {
                searchString = searchString + node.label + '';
            });
            searchString = searchString.toLowerCase();
            if (searchString.includes(this.searchInputValue.toLowerCase())) {
                this.resultList.push(graph);
            }
        });

    }

}
