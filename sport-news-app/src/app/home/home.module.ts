import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ArticleComponent } from './article/article.component';
import { BreakdownComponent } from './breakdown/breakdown.component';
import { PhotoOfTheDayComponent } from './photo-of-the-day/photo-of-the-day.component';
import { MostPopularCommentsComponent } from './most-popular-comments/most-popular-comments.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ReaderPoolComponent } from '../shared/layout/reader-pool/reader-pool.component';


@NgModule({
  declarations: [HomeComponent, ArticleComponent, BreakdownComponent, PhotoOfTheDayComponent, MostPopularCommentsComponent, CarouselComponent, ReaderPoolComponent,],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
