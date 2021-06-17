import { UserService } from './../shared/services/login/user.service';
import { User } from './../shared/classes/User';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users!: User[];

  constructor(
    private userService: UserService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins() {
    this.spinner.show();
    this.userService.getAdmins().subscribe(
      res => {
        this.users = res;
        this.spinner.hide();
      }
    )
  }

}
