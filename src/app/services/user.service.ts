import { Injectable } from '@angular/core';
import { FirebaseDatabase } from '@angular/fire';
import * as firebase from 'firebase';

import {AngularFireObject} from 'angularfire2/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { AppUser } from '../Models/app-user';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User){
    this.db.object('/users/'+ user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): AngularFireObject<AppUser> {
    console.log(uid);
 return this.db.object('/users/'+ uid);
  }
}
