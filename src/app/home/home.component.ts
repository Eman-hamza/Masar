import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { StudentTeatcherGuard } from '../student-teatcher.guard';
import { adminGuard } from '../admin.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private auth:AuthService,private toast:ToastrService,private uerrole:StudentTeatcherGuard,private admin:adminGuard){}
  isLogin:boolean=false;

ngOnInit(): void {
  this.auth.userdata.subscribe(()=>{
    if(this.auth.userdata.getValue()!=null){
      this.isLogin=true;
    }
    else{
      this.isLogin=false;
    }
})
}
}
