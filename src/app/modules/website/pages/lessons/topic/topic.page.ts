import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'website-topic',
  templateUrl: './topic.page.html',
  styleUrls: ['./topic.page.css']
})
export class TopicPage implements OnInit {
  list : topics [] = [
    {
      icon: "fas fa-bookmark", title:"Konu 1", arrow: true, url:"",iconColor:"#CF6503",
    },
    {
      icon: "fas fa-bookmark", title:"Konu 2", arrow: true, url:"",iconColor:"#9296EF",
    },
    {
      icon: "fas fa-bookmark", title:"Konu 3", arrow: true, url:"",iconColor:"#F04F4F",
    },
    {
      icon: "fas fa-bookmark", title:"Konu 4", arrow: true, url:"",iconColor:"#D539EE",
    },
    {
      icon: "fas fa-bookmark", title:"Konu 5", arrow: true, url:"",iconColor:"#4FC01A",
    },
    {
      icon: "fas fa-bookmark", title:"Konu 6", arrow: true, url:"",iconColor:"#CBEA0F",
    },

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
interface topics{
  icon?: string
  title :string
  arrow: boolean
  url : string
  iconColor : string
}

