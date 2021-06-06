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
  newGoal: Goal;
  
  constructor(private router: Router, private planningService:PlanningsService, 
              private examsService: ExamsService, private goalsService:GoalsService) {
    this.examSelected = new Exam();
    this.newGoal = new Goal();
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
         //Obtengo las planificaciones asociados
         this.planningService.getPlanningsByExamId(+id)
          .subscribe(data => {
            this.planificaciones = data;
            console.log(data);
          });
          //Obtengo los goals asociados
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

  goToCreatePlanning(){
    if (this.goals!=null){
      if (this.goals.length!=0)
        this.router.navigate(["/createPlanning"]);
    else
        alert("Error: Es necesario tener temas añadidos al final.");
    }
  }

  addGoal(){
    let ExamenID = localStorage.getItem("ExamenID");
    if (ExamenID!=null){
       if (this.newGoal!=null){
          this.newGoal.exam = this.examSelected;
          this.goalsService.addGoal(this.newGoal)
          .subscribe(data => {
            console.log(data);  
          }); 
       }        
       else
        alert("Error: Es necesario añadir un tema.");
    }
  }
  
  deleteGoal(deleteGoal:Goal){
    this.goalsService.deleteGoal(deleteGoal).
        subscribe(data =>{
          console.log(data);
          this.goals = this.goals?.filter(goal=>goal!==deleteGoal);
      })
  }

}
