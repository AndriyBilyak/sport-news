import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})

// TODO: rename SingupComponent => SingInComponent(done)
// TODO: add form and validation
// TODO:

export class SingupComponent implements OnInit {
  signInForm: FormGroup;
  submitted: boolean = false;

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
    // TODO: collect username and password form form and set into request
    console.log(this.signInForm)
    if (this.signInForm.invalid) {
      return;
    }
    this.amplifyService.auth().signIn(
      {
        username: 'andriy.mbilyak@gmail.com',
        password: 'testtest'
      }
    )
    .then(data => {
      // TODO: navigate to home page
      this.router.navigate(['./home']);
    })
    .catch(err => {
      // TODO: handle errors on login
      console.log(err)
    });
  }

}
