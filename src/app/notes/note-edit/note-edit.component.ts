import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NoteService } from '../note.service';
import { Subscription } from 'rxjs';
import { Note } from '../note.model';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  note: Note;
  index: number;
  editNoteForm: FormGroup;
  editModeSubscription: Subscription;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.editNoteForm = new FormGroup({
      title: new FormControl(null),
      body: new FormControl(null),
    });

    this.editModeSubscription = this.noteService.editModeChanged.subscribe(
      (editMode: any) => {
        this.index = editMode.selectedIndex;
        this.note = this.noteService.getNote(this.index);
      }
    );

    if (this.note) {
      this.editNoteForm.patchValue({
        title: this.note.title,
        body: this.note.body,
      });
    }
    console.log('Index-NoteEdit-Item: ' + this.index);
    // console.log(this.note);
  }

  onSaveClicked() {
    const newNote = new Note('text', this.editNoteForm.value.body, new Date(), this.editNoteForm.value.title);
    this.noteService.updateNote(this.index, newNote);
    this.noteService.editModeChanged.next({editMode: false, selectedIndex: -1});
  }

}
