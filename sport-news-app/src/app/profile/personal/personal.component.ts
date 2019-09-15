import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  isSignedIn;
  currentUser = null;
  constructor(
    private amplifyService: AmplifyService,
  ) {}

  ngOnInit() {
    this.subscribeAuthState();
  }

  private subscribeAuthState() {
    return this.amplifyService.authStateChange$
      .subscribe(authState => {
        console.log(this.currentUser);
        console.log(authState);
        this.isSignedIn = authState.state === 'signedIn';
        if (!authState.user) {
          this.currentUser = null;
        } else {
          this.currentUser = authState.user;
        }
      });
  }

}
