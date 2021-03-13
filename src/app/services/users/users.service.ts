import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
 
  //Iniciar sesión en el sistema
  public login(username: string, password:string){
    const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)})
    return this.http.get("http://localhost:8080/login",{headers,responseType: 'text' as 'json'})
  }

  //Registrarse en el sistema
  public register(email: string, password: string){
    const headers=new HttpHeaders({Authorization: 'Basic '})
    return this.http.post("http://localhost:8080/user/registration",{headers,responseType: 'text' as 'json'})

  }
 
}
