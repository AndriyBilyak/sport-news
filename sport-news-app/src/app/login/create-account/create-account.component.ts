import { element } from 'protractor'
import { Component, OnInit } from '@angular/core'
import { AmplifyService } from 'aws-amplify-angular'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

import { FlashMessagesService } from 'angular2-flash-messages'

// TODO: move svg from html to assets

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  createAccountForm: FormGroup
  submitted = false
  message = false

  constructor(
    private frmBuilder: FormBuilder,
    private amplifyService: AmplifyService,
    public flashMessagesService: FlashMessagesService
  ) {}

  ngOnInit() {
    this.createAccountForm = this.frmBuilder.group({
      firstName: ['', [Validators.required]],
      secondName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  get f() {
    return this.createAccountForm.controls
  }

  onSubmit() {
    const values = this.createAccountForm.value
    this.submitted = true

    if (this.createAccountForm.invalid) {
      return
    }

    this.amplifyService
      .auth()
      .signUp({
        username: values.email,
        password: values.password,
        attributes: {
          'custom:firstName': values.firstName,
          'custom:lastName': values.secondName,
        },
        validationData: [],
      })

      .then(() => {
        this.message = true
      })
      .catch(err => {
        if (err['code'] === 'UsernameExistsException') {
          this.flashMessagesService.show(`User with this email ${values.email} allready exists`, {
            cssClass: 'alert-danger',
            timeout: 5000,
          })
        } else {
          this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 5000 })
        }
      })
  }
}
