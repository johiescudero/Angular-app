export class Exam {
    id: string; 
    materia: string ;
    inicioEstudioDate: Date;
    finalTestDate: Date; 

    constructor(private exam: Exam){
        this.id = exam.id;
        this.materia = exam.materia
        this.inicioEstudioDate = exam.inicioEstudioDate;
        this.finalTestDate = exam.finalTestDate;

    }
}
