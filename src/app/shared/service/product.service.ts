import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { API } from '../constant/api.constant';
import { HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(public httpService: HttpService) { }
  productList = new BehaviorSubject<any>([]);
  totalProducts = new BehaviorSubject<any>(0);
  productDetails$=new BehaviorSubject<any>({});

  getCategoryList() {
    return this.httpService.get(API.CATEGORY_LIST);
  }

  getProductList(params:any) {
    
    return this.httpService.get(API.PRODUCT_LIST,params);
  }

  getProductById(productId: any) {
    return this.httpService.get(API.PRODUCT_BY_ID + productId);
  }

  addProductToCart(addNewProduct: any) {
    return this.httpService.post(API.ADD_TO_CART, addNewProduct);
  }

  getUserCart() {
    return this.httpService.get(API.GET_USER_CART);
  }


  getRelatedProducts(productId:any) {
    return this.httpService.get(API.GET_RELATED_PRODUCTS+productId);
  }

  deleteProductCart(productId: any) {
   return this.httpService.delete(API.DELETE_USER_CART + productId);
  }
}
