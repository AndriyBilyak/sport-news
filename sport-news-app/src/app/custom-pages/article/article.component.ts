import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppDataService } from '../../app-data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  roterParamsSubscription;
  pageContent;

  constructor(private route: ActivatedRoute, private appDataService: AppDataService) {}

  ngOnInit() {
    this.getPageContent();
  }

  ngOnDestroy() {
    this.roterParamsSubscription.unsubscribe();
  }

  private getPageContent() {
    this.roterParamsSubscription = this.route.data.subscribe(data => {
      this.appDataService.getArticleById().subscribe(data => {
        this.pageContent = data;
      });
    });
  }
}
