import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ButtonComponent } from '../shared/layout/button/button.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SingupComponent } from './singin/singin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EmailComponent } from './email/email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FlashMessagesModule } from 'angular2-flash-messages';




@NgModule({
  declarations: [LoginComponent,ButtonComponent, CreateAccountComponent, SingupComponent, ForgotPasswordComponent, EmailComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    FlashMessagesModule.forRoot()
  ]
})
export class LoginModule { }
