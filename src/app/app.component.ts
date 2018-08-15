import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorMsgComponent } from './dym-cmp/error-msg/error-msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  overlayComp: any;
  constructor(private router: Router){
    let x = ['first', 'second', 'third']
    let i = 0 ;
    setInterval(() => {
      this.overlayComp = ErrorMsgComponent;
      setTimeout(()=>{this.overlayComp=null;
      }, 500)
    this.router.navigateByUrl(x[i]);
    i++;
    }, 10000);
  }
}
