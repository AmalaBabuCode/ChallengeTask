import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AddGraphComponent } from './components/add-graph/add-graph.component';
import { DeleteGraphComponent } from './components/graph-tile/delete-graph/delete-graph.component';
import { GraphTileComponent } from './components/graph-tile/graph-tile.component';
import { GraphViewComponent } from './components/graph-tile/graph-view/graph-view.component';
import { GraphComponent } from './components/graph-tile/graph-view/graph/graph.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatDialogModule
      ],
      declarations: [
        AppComponent,
        SearchComponent,
        GraphTileComponent,
        LandingPageComponent,
        DeleteGraphComponent,
        AddGraphComponent,
        GraphViewComponent,
        NavbarComponent,
        GraphComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

});


@Component({
  selector: 'app-testhost-chart',
  template: `<app-chart [navText]=navText></app-chart>`,
})
export class TestHostComponent {
  navText = 'Graphs App';
}
