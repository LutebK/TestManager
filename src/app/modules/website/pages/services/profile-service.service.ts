import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage, private aut: AngularFireAuth) { }

  async getCurrentUid() {
    return (await this.aut.currentUser).uid
  }

  async getProfileInfo() {
    return await this.afs.doc("/profile/" + (await this.getCurrentUid()).toString()).get();
  }

  async setProfileInfo() {
    await this.afs.doc("/profile/" + this.getCurrentUid());
  }

  async uploadProfilePicture(path: string) {
    await this.storage.upload("/users/" + this.getCurrentUid() + "/profilePicture/" + path, path);
  }

  async getProfilePicture(path: string) {
    return this.storage.ref("/users/" + this.getCurrentUid() + "/profilePicture" + path).getDownloadURL().subscribe();
  }

}
