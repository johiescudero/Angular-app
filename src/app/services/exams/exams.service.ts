import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from 'lodash';
import { Exam } from 'src/app/models/exam/exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
 
  constructor(private http: HttpClient) { }

  getFinales() {
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic '+btoa(localStorage.getItem('username')+":"+localStorage.getItem('password'))})   
    return this.http.get<Exam[]>("http://localhost:8080/exams/all", {headers, responseType: 'json'})
  }

  createExamenFinal(examen: Exam){
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic '+btoa(localStorage.getItem('username')+":"+localStorage.getItem('password'))})   
    return this.http.post<Exam>("http://localhost:8080/exams/add",examen, {headers, responseType: 'json'})
  }
}
