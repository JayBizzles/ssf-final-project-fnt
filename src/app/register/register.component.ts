import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private serv:UserService) { }

  ngOnInit() {
  }

  user ={
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    name: ""
  }

  register(){
    this.serv.postUser(this.user);
  }

}
