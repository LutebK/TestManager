import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'website-topic',
  templateUrl: './topic.page.html',
  styleUrls: ['./topic.page.css'],
})
export class TopicPage implements OnInit {
  showTest = false;
  aktifKonuID : string = ""

  list: topics[] = [
    {
      icon: 'fas fa-bookmark',
      title: 'Konu 1',
      arrow: true,
      url: '',
      iconColor: '#CF6503',
      ID : "1",
    },
    {
      icon: 'fas fa-bookmark',
      title: 'Konu 2',
      arrow: true,
      url: '',
      iconColor: '#9296EF',
      ID : "2",
    },
    {
      icon: 'fas fa-bookmark',
      title: 'Konu 3',
      arrow: true,
      url: '',
      iconColor: '#F04F4F',
      ID :"3",
    },
    {
      icon: 'fas fa-bookmark',
      title: 'Konu 4',
      arrow: true,
      url: '',
      iconColor: '#D539EE',
      ID : "4"
    },
    {
      icon: 'fas fa-bookmark',
      title: 'Konu 5',
      arrow: true,
      url: '',
      iconColor: '#4FC01A',
      ID:"5"
    },
    {
      icon: 'fas fa-bookmark',
      title: 'Konu 6',
      arrow: true,
      url: '',
      iconColor: '#CBEA0F',
      ID : "6"
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  setTopic() {
    this.showTest = !this.showTest;
  }

  expand(yeniAktifKonuID:string){
    
    if(this.aktifKonuID == yeniAktifKonuID){
      this.aktifKonuID = ""
    }
    else{
      this.aktifKonuID = yeniAktifKonuID
    }
  }
}
interface topics {
  icon?: string;
  title: string;
  arrow: boolean;
  url: string;
  iconColor: string;
  ID: string;
}
