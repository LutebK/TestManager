import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../services/profile-service.service';

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

  temp: any[] = new Array();

  pPhoto = true
  picturePath: any

  constructor(private ps: ProfileServiceService) { }

  ngOnInit(): void {
  }

  setProfileInfos() {
    this.ps.getProfileInfo().then(t => {
      t.subscribe((s: any) => { this.name = s.data().name, this.surname = s.data().surname, this.class = s.data().class + '.' })
    });
  }

  saveChanges() {
    alert("Maalesef şu anda çalışmıyor :/")
  }

  takeProfilePhoto() {
    alert("Yakında Sizlerle... :D")
  }

  getProfilPhoto() {
    return this.picturePath;
  }

  setProfilePhoto() {
    this.pPhoto = !this.pPhoto;
    //this.picturePath = (document.getElementById("picPath") as HTMLInputElement).value;
    this.picturePath = "https://firebasestorage.googleapis.com/v0/b/testmanager-fb88a.appspot.com/o/users%2Fmyan2MPgZ0SYRa87t666glNurEs2%2F100_0234.jpg?alt=media&token=2acb4032-054a-4e50-9d57-b93993c6b31a"
  }

  logOut() {
    this.pPhoto = true;
    this.name = "Ad";
    this.surname = "Soyad";
    this.school = "Okulu";
    this.class = "";
    alert("Çıkış Yapıldı.")
  }
}
