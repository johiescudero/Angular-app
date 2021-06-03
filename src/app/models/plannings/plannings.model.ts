import { Exam } from "../exam/exam.model";
import { Mode } from "../modes/mode.model";

export class Plannings {
    id: number | undefined; 
    exam: Exam | undefined;
    modo!: Mode;
    cantDiasReales: number | undefined;
    cantDiasNecesarios: number | undefined; 
}
