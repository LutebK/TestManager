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

  pPhoto = true
  picturePath: any
  picturePath2: any

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private ps: ProfileServiceService, private afs: AngularFireStorage, private aut: AngularFireAuth) { }

  ngOnInit(): void {
    this.setProfileInfos();
  }

  async setProfileInfos() {
    this.ps.getProfileInfo().then(t => {
      t.subscribe((s: any) => {
        this.name = s.data().name, this.surname = s.data().surname, this.class = s.data().class + '.', this.picturePath2 = s.data().picture
      })
    });
    this.pPhoto = false;
  }

  saveChanges() {
    alert("Maalesef şu anda çalışmıyor :/")
  }

  takeProfilePhoto() {
    alert("Yakında Sizlerle... :D")
  }

  getProfilPhoto() {
    return this.picturePath2;
  }

  async upload(event: any) {
    const file = event.target.files[0];
    const fileName = "/users/" + await this.ps.getCurrentUid() + "/profilePicture/" + file.name;
    const ref = this.afs.ref(fileName);
    const task = ref.put(file);

    this.uploadPercent = task.percentageChanges();
    console.log(this.uploadPercent);

    task.snapshotChanges().pipe(finalize(() => ref.getDownloadURL().subscribe(s => this.picturePath2 = s))).subscribe()

    
  }

  setProfilePhoto() {
    this.pPhoto = false;
    //this.ps.uploadProfilePicture(this.picturePath);
  }

  logOut() {
    this.pPhoto = true;
    this.name = "Ad";
    this.surname = "Soyad";
    this.school = "Okulu";
    this.class = "";
    this.aut.signOut();
    alert("Çıkış Yapıldı.")
  }
}
