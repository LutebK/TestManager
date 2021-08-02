import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private afs: AngularFirestore) { }

  async getProfileInfo() {
    return await this.afs.doc("/profile/pQOhM69BouXCAXujszoEhb3c4PW2").get()
  }

  async uploadProfilePicture() {
    //await this.afs.firestore.app.storage("").ref().getDownloadURL()
  }

}
