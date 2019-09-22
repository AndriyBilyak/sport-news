import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  pageContent = null;
  title = null;
  videos = null;
  constructor(private appDataService: AppDataService) {}

  ngOnInit() {
    this.getPageContent();
  }

  private getPageContent() {
    this.appDataService.getVideoContent().subscribe(data => {
      this.pageContent = data;
      this.videos = this.pageContent.videos;
      this.title = this.pageContent.pageTitle;
    });
  }
}
