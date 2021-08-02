import { Component, OnInit } from '@angular/core';
import { GroupsServiceService } from '../services/groups-service.service';
@Component({
  selector: 'website-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.css']
})
export class GroupsPage implements OnInit {
  userList: any[]=["kullanıcı1","kullanıcı2","kullanıcı3"];
  usersList: any[]=["grup1","grup2","grup3"];
  btnUserEdit: boolean = true;
  constructor(private service: GroupsServiceService) { }

  ngOnInit(): void {
    console.log(this.service.userGets().then(a=> {a.subscribe(b=> {b.docs})}))
  }




  btnUserEditM(){
    this.btnUserEdit=!this.btnUserEdit;
  }
}
