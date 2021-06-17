import { User } from './../../classes/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from '../../baseurl';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(baseURL + 'users');
  }

  getAdmins(): Observable<User[]> {
    return this.http.get<User[]>(baseURL + 'admins');
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.post<User>(baseURL + 'users/loggedin',  email);
  }

  postUser(user: User): Observable<User> {
    return this.http.post<User>(baseURL + 'users' , user);
  }

  postAdmin(user: User): Observable<User> {
    return this.http.post<User>(baseURL + 'admin' , user);
  }

  deleteUser(id: number) {
    return this.http.delete(baseURL + 'users/' + id);
  }

  putUser(user: User , id: number) {
    return this.http.put(baseURL + 'users/' + id , user);
  }

  changePassword(user: User) {
    return this.http.put(baseURL + 'users/changePassword', user);
  }
}
