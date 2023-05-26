import { Component, OnInit } from '@angular/core';
import {specificExam} from '../interface/specificExam';
import { AdminService } from '../Services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-specificxam',
  templateUrl: './specificxam.component.html',
  styleUrls: ['./specificxam.component.scss']
})
export class SpecificxamComponent implements OnInit{
  constructor(private admin:AdminService,private router:ActivatedRoute,private route:Router,private toast:ToastrService){}
  // Question:specificExam={
  //   id:0,
  //   isDeleted: false,
  //   examsId: 0,
  //   exams: null,
  //   question: '',
  //   correctAnswer: '',
  //   option1: '',
  //   option2: '',
  //   option3: '',
  //   option4: '',
  //   questionDegree:0
  // }

  public Questionlist:specificExam[]=[{
  id:0,
  isDeleted: false,
  examsId: 0,
  exams: null,
  question: '',
  correctAnswer: '',
  option1: '',
  option2: '',
  option3: '',
  option4: '',
  questionDegree:0
}]

id:any;

GetSpesicfic(){
  this.id=this.router.snapshot.paramMap.get("id");
  this.admin.specificExam(this.id).subscribe((response)=>{
    console.log(this.Questionlist);
    this.Questionlist=response;
    console.log(response);
  })
}
ngOnInit(): void {
this.GetSpesicfic();
}

NavigateToEdit(id:any){  
  this.route.navigate(["editquestion",id.id]);
}
deleteQuestion(id:number){
  console.log("id for deleteQuestion");
  console.log(id);
  this.admin.DeleteQuestion(id).subscribe((response)=>{
    this.toast.success("تم الحذف بنجاح"); 
    this.GetSpesicfic()
})
}
addquestion(id:any){
  // this.addvirable=Questionl.id;
   console.log("aaddddddddd ques");
  //  console.log(id);
  //  console.log(this.Questionlist)
   this.route.navigate(["CreateQestion",id]);
}
}
