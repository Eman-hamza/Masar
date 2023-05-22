import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import {studentGrades} from '../interface/studentGrades';
import { ToastrService } from 'ngx-toastr';
import { subject} from '../interface/subject';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-grades-for-admin',
  templateUrl: './grades-for-admin.component.html',
  styleUrls: ['./grades-for-admin.component.scss']
})
export class GradesForAdminComponent implements OnInit{
constructor(private adminser:AdminService,private toast:ToastrService,private router:ActivatedRoute){}
id:any;
studentGrades:studentGrades[]=[{
  studentsName: '',
  resultsOfExam: 0,
}]

ngOnInit(): void {
  this.id = this.router.snapshot.paramMap.get("id");
  this.adminser.showGrades(this.id).subscribe((response)=>{
    this.studentGrades=response;
    // this.toast.success("hhhh");
 })
}
}
