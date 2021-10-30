import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm=new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z 1-9@$_-]*'),Validators.minLength(8)]),
    mobile: new FormControl('',[Validators.minLength(10),Validators.maxLength(10)]),
    country: new FormControl(),
    gender: new FormControl(),
    interest: new FormControl()
    
  })
  constructor(private httpService:UserService, public route:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.getSignUpData();
  }
  printData(){
    console.log(this.signupForm.value);
  }
  getSignUpData(){
    console.log('getSignUpData');
    if(this.signupForm.valid){
      let data={
        "id":2,
        "email":this.signupForm.value.email,
        "first_name":this.signupForm.value.firstName,
        "last_name":this.signupForm.value.lastName,
        "number":this.signupForm.value.mobile,
        "country":this.signupForm.value.country,
        "gender":this.signupForm.value.gender
      }
      this.httpService.getSignUpData(data).subscribe((Response:any)=>{
        console.log('getSignUpData',Response);
        setTimeout(
          ()=> {
            this.router.navigate(['user-list'])
          },4000)
      },(error:any)=>{
        console.log('getSignUpData',error);
      });
    }
  }
}
