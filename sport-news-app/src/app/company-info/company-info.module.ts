import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyInfoRoutingModule } from './company-info-routing.module';
import { NewsComponent } from './news/news.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { AboutSportNewsComponent } from './about-sport-news/about-sport-news.component';


@NgModule({
  declarations: [NewsComponent, AdvertisingComponent, EventsComponent, ContactComponent, AboutSportNewsComponent],
  imports: [
    CommonModule,
    CompanyInfoRoutingModule
  ]
})
export class CompanyInfoModule { }
