import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthserviceService } from './authservice.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor( private authService: AuthserviceService, private router: Router) { }

  canActivate(route, path: ActivatedRouteSnapshot){
    return  this.authService.user$.pipe(map((user=>{

      if(user)
      return true;
     
      this.router.navigate(['/login'],{queryParams:{returnUrl:path.url}});
     return false;
    })));

    
    
   
       
  }
}
