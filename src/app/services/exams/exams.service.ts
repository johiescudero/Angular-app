import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam } from 'src/app/models/exam/exam.model';
import { User } from 'src/app/models/user/user.model';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
 
  apiUrl = 'http://localhost:8080';
  userLoggedIn: any;

  constructor(private userService: UsersService, private http: HttpClient) {
    this.userLoggedIn = new User();
    
   }

  getMisFinalesByUserId(idUser: number) {
      return this.http.get<Exam[]>(this.apiUrl+"/exams/all/"+idUser);
  }

  createExamenFinal(idUser: number, examen: Exam){ 
    
    return this.http.post<Exam>(this.apiUrl+ "/exams/add/" + idUser, examen);
    
  }

  getExamenById(id: number){
    return this.http.get<Exam>(this.apiUrl + "/exams/"+id);
  }

  updateExamen(examen: Exam){
    return this.http.put<Exam>(this.apiUrl + "/exams/update/" + examen.id, examen);
  }

  deleteExam(examen: Exam){
      return this.http.delete<Exam>(this.apiUrl + "/exams/delete/" + examen.id);

  }
}
