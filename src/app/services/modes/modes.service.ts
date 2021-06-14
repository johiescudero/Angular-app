import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mode } from 'src/app/models/modes/mode.model';

@Injectable({
  providedIn: 'root'
})
export class ModesService {

  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllOptions(){
    return this.http.get<Mode[]>(this.apiUrl + "/modes/all");
  }
}
