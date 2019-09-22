import { Component, OnInit, Input } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

// TODO: move data to mockedData folder
// TODO: display real user name and email
// TODO: add sharing via social media

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() isSignedIn: boolean;
  @Input() currentUser: any;
  model: any;
  pageUrl = window.location.href;
  constructor(private router: Router, private amplifyService: AmplifyService) {}

  ngOnInit() {
    console.log(this.pageUrl);
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term =>
        term === ''
          ? []
          : [].filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
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
