import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPagesRoutingModule } from './custom-pages-routing.module';
import { CustomPagesComponent } from './custom-pages.component';
import { MainArticleComponent } from './main-article/main-article.component';
import { CommentsComponent } from './comments/comments.component';
import { MoreArticlesComponent } from './more-articles/more-articles.component';


@NgModule({
  declarations: [CustomPagesComponent, MainArticleComponent, CommentsComponent, MoreArticlesComponent],
  imports: [
    CommonModule,
    CustomPagesRoutingModule
  ]
})
export class CustomPagesModule { }
