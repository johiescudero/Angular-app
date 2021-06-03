import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  deletePlanning(planning: Plannings){
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Basic '+btoa(localStorage.getItem('username')+":"+localStorage.getItem('password'))});   
     return this.http.delete<Plannings>("http://localhost:8080/plannings/delete/" + planning.id, {headers, responseType:'json'});

  }
}
