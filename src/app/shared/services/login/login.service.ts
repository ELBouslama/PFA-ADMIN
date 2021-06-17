import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../../baseurl';
import { Auth } from '../../classes/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(auth: Auth): Observable<string> {
    return this.http.post<string>(baseURL + 'loginAdmin' , auth);
  }

  sendPasswordResetLink(data: any) {
    return this.http.post(baseURL + 'sendPasswordResetLink' , data)
  }

  changePassword(data: any) {
    return this.http.post(baseURL + 'resetPassword' , data)
  }
}
