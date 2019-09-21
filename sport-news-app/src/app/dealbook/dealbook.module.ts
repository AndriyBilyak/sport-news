import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealbookRoutingModule } from './dealbook-routing.module';
import { DealbookComponent } from './dealbook.component';
import { MainArticleComponent } from './main-article/main-article.component';
import { ArticleComponent } from './article/article.component';
import { AdBlockComponent } from './ad-block/ad-block.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DealbookComponent, MainArticleComponent, ArticleComponent, AdBlockComponent],
  imports: [CommonModule, DealbookRoutingModule, SharedModule],
})
export class DealbookModule {}
