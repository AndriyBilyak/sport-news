import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';
import { AppDataService } from './app-data.service';

import CustomRoutesConfig from './mockedData/customRoutesConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sport-news-app';
  navigationItems = [];
  currentUser = null;
  isSignedIn = false;
  isLoginLayoutActivated = false;
  authStateSubscription;
  routerEventsSubscription;

  constructor(
    private router: Router,
    private amplifyService: AmplifyService,
    private appDataService: AppDataService
  ) {}

  ngOnInit() {
    this.subscribeAuthState();
    this.subscribeRouterEvents();
    this.getCustomRoutesConfig();
    this.extendRoutes();
    this.getNavigationItems();
  }

  ngOnDestroy() {
    this.authStateSubscription.unsubscribe();
    this.routerEventsSubscription.unsubscribe();
  }

  private getCustomRoutesConfig() {
    this.appDataService.getNavigationConfig().subscribe(data => {
      console.log(data);
    });
  }

  private extendRoutes() {
    const customPagesRoutes = this.getCustomPagesRoutes();
    const routerConfig = [...this.router.config];

    routerConfig.splice(routerConfig.length - 1, 0, ...customPagesRoutes);
    this.router.resetConfig(routerConfig);
  }

  private getCustomPagesRoutes() {
    // TODO: call to BE will be implemented here to get routes config

    return CustomRoutesConfig.routes.map(route => {
      return {
        path: `${route.path}`,
        loadChildren: () =>
          import('./custom-pages/custom-pages.module').then(mod => mod.CustomPagesModule),
        data: {
          categoryId: `${route.id}`,
        },
      };
    });
  }

  private getNavigationItems() {
    this.navigationItems = this.router.config.map(routes => routes.path);
  }

  private subscribeAuthState() {
    console.log(this.amplifyService.auth());
    this.authStateSubscription = this.amplifyService.authStateChange$.subscribe(authState => {
      this.isSignedIn = authState.state === 'signedIn';
      if (!authState.user) {
        this.currentUser = null;
      } else {
        this.currentUser = authState.user;
      }
    });
  }

  private subscribeRouterEvents() {
    this.routerEventsSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const routesWithLoginLayouts = [
          '/login',
          '/login/create-account',
          '/login/create-account',
          '/login/forgot-password',
          '/login/change-password',
          '/login/email',
        ];
        this.isLoginLayoutActivated = routesWithLoginLayouts.indexOf(event.url) >= 0;
      }
    });
  }
}
