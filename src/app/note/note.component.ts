import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Note} from '../models/note.model';
import {NotesService} from '../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  public noteDetails: Note = new Note();
  public noteTitle: FormControl = new FormControl('');
  public noteBody: FormControl = new FormControl('');

  constructor(private route: ActivatedRoute, private notesService: NotesService) { }

  ngOnInit(): void {
    this.noteDetails.date = new Date().toDateString();
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.getNoteDetails(params.get('id'));
      }
    });
  }

  getNoteDetails(id: string): void {
    this.notesService.getById(id).subscribe((note: Note) => {
      this.noteDetails = note;
      this.noteTitle.setValue(this.noteDetails.title);
      this.noteBody.setValue(this.noteDetails.body);
    });
  }

  saveNote() {
    this.notesService.createNote(new Note(
      this.noteTitle.value, 
      this.noteBody.value, 
      new Date().toISOString()
    )).subscribe(response => {
      console.log(response);
    }, err => console.log(err));
  }
}
