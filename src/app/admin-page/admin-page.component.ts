import { Component, OnInit } from '@angular/core';
import { subject} from '../interface/subject';
import { AdminService } from '../Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit{
  constructor(private admin:AdminService,private toast:ToastrService,private route:Router){}
AllExam:subject[]=[{
  id: 0,
  title: '',
  minDegree: 0,
  totalDegree: 0,
  dateTime:new Date("2023-04-26T14:42:36.338Z"),
  teacherId:this.gettokenID()
}]
ngOnInit(): void {
  this.admin.GetAllExams(this.AllExam).subscribe((response)=>{
    this.AllExam=response;
    console.log(response);
  })
}
deleteexam(id:number){
  this.admin.ExamDelete(id).subscribe((response)=>{
    console.log("gggggggg");
    this.toast.success("Deleted Suseccfully"); 
    this.ngOnInit();
})
 }
 NavigateToexamGrade(id:any){
  this.route.navigate(["GradesStudent",id.id]);
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
}
