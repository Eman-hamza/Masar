import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class StudentTeatcherGuard implements CanActivate {
  constructor(private Auth:AuthService)
  {

  }
  canActivate():any
  {
      if(this.Auth.gettokenRole()=="IsStudent"){
        return 1;
      }
      else if(this.Auth.gettokenRole()=="IsTeacher"){
        return 2;
      }
      else {
        return 3;
      }
      
    }
  }
  