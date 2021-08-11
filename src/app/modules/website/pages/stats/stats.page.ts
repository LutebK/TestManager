import { Component, OnInit } from '@angular/core';
import { StatsDocument } from '../../../../models/statics-information.model';
import { ProfileServiceService } from '../services/profile-service.service';
import { StaticsServiceService } from '../services/statics-service.service';

@Component({
  selector: 'website-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.css']
})
export class StatsPage implements OnInit {

  dogru: any = 0
  yanlis: any = 0
  bos: any = 0

  ilerleme: number = 75

  array: any[] = []
  array2: any[] = []

  constructor(private ss: StaticsServiceService, private ps: ProfileServiceService) { }

  ngOnInit(): void {
    this.test();
  }

  test() {
    this.ss.getStats().then(t => t.subscribe(s => s.forEach((f: any) => { this.array2.push(f.data()) })));
    this.getClass();    
  }

  calc(trueQ: number, falseQ: number, emptyQ: number) {
    let d = 0;
    d = d + trueQ;
    this.dogru = d / 100;

    let y = 0;
    y = y + falseQ;
    this.yanlis = y / 100;

    let b = 0;
    b = b + emptyQ;
    this.bos = b / 100;
  }

  getClass() {
    this.ps.getProfileInfos().then(t => t.subscribe((s: any) => {
      if (s.data().class >= 5 && s.data().class <= 8) {        
        this.array = ["Matematik", "Türkçe", "Fen Bilgisi", "Sosyal Bilgiler", "İngilizce", "Din Kültürü"];        
      }
      else if (s.data().class >= 9 && s.data().class <= 12) {        
        this.array = ["Matematik", "Türk Dili ve Edebiyatı", "Fizik", "Kimya", "Biyoloji", "Coğrafya", "Tarih", "İngilizce", "Din Kültürü"];
      }
      else {       
        this.array = ["Matematik", "Matematik (Sayısal Yeterlilik)", "Türkçe (Sözel Yeterlilik)", "Türk Dili ve Edebiyatı", "Felsefe", "Fizik", "Kimya", "Biyoloji", "Coğrafya", "Tarih", "İngilizce", "Din Kültürü"];
      }
      
    }));
  }

}
