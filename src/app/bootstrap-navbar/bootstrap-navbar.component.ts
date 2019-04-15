import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthserviceService } from '../services/authservice.service';
import { AppUser } from '../Models/app-user';

@Component({
  selector: 'bootstrap-navbar',
  templateUrl: './bootstrap-navbar.component.html',
  styleUrls: ['./bootstrap-navbar.component.css']
})
export class BootstrapNavbarComponent  {
appUser: AppUser;
navbarOpen:boolean=false;
  constructor(private  authService: AuthserviceService) {   
authService.appUsers$.subscribe(user=>{ // appUser$ returns observable of type AppUser
  // console.log('navbarComponent:'+ user.isAdmin)
  this.appUser = user;
  // console.log('appUser :'+ this.appUser.isAdmin);
})
  }

  logout(){
   this.authService.logout();
  }

  toggleNavbar(){
    this.navbarOpen=!this.navbarOpen;
  }

}
