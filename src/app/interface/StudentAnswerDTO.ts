import { questionToStudent } from "./questionforStudent"


export interface StudentAnswerDTO
{
    examid:number
	studentId :string
	qq:questionToStudent[]
}