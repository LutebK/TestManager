import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'website-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.css'],
})
export class TestPage implements OnInit {
  
  constructor() {}

  ngOnInit(): void {}
}
interface test {
  icon?: string;
  title: string;
  arrow: boolean;
  url: string;
  iconColor: string;
}
interface tests {
  label: string;
  id: string;
  imgSource?: string;
  isIcon: boolean;
  icon?: string;
}
