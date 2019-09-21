import { Component, OnInit } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const allTeams: { name: string; photo: string; content: string }[] = [
  {
    photo: '../../../../assets/img/teams/barcelona.png',
    name: 'FC Barcelona',
    content: 'Some text',
  },
  {
    photo: '../../../../assets/img/teams/atalanta.svg',
    name: 'Atalanta B.C.',
    content: 'Some text',
  },
  {
    photo: '../../../../assets/img/teams/napoli.svg',
    name: 'S.S.C. Napoli',
    content: 'Some text',
  },
  {
    photo: '../../../../assets/img/teams/internazionale.svg',
    name: 'FC Internazionale Milano',
    content: 'Some text',
  },
  {
    photo: '../../../../assets/img/teams/milan.svg',
    name: 'A.C. Milan',
    content: 'Some text',
  },
  {
    photo: '../../../../assets/img/teams/fiorentina.svg',
    name: 'ACF Fiorentina',
    content: 'Some text',
  },
  {
    photo: '../../../../assets/img/teams/juventus.svg',
    name: 'Juventus F.C.',
    content: 'Some text',
  },
  {
    photo: '../../../../assets/img/teams/roma.svg',
    name: 'A.S. Roma',
    content: 'Some text',
  },
];

let selectedTeams1 = [
  {
    photo: '../../../../assets/img/teams/los_angeles_lakers.svg',
    name: 'Los Angeles Lakers',
    content: 'Some text',
  },
];

@Component({
  selector: 'app-team-hub',
  templateUrl: './team-hub.component.html',
  styleUrls: ['./team-hub.component.css'],
})
export class TeamHubComponent implements OnInit {
  public model: any;
  public isShow = true;
  public showSearch = true;

  selectedTeams = selectedTeams1;
  constructor() {}
  ngOnInit() {
    console.log(typeof this.model);
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term =>
        term === ''
          ? []
          : allTeams.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
      )
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
      var index = this.selectedTeams.indexOf(item);
      this.selectedTeams.splice(index, 1);
    }
  }

  addTeam() {
    if (typeof this.model === 'object') {
      this.selectedTeams.unshift(this.model);
      localStorage.setItem('array', JSON.stringify(selectedTeams1));
      selectedTeams1 = JSON.parse(localStorage.getItem('array'));
      console.log(typeof this.model);
      this.model = '';
    } else alert("You didn't select any team to add");
  }
}
