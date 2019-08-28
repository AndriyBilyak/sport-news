import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  result: null;
  submitted = false;
 
  constructor(
    private frmBuilder: FormBuilder
  ) {}

  ngOnInit() {
      // Form valid
    this.changePasswordForm = this.frmBuilder.group({
    email:["", [Validators.required, Validators.email]],
  })
    }
     get f() { return this.changePasswordForm.controls; }
     
    onSubmit() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this. changePasswordForm.invalid) {
          return;
      }
  
      this.result = this.changePasswordForm.value;
  }

}
