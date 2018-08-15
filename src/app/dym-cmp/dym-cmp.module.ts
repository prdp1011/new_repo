import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgComponent } from './error-msg/error-msg.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ErrorMsgComponent],
  entryComponents:[ErrorMsgComponent],
})
export class DymCmpModule { }
