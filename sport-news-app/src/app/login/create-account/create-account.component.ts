import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

// TODO: move svg from html to assets
// TODO: improve fields validation

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  createAccountForm: FormGroup;
  submitted = false;

  constructor(
    private frmBuilder: FormBuilder,
    private amplifyService: AmplifyService
  ) {}

  ngOnInit() {
    this.createAccountForm = this.frmBuilder.group({
      firstName: ['', [Validators.required]],
      secondName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get f() { return this.createAccountForm.controls; }

  onSubmit() {
    const values = this.createAccountForm.value
    this.submitted = true;
    console.log(this.createAccountForm)

    if (this.createAccountForm.invalid) {
      return;
    }


    this.amplifyService.auth().signUp({
      username: values.email,
      password: values.password,
      attributes: {
        'custom:firstName': values.firstName,
        'custom:lastName': values.secondName
      },
      validationData: [],
    })
    .then(data => {
      // TODO: show message like "Check your email ..." with button leads to login page
      console.log(data)
    })
    .catch(err => {
      // TODO: handle errors on create account
      console.log(err)
    });
  }
}
