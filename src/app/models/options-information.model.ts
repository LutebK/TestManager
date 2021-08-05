export class OptionsInformation {
  PasswordChange?:String;
  Premium?:Boolean;
  Class?:number;
  invite?:String;
}
export class OptionsDocument{

  public userId: String;
  public optionInfo:OptionsInformation;

  constructor(id: String , optionInformation: OptionsInformation) {
    this.userId=id;
    this.optionInfo= optionInformation;
  }
}

