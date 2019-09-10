import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';
import {VideoWidgetComponent} from '../video-widget/video-widget.component';
import { MostPopularCommentsComponent } from '../shared/layout/most-popular-comments/most-popular-comments.component';


@NgModule({
  declarations: [VideoComponent, VideoWidgetComponent, MostPopularCommentsComponent],
  imports: [
    CommonModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
