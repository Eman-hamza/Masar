import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { StudentAnswerDTO } from '../interface/StudentAnswerDTO';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _httpClient:HttpClient,private route:Router) { }
  currentuser:any;
  gettokenID(): string {
    let token: any = localStorage.getItem("userInfo");
    this.currentuser = jwtDecode(token);
    console.log(this.currentuser);
    var nameIdentifier = this.currentuser['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
    console.log(nameIdentifier);
    return nameIdentifier;
  } 

  teacherData( formDta:any):Observable<any>
  {
   return this._httpClient.get("http://localhost:5294/api/Teacher/AllTeachers",formDta)
  }
  teacherDelete( id:string):Observable<any>
  {
   return this._httpClient.delete(`http://localhost:5294/api/Teacher/DeleteTeacher?id=${id}`)
  }
  StudentData( formDta:any):Observable<any>
  {
   return this._httpClient.get("http://localhost:5294/api/Student/AllStudents",formDta)
  }
  StudentDelete( id:string):Observable<any>
  {
   return this._httpClient.delete(`http://localhost:5294/api/Student/DeleteStudent?id=${id}`)
  }
  GetAllExams(Data:any):Observable<any>
  {
  return this._httpClient.get(`http://localhost:5294/api/Exam/ExamsAdmin`,Data);
  }
  GetAllExamsTeacher(Data:any):Observable<any>
  {
  return this._httpClient.get(`http://localhost:5294/api/Exam/Exams/${this.gettokenID()}`,Data);
  }  
  ExamDelete( id:number):Observable<any>
  {
   return this._httpClient.delete(`http://localhost:5294/api/Exam/DeleteExam?examID=${id}`)
  }
  showGrades( id:any):Observable<any>
  {
   return this._httpClient.get(`http://localhost:5294/api/Exam/Result/${id}`)
  }
  // ******************************** Teacher ****************************************
  AddExam(data:any):Observable<any>
  {
   return this._httpClient.post("http://localhost:5294/api/Exam/AddExam",data)
  }
  AddQuestion(data:any):Observable<any>
  {
   return this._httpClient.post("http://localhost:5294/api/Qustion/AddQuestion",data)
  }
  specificExam(id:any):Observable<any>
  {
   return this._httpClient.get(`http://localhost:5294/api/Exam/specificexam/${id}`)
  }
  EditQuestion(data:any,id:any):Observable<any>{
    return this._httpClient.put(`http://localhost:5294/api/Qustion/EditQuestion/${id}`,data)
  }
  DeleteQuestion(id:number): Observable<any>{
    return this._httpClient.delete(`http://localhost:5294/api/Qustion/DeleteQuestion?questionID=${id}`)
  }
  getQuestionByExamId(id:any):Observable<any>{
    return this._httpClient.get(`http://localhost:5294/api/Qustion/getTheQuestionToStudent?examId=${id}`)
  }
  gettheScore(studentans:StudentAnswerDTO):Observable<any>{
    return this._httpClient.post(`http://localhost:5294/api/AnsweOfTheStudent/AnswerOfTheStudent`,studentans);
  }
  getOldExam(id:any):Observable<any>{
    return this._httpClient.get(`http://localhost:5294/api/Qustion/OldExam/${id}`,id);
  }
  getExamNotExmine(id:any):Observable<any>{
    return this._httpClient.get(`http://localhost:5294/api/Exam/GetExamThatNotExamined?studentId=${id}`,id);
  }  
  getDone(stid:any,examid:any):Observable<any>{
    return this._httpClient.get(`http://localhost:5294/api/Exam/IsDone?stdId=${stid}&ExamId=${examid}`);
  }
}
