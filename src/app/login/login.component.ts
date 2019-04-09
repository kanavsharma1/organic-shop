import { Component} from '@angular/core';

import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private authService: AuthserviceService) {
    
   }

login()
{
this.authService.login();

}

}
