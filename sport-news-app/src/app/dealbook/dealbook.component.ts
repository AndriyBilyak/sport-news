import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-dealbook',
  templateUrl: './dealbook.component.html',
  styleUrls: ['./dealbook.component.css'],
})
export class DealbookComponent implements OnInit {
  pageContent = null;

  constructor(private appDataService: AppDataService) {}

  ngOnInit() {
    this.getPageContent();
  }

  private getPageContent() {
    this.appDataService.getDealbookContent().subscribe(data => {
      this.pageContent = data;
    });
  }
}
