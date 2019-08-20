import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { SidenavComponent } from './shared/layout/sidenav/sidenav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ButtonComponent } from './shared/layout/button/button.component';
import { ValidationFormComponent } from './shared/layout/footer/validation-form/validation-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    PageNotFoundComponent,
    ButtonComponent,
    ValidationFormComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AmplifyAngularModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
