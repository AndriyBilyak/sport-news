import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  currentUser = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private amplifyService: AmplifyService
  ) { }

  ngOnInit() {
    this.currentUser = {
      'custom:firstName': 'Serhii',
      'custom:lastName': 'Shcheh',
      email: 'serhii.shchehelskyi.kn.2017@lpnu.ua'};
  }

}
