import { UserService } from '../shared/services/login/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  form!: FormGroup;
  response!: string;
  error!: any;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', Validators.required],
    });
  }

  changePass() {
    this.spinner.show();

    this.userService.changePassword(this.form.value)
        .subscribe(
            res => {
              this.spinner.hide();
              this.handleResponse(res);
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
    this.response = data.message;
    this.form.reset();
  }

}
