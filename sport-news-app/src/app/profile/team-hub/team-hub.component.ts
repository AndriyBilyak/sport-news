import { Component, OnInit } from '@angular/core';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AppDataService } from '../../app-data.service';
import allTeams from '../../mockedData/teamHub.js';

@Component({
  selector: 'app-team-hub',
  templateUrl: './team-hub.component.html',
  styleUrls: ['./team-hub.component.css'],
})
export class TeamHubComponent implements OnInit {
  subscriptions;
  model: any;
  isShow = true;
  showSearch = true;

  constructor(private appDataService: AppDataService) {}

  ngOnInit() {
    this.getUserSubsctiptions();
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      switchMap(term => this.appDataService.getTeams(term))
    );

  formatter = (x: { name: string }) => x.name;

  changeShow() {
    this.isShow = !this.isShow;
  }

  showSearchItem() {
    this.showSearch = !this.showSearch;
  }

  deleteTeam(item) {
    if (this.isShow == false) {
      var index = this.subscriptions.indexOf(item);
      this.subscriptions.splice(index, 1);
    }
  }

  addTeam() {
    if (typeof this.model === 'object') {
      this.subscriptions.unshift(this.model);
      this.model = '';
    } else alert("You didn't select any team to add");
  }

  private getUserSubsctiptions() {
    this.appDataService.getSubscriptions().subscribe(data => {
      this.subscriptions = data;
    });
  }
}
