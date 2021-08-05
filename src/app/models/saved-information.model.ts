export class SavedInformation {
  Question?:String;
}
export class SavedDocument{

  public userId: String;
  public savedInfo:SavedInformation;

  constructor(id: String , savedInformation: SavedInformation) {
    this.userId=id;
    this.savedInfo=savedInformation
  }
}

