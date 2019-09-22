import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PersonalComponent } from './personal/personal.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SurveysComponent } from './surveys/surveys.component';
import { TeamHubComponent } from './team-hub/team-hub.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    PersonalComponent,
    ChangePasswordComponent,
    SurveysComponent,
    TeamHubComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, FormsModule, ReactiveFormsModule, NgbModule],
  exports: [],
})
export class ProfileModule {}
