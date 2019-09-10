import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import {PersonalComponent} from './personal/personal.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {SurveysComponent} from './surveys/surveys.component';
import {TeamHubComponent} from './team-hub/team-hub.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'personal',
      },
      {
        path: 'personal',
        component: PersonalComponent,
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
      },
      {
        path: 'surveys',
        component: SurveysComponent,
      },
      {
        path: 'team-hub',
        component: TeamHubComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
