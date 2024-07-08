import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { API } from '../constant/api.constant';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  localStorageList: any;
  cartProductList: any;

  breadCrumbData$ = new BehaviorSubject<any>({});
  siteConfig$ = new BehaviorSubject<any>({});
  toastType$ = new BehaviorSubject<any>('');
  toastMsg$ = new BehaviorSubject<any>('');
  toastShow$ = new BehaviorSubject<any>(false);

  totalCartItem$ = new BehaviorSubject<any>(
    this.getCountOfTotalItem('cartProductList')
  );
  totalWishListItem$ = new BehaviorSubject<any>(
    this.getCountOfTotalItem('productWishList')
  );
  subTotalAmount$ = new BehaviorSubject<any>(this.getSubTotalAmount());

  constructor(public httpService: HttpService, public http: HttpClient) {}
  getCountOfTotalItem(typeOfString: any) {
    this.localStorageList = this.getLocalStorage(typeOfString);
    if (this.localStorageList !== undefined) {
      return this.localStorageList.length;
    } else {
      return 0;
    }
  }
  getSubTotalAmount() {
    this.cartProductList = this.getLocalStorage('cartProductList');
    if (this.cartProductList !== undefined) {
      const subTotal = this.cartProductList.reduce(
        (sum: number, product: any) => sum + product.price * product.quantity,
        0
      );
      return subTotal;
    } else {
      return 0;
    }
  }

  setLocalStorage(typeOfString: any, storeData: any) {
    localStorage.setItem(typeOfString, JSON.stringify(storeData));
  }
  getLocalStorage(typeOfString: any) {
    let localStorageData = localStorage.getItem(typeOfString);
    if (localStorageData) {
      return JSON.parse(localStorageData);
    }
  }

  addEnquiry(enquiryData: any) {
    return this.httpService.post(API.ENQUIRY, enquiryData);
  }

  showToastMessage(toastType: any, toastMsg: any) {
    this.toastType$.next(toastType);
    this.toastMsg$.next(toastMsg);
    this.toastShow$.next(true);

    setTimeout(() => {
      this.closeToast();
    }, 3000);
  }

  closeToast() {
    this.toastShow$.next(false);
  }

  getSiteConfig() {
    return this.httpService.get(API.SITE_CONFIG);
  }

  getLanguage() {
    return this.httpService.get(API.LANGUAGE);
  }
  getColor() {
    return this.httpService.get(API.COLOR);
  }
}
