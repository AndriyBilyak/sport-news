import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PersonalComponent } from './personal/personal.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SurveysComponent } from './surveys/surveys.component';
import { TeamHubComponent } from './team-hub/team-hub.component';


@NgModule({
  declarations: [ProfileComponent, PersonalComponent, ChangePasswordComponent, SurveysComponent, TeamHubComponent,],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
