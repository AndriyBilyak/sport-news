import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SingupComponent } from './singup/singup.component';
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
        component: SingupComponent,
      },
      {
        path:'forgotpassword',
        component: ForgotPasswordComponent,
      },
      {
        path:'email',
        component: EmailComponent,
      },
      {
        path:'changePassword',
        component: ChangePasswordComponent,
      },
      {
        path:'createAccount',
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
