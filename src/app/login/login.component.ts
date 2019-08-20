import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor() { }

  user = {
    userName: "",
    pass: "",
    email: ""
  }

  ngOnInit() {
  }

}
