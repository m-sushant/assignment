import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private httpService:UserService, public router:Router ) { }

  loginData:any = {
     
  };
  ngOnInit(): void {
  }

  userLogin(){
    this.httpService.getLoginData(this.loginData).subscribe(response => {console.log(response)
    localStorage.setItem('token',response.token)
    this.router.navigate(['user-list'])
    return false
   },
    error => console.log(error)
    )
  }
}
