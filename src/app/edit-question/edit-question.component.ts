import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit{
  
  constructor(private admin:AdminService,private toast:ToastrService,private route:ActivatedRoute,private router:Router,private builder:FormBuilder){}

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

  quesId:any;
  idexam:any;

  ngOnInit(): void {
    console.log(this.QuestionFom.value)
    this.idexam=<any>this.QuestionFom.get('examsId')
    console.log("^^^iid exam^^^^");
    console.log(this.idexam.value);

    this.quesId=this.route.snapshot.paramMap.get("id");
  
    console.log("^^^^^^^");
    console.log(this.quesId);



  }
  onChange(e:any) {
    console.log(e.target.value)
  
    this.QuestionFom.controls['correctAnswer'].setValue(e.target.value);
    // this.radioStatus = false;
  
  }
  radioStatus!: boolean;
  Edit(QuestionFom:any){
    this.admin.EditQuestion(QuestionFom.value,this.quesId).subscribe({
      next: (beers) => {
        this.toast.success("تم التعديل بنجاح")
        
        //  this.router.navigate([`sepcificExam/${idexam?.value}`]);
        this.router.navigate([`TeacherHome`]);

   },
   error: (e) => {
    console.log(e)
    }
  }
  )}
  exit(QuestionFom:any){
         this.router.navigate(["sepcificExam",this.route.snapshot.paramMap.get("id")]);
   }

  //  ******************************************************

}
