import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  someFunc(){  // compiler can not find this function
    this.router.navigate(['/login']);
  }

  anotherFunc(){
    this.router.navigate(['/register']);
  }

}
