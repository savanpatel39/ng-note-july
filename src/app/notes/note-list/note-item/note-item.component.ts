import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../note.model';
import { NoteService } from '../../note.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() index: number;
  @Input() note: Note;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  changeEditMode() {
    const reversedIndex = this.noteService.getAllNotes().length - this.index - 1;
    console.log('Index-Note-Item: ' + reversedIndex);
    this.noteService.editModeChanged.next({editMode: true, selectedIndex: reversedIndex});
  }

}
