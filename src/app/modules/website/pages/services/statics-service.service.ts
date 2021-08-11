import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { StatsDocument } from '../../../../models/statics-information.model';

@Injectable({
  providedIn: 'root'
})
export class StaticsServiceService {

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) { }

  async addStats(data: StatsDocument) {
    this.afs.collection("users/" + (await this.auth.currentUser).uid + "/stats/").add(data);
  }

  async getStats() {
    return await this.afs.collection("users/" + (await this.auth.currentUser).uid + "/stats/").get();
  }
}
