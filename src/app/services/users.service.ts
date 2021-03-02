import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  //Iniciar sesión
  login (user: any): Observable<any>{
    return this.http.post("http://localhost:8080/users/login", user);
  }

  //registrarse
  register (user: any): Observable<any>{
    return this.http.post("http://localhost:8080/register", user);
  }
}
