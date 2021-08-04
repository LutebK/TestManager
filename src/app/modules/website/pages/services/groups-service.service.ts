import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { GroupsDocument, GroupsInformation } from 'src/app/models/groups-information.model';
import { AngularFirestore } from '@angular/fire/firestore';

import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { environment } from 'src/environments/environment';
import { LoginPage } from '../login/login.page';


@Injectable({
  providedIn: 'root'
})
export class GroupsServiceService {

  firebaseId:string=""
  constructor(private firestore: AngularFirestore,private aut:AngularFireAuth) {

  }


  async userGets() {
    return await this.firestore.collection('/users/'+ (await this.aut.currentUser).uid+'/userAdded').get()
  }
  async userGet(){
    return await this.firestore.doc('/profile/myan2MPgZ0SYRa87t666glNurEs2').get();
  }

  async userAdd(id: GroupsInformation){
    return await this.firestore.collection('/users/myan2MPgZ0SYRa87t666glNurEs2/userAdded').add(id)
}

  async getPicture(){
    return await this.firestore.collection('/profile/'+ (await this.aut.currentUser).uid).get().subscribe((a:any)=> {console.log(a.data().picture)})
  }
}
