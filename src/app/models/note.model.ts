export class Note {
  title: string;
  body: string;
  date: string;

  constructor(title?: string, body?: string, date?: string) {
    this.title = title || '';
    this.body = body || '';
    this.date = date || '';
  }
}
