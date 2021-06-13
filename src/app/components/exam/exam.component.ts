import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/models/exam/exam.model';
import { ExamsService } from 'src/app/services/exams/exams.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  edit: boolean = false;
  newExam: Exam;
  constructor(private router: Router, private examService: ExamsService) { 
    
    this.newExam = new Exam();
  }

  ngOnInit(): void {
    let id = localStorage.getItem("ExamenID");
    if (id !=null){
      this.edit = true;
      this.examService.getExamenById(+id)
          .subscribe(data => {
            this.newExam = data;
            console.log(data);
            
          });
    }
       
  }
  
 //materia: String, fechaInicioEstudio: Date, fechaExamen: Date
  addFinal(){
    let id = localStorage.getItem("UserID");
     if (id !=null)
     this.examService.createExamenFinal(+id,this.newExam)
        .subscribe(data=>
              {             
                alert("Se agrego con éxito");
                this.router.navigate(["/home"]);
                                                
              });   
  }

  //Actualiza el examen final
  updateFinal(newExam: Exam){
    this.examService.updateExamen(newExam)
        .subscribe(
          response =>{
            console.log(response);
            alert("Se edito con éxito");
            this.router.navigate(["/home"]);
          });

  }
}
