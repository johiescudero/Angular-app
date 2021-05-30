import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/models/exam/exam.model';
import { ExamsService } from 'src/app/services/exams/exams.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  editExam: Exam;
  
  constructor(private router: Router, private examsService:ExamsService) { 
      
    this.editExam = new Exam();
  }

  ngOnInit(){
    this.editar();
   }     
   
  //Obtiene el examen que se solicito editar
  editar(){
    let id = localStorage.getItem("ExamenID");
    if (id !=null)
       this.examsService.getExamenById(+id)
          .subscribe(data => {
            this.editExam = data;
            console.log(data);
            
          });
  }

  updateFinal(newExam: Exam){
    this.examsService.updateExamen(newExam)
        .subscribe(
          response =>{
            console.log(response);
            alert("Se agrego con éxito");
            this.router.navigate(["/home"]);
          });

  }


}
