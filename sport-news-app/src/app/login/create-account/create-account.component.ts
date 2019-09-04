import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

import { FlashMessagesService } from 'angular2-flash-messages';

import { publishReplay } from 'rxjs/operators';

// TODO: move svg from html to assets
// TODO: improve fields validation(done)

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  createAccountForm: FormGroup;
  submitted = false;
  message = false;

  constructor(
    private frmBuilder: FormBuilder,
    private amplifyService: AmplifyService,
    public flashMessagesService: FlashMessagesService,
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
        // TODO: show message like "Check your email ..." with button leads to login page (done)
        this.message = true;
        console.log(data)
      })
      .catch(err => {
        // TODO: handle errors on create account  
  
        if(err['code'] === "UsernameExistsException"){ 
          this.amplifyService.auth().signUp(values.email,values.password);
        }
        console.log(err);
        this.flashMessagesService.show(`User with this email ${values.email} allready exists`, { cssClass: 'alert-danger', timeout: 5000 });
        
      });
    
      
  
    }
    
}
