import { Component, OnInit } from '@angular/core';
import {specificExam} from '../interface/specificExam';
import { AdminService } from '../Services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specificxam',
  templateUrl: './specificxam.component.html',
  styleUrls: ['./specificxam.component.scss']
})
export class SpecificxamComponent implements OnInit{
  constructor(private admin:AdminService,private router:ActivatedRoute){}
Questionlist:specificExam[]=[{
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
ngOnInit(): void {
  this.id=this.router.snapshot.paramMap.get("id");
  this.admin.specificExam(this.id).subscribe((response)=>{
    this.Questionlist=response;
    console.log(response);
  })
}
}
