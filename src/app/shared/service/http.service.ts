import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'https://shoppingcart-api.demoserver.biz';
  constructor(public http:HttpClient ) { }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }

  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    console.log("header ")
    const options = { params, headers };
    return this.http.get<T>(`${this.baseUrl}/${url}`).pipe(catchError(this.handleError.bind(this)));
  }

  post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    const options = { headers };
    return this.http.post<T>(`${this.baseUrl}/${url}`, body, options).pipe(catchError(this.handleError.bind(this)));
  }

  put<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    const options = { headers };
    return this.http.put<T>(`${this.baseUrl}/${url}`, body, options).pipe(catchError(this.handleError.bind(this)));
  }

  patch<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    const options = { headers };
    return this.http.patch<T>(`${this.baseUrl}/${url}`, body, options).pipe(catchError(this.handleError.bind(this)));
  }

  delete<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    const options = { params, headers };
    return this.http.delete<T>(`${this.baseUrl}/${url}`, options).pipe(catchError(this.handleError.bind(this)));
  }
}
