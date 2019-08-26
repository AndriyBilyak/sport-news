import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,CanActivate,Router  } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthCanActivateGuard implements CanActivate {
  constructor(
    private router: Router
    // private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // const currentUser = this.authenticationService.currentUserValue;
        const currentUser = false; 
        if (currentUser) {
            return true;
        }

        this.router.navigate(['/login']);
        console.log('Enter in system')
        return false;
    }
}
