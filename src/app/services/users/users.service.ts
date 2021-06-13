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

  constructor(private http: HttpClient, private router:Router) {
     }
 
  //Iniciar sesión en el sistema
  login(userLoggedIn: User){
   
    return this.http.post<User>("http://localhost:8080/users/login", userLoggedIn);
                
  }

  //Registrarse en el sistema
  register(newUser: User){
    return this.http.post("http://localhost:8080/users/add",newUser)

  }

  getUserById(id:number){
    return this.http.get<User>("http://localhost:8080/users/"+id);
  }
  
  
}
