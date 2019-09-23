import { Component, OnInit, Input } from '@angular/core';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

import { AppDataService } from '../../app-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() isSignedIn: boolean;
  @Input() currentUser: any;
  model: any;

  constructor(
    private router: Router,
    private amplifyService: AmplifyService,
    private appDataService: AppDataService
  ) {}

  ngOnInit() {}

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      switchMap(term => this.appDataService.findContent(term))
    );

  formatter = (x: { name: string }) => x.name;

  singOut() {
    this.amplifyService
      .auth()
      .signOut()
      .then(data => {
        this.router.navigate(['/login']);
      })
      .catch(err => {
        // TODO: handle errors
        console.log(err);
      });
  }
}
