import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private appDataService: AppDataService) {}

  ngOnInit() {
    this.getPageContent();
  }

  private getPageContent() {
    this.appDataService.getHomeContent().subscribe(data => {
      console.log(data);
    });
  }
}
