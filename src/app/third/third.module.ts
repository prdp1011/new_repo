import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdRoutingModule } from './third-routing.module';
import { OtherComponent } from './other/other.component';

@NgModule({
  imports: [
    CommonModule,
    ThirdRoutingModule
  ],
  declarations: [OtherComponent]
})
export class ThirdModule { }
