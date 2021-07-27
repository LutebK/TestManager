import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'website-options-education',
  templateUrl: './options-education.page.html',
  styleUrls: ['./options-education.page.css']
})
export class OptionsEducationPage implements OnInit {
list: listItem[]=[
  {
    title: "5.Sınıf" , url: "" 
  },
  {
    title: "6.Sınıf" , url: "" 
  },
  {
    title: "7.Sınıf" , url: ""
  },
  {
    title: "8.Sınıf" , url: ""
  },
  {
    title: "9.Sınıf" , url: ""
  },
  {
    title: "10.Sınıf" , url: ""
  },
  {
    title: "11.Sınıf" , url: ""
  },
  {
    title: "12.Sınıf" , url: ""
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
interface listItem{
  title: string
  url: string
}