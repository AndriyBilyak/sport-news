import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup} from '@angular/forms';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import  { Auth } from "aws-amplify";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  result: null;
  submitted = false;
  message = false;
  
 
  constructor(
    private frmBuilder: FormBuilder,
    private amplifyService: AmplifyService,
    private router: Router,
    public flashMessagesService: FlashMessagesService,
  ) {}

  ngOnInit() {
    this.forgotPasswordForm = this.frmBuilder.group({
    email:["", [Validators.required, Validators.email]],
  })
    }
     get f() { return this.forgotPasswordForm.controls; }
     
    onSubmit() {
      this.submitted = true;  
      const username = this.forgotPasswordForm.controls['email'].value    
      
      if (this.forgotPasswordForm.invalid) {
          return;
      }  

      this.amplifyService.auth().forgotPassword(
        username        
      )
      .then(data => {
        this.message = true;
        console.log(data)
      })
      .catch(err => {
        document.getElementById('email').classList.remove('invalid-input');
        document.getElementById('email').classList.add('valid-input');
        
          this.flashMessagesService.show( err.message, { cssClass: 'alert-danger', timeout: 5000 }); 
      });
    }
}



