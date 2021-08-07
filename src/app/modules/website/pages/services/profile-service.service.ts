import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  
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
    return await this.storage.ref("users/" + (await this.getCurrentUid()).toString() + "/profilePicture/profileImg").getDownloadURL();
    // return await this.storage.ref("/5.Sınıf/Türkçe/Cümlede Anlam/Test 1/Soru 1.png").getDownloadURL();
  }

  async updateProfilePicturePath(path: string) {
    await this.afs.doc("users/" + (await this.getCurrentUid()).toString() + "/profile/profileInfo").update({ picture: path });
  }

  async getSavedQuestions() {
    return await this.afs.doc("users/" + (await this.getCurrentUid()).toString() + "/saved/savedInfo").get();
  }

  async addSavedQ(data: string) {
    this.afs.doc("users/" + (await this.getCurrentUid()).toString() + "/saved/savedInfo").update({ "question": data });
  }

  async asdas() {
    return await this.afs.collection("users/").get();
  }

}
