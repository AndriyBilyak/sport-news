import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import customPages from '../mockedData/customPages';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-custom-pages',
  templateUrl: './custom-pages.component.html',
  styleUrls: ['./custom-pages.component.css'],
})
export class CustomPagesComponent implements OnInit, OnDestroy {
  roterParamsSubscription;
  pageContent;

  constructor(private route: ActivatedRoute, private appDataService: AppDataService) {}

  ngOnInit() {
    this.getPageContent();
    this.pageContent = customPages;
  }

  ngOnDestroy() {
    this.roterParamsSubscription.unsubscribe();
  }

  private getPageContent() {
    this.roterParamsSubscription = this.route.data.subscribe(data => {
      this.appDataService.getArticlesByCategory(data.categoryId).subscribe(data => {
        console.log(data);
      });
    });
  }
}
