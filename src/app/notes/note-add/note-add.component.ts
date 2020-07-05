import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Note } from '../note.model';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {

  hidden = true;
  addNoteForm: FormGroup;
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.addNoteForm = new FormGroup({
      // titleDecoy: new FormControl(null),
      title: new FormControl(null),
      body: new FormControl(null, Validators.required),
    });
  }

  showAddNoteForm() {
    this.hidden = !this.hidden;
  }

  saveNote() {
    //
    const newNote = new Note('text', this.addNoteForm.value.body, new Date(), this.addNoteForm.value.title);
    this.noteService.addNote(newNote);
    this.addNoteForm.reset();
    this.hidden = true;
  }

}
