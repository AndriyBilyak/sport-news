import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealbookRoutingModule } from './dealbook-routing.module';
import { DealbookComponent } from './dealbook.component';
import { MainArticleComponent } from './main-article/main-article.component';
import { ArticleComponent } from './article/article.component';
import { MostPopularCommentsComponent } from '../shared/most-popular-comments/most-popular-comments.component';
import { AdBlockComponent } from './ad-block/ad-block.component';


@NgModule({
  declarations: [DealbookComponent, MainArticleComponent, MostPopularCommentsComponent, ArticleComponent, AdBlockComponent],
  imports: [
    CommonModule,
    DealbookRoutingModule
  ]
})
export class DealbookModule { }
