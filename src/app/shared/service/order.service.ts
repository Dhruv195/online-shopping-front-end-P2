import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject } from 'rxjs';
import { API } from '../constant/api.constant';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(public httpService: HttpService) {}
  getOrder() {
    return this.httpService.get(API.USER_GET);
  }
  addCheckoutOrder(order: any) {
    return this.httpService.post(API.ORDER_CHECKOUT, order);
  }
}