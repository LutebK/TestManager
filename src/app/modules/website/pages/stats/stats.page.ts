import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'website-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.css']
})
export class StatsPage implements OnInit {

  dogru:any = 0
  yanlis:any = 0
  net:any = 0

  ilerleme:any = 0

  constructor() { }

  ngOnInit(): void {
  }

}
