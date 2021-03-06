import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-singup',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css'],
})
export class SinginComponent implements OnInit {
  signInForm: FormGroup;
  submitted: boolean = false;
  authService: any;


  constructor(
    private amplifyService: AmplifyService,
    private router: Router,
    private formBuilder: FormBuilder,
    public flashMessagesService: FlashMessagesService
  ) {}

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get f() {
    return this.signInForm.controls;
  }

  logIn() {
    this.submitted = true;
    const values = this.signInForm.value;

    if (this.signInForm.invalid) {
      return;
    }

    this.amplifyService
      .auth()
      .signIn({
        username: values.email,
        password: values.password,
      })
      .then(() => {
        this.router.navigate(['./home']);
      })
      .catch(err => {

        if(err.code === 'NotAuthorizedException'){
          this.signInForm.controls['password'].setErrors({'incorrect': true});
          console.log( this.signInForm)
          this.flashMessagesService.show(`Incorrect user password.Try again`, {
            cssClass: 'alert-danger',
            timeout: 5000,
          });
        }
        else if (err.code === 'NotAuthorizedException' || 'UserNotFoundException' ){
          this.signInForm.controls['password'].setErrors({'incorrect': true});
          this.signInForm.controls['email'].setErrors({'incorrect': true});
          console.log( this.signInForm)
          this.flashMessagesService.show(`Incorrect user email or password.Try again`, {
            cssClass: 'alert-danger',
            timeout: 5000,
          });
        }
        else {
          this.signInForm.controls['email'].setErrors({'incorrect': true});
          this.signInForm.controls['password'].setErrors({'incorrect': true});
          this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 5000 });
        }
      });
  }
}
