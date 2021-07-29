import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'website-options-help',
  templateUrl: './options-help.page.html',
  styleUrls: ['./options-help.page.css']
})
export class OptionsHelpPage implements OnInit {

list: helpItem[] = [

  {
    icon: "fas fa-question" , title: "Yardım" , arrow: true , iconColor: "27AE60"
  },
  {
     icon: " " , title: "Kullanıcı Sözleşmesi" , arrow: true , url:"..."
  },
  {
     icon: " " , title: "Uygulama Bilgisi" , arrow: true , url:"..."
  },

]
  constructor() { }

  ngOnInit(): void {
  }

}

interface helpItem{
  icon?: string
  title: string
  arrow: boolean
  url?: string
  iconColor?: string
}
