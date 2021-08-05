import { UserInformation } from './../models/user-information.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth'
import { FirebaseApp } from '@angular/fire';
import { LoginInformation } from '../models/login-information.model';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  b:any;
  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) { }

  async loginViaEmailAndPassword(loginInfo: LoginInformation): Promise<any>  {

   return await this.auth.signInWithEmailAndPassword(loginInfo.email , loginInfo.password)

  }

  async userIdDbCreate(){
    this.b = (await this.auth.currentUser).uid
    // let a : UserInformation={userId: this.b}

    // await this.firestore.collection('/users').doc(this.b).collection('/groups').add(a)
    // await this.firestore.collection('/users').doc(this.b).collection('/profile').doc('/profileInfo').set(a)
    // await this.firestore.collection('/users').doc(this.b).collection('/options').add(a)
    // await this.firestore.collection('/users').doc(this.b).collection('/saved').add(a)
    // await this.firestore.collection('/users').doc(this.b).collection('/stats').add(a)

  }

}
