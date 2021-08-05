export class UserInformation {
  name?:String;
  class?:String;
  picture?:String;
}
export class UserDocument{

  public userId: String;
  public userInfo:UserInformation;

  constructor(id: String , userInformation: UserInformation) {
    this.userId=id;
    this.userInfo= userInformation;
  }
}
