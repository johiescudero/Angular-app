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

  newExam: Exam;
  constructor(private router: Router, private examService: ExamsService) { 
    
    this.newExam = new Exam();
  }

  ngOnInit(): void {
  }
  
 //materia: String, fechaInicioEstudio: Date, fechaExamen: Date
  addFinal(){
    console.log(this.newExam);
    this.examService.createExamenFinal(this.newExam)
    .subscribe(response =>{
      console.log(response);
      alert("Se agrego con éxito");
      this.router.navigate(["/home"]);
    });
    
  }
}
