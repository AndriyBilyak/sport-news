import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,CanActivate,Router,CanLoad,Route  } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

@Injectable({
  providedIn: 'root'
})

export class AuthCanActivateGuard implements  CanActivate{
  constructor(
    private router: Router,
    private amplifyService: AmplifyService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.amplifyService.auth().user;

    if (currentUser) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
