import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/models/exam/exam.model';
import { Goal } from 'src/app/models/goals/goal.model';
import { ExamsService } from 'src/app/services/exams/exams.service';
import { GoalsService } from 'src/app/services/goals/goals.service';

@Component({
  selector: 'app-add-tema',
  templateUrl: './add-tema.component.html',
  styleUrls: ['./add-tema.component.css']
})
export class AddTemaComponent implements OnInit {

  goals: Goal[] | undefined;
  examSelected: Exam;
  newGoal: Goal;
  
  constructor(private router: Router,private examsService: ExamsService, private goalsService:GoalsService) { 
    this.newGoal = new Goal();
    this.examSelected = new Exam;
  }

  ngOnInit(): void {
    let id = localStorage.getItem("ExamenID");
    if (id !=null){
      this.examsService.getExamenById(+id)
        .subscribe(data => {
          this.examSelected = data;
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

  addGoal(){
    let ExamenID = localStorage.getItem("ExamenID");
    if (ExamenID!=null){
       if (this.newGoal!=null){
          this.newGoal.exam = this.examSelected;
          this.goalsService.addGoal(this.newGoal)
          .subscribe(data => {
            console.log(data);
            alert("Success: Se agrego con éxito");
            this.router.navigate(["/home"]);  
           }); 
       }        
       else
         if (this.newGoal=='')
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
