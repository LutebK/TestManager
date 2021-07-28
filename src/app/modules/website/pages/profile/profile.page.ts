import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'website-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css']
})
export class ProfilePage implements OnInit {

  name: any = "Ad"
  surname: any = "Soyad"
  school: any = "Okulu"
  class: any = "Sınıfı"

  pPhoto = true
  picturePath: any

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges() {
    alert("Maalesef şu anda çalışmıyor :/")
  }

  takeProfilePhoto() {
    alert("Yakında Sizlerle... :D")
  }

  setProfilePhoto() {
    this.pPhoto = !this.pPhoto;
    this.picturePath = (document.getElementById("picPath") as HTMLInputElement).value;
  }
}
