import { UserService } from './../user.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent{

  addUserStatus=false;

  constructor(private userService:UserService) { }

  saveUser(userData: NgForm){
    var me=this;
    var user=userData.value;
    me.userService.addUserDetails(user)
    .then(res=>{
      me.addUserStatus=true;
      userData.resetForm();
      setTimeout(()=>{
      me.addUserStatus=false;
      },3000);
    })
    .catch(this.handleErrorPromise);
  }

  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }	

}
