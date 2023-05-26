import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {subject} from '../interface/subject';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-exams-for-student',
  templateUrl: './exams-for-student.component.html',
  styleUrls: ['./exams-for-student.component.scss']
})
export class ExamsForStudentComponent implements OnInit {

  constructor(private admin:AdminService,private toast:ToastrService,private route:Router){}
  AllExam:subject[]=[]
  currentuser:any
  gettokenID(): any {
    let token: any = localStorage.getItem("userInfo");
    this.currentuser = jwtDecode(token);
    console.log(this.currentuser);
    var nameIdentifier = this.currentuser['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
    console.log(nameIdentifier);
    return nameIdentifier;
    
  }
ngOnInit(): void {
   this.admin.getExamNotExmine(this.gettokenID()).subscribe((resp)=>{
       this.AllExam=resp;
       console.log(resp);
    })
    // this.admin.GetAllExams(this.AllExam).subscribe((response)=>{
    //   this.AllExam=response;
    //   console.log(response);
    // })
}
  NavigateToexamGrade(id:any){
    this.route.navigate(["Questionforstudent",id]);
    }

  // ********************************************
}

