import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NavHeaderComponent } from './nav-header/nav-header.component';
import { NotesComponent } from './notes/notes.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { NoteEditComponent } from './notes/note-edit/note-edit.component';
import { NoteItemComponent } from './notes/note-list/note-item/note-item.component';
import { NoteAddComponent } from './notes/note-add/note-add.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    NotesComponent,
    NoteListComponent,
    NoteEditComponent,
    NoteItemComponent,
    NoteAddComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
