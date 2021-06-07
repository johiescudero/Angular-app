import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam } from 'src/app/models/exam/exam.model';
import { Mode } from 'src/app/models/modes/mode.model';
import { Plannings } from 'src/app/models/plannings/plannings.model';
import { ExamsService } from '../exams/exams.service';

@Injectable({
  providedIn: 'root'
})
export class PlanningsService {
 
  constructor(private http: HttpClient, private examService: ExamsService) { }

  getPlanningsByExamId(id: number){
    return this.http.get<Plannings[]>("http://localhost:8080/plannings/all/"+id);
  }

  createPlanning(modoSelected: Mode){   
    let idExam = localStorage.getItem("ExamenID");
    return this.http.post<Plannings>("http://localhost:8080/plannings/add/"+idExam, modoSelected);
  }

  deletePlanning(planning: Plannings){
    return this.http.delete<Plannings>("http://localhost:8080/plannings/delete/" + planning.id);
  }

}
