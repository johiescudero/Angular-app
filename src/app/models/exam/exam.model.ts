import { User } from "../user/user.model";

export class Exam {
    id: number | undefined; 
    usuario: User | undefined; 
    materia: string | undefined;
    inicioEstudioDate: Date | undefined;
    finalTestDate: Date | undefined; 

}
