export class MessageInformation {
  message?:any[]
}
export class GroupsDocument{

  public userId: String;
  public userInfo:MessageInformation;

  constructor(id: String , userInformation: MessageInformation) {
    this.userId=id;
    this.userInfo= userInformation;
  }
}

