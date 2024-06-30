import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { API } from '../constant/api.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public httpService:HttpService) { }
  signUpUser(userData:any){
    return this.httpService.post(API.SIGN_UP,userData);
  }
  signInUser(userData:any){
    return this.httpService.post(API.SIGN_IN,userData);
  }
  //savaToken in localStorage
  saveToken(token:string) {
    localStorage.setItem('token',JSON.stringify(token));
  }
  //getToken from localStorage
  getToken() {
    let token = localStorage.getItem('token');
    return (token) ? JSON.parse(token) : null;
  }
  //if user is loggedIn mean token is exist in localStorage to return true
  loggedIn() {
    let token = this.getToken();
    return (token) ? true : false;
  }
}
