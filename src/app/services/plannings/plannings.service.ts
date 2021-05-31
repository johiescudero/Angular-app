import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plannings } from 'src/app/models/plannings/plannings.model';

@Injectable({
  providedIn: 'root'
})
export class PlanningsService {

  constructor(private http: HttpClient) { }

  getPlanningsByExamId(id: number){
    return this.http.get<Plannings[]>("http://localhost:8080/plannings/all/"+id);
  }
}
