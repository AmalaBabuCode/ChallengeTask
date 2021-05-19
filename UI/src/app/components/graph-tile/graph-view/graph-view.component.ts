import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GraphService } from 'src/app/services/graph.service';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.css']
})
export class GraphViewComponent implements OnInit {

  public graphId;
  public graphData;
  public navText = '';

  constructor(private route: ActivatedRoute, private router: Router,
              private api: GraphService
  ) { }

  ngOnInit(): void {
    this.fetchGraphId();
  }

  fetchGraphId() {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(
        params => {
          this.graphId = params.id;
          if (this.graphId) {
            this.getGraph();
          }
        }
      );
    }
  }

  getGraph() {
    this.api.getGraph(this.graphId).subscribe((res: any) => {
       if (res) {
        this.navText = res.name;
        this.graphData = res;
      }
    },  (err) => {
      console.log(err, 'Error');
    });
  }
}
