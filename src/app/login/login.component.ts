import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import {UserService} from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private serv:UserService) { }

  user = {
    userName: "",
    pass: ""
  }

  ngOnInit() {
  }

  login(){

  }

}
