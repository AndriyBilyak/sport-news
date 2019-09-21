import { Component, OnInit, Input } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';
import statesWithFlags from '../../mockedData/searchHeaderData.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() isSignedIn: boolean;
  @Input() currentUser: any;
  model: any;

  constructor(private router: Router, private amplifyService: AmplifyService) {}

  ngOnInit() {}

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term =>
        term === ''
          ? []
          : statesWithFlags
              .filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
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
