import { Observable } from 'rxjs';
import { TokenService } from '../services/login/token.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';


@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  myDate = new Date().getTime();

constructor( private tokenService: TokenService) {}
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
const token = this.tokenService.get();
return next.handle(this.addToken(req, token));

}
private addToken(request: HttpRequest<any>, token: any) {
  return request.clone({
    setHeaders: {
      'Authorization': `Bearer ${token}`,
    }
  });
}
}
