import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { DishesComponent } from './dishes/dishes.component';

@NgModule({
  imports: [
    CommonModule,
    SecondRoutingModule
  ],
  declarations: [DishesComponent]
})
export class SecondModule { }
