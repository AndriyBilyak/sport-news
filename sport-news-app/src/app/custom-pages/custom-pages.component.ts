import { Component, OnInit } from '@angular/core';
import customPages from '../mockedData/customPages';

@Component({
  selector: 'app-custom-pages',
  templateUrl: './custom-pages.component.html',
  styleUrls: ['./custom-pages.component.css'],
})
export class CustomPagesComponent implements OnInit {
  pageContent;
  constructor() {}

  ngOnInit() {
    this.pageContent = customPages;
  }
}
