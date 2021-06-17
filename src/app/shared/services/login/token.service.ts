import { Injectable } from '@angular/core';

const baseURL = 'https://binazone.com/api/';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login : baseURL + 'loginAdmin',
    signup : baseURL + 'signup',
  }

  constructor() { }

  handle(token: any) {
    this.set(token);
  }

  set(token: any) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.clear();
  }

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token: any) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload: any) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }

}
