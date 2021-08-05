import { ProfileServiceService } from './website/pages/services/profile-service.service';
import { StaticsInformation } from './../models/statics-information.model';
import { SavedInformation } from './../models/saved-information.model';
import { UserInformation } from './../models/user-information.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { FirebaseApp } from '@angular/fire';
import { LoginInformation } from '../models/login-information.model';
import { OptionsInformation } from '../models/options-information.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  b: any;
  name: any;
  userName: any;
  userSurname: any;
  userClass: any;
  inviteCode: any;
  count:number;

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore, private profileS: ProfileServiceService) { }

  async loginViaEmailAndPassword(loginInfo: LoginInformation): Promise<any> {

    return await this.auth.signInWithEmailAndPassword(loginInfo.email, loginInfo.password)

  }

  profileGets() {
    this.profileS.getInfos().then((a: any) => { this.userName = a.name, this.userSurname = a.surname, this.userClass = a.class })
  }

  async userIdDbCreate() {
    this.b = (await this.auth.currentUser).uid
    let profileInfo: UserInformation = { name: this.name, class: "", picture: "https://firebasestorage.googleapis.com/v0/b/testmanager-fb88a.appspot.com/o/users%2FdefaultUserPicture%2Fsimge%20(1).png?alt=media&token=a6a1f1d0-d4b5-423b-8e91-48fea20e4e71" }
    let optionInfo: OptionsInformation = { PasswordChange: "", Premium: false, Class: "", invite: this.inviteCodeGenerate() }
    let savedInfo: SavedInformation = { Question: "link" }
    let statsInfo: StaticsInformation = { result: 5, lessonName: "türkçe", answer: "a,b,c" }
    //await this.firestore.collection('/users').doc(this.b).collection('/user').doc('/userInfo').set(a)
    await this.firestore.collection('/users').doc(this.b).collection('/profile').doc('/profileInfo').set(profileInfo)
    await this.firestore.collection('/users').doc(this.b).collection('/options').doc('/optionInfo').set(optionInfo)
    // await this.firestore.collection('/users').doc(this.b).collection('/saved').doc('/savedInfo').set(savedInfo)
    // await this.firestore.collection('/users').doc(this.b).collection('/stats').doc('/statsInfo').set(statsInfo)
    console.log(this.name)
  }
  async getRegisterName(inputRegisterName: String,counts:number) {
    this.name = inputRegisterName
    this.count = counts
  }
  inviteCodeGenerate() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 15; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;

  }



}
