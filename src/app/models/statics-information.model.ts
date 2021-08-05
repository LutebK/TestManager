export class StaticsInformation {
  result?:number;
  lessonName?:String;
  answer?:String;
}
export class StatsDocument{

  public userId: String;
  public statsInfo:StaticsInformation;

  constructor(id: String , statsInformation: StaticsInformation) {
    this.userId=id;
    this.statsInfo=statsInformation
  }
}

