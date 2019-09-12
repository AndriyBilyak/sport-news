import { Component, OnInit } from '@angular/core';
import mockedDealbook from "../mockedData/mockedDealbook";

@Component({
  selector: 'app-dealbook',
  templateUrl: './dealbook.component.html',
  styleUrls: ['./dealbook.component.css']
})
export class DealbookComponent implements OnInit {
  mainArtContent = mockedDealbook.mainArticle;
  articleContent = mockedDealbook.article;
  adBlockContent = mockedDealbook.adBlock;
  constructor() { }

  ngOnInit() {
  }
}
