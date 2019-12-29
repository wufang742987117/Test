import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component'

const routes: Routes = [
  {
    path: 'chart',
    component: AppComponent
  },
  {
    path:'**',
    redirectTo:'chart'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
