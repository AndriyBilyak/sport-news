import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createAccountForm: FormGroup;
  result: null;
  submitted = false;
 
  constructor(
    private frmBuilder: FormBuilder
  ) {}

  ngOnInit() {
      // Form valid
    this.createAccountForm = this.frmBuilder.group({
    first_name:["", [Validators.required]],
    second_name:["", [Validators.required]],
    email:["", [Validators.required, Validators.email]],
    password:["", [Validators.required, Validators.minLength(4)]]
  })
    }
     get f() { return this.createAccountForm.controls; }
    onSubmit() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this. createAccountForm.invalid) {
          return;
      }
  
      this.result = this.createAccountForm.value;
  }
  
}
