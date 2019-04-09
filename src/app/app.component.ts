import { Component } from '@angular/core';
import { AuthserviceService } from './services/authservice.service';
import { Router } from '@angular/router';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private userService:UserService, private auth: AuthserviceService, private router:Router){
  auth.user$.subscribe(user=>{
    if(user){
      userService.save(user);
      let returnUrl=localStorage.getItem('returnUrl');
      router.navigate([returnUrl]);
      }
  });
 }



}
