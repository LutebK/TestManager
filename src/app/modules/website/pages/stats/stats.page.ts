import { Component, OnInit } from '@angular/core';
import { StatsDocument } from '../../../../models/statics-information.model';
import { StaticsServiceService } from '../services/statics-service.service';

@Component({
  selector: 'website-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.css']
})
export class StatsPage implements OnInit {

  dogru:any = 0
  yanlis:any = 0
  bos:any = 0

  ilerleme:number = 75

  array:any[] = []

  constructor(private ss: StaticsServiceService) { }

  ngOnInit(): void {
    let sd = new StatsDocument("", { lessonName: "Matematik", topicName: "konu1", testId: "12345", trueQ: 7, falseQ: 2, emptyQ:1 });
    this.array.push(this.ss.getStats(sd));
    console.log(this.array)

    this.ss.getStat().then(t => t.subscribe(s => s.forEach(f => console.log(f))));
  }

}
