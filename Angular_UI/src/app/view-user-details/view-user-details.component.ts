import { UserService } from './../user.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrls: ['./view-user-details.component.css']
})
export class ViewUserDetailsComponent{

  userData:any[];
  constructor(private UserService:UserService) {
    this.UserService.getUserDetails().subscribe((response) => {
      this.userData = (JSON.parse(response.text()));
    });
   }

}
