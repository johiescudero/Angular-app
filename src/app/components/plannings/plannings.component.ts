import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/models/exam/exam.model';
import { Goal } from 'src/app/models/goals/goal.model';
import { Plannings } from 'src/app/models/plannings/plannings.model';
import { ExamsService } from 'src/app/services/exams/exams.service';
import { GoalsService } from 'src/app/services/goals/goals.service';
import { PlanningsService } from 'src/app/services/plannings/plannings.service';

@Component({
  selector: 'app-plannings',
  templateUrl: './plannings.component.html',
  styleUrls: ['./plannings.component.css']
})
export class PlanningsComponent implements OnInit {

  planificaciones: Plannings[] | undefined;
  goals: Goal[] | undefined;
  examSelected: Exam;
  
  constructor(private router: Router, private planningService:PlanningsService, private examsService: ExamsService, private goalsService:GoalsService) {
    this.examSelected = new Exam();
  }

  ngOnInit(): void {
    let id = localStorage.getItem("ExamenID");
   //Obtengo el examen asociado
    if (id !=null){
        this.examsService.getExamenById(+id)
          .subscribe(data => {
            this.examSelected = data;
            console.log(data);
            
          });
         this.planningService.getPlanningsByExamId(+id)
          .subscribe(data => {
            this.planificaciones = data;
            console.log(data);
          });
          this.goalsService.getGoalsByExamID(+id)
          .subscribe(data => {
            this.goals = data;
            console.log(data);
          });
          
      }
  }

  deletePlanning(planningDelete: Plannings){
    this.planningService.deletePlanning(planningDelete)
        .subscribe(data =>{
            console.log(data);
            this.planificaciones = this.planificaciones?.filter(planning=>planning!==planningDelete);
          });
    let id = localStorage.getItem("ExamenID");
    if (id!=null)
      this.planningService.getPlanningsByExamId(+id);
  }

}
