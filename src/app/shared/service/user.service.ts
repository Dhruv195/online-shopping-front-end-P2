import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { API } from '../constant/api.constant';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public httpService: HttpService) {}
  updateUserDetails$ = new BehaviorSubject<any>(false);
  userDetails$ = new BehaviorSubject<any>({});
  activeUserDetails = new BehaviorSubject<any>(false)
  getUser() {
    return this.httpService.get(API.USER_GET);
  }
  updateUser(userData: any) {
    return this.httpService.put(API.USER_UPDATE, userData);
  }
  getWishList(){
    return this.httpService.get(API.WISHLIST);
  }
  postWishList(productId:any){
    return this.httpService.post(API.WISHLIST+`/${productId}`,'');
  }
  deleteWishList(productId:any){
    return this.httpService.delete(API.WISHLIST+`/${productId}`);
  }
  addReview(data:any,productId:any){
    return this.httpService.post(API.REVIEW+`/${productId}`,data);
  }
  getReviewList(productId:any) {
    return this.httpService.get(API.REVIEW_LIST + `/${productId}`);
  }
}
