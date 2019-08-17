import { Component, OnInit, Output,Input  } from '@angular/core';
import { Router } from '@angular/router';

import CustomRoutesConfig from "./mockedData/customRoutesConfig"
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sport-news-app';
  navigationItems = [];
  

  constructor(private router: Router) {}

  ngOnInit() {
    this.addCustomPagesRoutes()
    this.getNavigationItems()
  }

  private addCustomPagesRoutes = () => {
    const customPagesRoutes = this.getCustomPagesRoutes()
    const routerConfig = this.router.config.concat(customPagesRoutes)

    this.router.resetConfig(routerConfig)
  }

  private getCustomPagesRoutes = () => {
    // TODO: call to BE will be implemented here to get routes config

    return CustomRoutesConfig.routes.map(route => {
      return {
        path: `${route.path}/:groupId/:articleId`,
        loadChildren: () => import('./custom-pages/custom-pages.module').then(mod => mod.CustomPagesModule)
      }
    })
  }

  private getNavigationItems = () => {
    this.navigationItems = this.router.config.map(routes => routes.path)
  }
}
