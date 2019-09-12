import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MustMatch } from './match-value.directive';
import { AmplifyService } from 'aws-amplify-angular';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  submitted = false;
  

  constructor(
    private formBuilder: FormBuilder,
    private amplifyService: AmplifyService,
    public flashMessagesService: FlashMessagesService,
    public router: Router,
    ) { }

  ngOnInit() {
    this. changePasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      code: ['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }
  get f() { return this. changePasswordForm.controls; };
   
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.changePasswordForm.invalid) {
        return;
    }

    let username = this.changePasswordForm.controls['email'].value; 
    let code = this.changePasswordForm.controls['code'].value; 
    let new_password = this.changePasswordForm.controls['confirmPassword'].value; 
    
    this.amplifyService.auth().forgotPasswordSubmit(
       username,code,new_password
    )

    .then(data => {
      console.log(data);
      this.router.navigate(['/login']);
      this.flashMessagesService.show( "You successfully change password" , { cssClass: 'alert-success', timeout: 5000 });
    })
    .catch(err => {
        
        this.flashMessagesService.show( err.message, { cssClass: 'alert-danger', timeout: 5000 }); 
        console.log(err);
        
    });
}
}
