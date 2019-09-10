import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContributorsRoutingModule } from './contributors-routing.module';
import { WritersProgramComponent } from './writers-program/writers-program.component';
import { TeamWritersProgramComponent } from './team-writers-program/team-writers-program.component';
import { IntershipProgramComponent } from './intership-program/intership-program.component';


@NgModule({
  declarations: [WritersProgramComponent, TeamWritersProgramComponent, IntershipProgramComponent],
  imports: [
    CommonModule,
    ContributorsRoutingModule
  ]
})
export class ContributorsModule { }
