import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'first', loadChildren: '../app/first/first.module#FirstModule'},
  {path: 'second', loadChildren: '../app/second/second.module#SecondModule'},
  {path: 'third', loadChildren: '../app/third/third.module#ThirdModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
