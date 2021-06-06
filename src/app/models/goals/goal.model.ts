import { Exam } from "../exam/exam.model";

export class Goal {
    id: number | undefined;
    objetivo: string = '';
    exam: Exam | undefined;
}
