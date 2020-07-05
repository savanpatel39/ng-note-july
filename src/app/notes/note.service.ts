import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NoteService {

  private noteList: Note[] = [
    new Note( 'text', 'Body of 1st note', new Date(), 'Title One'),
    new Note( 'text', 'Body of 2nd note', new Date(), 'Title Two'),
    new Note( 'text', 'Body of 3rd note', new Date(), 'Title Three'),
    new Note( 'text', 'Body of 4th note', new Date(), 'Title Four'),
    new Note( 'text', 'Body of 5th note', new Date(), 'Title Five'),
    new Note( 'text', 'Body of 6th note', new Date(), 'Title Six'),
  ];

  noteChanged = new Subject<Note[]>();
  editModeChanged = new BehaviorSubject<{'editMode': boolean, 'selectedIndex': number}>({editMode: false, selectedIndex: -1});

  getAllNotes() {
    return this.noteList.slice();
  }

  getNote(index: number) {
    return this.noteList[index];
  }

  addNote(newNote: Note) {
    this.noteList.push(newNote);
    this.noteChanged.next(this.noteList.slice());
  }

  updateNote(index: number, newNote: Note){
    this.noteList[index] = newNote;
    this.noteChanged.next(this.noteList.slice());
  }

  deleteNote(index: number) {
    this.noteList.splice(index, 1);
    this.noteChanged.next(this.noteList.slice());
  }

}
