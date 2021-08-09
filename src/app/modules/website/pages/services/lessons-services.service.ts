import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { getHeapCodeStatistics } from 'v8';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { TestsDocument, TestsInformation } from 'src/app/models/tests-information.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonsServicesService {

  constructor(private storage: AngularFireStorage, private afs: AngularFirestore) { }

  async createStorage(testData: TestsInformation) {

    return await this.afs.collection('/Tests').add(testData)
  }
  //Storage klasörlerinin oluşturulması için gerekli fonksiyon
  async getTest(testInf: TestsDocument) {
    return await this.afs.doc('/Tests/' + testInf.testId).get().subscribe((res: any) => { testInf.testId = res.id; testInf.testInformation = res.data(); console.log(res.data()) })
  }
  //Storage klasörlerinin tekli okunması için fonksiyon

async getTests(){
  return await this.afs.collection('/Tests').get()
}

  async updateStorage(testInf: TestsDocument) {
return await this.storage.upload('/Tests' , testInf.testId)
  }
  //Storage klasörlerinin güncellenmesi için fonksiyon
}
