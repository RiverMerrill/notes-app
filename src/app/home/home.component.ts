import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Note} from '../models/note.model';
import {NotesService} from '../services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public notes: Note[] = [];
  constructor(private router: Router, private notesService: NotesService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes(): void {
    this.notesService.getList().subscribe(notes => {
      this.notes = notes;
    });
  }

  goToNote(id: string) {
    this.router.navigate(['/note', id])
  }

  createNewNote() {
    this.router.navigate(['/note']);
  }
}
