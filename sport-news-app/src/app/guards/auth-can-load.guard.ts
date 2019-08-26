import { Injectable } from '@angular/core';
import { CanLoad, Route,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthCanLoadGuard implements CanLoad {
  constructor(
    private router: Router
    // private authenticationService: AuthenticationService
    ) { }

    canLoad (route: Route): boolean {
        // const currentUser = this.authenticationService.currentUserValue;
        const currentUser = true; 
        if (currentUser) {
            return true
        }
        return false;
}
}
