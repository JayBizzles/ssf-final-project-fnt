import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) {}

  baseUrl = "http://localhost:4000/api/appUsers"

  postUser(user){
    console.log(user)
    return this.http.post(this.baseUrl,user)
  }
}
