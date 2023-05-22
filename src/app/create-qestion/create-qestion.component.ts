import { Component, OnInit } from '@angular/core';
import {question} from '../interface/question'
import { AdminService } from '../Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-create-qestion',
  templateUrl: './create-qestion.component.html',
  styleUrls: ['./create-qestion.component.scss']
})
export class CreateQestionComponent implements OnInit{
  constructor(private admin:AdminService,private toast:ToastrService,private route:ActivatedRoute,private router:Router,private builder:FormBuilder){}
  // bindw:string='';
  // type:string=null;
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
id:any;
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
}
onChange(e:any) {
  console.log(e.target.value)

  this.QuestionFom.controls['correctAnswer'].setValue(e.target.value);

}
save(QuestionFom:any){
  // console.log(this.type)
  console.log("***************************************")
  console.log(this.QuestionFom.value)
  this.admin.AddQuestion(this.QuestionFom.value).subscribe({
    next: (beers) => {
      this.router.navigate(['/CreateQestion']);
      console.log("Data Successuflly subimted")
    },
    error: (e) => {
        console.log(e)
    },
   })
 }

}
