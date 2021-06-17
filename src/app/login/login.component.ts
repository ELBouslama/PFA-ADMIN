import { Router } from '@angular/router';
import { AuthService } from './../shared/services/login/auth.service';
import { TokenService } from './../shared/services/login/token.service';
import { LoginService } from './../shared/services/login/login.service';
import { User } from './../shared/classes/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  error = '';
  user!: User;
  userId!: number;
  response!: any;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private tokenService: TokenService,
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
      password: ['', Validators.required]
    });
  }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

  login() {
    this.spinner.show();
    this.loginService.login(this.loginForm.value)
        .pipe(first())
        .subscribe(
            res => {
              this.handleResponse(res);
              this.spinner.hide();
            },
            error => {
              this.handleError(error);
              this.spinner.hide();
            }
        );
  }

  handleError(error: any) {
    this.error = error.error.error;
  }

  handleResponse(data: any) {
    this.tokenService.handle(data.access_token);
    this.authService.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
    window.scrollTo(0,0);
  }

  openRequestResetPassword() {
    alert('password change requested');
  }

}
