import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Exam {
  id: string; 
  materia: string;
  inicioEstudioDate: Date;
  finalTestDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
 
  constructor(private http: HttpClient) { }

  getFinales() {
    let token = JSON.parse(localStorage.getItem('token') || '{}');
    return this.http.get<Exam[]>("http://localhost:8080/exams/all", {headers : new HttpHeaders().set('X-Auth-Token', token)})
          .subscribe(
            (response) => {
              console.log(response);
           });
  }


}
