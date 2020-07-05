import { Component, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { NoteService } from '../note.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  editMode: any;
  noteList: Note[];
  updateNoteListSubscription: Subscription;
  editModeSubscription: Subscription;

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
    this.updateNoteListSubscription = this.noteService.noteChanged.subscribe(
      (noteList: Note[]) => {
        this.noteList = noteList.reverse();
      }
    );
    this.noteList = this.noteService.getAllNotes().reverse();

    this.editModeSubscription = this.noteService.editModeChanged.subscribe(
      (editMode: any) => {
        this.editMode = editMode.editMode;
      }
    );

  }

}
