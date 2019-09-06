import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, CanActivate } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthCanActivateGuard } from './guards/auth-can-activate.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
    canActivate:[AuthCanActivateGuard]
  },
  {
    path: 'dealbook',
    loadChildren: () => import('./dealbook/dealbook.module').then(mod => mod.DealbookModule),
    canActivate:[AuthCanActivateGuard]
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then(mod => mod.VideoModule),
    canActivate:[AuthCanActivateGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule),
    canActivate:[AuthCanActivateGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
