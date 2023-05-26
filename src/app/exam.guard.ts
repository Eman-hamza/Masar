import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class examGurd implements CanActivate {
  DoneExam:boolean=false;
  constructor(){}
  canActivate():any
  {
    if(this.DoneExam==true)
      {
        
      }
  }
  }
  