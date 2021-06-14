import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mode } from 'src/app/models/modes/mode.model';
import { Plannings } from 'src/app/models/plannings/plannings.model';
import { ExamsService } from '../exams/exams.service';

@Injectable({
  providedIn: 'root'
})
export class PlanningsService {
 
  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private examService: ExamsService) { }

  getPlanningsByExamId(idExam: number){
    return this.http.get<Plannings[]>(this.apiUrl + "/plannings/all/"+ idExam);
  }

  createPlanning(modoSelected: Mode){   
    let idExam = localStorage.getItem("ExamenID");
    return this.http.post<Plannings>(this.apiUrl + "/plannings/add/" + idExam, modoSelected);
  }

  deletePlanning(planning: Plannings){
    return this.http.delete<Plannings>(this.apiUrl + "/plannings/delete/" + planning.id);
  }

}
