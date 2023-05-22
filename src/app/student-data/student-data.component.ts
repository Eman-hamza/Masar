import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { teacherData } from '../interface/teacherData';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent implements OnInit{
  constructor(private adminServices:AdminService,private toast:ToastrService){}
  ListStudent:teacherData[]=[{
    id:'',
    forthName:'',
    isTeacher: false,
    isStudent: false,
    userNumber:'',
    userName: '',
    nationalID:'',
    isDeleted: false
  }]
  ngOnInit(): void {
    this.adminServices.StudentData(this.ListStudent).subscribe((response)=>{
      this.ListStudent=response;
      console.log(response);
    })  
  }

  deleteStud(id:string){
    this.adminServices.StudentDelete(id).subscribe((response)=>{
      // console.log("dddrjfrikr")
      this.toast.success("Deleted Suseccfully"); 
      this.ngOnInit();
    })
  }

}