import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/models/exam/exam.model';
import { Mode } from 'src/app/models/modes/mode.model';
import { Plannings } from 'src/app/models/plannings/plannings.model';
import { ExamsService } from 'src/app/services/exams/exams.service';
import { ModesService } from 'src/app/services/modes/modes.service';
import { PlanningsService } from 'src/app/services/plannings/plannings.service';

@Component({
  selector: 'app-create-planning',
  templateUrl: './create-planning.component.html',
  styleUrls: ['./create-planning.component.css']
})
export class CreatePlanningComponent implements OnInit {

  newPlanning: Plannings;
  modeSelected: Mode;
  modes: Mode[] | undefined;
  examSelected: Exam;
  
  constructor(private router: Router, private modeService: ModesService, private planningService: PlanningsService,
              private examsService: ExamsService) { 
    this.modeSelected = new Mode();
    this.newPlanning = new Plannings();
    this.examSelected = new Exam();
  }

  ngOnInit(): void {
    //Obtener el listado de Modos
    this.modeService.getAllOptions()
        .subscribe(data => {
          this.modes = data;
          console.log(data);
        });
    let id = localStorage.getItem("ExamenID");
     if (id !=null)
      this.examsService.getExamenById(+id)
        .subscribe(data => {
          this.examSelected = data;
            console.log(data);          
        });
  }

  modoSelected(mode: Mode){
    this.modeSelected = mode;
  }

  createPlanning(){
    //Obtengo el final asociado
    this.planningService.createPlanning(this.modeSelected).
      subscribe(data =>{
        console.log(data);
        alert("Se agrego con éxito");
        this.router.navigate(["/plannings"]);
      })
  }

}
