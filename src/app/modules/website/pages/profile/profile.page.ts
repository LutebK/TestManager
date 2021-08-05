import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { ProfileServiceService } from '../services/profile-service.service';
import { finalize } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'website-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css']
})
export class ProfilePage implements OnInit {

  name: any = "Ad"
  surname: any = "Soyad"
  school: any = "Okulu"
  class: any = ""

  pPhoto = false
  picturePath: any
  uploadBar = false
  uploadData: any
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private ps: ProfileServiceService, private storage: AngularFireStorage, private aut: AngularFireAuth) { }

  ngOnInit(): void {
    this.setProfileInfos();
    this.ps.getInfos();
  }

  async setProfileInfos() {
    this.ps.getProfileInfos().then(t => {
      t.subscribe((s: any) => {
        this.name = s.data().name, this.surname = s.data().surname, this.class = s.data().class, this.picturePath = s.data().picture
      })
    });
    this.picturePath == null ? this.pPhoto = true : this.pPhoto = false;
  }

  saveChanges() {
    let data: string[] = [this.name, this.surname, this.class, this.picturePath];
    this.ps.setProfileInfos(data).then(t => { alert("Değişiklikler Kaydedildi.") });
  }

  takeProfilePhoto() {
    alert("Yakında Sizlerle... :D")
  }

  getProfilePhoto() {
    return this.picturePath;
  }

  async upload(event: any) {
    const file = event.target.files[0];
    const fileName = "/users/" + await this.ps.getCurrentUid() + "/profilePicture/" + file.name;
    const ref = this.storage.ref(fileName);
    const task = ref.put(file);

    this.uploadBar = true;
    this.uploadPercent = task.percentageChanges();
    this.uploadPercent.subscribe(s => this.uploadData = s);

    task.snapshotChanges().pipe(finalize(() => ref.getDownloadURL().subscribe(s => this.picturePath = s))).subscribe()
  }

  setProfilePhoto() {
    this.pPhoto = true;
    this.uploadBar = false;
  }

  logOut() {
    this.pPhoto = false;
    this.name = "Ad";
    this.surname = "Soyad";
    this.school = "Okulu";
    this.class = "";
    this.aut.signOut();
    alert("Çıkış Yapıldı.")
  }
}
