export class StaticsInformation {
  lessonName?:String;
  topicName?:String;
  testId?:String;
  trueQ?:number;
  falseQ?:number;
  emptyQ?:number;
}
export class StatsDocument{

  public userId: String;
  public statsInfo:StaticsInformation;

  constructor(id: String , statsInformation: StaticsInformation) {
    this.userId=id;
    this.statsInfo=statsInformation
  }
}

