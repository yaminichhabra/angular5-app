import { Injectable }     from '@angular/core';
import { CanActivate, Router }    from '@angular/router';

import { CookieService } from './cookie.service';


@Injectable()
export class AuthenticatedRoutesGuard implements CanActivate {
    
    constructor(private router: Router, private cookieService: CookieService){
    }

    canActivate() : boolean {            
        let cookie = this.cookieService.getUserCookie();
        // If cookie exists, then navigate to view
        if(!cookie){
            this.router.navigate(['login']);
            return false;
        } else {
            return true;
        }
    }
}