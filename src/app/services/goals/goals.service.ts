import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Goal } from 'src/app/models/goals/goal.model';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor(private http: HttpClient) { 
  }

  getGoalsByExamID(id: number){
    return this.http.get<Goal[]>("http://localhost:8080/goals/all/"+id);
  }
}
