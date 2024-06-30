import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor(public authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Token ")

    let token=this.authService.getToken();
    if(token){
      const setHeaderRequest=request.clone({
        headers:request.headers.set('Authorization',`Bearer ${token}`)
      });
      console.log("Modified Request with Authorization header: ", setHeaderRequest);
      return next.handle(setHeaderRequest);
    }
    return next.handle(request);
  }
}
