import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {subject} from '../interface/subject';

@Component({
  selector: 'app-exams-for-student',
  templateUrl: './exams-for-student.component.html',
  styleUrls: ['./exams-for-student.component.scss']
})
export class ExamsForStudentComponent implements OnInit {

  constructor(private admin:AdminService,private toast:ToastrService,private route:Router){}
  AllExam:subject[]=[]
  ngOnInit(): void {
    this.admin.GetAllExams(this.AllExam).subscribe((response)=>{
      this.AllExam=response;
      console.log(response);
    })
  }
  NavigateToexamGrade(id:any){
    this.route.navigate(["Questionforstudent",id]);
  }
}
