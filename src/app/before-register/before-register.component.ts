import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { outputAst } from '@angular/compiler';
import { RegisterComponent } from '../register/register.component';
import { UserRoleService } from '../Services/user-role.service';
@Component({
  selector: 'app-before-register',
  templateUrl: './before-register.component.html',
  styleUrls: ['./before-register.component.scss']
})
export class BeforeRegisterComponent implements OnInit {
  constructor(public _route:Router,private toast:ToastrService,private builder:FormBuilder,private userrole:UserRoleService){}

  dataform=this.builder.group({
    IsStudent:new FormControl(null),
    IsTeacher:new FormControl(null),
});

namePro:any;
// if(namePro='feelancer'){
//   namePro=true;
// }

//to pass data to profileData component 
@Output() nameProP = new EventEmitter <string>();

par():string{
  return this.namePro;

}

setUser(){
  console.log(this.namePro);
  this.nameProP.emit(this.namePro)
}

// ******************************************
ngOnInit(): void {  
}

TeacherRole(){
  this.userrole.IsStudent=false;
  console.log( this.userrole.IsStudent)

}
StudentRole(){
  this.userrole.IsStudent=true;
console.log( this.userrole.IsStudent)
}

chooseCF(dataform:FormGroup){
      this.toast.success("choose complete :) ")
      this._route.navigate(['/Register']);

  }

}