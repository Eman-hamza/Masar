import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { teacherData } from '../interface/teacherData'
import { ToastrService } from 'ngx-toastr';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-teacher-data',
  templateUrl: './teacher-data.component.html',
  styleUrls: ['./teacher-data.component.scss']
})
export class TeacherDataComponent implements OnInit{
  constructor(private adminServices:AdminService,private toast:ToastrService){}
  ListTeacher:teacherData[]=[{
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
    this.adminServices.teacherData(this.ListTeacher).subscribe((response)=>{
      this.ListTeacher=response;
      console.log(response);
    })  }

  deleteTech(id:string){
    this.adminServices.teacherDelete(id).subscribe(esponse=>{
      this.toast.success("Deleted Suseccfully"); 
      this.ngOnInit();
    })
  }

}
