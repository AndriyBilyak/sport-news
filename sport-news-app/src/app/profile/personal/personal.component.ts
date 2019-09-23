import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  personalForm: FormGroup;
  userFirstName;
  userLastName;
  userEmail;
  errorMessage;
  submited = false;
  changed = false;
  error = false;
  constructor(
    private amplifyService: AmplifyService,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.getUserData();
    this.personalForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    });
  }

  changeUserName() {
    this.submited = true;
    this.amplifyService.auth().updateUserAttributes(this.amplifyService.auth().user, {
      'custom:firstName': this.personalForm.value.firstName,
      'custom:lastName': this.personalForm.value.lastName,
    }).then(() => {
      this.changed = true;
      setTimeout(() => {
        this.changed = false;
      }, 5000);
    })
      .catch(err => {
        this.error = true;
        this.errorMessage = err;
        setTimeout(() => {
          this.error = false;
        }, 5000);
      });
  }

  getUserData() {
    this.userFirstName = this.amplifyService.auth().user.attributes["custom:firstName"];
    this.userLastName = this.amplifyService.auth().user.attributes["custom:lastName"];
    this.userEmail = this.amplifyService.auth().user.attributes.email;
  }

  get firstName() {
    return this.personalForm.get('firstName');
  }

  get lastName() {
    return this.personalForm.get('lastName');
  }
}
