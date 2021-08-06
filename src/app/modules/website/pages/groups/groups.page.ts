import { GroupsInformation } from 'src/app/models/groups-information.model';
import { GroupsDocument } from './../../../../models/groups-information.model';
import { Component, OnInit } from '@angular/core';
import { GroupsServiceService } from '../services/groups-service.service';
@Component({
  selector: 'website-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.css']
})
export class GroupsPage implements OnInit {
  userList: any[] = ["kullanıcı1", "kullanıcı2", "kullanıcı3"];
  usersList: any[] = ["grup1", "grup2", "grup3"];
  btnUserEdit: boolean = true;
  isim:string;
  array: any[]=[]

  constructor(private service: GroupsServiceService) { }

  ngOnInit(): void {
    this.userDbList()
    //this.service.getPicture()


  }

  async getUser(){
    return this.service.userGet().then(a=> {a.subscribe(b=> {b.data()})})
  }

  async userAdded(){
    let a: GroupsInformation ={userName:"deneme",imgName:"https://firebasestorage.googleapis.com/v0/b/testmanager-fb88a.appspot.com/o/users%2Fmyan2MPgZ0SYRa87t666glNurEs2%2F100_0234.jpg?alt=media&token=2acb4032-054a-4e50-9d57-b93993c6b31a"}
    this.service.userAdd(a)
  }

  btnUserEditM() {
    this.btnUserEdit = !this.btnUserEdit;
  }
  async userDbList(){
    return this.service.userGets().then(a=> {a.subscribe(b=> {b.forEach(c=> {this.array.push({id:c.id, data:c.data()})})})})
  }
}
