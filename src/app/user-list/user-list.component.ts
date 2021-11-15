import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
    userList:any =[];
   
  constructor(private httpService:UserService, public router:Router) { }

  ngOnInit(): void {
    this.getUserList();
    
  }

  getUserList()
  {
    this.httpService.getuserData().subscribe((response:any) =>{
      this.userList = response.data
    },(error) =>{
      console.log('getUserList',error);
    });
    
  }
  getNavigation(link: string, id: string){
    if(id === ''){
        this.router.navigate([link]);
    } else {
        this.router.navigate([link + '/' + id]);
    }
}
selectedUser: any;
selectUser(user:any){
  this.selectedUser = user;
}
updateMe(evt){
  console.log('user',evt);
  console.log('selection',this.selectedUser);
  this.selectedUser.currentvalue.first_name=evt.first_name;
  this.selectedUser.currentvalue.last_name=evt.last_name;
  this.selectedUser.currentvalue.email=evt.email;
  
}

}
