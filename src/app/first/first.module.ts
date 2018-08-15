import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { EmpComponent } from './emp/emp.component';

@NgModule({
  imports: [
    CommonModule,
    FirstRoutingModule
  ],
  declarations: [EmpComponent]
})
export class FirstModule { }
