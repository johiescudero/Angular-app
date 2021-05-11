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
  }

}

