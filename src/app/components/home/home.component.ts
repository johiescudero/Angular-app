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
    let id = localStorage.getItem("UserID");
     if (id !=null)
      this.examsService.getMisFinalesByUserId(+id)
        .subscribe(data=>
              {             
                  console.log(data);
                  this.examenes = data;
                                                
              });
     }
   
  //Rutea a la componente con el formulario de añadir final
  newFinal(){
    localStorage.removeItem("ExamenID")
    this.router.navigate(["/addFinal"]);
  }

  //Rutea a la componente con el formulario de editar final
  editar(exam: Exam){
    localStorage.setItem("ExamenID", JSON.stringify(exam.id));
    this.router.navigate(["/addFinal"]);
  }

  //Elimina un examen final
  deleteExam(exam: Exam){
    this.examsService.deleteExam(exam)
          .subscribe(data =>{
            console.log(data);
            this.examenes = this.examenes?.filter(examFinal=>examFinal!==exam);
          });
  }

  //Rutea a la componente con las planificaciones asociadas al final especificado
  getPlannings(exam: Exam){
    localStorage.setItem("ExamenID", JSON.stringify(exam.id))
    this.router.navigate(["/plannings"]);
  }

  //Rutea a la componente con las planificaciones asociadas al final especificado
  goToAddTemas(exam: Exam){
    localStorage.setItem("ExamenID", JSON.stringify(exam.id))
    this.router.navigate(["/addTema"]);
  }
}

