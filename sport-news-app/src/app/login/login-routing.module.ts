import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SinginComponent } from './singin/singin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EmailComponent } from './email/email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    children:[
      {
        path:'',
        component: SinginComponent,
      },
      {
        path:'forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path:'change-password',
        component: ChangePasswordComponent,
      },
      {
        path:'create-account',
        component: CreateAccountComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
