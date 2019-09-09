import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { AboutSportNewsComponent } from './about-sport-news/about-sport-news.component';


const routes: Routes = [
  {
    path:'about',
    component: AboutSportNewsComponent,
  },
  {
    path:'news',
    component: NewsComponent,
  },
  {
    path:'advertising',
    component: AdvertisingComponent,
  },
  {
    path:'events',
    component: EventsComponent,
  },
  {
    path:'contacts',
    component: ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyInfoRoutingModule { }
