import { Injectable } from '@angular/core';
import { UserDocument, UserInformation } from 'src/app/models/user-information.model';
import { AngularFirestore } from '@angular/fire/firestore';

import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GroupsServiceService {

  constructor(private firestore: AngularFirestore) {

  }


  async userGets() {
    return await this.firestore.collection('/applications/'+environment.firebaseConfig.appId+'/users').get()

  }

  async userAdd(data:UserDocument, id: String){
    return await this.firestore.collection('/applications/'+environment.firebaseConfig.appId+'/users/'+data.userId+'/addedUsers').add(id)
  }


}


