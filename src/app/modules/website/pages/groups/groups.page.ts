import { UserInformation } from './../../../../models/user-information.model';
import { GroupsInformation } from 'src/app/models/groups-information.model';
import { GroupsDocument } from './../../../../models/groups-information.model';
import { Component, OnInit } from '@angular/core';
import { GroupsServiceService } from '../services/groups-service.service';
import { isThisSecond } from 'date-fns';
import { timeoutWith } from 'rxjs/operators';
@Component({
  selector: 'website-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.css']
})
export class GroupsPage implements OnInit {


  btnUserEdit: boolean = true;

  array: any[] = []
  userList: any[] = []
  invateId: any[] = []
  inviteCode: any;
  inviteCodeControl: any;
  userInviteInput: any;
  name: any="";
  picture: any="";
  constructor(private service: GroupsServiceService) { }

  ngOnInit(): void {
    this.userDbList()
    //this.service.getPicture()
    this.users()

    //this.userInvite()
  }
  async users() {
    return this.service.users().then(a => { a.subscribe(b => { b.forEach(c => { this.userList.push(c.id) }) }) })
  }
  async userInvite() {
    return this.service.userInviteCode().then(a => { a.subscribe((b: any) => this.inviteCode = b.data().invite) })
  }

  async getUser() {
    return this.service.userGet().then(a => { a.subscribe(b => { b.data() }) })
  }

  async userAdded() {
    await this.userList.forEach(user => {
      console.log(user)
      this.service.userInviteCode2(user).then(a => {
        a.subscribe((b: any) => {
          if (this.userInviteInput == b.data().invite) {
            console.log("girdi")
            console.log("usergirdi" + this.userInviteInput)
            this.service.inviteCodeGet(this.userInviteInput)
            this.service.deneme().then(a=> {a.subscribe(b=> {b.forEach(c=> {console.log(c.ref.path)})})})
            this.service.userGet().then(a => { a.subscribe((b: any) => {this.name = b.data().name, this.picture = b.data().picture }) })
            console.log("thisname "+this.name+ "\n" +"thispicture "+ this.picture )
            let useradd: GroupsInformation = { userName: this.name, imgName: this.picture }
            this.service.userAdd(useradd)
          }
        })
      })


    });

  }

  btnUserEditM() {
    this.btnUserEdit = !this.btnUserEdit;
  }
  async userDbList() {
    return this.service.userGets().then(a => { a.subscribe(b => { b.forEach(c => { this.array.push({ id: c.id, data: c.data() }) }) }) })
  }
}
