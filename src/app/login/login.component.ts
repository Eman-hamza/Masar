import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errors:string='';
  public loginInvalid = false;

  constructor(public _AuthServices:AuthService,public _route:Router,private toast:ToastrService){}
  Loginform:FormGroup=new FormGroup({
    // username:new FormControl(null),
    username:new FormControl(null,[Validators.pattern('^[A-Za-z0-9]*$'),Validators.required]),
    password:new FormControl(null,[Validators.required]),
  });
  currentuser:any;
  userData:any={};
  userDataid:any={};
  errorMessage:any;
  // usermodel=new User("eman","1234em","emahamza@gmail.com","Twitter");
  // usermodel=new User("","","","");
  // soicalList=["Facebook","Twitter","Google"];
  gettokenID(): string {
    let token: any = localStorage.getItem("userInfo");
    this.currentuser = jwtDecode(token);
    console.log(this.currentuser);
    var nameIdentifier = this.currentuser['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
    console.log(nameIdentifier);
    return nameIdentifier;
  } 
  gettokenRole(): string {
    let token: any = localStorage.getItem("userInfo");
    this.currentuser = jwtDecode(token);
    var nameIdentifier = this.currentuser['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    return nameIdentifier;
  } 
  submitLogin(Loginform:FormGroup){
      this._AuthServices.Login(Loginform.value).subscribe((response)=>{
        if(response.message!="NotValid"){

          this.toast.success("تم تسجيل الدخول بنجاح , مرحبا بك في موقعنا ")
          localStorage.setItem('userInfo',response.token)
          this.userData=this._AuthServices.saveData();
          this.userDataid=this.gettokenID();
          this._AuthServices.gettokenRole();
          console.log(this.userData)
          this._route.navigate(['/Home'])
        }
        else{
            //error in Api  {errors}
          this.toast.error("لم يتم التعرف علي اسم المستخدم أو كلمة المرور")
            this.loginInvalid = true;
            this._route.navigate(['/Login']) 
        }
      });
    }
  }
