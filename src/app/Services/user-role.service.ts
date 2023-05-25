import { Injectable } from '@angular/core';
import { totalandScoreResponse } from '../interface/totalandScoreResponse';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  constructor() { }
  IsStudent:Boolean=true

  total_score:totalandScoreResponse={score:0,totalDegree:0,minimumDegree:0}

}
