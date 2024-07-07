import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { API } from '../constant/api.constant';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpService: HttpService) { }
  updateUserDetails$ = new BehaviorSubject<any>(false);
  userDetails$=new BehaviorSubject<any>({});
  getUser(){
    return this.httpService.get(API.USER_GET);
  }
  updateUser(userData:any){
    return this.httpService.put(API.USER_UPDATE,userData);
  }
}
