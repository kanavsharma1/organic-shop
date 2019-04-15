import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable,of } from 'rxjs';
import { AppUser } from '../Models/app-user';
import { UserService } from './user.service';
import { map, switchMap } from 'rxjs/operators';
import 'rxjs-compat/add/observable/of';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user$:Observable<firebase.User>;
  constructor(
    private userService:UserService,
    private afAuth: AngularFireAuth,
    private  route: ActivatedRoute, 
    private router:Router) {

    this.user$=afAuth.authState;
     
  }
  

  login(){
   let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
   localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  
logout(){
  this.afAuth.auth.signOut();
}
get appUsers$(): Observable<AppUser> {

 return this.user$.pipe(switchMap( user=> {
   console.log(user)
   if(user) return  this.userService.get(user.uid).valueChanges();

   return Observable.of(null);
   

 

 }))
   
  }


}





