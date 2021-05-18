import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GraphTileComponent } from './components/graph-tile/graph-tile.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchComponent } from './components/search/search.component';
import { DeleteGraphComponent } from './components/graph-tile/delete-graph/delete-graph.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from './material-module';
import { AddGraphComponent } from './components/add-graph/add-graph.component';
import { GraphViewComponent } from './components/graph-tile/graph-view/graph-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GraphComponent } from './components/graph-tile/graph-view/graph/graph.component';

import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    GraphTileComponent,
    SearchComponent,
    LandingPageComponent,
    DeleteGraphComponent,
    AddGraphComponent,
    GraphViewComponent,
    NavbarComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteGraphComponent,
    AddGraphComponent,
    MaterialModule
  ]
})
export class AppModule { }
