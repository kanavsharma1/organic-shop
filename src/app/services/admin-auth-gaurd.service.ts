import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthserviceService } from './authservice.service';

import { map, switchMap } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGaurdService implements CanActivate {
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;

  constructor(private auth: AuthserviceService) {


   }

   canActivate():Observable<boolean> {

   return this.auth.appUsers$.pipe(    // appUser returning AppUser type 
    
        map(appUser=> appUser.isAdmin    // mapping the type AppUser to a Boolean type
        )
    )

   }
}
