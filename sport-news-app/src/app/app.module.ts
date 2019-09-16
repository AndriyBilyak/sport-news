import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule} from '@angular/forms';


import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ButtonComponent } from './shared/button/button.component';
import { ValidationFormComponent } from './shared/footer/validation-form/validation-form.component';
import { AuthCanActivateGuard } from './guards/auth-can-activate.guard';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    PageNotFoundComponent,
    ValidationFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AmplifyAngularModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [AmplifyService, AuthCanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
