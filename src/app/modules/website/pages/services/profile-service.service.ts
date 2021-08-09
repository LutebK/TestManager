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
  }

  async updateProfilePicturePath(path: string) {
    await this.afs.doc("users/" + (await this.getCurrentUid()).toString() + "/profile/profileInfo").update({ picture: path });
  }

  async getSavedQuestions() {
    return await this.afs.collection("users/" + (await this.getCurrentUid()).toString() + "/saved").get();
  }

  async addSavedQuestion(qpictureurl: string, qlink: string, qno: string, qloc: string) {
    this.afs.collection("users/" + (await this.getCurrentUid()).toString() + "/saved").add({ questionLoc: qloc, qPictureUrl: qpictureurl, questionLink: qlink, questionNo: qno });
  }

  async deleteSavedQuestion(id: string) {
    this.afs.doc("users/" + (await this.getCurrentUid()).toString() + "/saved/" + id).delete()
  }

}
