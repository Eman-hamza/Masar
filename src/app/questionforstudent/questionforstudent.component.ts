import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';
import { questionToStudent } from '../interface/questionforStudent';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


import jwtDecode from 'jwt-decode';

import { totalandScoreResponse } from '../interface/totalandScoreResponse';
import { uff } from '../interface/uff';
import { StudentAnswerDTO } from '../interface/StudentAnswerDTO';
import { UserRoleService } from '../Services/user-role.service';
import { ToastrService } from 'ngx-toastr';
import {isdone} from '../interface/isdone'
import { Location } from '@angular/common';





@Component({
  selector: 'app-questionforstudent',
  templateUrl: './questionforstudent.component.html',
  styleUrls: ['./questionforstudent.component.scss']
})
export class QuestionforstudentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private admin: AdminService, private builder: FormBuilder, private scoreResponse: UserRoleService, 
    private toast: ToastrService, private router: Router,private location:Location) {

  }
  Isdone:isdone={
    done:false
  }
  isSubmitted: boolean = false;
  ii: uff = {
    examid: 0,
    studentId: '',
    qq: []
  }
  n: questionToStudent[] = []
  //  answers:any;
  studentId: string = '';
  curentUser: any;
  examId: any;
  question: questionToStudent[] = [];
  ww: questionToStudent[] = [];

  FullobjectResult: totalandScoreResponse = { score: 0, totalDegree: 0, minimumDegree: 0 };
  gettokenID(): string {
    let token: any = localStorage.getItem("userInfo");
    this.curentUser = jwtDecode(token);
    var nameIdentifier = this.curentUser['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
    //this.CurrentID=nameIdentifier;
    console.log(nameIdentifier);
    return nameIdentifier;
  }
  ngOnInit(): void {
    this.location.replaceState('/current-route');
    (localStorage.getItem('examSubmitted')) 
    this.examId = this.route.snapshot.paramMap.get("id");
    console.log(this.examId);
    this.studentId = this.gettokenID();
  
    this.admin.getDone(this.studentId,this.examId).subscribe((res)=>{
      this.Isdone=res;
      console.log("rrrrrrr"); 
      console.log(res);
    })
    if(this.Isdone.done==true){
      this.router.navigate(["**"])
    }
    else if(this.Isdone.done==false)
    {
      this.admin.getQuestionByExamId(this.examId).subscribe((response) => {
        this.question = response;
        console.log(response);
      })
    }
  }




  getanswerevent(event: any, index: number) {
    console.log(event)
    let value = event.value;
    let questionId = event.name;

    this.question[index].studentAnswer = value;
    this.question[index].questionId = questionId;

    console.log(this.question);

  }
  answers: StudentAnswerDTO = {
    examid: 0,
    studentId: '',
    qq: []
  }
  save() {
    this.answers.examid = this.examId,
      this.answers.studentId = this.studentId,
      this.answers.qq = this.question

    console.log(this.answers);
    this.admin.gettheScore(this.answers).subscribe({

      next: (beers) => {

        this.scoreResponse.total_score = beers
        // event.target.disabled = true;
        // console.log("evennnnt");
        // console.log(event.target.disabled );
        // localStorage.setItem('examSubmitted', 'true');
        // this.isSubmitted = true;
        this.router.navigate(["displaytheResult"]);
      },
      error: (e) => {
        this.toast.error("من فضلك أجب علي جميع الاسئلة")
        console.log(e)
      }

    })



  }

}
