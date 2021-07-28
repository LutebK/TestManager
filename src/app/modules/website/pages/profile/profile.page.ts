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

  picturePath : any

  constructor() { }

  ngOnInit(): void {

  }

  saveChanges() {
    alert("Maalesef şu anda çalışmıyor :/")
  }



  setProfilePhoto() {    
    this.pPhoto = !this.pPhoto
    var p = document.getElementById("picPath");
    console.log(p.nodeValue)
    
    
  }
}
