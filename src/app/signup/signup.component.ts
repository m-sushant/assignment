import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }
  printData(){
    console.log(this.signupForm.value);
  }
}
