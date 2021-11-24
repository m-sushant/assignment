import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private httpService:UserService, private router:Router){}
 
  canActivate():boolean {
    if(this.httpService.loggedCheck()){
      return true
    }
    else{
      this.router.navigate(['homepage'])
    }
  }
  
}
