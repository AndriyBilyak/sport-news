import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, CanActivate } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthCanActivateGuard } from './guards/auth-can-activate.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
  },
  {
    path: 'dealbook',
    loadChildren: () => import('./dealbook/dealbook.module').then(mod => mod.DealbookModule),
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then(mod => mod.VideoModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule),
    canActivate: [AuthCanActivateGuard],
  },
  {
    path: 'company',
    loadChildren: () =>
      import('./company-info/company-info.module').then(mod => mod.CompanyInfoModule),
  },
  {
    path: 'contributors',
    loadChildren: () =>
      import('./contributors/contributors.module').then(mod => mod.ContributorsModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
