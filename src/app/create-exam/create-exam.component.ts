import { Component, OnInit } from '@angular/core';
import { subject} from '../interface/subject';
import { AdminService } from '../Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent implements OnInit{
  constructor(private admin:AdminService,private toast:ToastrService,private route:Router,private builder:FormBuilder){}
  
  ExamFom:FormGroup=this.builder.group({
    // id:new FormControl(null),
    // teacherId:new FormControl(this.gettokenID()),
    teacherId:this.gettokenID(),
    title:new FormControl(null,Validators.required),
    minDegree:new FormControl(null,[Validators.required]),
    totalDegree:new FormControl(null,[Validators.required]),
    dateTime:new FormControl(new Date(),[Validators.required]),

  });

//   AllExam:subject[]=[{
//   id: 0,
//   title: '',
//   minDegree: 0,
//   totalDegree: 0,
//   dateTime:new Date("2023-04-26T14:42:36.338Z"),
//   teacherId:this.gettokenID(),
// }]
ngOnInit(): void {

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
submitexam(ExamFom:any){
  console.log(ExamFom.value)
  // console.log("vvvvvvv")
  ExamFom.teacherId=this.gettokenID()
  this.admin.AddExam(ExamFom.value).subscribe({ 
    next: (id) => {
        this.route.navigate(["CreateQestion",id]);
     console.log(id)
      // this.toast.success("Data Successuflly subimted")
      console.log("Data Successuflly subimted")
    },
    error: (e) => {
        console.log(e)
    },
  })  
 }
//  NavigateToexamGrade(id:any){
//   this.route.navigate(["CreateQestion",id.id]);
// }
}
