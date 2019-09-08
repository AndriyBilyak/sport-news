import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { EmailComponent } from '../email/email.component';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-singup',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})


export class SinginComponent implements OnInit {
  signInForm: FormGroup;
  submitted: boolean = false;
  authService: any;
  

  constructor(
    private amplifyService: AmplifyService,
    private router: Router,
    private frmBuilder: FormBuilder,
    public flashMessagesService: FlashMessagesService,
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
      console.log(data)
      this.router.navigate(['./home']);
    })
    .catch(err => {    

       var elements = document.querySelectorAll('.form-control');

            for (var i=0; i<elements.length; i++) {
              elements[i].classList.remove('valid-input');
              elements[i].classList.add('invalid-input');
            }
            if ((err.code === 'NotAuthorizedException')||('UserNotFoundException')) {
              this.flashMessagesService.show( `Incorrect user ID or password.Try again`, { cssClass: 'alert-danger', timeout: 5000 }); 
            }
            else {
              this.flashMessagesService.show( err.message, { cssClass: 'alert-danger', timeout: 5000 }); 
             }  
    });
  }

}
