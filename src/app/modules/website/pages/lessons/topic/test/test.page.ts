import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'website-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.css']
})
export class TestPage implements OnInit {
  list : test[] = [
    {
      icon: "fas fa-bookmark", title:"Konu 1", arrow: true, url:"",iconColor:"#CF6503",
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
interface test{
  icon?: string
  title: string
  arrow: boolean
  url: string
  iconColor: string
}
