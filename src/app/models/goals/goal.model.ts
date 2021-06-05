import { Exam } from "../exam/exam.model";

export class Goal {

    id: number | undefined;
    exam: Exam | undefined;
    objetivo: string = '';
}
