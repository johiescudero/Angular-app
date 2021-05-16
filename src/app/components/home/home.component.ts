import { Component } from '@angular/core';
import { Exam } from 'src/app/models/exam/exam.model';
import { ExamsService } from 'src/app/services/exams/exams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  examenes: Exam[] | undefined;

  constructor(private examsService:ExamsService, private router: Router) {
  }

  ngOnInit(){
    this.examsService.getFinales()
      .subscribe(
            data=>{this.examenes =data;})
   }
  //Obtener el listado de finales registrados en el sistema
  getFinales(){
    this.examsService.getFinales();
  }

  newFinal(){
    this.router.navigate(["/addFinal"]);
  }
}

