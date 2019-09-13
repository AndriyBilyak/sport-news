import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

import CustomRoutesConfig from "./mockedData/customRoutesConfig"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sport-news-app';
  navigationItems = [];
  currentUser =  null;
  isSignedIn = false
  isLoginLayoutActivated = false

  constructor(private router: Router, private amplifyService: AmplifyService) {}

  ngOnInit() {
    this.subscribeAuthState()
    this.subscribeRouterEvents()
    this.extendRoutes()
    this.getNavigationItems()
  }

  ngOnDestroy() {
    this.subscribeAuthState().unsubscribe()
    this.subscribeRouterEvents().unsubscribe()
  }

  private extendRoutes() {
    const customPagesRoutes = this.getCustomPagesRoutes();
    const routerConfig = [...this.router.config]

    routerConfig.splice(routerConfig.length - 1, 0, ...customPagesRoutes)
    this.router.resetConfig(routerConfig)
  }

  private getCustomPagesRoutes() {
    // TODO: call to BE will be implemented here to get routes config

    return CustomRoutesConfig.routes.map(route => {
      return {
        path: `${route.path}`,
        loadChildren: () => import('./custom-pages/custom-pages.module').then(mod => mod.CustomPagesModule),
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
          this.isSignedIn = authState.state === 'signedIn';
          if (!authState.user) {
              this.currentUser = null;
          } else {
              this.currentUser = authState.user;
          }
    });
  }

  private subscribeRouterEvents() {
    return this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const routesWithLoginLayouts = [
          '/login',
          '/login/create-account',
          '/login/create-account',
          '/login/forgot-password',
          '/login/change-password',
          '/login/email']
        this.isLoginLayoutActivated = routesWithLoginLayouts.indexOf(event.url) >= 0
      }
    })
  }
}
