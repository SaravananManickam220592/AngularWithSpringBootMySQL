import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUrl = "http://localhost:8091/demo/all";
  addUrl = "http://localhost:8091/demo/add";

  constructor(private http:Http){
  }

  addUserDetails(user){
        return this.http.get(this.addUrl+`?name=${user.userName}&email=${user.userEmail}`).toPromise();
  }

  getUserDetails(){
    return this.http.get(this.getUrl);
  }
}
