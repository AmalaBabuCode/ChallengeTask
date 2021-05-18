import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import ForceGraph3D, {
  ConfigOptions,
  ForceGraph3DInstance
} from '3d-force-graph';

import SpriteText from 'three-spritetext';

interface Node {
  id: number;
  label: string;
}

interface Edge {
  source: number;
  target: number;
}

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, AfterViewInit {

  @Input() graphData: any;
  @Input() maxHeight: any;

  private graph!: ForceGraph3DInstance;

  private nodes: Node[] = [];
  private links: Edge[] = [];

  private gData = {
    nodes: this.nodes,
    links: this.links

  };

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
   if (this.graphData) {
      this.nodes = this.graphData.nodes;
      this.links = this.graphData.edges;
      this.gData.nodes = this.nodes;
      this.gData.links = this.links;
    }
  }

  ngAfterViewInit(): void {

    this.graph = ForceGraph3D()(this.htmlElement);
    this.graph.linkColor((group) => group ? '#ffffff' : '#ff9c91');
    this.graph.linkWidth((group) => group ? 2 : 10);
    this.graph.d3Force('link').distance(({ group }) => (group ? 20 : 100));
    this.graph.graphData(this.gData);
    this.graph.nodeLabel('label');
    this.graph.nodeThreeObjectExtend(true);
    this.graph.nodeThreeObject(node => {
      const sprite = new SpriteText(node.label);
      sprite.text = node.label;
      sprite.color = 'White';
      sprite.textHeight = 8;
      // sprite.backgroundColor = 'false';
      // sprite.strokeColor = ''
      return sprite;
    });
    // this.graph.nodeVisibility(true);
    // this.graph.nodeAutoColorBy('group')
    this.graph.nodeColor('Blue');
    this.graph.nodeOpacity(0.5);
    this.windowResize();
  }

  @HostListener('window:resize')
  public windowResize(): void {
    const box = this.htmlElement.getBoundingClientRect();
    this.graph?.width(box.width);
    this.graph?.height(this.maxHeight ? this.maxHeight : 'fit-content');
    // @ts-ignore
    this.graph?.controls().handleResize();
  }

  private get htmlElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

}
