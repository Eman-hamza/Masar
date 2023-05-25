import { Component, OnInit } from '@angular/core';
import { UserRoleService } from '../Services/user-role.service';


@Component({
  selector: 'app-displaytheresult',
  templateUrl: './displaytheresult.component.html',
  styleUrls: ['./displaytheresult.component.scss']
})
export class DisplaytheresultComponent implements OnInit {
constructor(private scoreservice: UserRoleService){

}
ngOnInit(): void {
  
}

studentdegree:number=this.scoreservice.total_score.score;
totaldegree:number=this.scoreservice.total_score.totalDegree
minimum:number=this.scoreservice.total_score.minimumDegree


}

