import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth'
import { FirebaseApp } from '@angular/fire';
import { LoginInformation } from '../models/login-information.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  async loginViaEmailAndPassword(loginInfo: LoginInformation): Promise<any>  {





   return await this.angularFireAuth.signInWithEmailAndPassword(loginInfo.email , loginInfo.password)



  }



}
