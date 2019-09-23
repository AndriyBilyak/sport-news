import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPagesRoutingModule } from './custom-pages-routing.module';
import { CustomPagesComponent } from './custom-pages.component';
import { MainArticleComponent } from './main-article/main-article.component';
import { CommentsComponent } from './comments/comments.component';
import { MoreArticlesComponent } from './more-articles/more-articles.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    CustomPagesComponent,
    MainArticleComponent,
    CommentsComponent,
    MoreArticlesComponent,
    ArticlesComponent,
    ArticleComponent,
  ],
  imports: [CommonModule, CustomPagesRoutingModule],
})
export class CustomPagesModule {}
