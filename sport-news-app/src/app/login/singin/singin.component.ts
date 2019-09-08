import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { EmailComponent } from '../email/email.component';

@Component({
  selector: 'app-singup',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})

// TODO: rename SingupComponent => SingInComponent(done)
// TODO: add form and validation (done)
// TODO:

export class SingupComponent implements OnInit {
  signInForm: FormGroup;
  submitted: boolean = false;
  authService: any;

  constructor(
    private amplifyService: AmplifyService,
    private router: Router,
    private frmBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.signInForm= this.frmBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })

  }

  get f() { return this.signInForm.controls; }

  logIn() {
    this.submitted = true;
    const values = this.signInForm.value
    // TODO: collect username and password form form and set into request
    console.log(this.signInForm)
    if (this.signInForm.invalid) {
      return;
    }
    this.amplifyService.auth().signIn(
     {
       username: values.email,
       password: values.password,
     }
    )
    .then(data => {
      // TODO: navigate to home page
      console.log(data)
      this.router.navigate(['./home']);
    })
    .catch(err => {
      // TODO: handle errors on login

      console.log(err)
      if (err.code === 'NotAuthorizedException' || err.code === 'UserNotFoundException' ) {
       console.log('registation')
    } 
     else if (err.code === 'NotAuthorizedException') {
        // The error happens when the incorrect password is provided
        console.log('password')
    } else if (err.code === 'UserNotFoundException') {
        // The error happens when the supplied username/email does not exist in the Cognito user pool
        console.log('email')
    } else {
        console.log(err);
    }
    });
  }

}
