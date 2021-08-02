export class UserInformation {
  userName?: String;

}
export class UserDocument{

  public userId: String;
  public userInfo:UserInformation;

  constructor(id: String , userInformation: UserInformation) {
    this.userId=id;
    this.userInfo= userInformation;
  }
}
