import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam } from 'src/app/models/exam/exam.model';
import { User } from 'src/app/models/user/user.model';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
 
  userLoggedIn: any;

  constructor(private userService: UsersService, private http: HttpClient) {
    this.userLoggedIn = new User();
    
   }

  getMisFinalesByUserId(idUser: number) {
      return this.http.get<Exam[]>("http://localhost:8080/exams/all/"+idUser);
  }

  createExamenFinal(examen: Exam){ 
    let userId = localStorage.getItem("UserID");
    if (userId!=null){
      this.http.get<User>("http://localhost:8080/users/"+userId).subscribe(
        data => {
          this.userLoggedIn = data;
          examen.usuario = this.userLoggedIn;
          console.log(examen);
          });
    }
    return this.http.post<Exam>("http://localhost:8080/exams/add", examen);
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
