import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam } from 'src/app/models/exam/exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
 
  constructor(private http: HttpClient) { }

  getFinales() {
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Basic '+btoa(localStorage.getItem('username')+":"+localStorage.getItem('password'))});
     // 'Authorization': 'Bearer ' + btoa("token:" +localStorage.getItem('token'))});
    return this.http.get<Exam[]>("http://localhost:8080/exams/all", {headers, responseType: 'json'});
  }

  createExamenFinal(examen: Exam){
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Basic '+btoa(localStorage.getItem('username')+":"+localStorage.getItem('password'))});   
      const data = JSON.stringify(examen);
      return this.http.post<Exam>("http://localhost:8080/exams/add", data, {headers, responseType: 'json'});
  }

  getExamenById(id: number){
    return this.http.get<Exam>("http://localhost:8080/exams/"+id);
  }

  updateExamen(examen: Exam){
    return this.http.put<Exam>("http://localhost:8080/exams/update/" + examen.id, examen);
  }

  deleteExam(examen: Exam){
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Basic '+btoa(localStorage.getItem('username')+":"+localStorage.getItem('password'))});   
     return this.http.delete<Exam>("http://localhost:8080/exams/delete/" + examen.id, {headers, responseType:'json'});

  }
}
