export class TestsInformation {
    public questionNumber: number;
    public questionImg: string;
    public answer : string;
    public questionUrl : string;
    
}

export class TestsDocument{
    public testId: string
    public testInformation: TestsInformation

    constructor(testInformation: TestsInformation , testId: string){

        this.testId = testId;
        this.testInformation = testInformation;
    }
}
