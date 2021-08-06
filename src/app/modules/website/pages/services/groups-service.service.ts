import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { GroupsDocument, GroupsInformation } from 'src/app/models/groups-information.model';
import { AngularFirestore } from '@angular/fire/firestore';

import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class GroupsServiceService {

  inviteCodeGet1:any;
  firebaseId:string=""
  constructor(private firestore: AngularFirestore,private aut:AngularFireAuth) {

  }
  async users(){
    return await this.firestore.collection("/users/").get()
  }
  async userInviteCode(){
    return await this.firestore.doc("/users/"+ (await this.aut.currentUser).uid+"/options/optionInfo").get()
  }
  async userInviteCode2(id:String){
    return await this.firestore.doc("/users/"+ id+"/options/optionInfo").get()
  }

  async userGets() {
    return await this.firestore.collection('/users/'+ (await this.aut.currentUser).uid+'/groups/userAdded/addId').get()
  }
  async userGet(){
    return await this.firestore.doc('/users/'+ (await this.aut.currentUser).uid+'/profile/profileInfo').get();
  }

  inviteCodeGet(code:any){
    this.inviteCodeGet1=code
  }
  async userAdd(id: GroupsInformation){
    return await this.firestore.collection('/users/').doc((await this.aut.currentUser).uid).collection('/groups/').doc('userAdded').set(id)
}
  async getPicture(){
    return await this.firestore.collection('/users/'+ (await this.aut.currentUser).uid+'profile/profileInfo').get()
  }
  async userDbInsert(){

  }

}
