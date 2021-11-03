import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { UserService } from '../user.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editForm:FormGroup;
  file:any;
  e_ID:any;
  constructor( private httpService:UserService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.editForm = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      emailID: ['', Validators.compose([Validators.required])],
    });
  } 
    ngOnInit(): void {
      this.e_ID = this.route.snapshot.params['id'];
      this.presentDetails(this.e_ID);
  }

  presentDetails(e_ID: string){
    this.httpService.presentData(e_ID).subscribe((Response:any) =>{
      this.file = Response.data;
      this.editForm.controls['fName'].setValue(this.file['first_name']);
    },(error:any) =>{
      console.log('presentDetails',error);
    });
  }

  updateData(values:any){
    const file=new FormData();
    file.append('fName', this.e_ID);
    this.httpService.updateEditData(file).subscribe(result=>{
      this.router.navigate(['user-list']);
    })
  }
}
