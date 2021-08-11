import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { GroupsDocument, GroupsInformation } from 'src/app/models/groups-information.model';
import { AngularFirestore } from '@angular/fire/firestore';

import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { environment } from 'src/environments/environment';
import { tr } from 'date-fns/locale';
import { MessageInformation } from 'src/app/models/message-information.model';
import { AngularFireDatabase } from '@angular/fire/database';



@Injectable({
  providedIn: 'root'
})
export class GroupsServiceService {
  getGroupsId: any = "";
  userPath: any = ""
  firebaseId: string = ""
  constructor(private firestore: AngularFirestore, private aut: AngularFireAuth, private db: AngularFireDatabase) {

  }

  getGroupsTsID(id: any) {
    return this.getGroupsId = id
  }

  async sendUserPath(path:any){
    this.userPath=path
  }
  async rtdb(message:any,id:string){
    console.log("id: "+id+"\n"+'kendiId:'+(await this.aut.currentUser).uid)
    const userRef = this.db.database.ref("/users").on('child_added',async data=> console.log(data))
    return userRef
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

  async userDelete(id:string){
    await this.firestore.collection("/users/"+(await this.aut.currentUser).uid+"/groups").doc(id).delete()
  }

  async usersGetInfo(){
    return await this.firestore.collection('/users/'+ (await this.aut.currentUser).uid+"/groups").get()
  }

  async userMessageSend(id:string,messages:any[]){
    console.log(id)
    let mess: MessageInformation ={message:messages}
    await this.firestore.collection('/messages').doc((await this.aut.currentUser).uid).collection("/sendMessage").doc(id).set(mess)
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
