import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { API } from '../constant/api.constant';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(public httpService: HttpService) {}

  getCategoryList() {
    return this.httpService.get(API.CATEGORY_LIST);
  }

  getProductList(param1:any=1,param2:any=11111111111) {
    console.log(param2)
    let params=new HttpParams()
    .set('page',param1)
    .set('items',param2);
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
