import { Component, OnInit } from '@angular/core';
import { ProfilePage } from '../profile/profile.page';

@Component({
  selector: 'website-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.css']
})
export class StatsPage implements OnInit {

  dogru:any = 0
  yanlis:any = 0
  bos:any = 0

  ilerleme:number = 90

  array:any = [1,2,3]

  constructor() { }

  ngOnInit(): void {
  }

}
