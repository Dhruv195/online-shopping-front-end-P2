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
    

    let token=this.authService.getToken();

    if(token){
      request=request.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    }
    return next.handle(request);
  }
}
