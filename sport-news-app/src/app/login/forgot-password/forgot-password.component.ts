import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup} from '@angular/forms';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  result: null;
  submitted = false;
  message = false;
  
 
  constructor(
    private frmBuilder: FormBuilder,
    private amplifyService: AmplifyService,
    private router: Router
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
      
      
      if (this. changePasswordForm.invalid) {
          return;
      }  
      // this.router.navigate(['/login/change-password']);
      this.message = true;
      const values = this.changePasswordForm.value;
    
      // this.amplifyService.auth().({
      //   username: values.email,
      //   validationData: [],
      // })

      // .then(data => {
      //   this.message = true;
      //   console.log(data)
      // })
      // .catch(err => {
      //     this.flashMessagesService.show( err.message, { cssClass: 'alert-danger', timeout: 5000 }); 
      // });
    }
}



