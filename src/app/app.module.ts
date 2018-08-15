import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DymCmpModule } from './dym-cmp/dym-cmp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DymCmpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
