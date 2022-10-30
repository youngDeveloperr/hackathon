import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';

@NgModule({
  declarations: [ChatDialogComponent],
  imports: [CommonModule, FormsModule],
  exports: [ChatDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChatModule {}
