import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-custom-pages',
  templateUrl: './custom-pages.component.html',
  styleUrls: ['./custom-pages.component.css'],
})
export class CustomPagesComponent implements OnInit, OnDestroy {
  roterParamsSubscription;
  articles;

  constructor(private route: ActivatedRoute, private appDataService: AppDataService) {}

  ngOnInit() {
    this.getPageContent();
  }

  ngOnDestroy() {
    this.roterParamsSubscription.unsubscribe();
  }

  private getPageContent() {
    // TODO: get data by conference
    // TODO: get data by team
    this.roterParamsSubscription = this.route.data.subscribe(data => {
      this.appDataService.getArticlesByCategory(data.categoryId).subscribe(data => {
        this.articles = data;
      });
    });
  }
}
