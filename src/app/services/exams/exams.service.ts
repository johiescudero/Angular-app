import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from 'lodash';
import { Exam } from 'src/app/models/exam/exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
 
  listExams: List<Exam>| undefined;
  exam : Exam | undefined;
  token: string | undefined;

  constructor(private http: HttpClient) { }

  getFinales() {
    
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic '+btoa(localStorage.getItem('username')+":"+localStorage.getItem('password'))})   
    this.http.get<Exam>("http://localhost:8080/exams/all", {headers, responseType: 'json'})
        .subscribe(
          resp => {
             this.exam =  resp;
             console.log(this.exam);
          });
       console.log(this.listExams);
       return this.listExams;
  }
}
