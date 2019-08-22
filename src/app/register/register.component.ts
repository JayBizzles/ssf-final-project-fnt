import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private serv:UserService, private router: Router) { }

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
    this.serv.postUser(this.user)
      .subscribe( (res: any ) =>{
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('userId', res.userId);
        this.router.navigate(['/dashboard']);
        console.log(res);
      });
  }

  

}
