import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'website-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.css']
})
export class GroupsPage implements OnInit {
  userList: any[]=["kullanıcı1","kullanıcı2","kullanıcı3"];
  usersList: any[]=["grup1","grup2","grup3"];
  btnUserEdit: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }


  

  btnUserEditM(){
    this.btnUserEdit=!this.btnUserEdit;
  }
}
