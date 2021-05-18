import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphViewComponent } from './components/graph-tile/graph-view/graph-view.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  // { path: 'home', component: LandingPageComponent },
  // { path: '', redirectTo: '', pathMatch: 'full' },
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  { path: 'home', component: LandingPageComponent },

  { path: 'graphView', component: GraphViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
