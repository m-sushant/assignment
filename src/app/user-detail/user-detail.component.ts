import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; 
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  file:any;
  picID:any;

  constructor(private httpService:UserService,  public route:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.picID = this.route.snapshot.params['id'];
    this.presentDetails(this.picID);
  }
  presentDetails(picID: string){
    this.httpService.presentData(picID).subscribe((Response:any) =>{
      this.file = Response.data;
    },(error:any) =>{
      console.log('presentDetails',error);
    });
  }
  navigation(link:any){
    this.router.navigate([link]);
  }

}
