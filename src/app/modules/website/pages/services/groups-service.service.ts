import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { GroupsDocument, GroupsInformation } from 'src/app/models/groups-information.model';
import { AngularFirestore } from '@angular/fire/firestore';

import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { environment } from 'src/environments/environment';
import { tr } from 'date-fns/locale';



@Injectable({
  providedIn: 'root'
})
export class GroupsServiceService {
  getGroupsId: any = "";
  userPath: any = ""
  firebaseId: string = ""
  constructor(private firestore: AngularFirestore, private aut: AngularFireAuth) {

  }

  getGroupsTsID(id: any) {
    return this.getGroupsId = id
  }

  async sendUserPath(path:any){
    this.userPath=path
  }


  async user() {
    return await this.firestore.doc("/users/" + this.userPath + "/profile/profileInfo").get()
  }

  async userİnviteCode() {
    return await this.firestore.collectionGroup("options", ref => ref.orderBy("invite"))
  }

  async findUserPath() {
    return await this.firestore.collectionGroup("options", ref => ref.where("invite", "==", this.getGroupsId)).get()
  }

  async usersAdded(users:GroupsInformation){
    return await this.firestore.collection('/users/').doc((await this.aut.currentUser).uid).collection('/groups').add(users)
  }

  async usersGetInfo(){
    return await this.firestore.collection('/users/'+ (await this.aut.currentUser).uid+"/groups").get()
  }

  // async userGets() {
  //   return await this.firestore.collection('/users/' + (await this.aut.currentUser).uid + '/groups/userAdded/addId').get()
  // }

  async userGet() {
    return await this.firestore.doc('/users/' + (await this.aut.currentUser).uid + '/profile/profileInfo').get();
  }

  // async userAdd(id: GroupsInformation) {
  //   return await this.firestore.collection('/users/').doc((await this.aut.currentUser).uid).collection('/groups/').doc('userAdded').update(id)
  // }

  async getPicture() {
    return await this.firestore.collection('/users/' + (await this.aut.currentUser).uid + 'profile/profileInfo').get()
  }
}
