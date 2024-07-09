import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { API } from '../constant/api.constant';
import { CommonService } from '../service/common.service';
import { TOAST_TYPE } from '../constant/toast';
import { Router } from '@angular/router';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private commonService: CommonService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = this.authService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    return next.handle(request);
  }
}
