import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { API } from '../constant/api.constant';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor(public authService:AuthService) {}
  private excludedUrls: string[] = [
    'https://shoppingcart-api.demoserver.biz'+API.PRODUCT_LIST,
    // Add more endpoints or patterns as needed
  ];
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let token=this.authService.getToken();
    const shouldExclude = this.excludedUrls.some(url => request.url.includes(url));
    if(!shouldExclude){
      if(token){
        request=request.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
      }
    }
    
    return next.handle(request);
  }
}
