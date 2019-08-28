import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealbookRoutingModule } from './dealbook-routing.module';
import { DealbookComponent } from './dealbook.component';
import { MainArticleComponent } from './main-article/main-article.component';
import { ArticleComponent } from './article/article.component';
import { MostPopularCommentsComponent } from './most-popular-comments/most-popular-comments.component';


@NgModule({
  declarations: [DealbookComponent, MainArticleComponent, ArticleComponent, MostPopularCommentsComponent],
  imports: [
    CommonModule,
    DealbookRoutingModule
  ]
})
export class DealbookModule { }
