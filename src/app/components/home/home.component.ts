import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ExamsService } from 'src/app/services/exams/exams.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private examsService:ExamsService) {
  }

  //Obtener el listado de finales registrados en el sistema
  getFinales(){

    this.examsService.getFinales();
    /*
    let token = JSON.parse(localStorage.getItem('token') || '{}');
    return this.http.get("http://localhost:8080/exams/all", {headers : new HttpHeaders().set('X-Auth-Token', token)} ).subscribe(
      (response)=> 
      console.log());*/
  }

}

