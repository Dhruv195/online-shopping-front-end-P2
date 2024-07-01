import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { API } from '../constant/api.constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpService:HttpService) { }
  getUser(){
    return this.httpService.get(API.USER_GET);
  }
  updateUser(userData:any){
    return this.httpService.put(API.USER_UPDATE,userData);
  }
}
