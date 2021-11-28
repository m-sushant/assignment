import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router'; 
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [       // metadata array
    trigger('toggleClick', [     // trigger block
    state('false', style({      // final CSS following animation
      backgroundColor: 'green'
    })),
    state('true', style({
      backgroundColor: 'red'
    })),
    transition('true => false', animate('1000ms linear')),  // animation timing
    transition('false => true', animate('1000ms linear'))
  ])
]
})
export class LoginComponent implements OnInit {
  isGreen: string = 'true';
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
    this.isGreen = this.isGreen === 'true' ? 'false' : 'true'; // change in data-bound value
  }
  }
 
