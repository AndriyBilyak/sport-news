import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AmplifyService } from 'aws-amplify-angular'
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'
import { FlashMessagesService } from 'angular2-flash-messages'
@Component({
  selector: 'app-singup',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css'],
})
export class SinginComponent implements OnInit {
  signInForm: FormGroup
  submitted: boolean = false
  authService: any

  constructor(
    private amplifyService: AmplifyService,
    private router: Router,
    private formBuilder: FormBuilder,
    public flashMessagesService: FlashMessagesService
  ) {}

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
  }

  get f() {
    return this.signInForm.controls
  }

  logIn() {
    this.submitted = true
    const values = this.signInForm.value

    if (this.signInForm.invalid) {
      return
    }

    this.amplifyService
      .auth()
      .signIn({
        username: values.email,
        password: values.password,
      })
      .then(() => {
        this.router.navigate(['./home'])
      })
      .catch(err => {
        // TODO: replace with FormControl methods
        const elements = document.querySelectorAll('.form-control')
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove('valid-input')
          elements[i].classList.add('invalid-input')
        }

        if (err.code === 'NotAuthorizedException' || 'UserNotFoundException') {
          this.flashMessagesService.show(`Incorrect user ID or password.Try again`, {
            cssClass: 'alert-danger',
            timeout: 5000,
          })
        } else {
          this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 5000 })
        }
      })
  }
}
