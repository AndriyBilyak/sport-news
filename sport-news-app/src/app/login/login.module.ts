import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ButtonComponent } from '../shared/layout/button/button.component';


@NgModule({
  declarations: [LoginComponent,ButtonComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
