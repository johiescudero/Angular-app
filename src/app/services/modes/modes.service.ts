import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mode } from 'src/app/models/modes/mode.model';

@Injectable({
  providedIn: 'root'
})
export class ModesService {

  constructor(private http: HttpClient) { }

  getAllOptions(){
    return this.http.get<Mode[]>("http://localhost:8080/modes/all");
  }
}
