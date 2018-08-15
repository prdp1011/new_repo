import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(private router: Router){
    let x = ['first', 'second', 'third']
    let i = 0 ;
    setInterval(() => {
    this.router.navigateByUrl(x[i]);
    i++;
    }, 10000);
  }
}
