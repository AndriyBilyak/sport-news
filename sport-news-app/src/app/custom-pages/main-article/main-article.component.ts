import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-article',
  templateUrl: './main-article.component.html',
  styleUrls: ['./main-article.component.css']
})
export class MainArticleComponent implements OnInit {
  @Input() childMainArtContent: object;
  constructor() { }

  ngOnInit() {
  }

}
