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

  constructor() { }

  ngOnInit(): void {
    
  }

  saveChanges(){

  }
}
