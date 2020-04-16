import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { HeaderComponent } from './shared/header/header.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { NoteComponent } from './notes/note/note.component';
import { NotesControlsComponent } from './notes/notes-controls/notes-controls.component';
import { NoteFormComponent } from './notes/note-form/note-form.component';
import { NoteFullTextComponent } from './notes/note-full-text/note-full-text.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotesComponent,
    HeaderComponent,
    NotesListComponent,
    NoteComponent,
    NotesControlsComponent,
    NoteFormComponent,
    NoteFullTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
