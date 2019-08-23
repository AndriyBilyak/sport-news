import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';
import {VideoWidgetComponent} from '../video-widget/video-widget.component';


@NgModule({
  declarations: [VideoComponent, VideoWidgetComponent],
  imports: [
    CommonModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
