import { AuthService } from './../shared/services/login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loggedIn!: boolean;

  constructor(
    private authService: AuthService,
  ) {}

    ngOnInit(){
    this.authService.authStatus.subscribe(
      res => this.loggedIn = res
    );
  }
}
