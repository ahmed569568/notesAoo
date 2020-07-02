import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { NoteCardComponent } from './note-card/note-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, NoteCardComponent],
  exports: [LoaderComponent, NoteCardComponent],
})
export class SharedModule {}
