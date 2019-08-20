import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ssf-final-project-fnt';
  
  constructor(private router:Router){}

  someFunc(){  // compiler can not find this function
    this.router.navigate(['/login']);
  }

  anotherFunc(){
    this.router.navigate(['/register']);
  }
}
