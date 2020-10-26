import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Note} from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private baseUrl: string = 'http://localhost:1337';

  constructor(private http: HttpClient) {}

  getList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/notes/list`);
  };

  getById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/note/${id}`)
  }

  createNote(note: Note): Observable<any> {
    return this.http.post(`${this.baseUrl}/note/new`, note);
  }
}
