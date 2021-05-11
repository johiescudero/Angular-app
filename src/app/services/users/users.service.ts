import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as _ from 'lodash';

interface Token {
  token: string; 
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  error = '';  
  token: Token | undefined;

  constructor(private http: HttpClient, private router:Router) { }
 
  //Iniciar sesión en el sistema
  public login(username: string, password:string){
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic '+btoa(username+":"+password)})
    this.http.get<Token>("http://localhost:8080/token",{headers,responseType: 'json'})
    .subscribe(
      (response) => {
        this.token = response;
        console.log(response);
        localStorage.setItem("username", username);
        localStorage.setItem("password",password);
        localStorage.setItem("token", response.token);
        this.router.navigate(["/home"]);
       },
       (error) =>{
          this.error = error;
       });
             
    }
    
  //Registrarse en el sistema
  public register(email: string, password: string){
    const headers=new HttpHeaders({Authorization: 'Basic '})
    return this.http.post("http://localhost:8080/user/registration",{headers,responseType: 'text' as 'json'})

  }

  //Get token de autenticación
  public getToken(){
      return localStorage.getItem('token');
  }
  
}
