import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'website-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.css'],
})
export class TestPage implements OnInit {
  list: tests[] = [
    {
      icon: 'fas fa-bookmark',
      title: 'Test1',
      arrow: true,
      url: '',
      iconColor: '#CF6503',
      ID : "1",
    },
  ];
  
  
  constructor() {}

  ngOnInit(): void {}
}
interface tests {
  icon?: string;
  title: string;
  arrow: boolean;
  url: string;
  iconColor: string;
  ID: string;
}



