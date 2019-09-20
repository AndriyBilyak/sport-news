import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  userFirstName;
  userLastName;
  userEmail;
  constructor(
    private amplifyService: AmplifyService,
  ) {}

  ngOnInit() {
    this.userFirstName = this.amplifyService.auth().user.attributes["custom:firstName"];
    this.userLastName = this.amplifyService.auth().user.attributes["custom:lastName"];
    this.userEmail = this.amplifyService.auth().user.attributes.email;
    console.log(this.amplifyService.auth());
  }
}
