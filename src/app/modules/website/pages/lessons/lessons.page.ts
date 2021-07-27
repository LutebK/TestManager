import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'website-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.css']
})
export class LessonsPage implements OnInit {

  list:lessons[] = [
    {
      icon: "fas fa-pencil-alt", title:"TÜRKÇE", arrow: true, url:"./konular",iconColor:"#CF6503",
    },
    {
      icon: "fas fa-square-root-alt", title:"MATEMATİK", arrow: true, url:"",iconColor:"#9296EF",
    },
    {
      icon: "fas fa-capsules", title:"FEN BİLGİSİ", arrow: true, url:"",iconColor:"#F04F4F",
    },
    {
      icon: "fas fa-people-arrows", title:"SOSYAL BİLGİLER", arrow: true, url:"",iconColor:"#D539EE",
    },
    {
      icon: "fas fa-kaaba", title:"DİN KÜLTÜRÜ", arrow: true, url:"",iconColor:"#4FC01A",
    },
    {
      icon: "fas fa-comments", title:"İNGİLİZCE", arrow: true, url:"",iconColor:"#CBEA0F",
    },

  ]

  constructor() { }

  ngOnInit(): void {

  }


}
interface lessons{
  icon?: string
  title :string
  arrow: boolean
  url : string
  iconColor : string
}
