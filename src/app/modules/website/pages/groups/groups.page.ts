import { UserInformation } from './../../../../models/user-information.model';
import { GroupsInformation } from 'src/app/models/groups-information.model';
import { GroupsDocument } from './../../../../models/groups-information.model';
import { Component, OnInit } from '@angular/core';
import { GroupsServiceService } from '../services/groups-service.service';
import { isThisSecond } from 'date-fns';
import { timeoutWith } from 'rxjs/operators';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'website-groups',
  animations:[
    trigger('btnUserEdit',[
      state('open',style({
        position: 'absolute',
        bottom: '32px',
        right: '32px',
        height: '7%',
        width: '50px',
        textAlign: 'center'

      })),
      state('close',style({
        width: '170px',
        display: 'flex'
      })),
      transition('open => close',[
        animate('0.3s')
      ]),
      transition('close => open',[
        animate('0.3s')
      ])
    ])
  ],
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.css']
})
export class GroupsPage implements OnInit {


  btnUserEdit: boolean = true;
  array: any[] = []
  inviteId: any[] = []
  userInviteInput: any;
  users: any[] = [];
  userPath: any = "";
  name: any = "";
  picture: any = "";

  constructor(private service: GroupsServiceService) { }

  ngOnInit(): void {
    this.service.usersGetInfo().then(a => { a.subscribe(b => { b.forEach((c: any) => { this.users.push({ name: c.data().userName, img: c.data().imgName }) }) }) })
    console.log(this.service.userPath)
    console.log(this.users)
  }

  async getInviteCode() {
    return this.service.userİnviteCode().then(a => { a.get().subscribe(b => b.forEach((c: any) => this.inviteId.push(c.data().invite))) })
  }

  async userAdded() {
    this.getInviteCode()
    this.inviteId.forEach(id => {
      console.log(id)
      if (this.userInviteInput == id) {
        console.log("girdi")
        this.service.getGroupsTsID(id)
        this.service.findUserPath().then(a => {
          a.subscribe(a => {
            a.forEach(b => {
              this.userPath = b.ref.path.substring(6, 34), this.service.sendUserPath(b.ref.path.substring(6, 34)),
              this.service.user().then(a => { a.subscribe((b: any) => { let user: GroupsInformation = { userName: b.data().name, imgName: b.data().picture }; this.service.usersAdded(user) }) })
            })
          })
        }
        )
      }
    });
  }


  btnUserEditM() {
    this.btnUserEdit = !this.btnUserEdit;
  }

}
