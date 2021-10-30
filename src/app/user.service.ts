import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private url = "https://reqres.in/api/";  
  
  getuserData(){
      return this.http.get(this.url + "users?page=2");
    }
  getSignUpData(data:any){
    return this.http.post(this.url + "api/users",data)
  }  
  presentData(id: string){
    return this.http.get(this.url + "users/" + id);
  }
}
