import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { API } from '../constant/api.constant';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(public httpService: HttpService) {}

  getCategoryList() {
    return this.httpService.get(API.CATEGORY_LIST);
  }

  getProductList() {
    return this.httpService.get(API.PRODUCT_LIST);
  }
}
