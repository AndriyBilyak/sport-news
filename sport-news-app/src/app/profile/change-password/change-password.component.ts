import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  typeInput = 'password';
  isVisible = false;
  oldP;
  newP;
  changed = false;
  submited = false;
  error = false;
  constructor(
    private amplifyService: AmplifyService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    console.log(this.amplifyService.auth());
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', [Validators.required, Validators.minLength(8)]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  changeType() {
    if (this.typeInput === 'password') {
      this.typeInput = 'text';
      this.isVisible = true;
    } else {
      this.typeInput = 'password';
      this.isVisible = false;
    }
  }

  changePass() {
    this.amplifyService.auth().changePassword(this.amplifyService.auth().user, this.oldP, this.newP)
      .then( () => {
        this.changed = true;
        setTimeout(() => {
          this.changed = false;
        }, 5000);
      })
      .catch(() => {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 5000);
      });
  }

  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }

  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }

}
