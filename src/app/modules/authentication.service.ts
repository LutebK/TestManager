import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth'
import { FirebaseApp } from '@angular/fire';
import { LoginInformation } from '../models/login-information.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) { }

  async loginViaEmailAndPassword(loginInfo: LoginInformation): Promise<any>  {

   return await this.auth.signInWithEmailAndPassword(loginInfo.email , loginInfo.password)

  }

  async userGroupsCreated(){
    this.firestore.collection('groups').add((await this.auth.currentUser).uid)
  }

}
