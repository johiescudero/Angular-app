import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/models/exam/exam.model';
import { Plannings } from 'src/app/models/plannings/plannings.model';
import { ExamsService } from 'src/app/services/exams/exams.service';
import { PlanningsService } from 'src/app/services/plannings/plannings.service';

@Component({
  selector: 'app-plannings',
  templateUrl: './plannings.component.html',
  styleUrls: ['./plannings.component.css']
})
export class PlanningsComponent implements OnInit {

  planificaciones: Plannings[] | undefined;
  examSelected: Exam;

  constructor(private router: Router, private planningService:PlanningsService, private examsService: ExamsService) {
    this.examSelected = new Exam();
  }

  ngOnInit(): void {
    let id = localStorage.getItem("ExamenID");
   //Obtengo el examen asociado
    if (id !=null)
       this.examsService.getExamenById(+id)
          .subscribe(data => {
            this.examSelected = data;
            console.log(data);
            
          });
    if (id !=null)
       this.planningService.getPlanningsByExamId(+id)
          .subscribe(data => {
            this.planificaciones = data;
            console.log(data);
            
          });
    }

}
