import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import jwtDecode from 'jwt-decode';
import { UserRoleService } from '../Services/user-role.service';
import { StudentTeatcherGuard } from '../student-teatcher.guard';
import {  adminGuard } from '../admin.guard';
// import { BeforeRegisterComponent } from '../before-register/before-register.component';
// import { FreelancerValueService } from '../Services/freelancer-value.service';
// import { FreelancerGuard } from '../freelancer.guard';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isLogin:boolean=false;
  isstudent:boolean=false;
  isAdmin:boolean=false;

  constructor(private auth:AuthService,private toast:ToastrService,private uerrole:StudentTeatcherGuard,private admin:adminGuard){}//,private jwtHelper:JwtHelperService){}
   
  ngOnInit(): void {
    this.auth.userdata.subscribe(()=>{
      if(this.auth.userdata.getValue()!=null){
        this.isLogin=true;
      }
      else{
        this.isLogin=false;
      }

      if(this.uerrole.canActivate()==1){
          this.isstudent=true;
          this.isAdmin=false;
        }
        else if(this.uerrole.canActivate()==2){
          this.isAdmin=false;
          this.isstudent=false;
        }
        else{
          this.isstudent=false;
          this.isAdmin=true;
        }
        
        // if(this.admin.canActivate()){
        //   this.isAdmin=true;
        // }
    })  

  }

  logOut(){
    this.auth.logout();
  }

  message(){
    this.toast.info("If you want to create Profile go to Create Profile, If not ... continue :) ")
  }
}
