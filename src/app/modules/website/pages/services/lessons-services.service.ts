import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { getHeapCodeStatistics } from 'v8';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { TestsInformation } from 'src/app/models/tests-information.model';

@Injectable({
  providedIn: 'root'
})
export class LessonsServicesService {

  constructor() { }
}
