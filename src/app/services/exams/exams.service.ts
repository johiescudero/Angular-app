import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam } from 'src/app/models/exam/exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
 
  constructor(private http: HttpClient) { }

  getFinales(userID: number) {
      return this.http.get<Exam[]>("http://localhost:8080/exams/all/"+userID);
  }

  createExamenFinal(examen: Exam){ 
      const data = JSON.stringify(examen);
      return this.http.post<Exam>("http://localhost:8080/exams/add", data);
  }

  getExamenById(id: number){
    return this.http.get<Exam>("http://localhost:8080/exams/"+id);
  }

  updateExamen(examen: Exam){
    return this.http.put<Exam>("http://localhost:8080/exams/update/" + examen.id, examen);
  }

  deleteExam(examen: Exam){
      return this.http.delete<Exam>("http://localhost:8080/exams/delete/" + examen.id);

  }
}
