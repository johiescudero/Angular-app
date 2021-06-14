import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { User } from 'src/app/models/user/user.model';

interface Token {
  token: string; 
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private router:Router) {
     }
 
  login(userLoggedIn: User){
    return this.http.post<User>(this.apiUrl + "/users/login", userLoggedIn);           
  }

  register(newUser: User){
    return this.http.post(this.apiUrl + "/users/add", newUser);
  }

  getUserById(userID:number){
    return this.http.get<User>(this.apiUrl + "/users/" + userID);
  }
    
}
