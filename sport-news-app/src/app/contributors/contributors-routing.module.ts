import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WritersProgramComponent } from './writers-program/writers-program.component';
import { TeamWritersProgramComponent } from './team-writers-program/team-writers-program.component';
import { IntershipProgramComponent } from './intership-program/intership-program.component';

const routes: Routes = [
  {
    path:'writers-program',
    component: WritersProgramComponent,
  },
  {
    path:'team-writers-program',
    component: TeamWritersProgramComponent,
  },
  {
    path:'intership-program',
    component: IntershipProgramComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContributorsRoutingModule { }
