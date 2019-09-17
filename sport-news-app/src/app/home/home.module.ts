import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ArticleComponent } from './article/article.component';
import { BreakdownComponent } from './breakdown/breakdown.component';
import { PhotoOfTheDayComponent } from './photo-of-the-day/photo-of-the-day.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ReaderPoolComponent } from './reader-pool/reader-pool.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    ArticleComponent,
    BreakdownComponent,
    PhotoOfTheDayComponent,
    CarouselComponent,
    ReaderPoolComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
