import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-more-articles',
  templateUrl: './more-articles.component.html',
  styleUrls: ['./more-articles.component.css'],
})
export class MoreArticlesComponent implements OnInit {
  @Input() clildMoreArticlesContent: Array<any>;
  moreArticlesFirst = [];
  moreArticlesLast = [];
  constructor() {}

  ngOnInit() {
    this.GetMoreArticles();
  }

  private GetMoreArticles() {
    this.moreArticlesFirst = this.clildMoreArticlesContent.slice(0, 3);
    this.moreArticlesLast = this.clildMoreArticlesContent.slice(3, 6);
  }
}
