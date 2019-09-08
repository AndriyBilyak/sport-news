import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MustMatch } from './match-value.directive';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this. changePasswordForm = this.formBuilder.group({
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
