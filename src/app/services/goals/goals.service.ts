import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam } from 'src/app/models/exam/exam.model';
import { Goal } from 'src/app/models/goals/goal.model';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { 
  }

  getGoalsByExamID(id: number){
    return this.http.get<Goal[]>(this.apiUrl + "/goals/all/"+id);
  }

  addGoal(newGoal: Goal){
       return this.http.post<Goal>(this.apiUrl + "/goals/add", newGoal);
  }

  deleteGoal(deleteGoal: Goal){
    return this.http.delete<Goal>(this.apiUrl + "/goals/delete/"+ deleteGoal.id);
}
}
