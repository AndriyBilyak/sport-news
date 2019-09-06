import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';
import { AuthCanActivateGuard } from './guards/auth-can-activate.guard';

import CustomRoutesConfig from "./mockedData/customRoutesConfig"
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sport-news-app';
  navigationItems = [];
  currentUser =  null;
  signedIn = false

  constructor(private router: Router, private amplifyService: AmplifyService) {}

  ngOnInit() {
    this.subscribeAuthState()
    this.extendRoutes()
    this.getNavigationItems()
  }

  ngOnDestroy() {
    this.subscribeAuthState().unsubscribe()
  }

  private extendRoutes() {
    const customPagesRoutes = this.getCustomPagesRoutes();
    const routerConfig = [...this.router.config]

    routerConfig.splice(routerConfig.length - 1, 0, ...customPagesRoutes)

    if (this.currentUser) {
      routerConfig.splice(0, 1, { path: '', redirectTo: '/home', pathMatch: 'full' })
    } else {
      routerConfig.splice(routerConfig.length - 1, 1, { path: '**', redirectTo: '/login'})
    }

    this.router.resetConfig(routerConfig)
  }

  private getCustomPagesRoutes() {
    // TODO: call to BE will be implemented here to get routes config

    return CustomRoutesConfig.routes.map(route => {
      return {
        path: `${route.path}/:groupId/:articleId`,
        loadChildren: () => import('./custom-pages/custom-pages.module').then(mod => mod.CustomPagesModule),
        canActivate:[AuthCanActivateGuard]
      }
    })
  }

  private getNavigationItems() {
    this.navigationItems = this.router.config.map(routes => routes.path)
  }

  private subscribeAuthState() {
    return this.amplifyService.authStateChange$
      .subscribe(authState => {
        console.log(authState)
          this.signedIn = authState.state === 'signedIn';
          if (!authState.user) {
              this.currentUser = null;
          } else {
              this.currentUser = authState.user;
          }
    });
  }
}
