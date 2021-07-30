import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'website-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.css']
})
export class OptionsPage implements OnInit {
list: listItem[] = [
  {
    icon: "fas fa-key" , title: "Şifre Değiştir" , arrow: true , url:"./sifredegis" , iconColor: "#222F3E"
  },
  {
    icon: "fas fa-award" , title: "Premium Üyelik" , arrow: true , url: "./premium" , iconColor: "#F1C40F"
  } ,
  {
    icon: "fas fa-user-friends" , title: "Arkadaşlarını Davet Et" , arrow: true , url: "./davetet" , iconColor: "#16A085" 
  },
]

list1: listChevron[] = [
  {
    icon: "fas fa-book-open" , title: "Eğitim Düzeyi Seç" , arrow: true , url: "./eğitim" , iconColor: "#130F40" 
  },
  {
    icon: "fas fa-question" , title: "Yardım" , arrow: true , url: "./yardım" , iconColor: "#27AE60" 
  }
]
  constructor() {
   }

  ngOnInit(): void {
  }

}
interface listItem {
  icon?: string
  title: string
  arrow: boolean
  url: string
  iconColor: string
}

interface listChevron {
  icon?: string
  title: string
  arrow: boolean
  url: string
  iconColor: string
}