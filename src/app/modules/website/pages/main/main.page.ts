import { Component, OnInit } from '@angular/core';
import { RootPage } from '../root/root.page';

@Component({
  selector: 'website-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.css']
})
export class MainPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  headercontrol:boolean=false;

  setheadermenu(){
    this.headercontrol = !this.headercontrol;
  }
}
