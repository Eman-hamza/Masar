import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmpassword } from '../Validations/confirmPassword';
import { forbiddinNameVal } from '../Validations/usernameVal';
import { style } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../Services/auth.service';
import { UserRoleService } from '../Services/user-role.service';
// import { FreelancerGuard } from '../freelancer.guard';
@Component({
  template:`<app-before-register style="display:none;"  (nameProPass)="funcf($event)"></app-before-register>
  <h1>{{marwa}} </h1>`,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  [x: string]: any;

  errors:string='';
  marwa:any;

constructor(public _AuthServices:AuthService
  ,public _route:Router,private toast:ToastrService,private builder:FormBuilder,private userrole:UserRoleService){}

// registerform:FormGroup=new FormGroup({
//   username:new FormControl(null,[Validators.pattern('^[A-Z][a-z0-9]*$'),Validators.required,forbiddinNameVal(/Admin/ || /admin/ || /adminstrator/ || /Adminstrator/)]),
//   email:new FormControl(null,[Validators.email,Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
//   password:new FormControl(null,[Validators.pattern('^[a-zA-Z0-9]{2,8}$'),Validators.required]),
//   confirmpassword:new FormControl(null,Validators.required)
// },{validators:[confirmpassword]});

registerform=this.builder.group({
  username:new FormControl(null,[Validators.pattern('^[A-Za-z0-9 ]*$'),Validators.required]),
  fourthName:new FormControl(null,[Validators.required,Validators.pattern('^[\u0621-\u064A]* [\u0621-\u064A]* [\u0621-\u064A]* [\u0621-\u064A]*$')]),
  nationalID:new FormControl(null,[Validators.pattern('^[0-9]{11}$'),Validators.required]),
  userNumber:new FormControl(null),
  email:new FormControl(null,[Validators.email,Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
  password:new FormControl(null,[Validators.required,
    Validators.minLength(8)]
    ),
    confirmpassword:new FormControl(null,Validators.required)
  ,IsStudent:new FormControl(this.userrole.IsStudent),
},{validators:[confirmpassword]});

ngOnInit(): void {
  console.log(  this.marwa)
}
funcf($event:any){
  this.marwa=$event;
}

// usermodel=new User('','','','');
public RegisterInvalid = false;

submitRegister(data:FormGroup){
  this._AuthServices.Register(data.value).subscribe((info) => {
    if (info.message=="Success") {
      this.toast.success("Successuflly Register")
      this._route.navigate(['/Login']);
      console.log(" Successuflly Register")
    }
    else if(info.message=="NotVaild"){
      this.RegisterInvalid = true;
    }
  })
  ;
  }

}
