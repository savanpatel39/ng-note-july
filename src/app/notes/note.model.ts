export class Note {

  public title?: string;
  public noteType: string;
  public body: string;
  public timeStamp: Date;

  constructor(noteType: string, body: string, timeStamp: Date,  title?: string, ) {
    this.title = title;
    this.noteType = noteType;
    this.body = body;
    this.timeStamp = timeStamp;
   }
}
