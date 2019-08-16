import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPagesComponent } from './custom-pages.component';


const routes: Routes = [
  {
    path:'',
    component: CustomPagesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPagesRoutingModule { }
