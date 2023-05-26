import { Component, HostListener, OnInit } from '@angular/core';
import { UserRoleService } from '../Services/user-role.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
// import { Location, LocationStrategy, PathLocationStrategy} from "@angular/common";


@Component({
  selector: 'app-displaytheresult',
  templateUrl: './displaytheresult.component.html',
  styleUrls: ['./displaytheresult.component.scss']
})
export class DisplaytheresultComponent implements OnInit {
constructor(private scoreservice: UserRoleService,private router:Router,private location: Location){

}
@HostListener('window:popstate', ['$event'])

onPopState(event: Event) {
  history.pushState(null, document.title, location.href);
}

ngOnInit(): void {
  history.pushState(null, document.title, location.href);
  // this.location.onPopState(() => {
  //   history.pushState(null, document.title, location.href);
  // });
  // this.location.back();
}

studentdegree:number=this.scoreservice.total_score.score;
totaldegree:number=this.scoreservice.total_score.totalDegree
minimum:number=this.scoreservice.total_score.minimumDegree


}

