import { Component, Inject, OnInit } from '@angular/core';
import {question} from '../interface/question'
import { AdminService } from '../Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-create-qestion',
  templateUrl: './create-qestion.component.html',
  styleUrls: ['./create-qestion.component.scss']
})
export class CreateQestionComponent implements OnInit{
  constructor(private admin:AdminService,private toast:ToastrService,private route:ActivatedRoute,private router:Router,private builder:FormBuilder,@Inject(DOCUMENT) document: Document){}
  QuestionFom:FormGroup=this.builder.group({

    examsId:this.route.snapshot.paramMap.get("id"),
    question:new FormControl(null,Validators.required),
    correctAnswer:new FormControl(null,[Validators.required]),
    option1:new FormControl(null,[Validators.required]),
    option2:new FormControl(null,[Validators.required]),
    option3:new FormControl(null,[Validators.required]),
    option4:new FormControl(null,[Validators.required]),
    questionDegree:new FormControl(null,[Validators.required]),
  });

LiqtQuestion:question={
  examsId: 0,
  question: '',
  correctAnswer:'',
  option1: '',
  option2: '',
  option3: '',
  option4: '',
  questionDegree: 0
}

currentuser:any;
gettokenID(): string {
  let token: any = localStorage.getItem("userInfo");
  this.currentuser = jwtDecode(token);
  var nameIdentifier = this.currentuser['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
  //this.CurrentID=nameIdentifier;
  console.log(nameIdentifier);
  return nameIdentifier;
} 
ngOnInit(): void {
  // this.id = this.route.snapshot.paramMap.get("id");
  // this.QuestionFom.reset();
}

onChange(e:any) {
  console.log(e.target.value)

  this.QuestionFom.controls['correctAnswer'].setValue(e.target.value);
  // this.radioStatus = false;

}
// id from CreateExam Component
ido:any=this.route.snapshot.paramMap.get("id");
radioStatus!: boolean;

// *********************** sava ************************************************************
save(QuestionFom:any){
  console.log("***************************************")
  console.log(this.QuestionFom.value)

  this.admin.AddQuestion(this.QuestionFom.value).subscribe({
    next: (beers) => {
      //how to equal formControl with 
      var id=<any>this.QuestionFom.get('examsId');
       id=this.ido;
       console.log(id);
       this.router.navigate(["CreateQestion",id]);

       //to reset  specific inputs

       this.radioStatus = false;
       QuestionFom.get('question').reset();
       QuestionFom.get('option1').reset(); 
       QuestionFom.get('option2').reset();
       QuestionFom.get('option3').reset();     
       QuestionFom.get('option4').reset(); 
       QuestionFom.get('questionDegree').reset();
       QuestionFom.get('correctAnswer').reset(); 
       //to reset radioButton  

  

       console.log("السؤال تم ادخاله بطريقة صحيحه")
    },
    error: (e) => {
        console.log(e)
        this.toast.error("لو سمحت اختار الإجابة الصحيحة")
    },
   })
 }
// ******************************** clear  *****************************************
clear(QuestionFom:any){
         //to reset  specific inputs
         QuestionFom.get('question').reset();
         QuestionFom.get('option1').reset(); 
         QuestionFom.get('option2').reset();
         QuestionFom.get('option3').reset();     
         QuestionFom.get('option4').reset(); 
         QuestionFom.get('questionDegree').reset();
         QuestionFom.get('correctAnswer').reset(); 
         //to reset radioButton  
         this.radioStatus = false;
}
exit(QuestionFom:any){
  this.admin.AddQuestion(this.QuestionFom.value).subscribe({
    next: (beers) => {
      this.toast.show("تم إضافة السؤال بنجاح")
       this.router.navigate(["TeacherHome",this.gettokenID()]);
 },
 error: (e) => {
  this.router.navigate(["TeacherHome"]);
  console.log(e)
},
})
}
}
