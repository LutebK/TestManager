export class GroupsInformation {
  userName?: String;
  imgName?: String;
}
export class GroupsDocument{

  public userId: String;
  public userInfo:GroupsInformation;

  constructor(id: String , userInformation: GroupsInformation) {
    this.userId=id;
    this.userInfo= userInformation;
  }
}

