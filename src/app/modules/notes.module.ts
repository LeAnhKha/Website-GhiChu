export class notes {
  title:string;
  Date:Date = new Date;
  NoiDung:string;

  constructor (title:string = '', Content:string = '') {
    this.title = title;
    this.NoiDung = Content;
  }
}
