import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  name:any;
  constructor(private afs: AngularFirestore, private storage: AngularFireStorage, private aut: AngularFireAuth) { }

  async getCurrentUid() {
    return (await this.aut.currentUser).uid
  }

  getInfos() {
    return this.getProfileInfos().then(t => t.subscribe((s: any) => console.log(s.data().name)))
  }

  async getProfileInfos() {
    return await this.afs.doc("users/" + (await this.getCurrentUid()).toString() + "/profile/profileInfo").get();
  }

  async setProfileInfos(data: string[]) {
    await this.afs.doc("users/" + (await this.getCurrentUid()).toString() + "/profile/profileInfo").update({ name: data[0], surname: data[1], class: data[2], picture: data[3] });
  }

  async getProfilePictureUrl() {
    return this.storage.ref("users/" + (await this.getCurrentUid()).toString() + "/profilePicture");
  }

}
