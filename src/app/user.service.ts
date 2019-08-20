import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) {}

  baseUrl = "http://localhost:4000"

  postUser(user){
    return this.http.post("http://localhost:4000",user)
  }
}
