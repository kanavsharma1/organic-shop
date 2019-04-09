import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthserviceService } from './authservice.service';

import { map, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGaurdService  {

  constructor(private auth: AuthserviceService , private userService: UserService) {


   }

   canActivate():Observable<boolean> {

   return this.auth.appUsers$.pipe(
    
        map(appUser=> appUser.isAdmin
        )
    )

   }
}
