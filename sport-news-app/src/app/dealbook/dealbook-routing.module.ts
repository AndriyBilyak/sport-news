import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealbookComponent } from './dealbook.component';
import{ArticleComponent} from './article/article.component'

const routes: Routes = [
  {
    path:'',
    component: DealbookComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealbookRoutingModule { }
